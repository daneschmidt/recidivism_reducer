import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
	const queryText: string = `SELECT * FROM "user" WHERE "isActive" = TRUE`;
	pool.query(queryText)
		.then((response) => {
			res.send(response.rows)
		})
		.catch((err) => {
			console.log(`Error retrieving all users: ${err}`);
			res.sendStatus(500);
		});
});

router.put('/edit-user/:id', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
	const firstName: string | null = <string>req.body.firstName;
	const lastName: string | null = <string>req.body.lastName;
	const phoneNumber: number | null = <number>req.body.phoneNumber;
	const email: string | null = <string>req.body.email;
	const securityLevel: number | null = <number>req.body.securityLevel;
	const id = req.params.id;

	const queryText = `UPDATE "user" SET 
	"firstName" = $1,
	"lastName" = $2,
	"phoneNumber" = $3,
	"email" = $4,
	"securityLevel" = $5
	WHERE "id" = $6;`;

	pool.query(queryText,
		[
			firstName,
			lastName,
			phoneNumber,
			email,
			securityLevel,
			id,
		])
		.then(() => res.sendStatus(200))
		.catch(err => {
			console.log(`Error with event updating users: ${err}`);
			res.sendStatus(500);
		});
});

router.put('/user-status/:id', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
	const isActive: boolean | null = <boolean>req.body.isActive;
	const id = req.params.id;

	const queryText = `UPDATE "user" SET "isActive" = $1 WHERE "id" = $2;`;
	pool.query(queryText, [isActive, id])
		.then(() => res.sendStatus(200))
		.catch(err => {
			console.log(`Error with event updating users: ${err}`);
			res.sendStatus(500);
		});
});

export default router;