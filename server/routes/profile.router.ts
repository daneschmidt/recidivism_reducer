import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route for selected individual client profile
 */
router.get('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
	const id: number | null = <number>parseInt(req.params.id);
	console.log(id);
	const queryText: string | null = <string>
		`SELECT "clients".id, "clients"."firstName", "clients"."lastName", "clients"."agentName", "clients"."agentPhone", 
	"clients".business, "clients"."businessStage", "clients".connections, "clients"."criminalRecord", "clients"."docNumber",
	"clients".email, "clients".gender, "clients"."incarceratedYorN", "clients"."incarcerationLength", "clients"."ifYesConnections", 
	"clients"."isActive", "clients"."misdemOrFel", "clients"."paroleOnRelease", "clients"."phoneNumber", "clients"."profilePic", 
	"clients"."releaseDate", "clients"."stateIncarcerated", "clients"."timeStamp" AS "clientTimeStamp", "clients"."whatHopeToGain", 
	"clients"."whyAtBeTheBoss", "notes".id AS "noteId", "notes".note, "notes"."timeStamp" FROM "clients"
	JOIN "notes" ON "clients".id = "notes".clients_id
	WHERE "clients".id = $1;`;
	pool.query(queryText, [id])
		.then(response => {
			console.log(response.rows)
			res.send(response.rows);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		})
});

export default router;
