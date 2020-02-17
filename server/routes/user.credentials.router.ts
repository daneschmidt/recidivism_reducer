import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
	const queryText: string = `SELECT * FROM "user"`;
	pool.query(queryText)
		.then((response) => {
			res.send(response.rows)
		})
		.catch((err) => {
			console.log(`Error retrieving all users: ${err}`);
			res.sendStatus(500);
		});
});

/**
 * POST route template
 */
router.post('/', (req: Request, res: Response, next: express.NextFunction): void => {
    res.sendStatus(201);
});

export default router;