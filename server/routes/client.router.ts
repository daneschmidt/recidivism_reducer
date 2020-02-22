import express from "express";
import pool from "../modules/pool";
import rejectUnauthenticated from '../modules/authentication-middleware';

const router: express.Router = express.Router();

router.get('/all', rejectUnauthenticated, (req: express.Request, res: express.Response, next: express.NextFunction): void => {
	const queryText:
		| string
		| null = `SELECT "id", "firstName", "lastName", "email", "phoneNumber", "timeStamp" FROM "clients"`;
	pool
		.query(queryText)
		.then(response => {
			res.send(response.rows);
		})
		.catch(err => {
			console.log(`Error retrieving client list ${err}`);
			res.sendStatus(500);
		});
});

router.get('/search/:keyword', rejectUnauthenticated, (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    let keyword = req.params.keyword;
	const queryText: 
		| string 
		| null = `SELECT "firstName", "lastName", "phoneNumber", "email", "id" FROM "clients"
			WHERE to_tsvector("lastName") @@ to_tsquery('${keyword}')
			OR to_tsvector("firstName") @@ to_tsquery('${keyword}')
			OR "firstName" LIKE '%${keyword}%'
			OR "lastName" LIKE '%${keyword}%'
			OR "firstName" LIKE '${keyword}%'
			OR "lastName" LIKE '${keyword}%'
			OR "firstName" LIKE '%${keyword}'
			OR "lastName" LIKE '%${keyword}'
			OR "firstName" LIKE '_${keyword}_'
			OR "lastName" LIKE '_${keyword}_'
			OR "firstName" LIKE '${keyword}_'
			OR "lastName" LIKE '${keyword}_'
			OR "firstName" LIKE '_${keyword}'
			OR "lastName" LIKE '_${keyword}';`;
	pool
		.query(queryText)
        .then((response) => { res.send(response.rows); })
        .catch(err => {
            console.log(`Error with SELECT results query: ${err}`);
            res.sendStatus(500);
        });
});

router.post("/", (req: express.Request, res: express.Response, next: express.NextFunction): void => {
	const firstName: string | null = <string>req.body.firstName;
	const lastName: string | null = <string>req.body.lastName;
	const phoneNumber: number | null = <number>req.body.phoneNumber;
	const email: string | null = <string>req.body.email;
	const gender: string | null = <string>req.body.gender;
	let notes_id: number | null;
	const queryText: string = `INSERT INTO "clients" ("firstName", "lastName", "gender", "phoneNumber", "email") VALUES ($1, $2, $3, $4, $5) RETURNING id`;
	pool.query(queryText, [firstName, lastName, gender, phoneNumber, email])
		.then((response) => {
			const notesId = response.rows.map((item, index) => {
				return notes_id = <number>item.id;
			})
			const queryText = `INSERT INTO "notes" ("clients_id")
			VALUES ($1);`;
			pool.query(queryText, [...notesId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
		})
		.catch(err => {
			console.log(`Error saving Be The Boss form: ${err}`);
			res.sendStatus(500);
		});
});

export default router;