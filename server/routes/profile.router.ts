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
	const queryText: string | null = <string>`SELECT * FROM "clients" WHERE "clients"."id" = $1;`;
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
