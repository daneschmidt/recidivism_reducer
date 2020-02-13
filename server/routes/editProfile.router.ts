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
		const queryText: string = `SELECT * FROM "clients" WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.send(response.rows[0]);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

/**
 * Put routes for updating selected individual client profile
 */
router.put(
	"/firstname/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editFirstName = req.body.firstName;
		const queryText: string = `UPDATE "clients" SET "firstName" = '${editFirstName}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/lastname/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editLastName = req.body.lastName;
		const queryText: string = `UPDATE "clients" SET "lastName" = '${editLastName}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/phonenumber/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editPhoneNumber = req.body.phoneNumber;
		const queryText: string = `UPDATE "clients" SET "phoneNumber" = '${editPhoneNumber}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/email/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editEmail = req.body.email;
		const queryText: string = `UPDATE "clients" SET "email" = '${editEmail}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/criminalRecord/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editCriminalRecord = req.body.criminalRecord;
		const queryText: string = `UPDATE "clients" SET "criminalRecord" = '${editCriminalRecord}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/misdemOrFel/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editMisdemOrFel = req.body.misdemOrFel;
		const queryText: string = `UPDATE "clients" SET "misdemOrFel" = '${editMisdemOrFel}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/incarceratedYorN/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editIncarceratedYorN = req.body.incarceratedYorN;
		const queryText: string = `UPDATE "clients" SET "incarceratedYorN" = '${editIncarceratedYorN}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/incarcerationLength/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editIncarcerationLength = req.body.incarcerationLength;
		const queryText: string = `UPDATE "clients" SET "incarcerationLength" = '${editIncarcerationLength}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/releaseDate/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editReleaseDate = req.body.releaseDate;
		const queryText: string = `UPDATE "clients" SET "releaseDate" = '${editReleaseDate}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/docNumber/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editDocNumber = req.body.docNumber;
		const queryText: string = `UPDATE "clients" SET "docNumber" = '${editDocNumber}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

router.put(
	"/stateIncarcerated/:id",
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editStateIncarcerated = req.body.stateIncarcerated;
		const queryText: string = `UPDATE "clients" SET "stateIncarcerated" = '${editStateIncarcerated}'
        WHERE "id" = $1;`;
		pool
			.query(queryText, [profileId])
			.then(response => {
				res.sendStatus(201);
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

export default router;
