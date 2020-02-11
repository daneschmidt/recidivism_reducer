import { Request, Response } from "express";
import express from "express";
import pool from "../modules/pool";

const router: express.Router = express.Router();

router.post("/api/bossform", (req: Request, res: Response): void => {
	const firstName: string | null = <string>req.body.firstName;
	const lastName: string | null = <string>req.body.lastName;
	const phoneNumber: number | null = <number>req.body.phoneNumber;
	const email: string | null = <string>req.body.email;
	const gender: string | null = <string>req.body.gender;

	const queryText: string = `INSERT INTO "clients" (firstName, lastName, gender, phoneNumber, email) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
	pool
		.query(queryText, [firstName, lastName, gender, phoneNumber, email])
		.then(() => res.sendStatus(201))
		.catch(err => {
			console.log(`Error saving Be The Boss form: ${err}`);
			res.sendStatus(500);
		});
});