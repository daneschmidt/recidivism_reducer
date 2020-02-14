import { Request, Response } from "express";
import express from "express";
import pool from "../modules/pool";
import rejectUnauthenticated from '../modules/authentication-middleware';

const router: express.Router = express.Router();

//Route to create a list of clients
//includes id, firstName, lastName, timeStamp
router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
	// const queryText: string = `SELECT * FROM "clients"`;
	const queryText: string = `SELECT "id", "firstName", "lastName", "timeStamp" FROM "clients"`;
	pool.query(queryText)
		.then((response) => {
			res.send(response.rows)
		})
		.catch((err) => {
			console.log(`Error retrieving client list ${err}`);
			res.sendStatus(500);
		});
});

export default router;
