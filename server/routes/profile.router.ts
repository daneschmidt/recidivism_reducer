import { Request, Response } from "express";
import express from "express";
import pool from "../modules/pool";

const router: express.Router = express.Router();

/**
 * GET route for selected individual client profile
 */
router.get(
	"/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const queryText: string = `SELECT * FROM "clients" WHERE "clients"."id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.send(response.rows[0]);
			})
			.catch(err => {
				console.log(`Error retrieving client list ${err}`);
				res.sendStatus(500);
			});
	},
);

export default router;
