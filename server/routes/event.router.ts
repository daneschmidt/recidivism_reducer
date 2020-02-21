import express from "express";
import pool from "../modules/pool";
import { ESRCH } from "constants";

const router: express.Router = express.Router();

/* route to GET all events */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
	const queryText: string = `SELECT * FROM "events"`;
	pool.query(queryText)
		.then((response) => {
			res.send(response.rows)
		})
		.catch((err) => {
			console.log(`Error retrieving all events: ${err}`);
			res.sendStatus(500);
		});
});

/* route to pull up information about a selected event */
router.get('/:id', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    const eventId: number | null = <number>Number(req.params.id);

    const queryText: string = `SELECT "id", "eventTitle", "endDate", "eventLocation", "startTime" FROM "events"
    WHERE "id" = $1
    ORDER BY "startTime" ASC;`;

    pool.query(queryText [eventId])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Error getting specific event: ${err}`);
            res.sendStatus(500);
        }) 
});

/* route to POST a new event in the calendar */
router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    const eventTitle: string | null = <string>req.body.eventTitle;
    const notes: string | null = <string>req.body.notes;
    const location: string | null = <string>req.body.location;
    const eventDate: number | null = <number>req.body.eventDate;
    const endDate: number | null = <number>req.body.endDate;
    const startTime: number | null = <number>req.body.startTime;
    const endTime: number | null = <number>req.body.endTime;
    const endEventDate: number | null = <number>req.body.endEventDate;

	const queryText: string = `INSERT INTO "events" ("eventDate", "endDate", "eventTitle", "notes", "location") VALUES ($1, $2, $3, $4, $5) RETURNING id`;
	pool.query(queryText, [eventDate, endDate, eventTitle, notes, location])
		.then(() => res.sendStatus(201))
		.catch(err => {
			console.log(`Error POSTing new event: ${err}, req.body: ${JSON.stringify(req.body)}`);
			res.sendStatus(500);
		});
});

router.put('/:id', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    const eventTitle: string | null = <string>req.body.eventTitle;
    const notes: string | null = <string>req.body.notes;
    const location: string | null = <string>req.body.location;
    const eventDate: number | null = <number>req.body.eventDate;
    const startTime: number | null = <number>req.body.startTime;
    const endTime: number | null = <number>req.body.endTime;
    const endEventDate: number | null = <number>req.body.endEventDate;
    const id = req.params.id;

    const queryText = `UPDATE "events" SET "eventTitle" = $1,
        "notes" = $2,
        "location" = $3,
        "eventDate" = $4,
        "startTime" = $5,
        "endTime" = $6,
        "endEventDate" = $7,
        WHERE "id" = $8;`; 

        pool.query(queryText, [eventTitle, notes, location, eventDate, startTime, endTime, endEventDate, id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(`Error with event PUT: ${err}`);
                res.sendStatus(500);
            });
});

/* DELETE an event from the calendar */
router.delete('/:id', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    const id = req.params.id;

    const queryText = `DELETE FROM "events" WHERE "id" = $1;`; 

        pool.query(queryText, [id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(`Error with event DELETE: ${err}`);
                res.sendStatus(500);
            });
})

export default router;