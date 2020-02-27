import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route for selected individual client profile
 */
router.get(
	'/:id',
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId: number | null = <number>Number(req.params.id);
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
	'/:id',
	(req: Request, res: Response, next: express.NextFunction): void => {
		const userId: number | null = <number>req.body.userId;
		const id: number | null = <number>parseInt(req.params.id);
		const editFirstName: string | null = <string>req.body.firstName;
		const editLastName: string | null = <string>req.body.lastName;
		const editGender: string | null = <string>req.body.gender;
		const editPhoneNumber: number | null = <number>req.body.phoneNumber;
		const editEmail: string | null = <string>req.body.email;
		const editCriminalRecord: string | null = <string>req.body.criminalRecord;
		const editMisdemOrFel: string | null = <string>req.body.misdemOrFel;
		const editIncarceratedYorN: string | null = <string>req.body.incarceratedYorN;
		const editIncarcerationLength: string | null = <string>req.body.incarcerationLength;
		const editReleaseDate: number | null = <number>req.body.releaseDate;
		const editDocNumber: number | null = <number>req.body.docNumber;
		const editStateIncarcerated: string | null = <string>req.body.stateIncarcerated;
		const editParoleOnRelease: string | null = <string>req.body.paroleOnRelease;
		const editAgentName: string | null = <string>req.body.agentName;
		const editAgentPhone: number | null = <number>req.body.agentPhone;
		const editConnections: string | null = <string>req.body.connections;
		const editIfYesConnection: string | null = <string>req.body.ifYesConnections;
		const editBusiness: string | null = <string>req.body.business;
		const editBusinessStage: string | null = <string>req.body.businessStage;
		const editWhyAtBeTheBoss: string | null = <string>req.body.whyAtBeTheBoss;
		const editWhatHopeToGain: string | null = <string>req.body.whatHopeToGain;
		const editProfilePic: string | null = <string>req.body.profilePic;
		const editTimeStamp: number | null = <number>req.body.timeStamp;
		const editIsActive: string | null = <string>req.body.isActive;
		const note: string | null = <string>req.body.note;

		const queryText: string = `UPDATE "clients" SET 
        "firstName" = $2, "lastName" = $3, "gender" = $4, "phoneNumber" = $5, "email" = $6,  "criminalRecord" = $7, "misdemOrFel" = $8, 
        "incarceratedYorN" = $9, "incarcerationLength" = $10, "releaseDate" = $11, "docNumber" = $12, "stateIncarcerated" = $13, 
        "paroleOnRelease" = $14, "agentName" = $15, "agentPhone" = $16, "connections" = $17, "ifYesConnections" = $18, "business" = $19,
        "businessStage" = $20, "whyAtBeTheBoss" = $21, "whatHopeToGain" = $22, "profilePic" = $23, "timeStamp" = $24, "isActive" = $25
		WHERE "id" = $1;`;

		pool.query(queryText, [
			id,
			editFirstName,
			editLastName,
			editGender,
			editPhoneNumber,
			editEmail,
			editCriminalRecord,
			editMisdemOrFel,
			editIncarceratedYorN,
			editIncarcerationLength,
			editReleaseDate,
			editDocNumber,
			editStateIncarcerated,
			editParoleOnRelease,
			editAgentName,
			editAgentPhone,
			editConnections,
			editIfYesConnection,
			editBusiness,
			editBusinessStage,
			editWhyAtBeTheBoss,
			editWhatHopeToGain,
			editProfilePic,
			editTimeStamp,
			editIsActive,
		])
			.then(responseForPut => {
				// res.sendStatus(201);
				const queryString: string = `UPDATE "notes" SET
				"users_id" =$2, "note" =$3, "timeStamp" =$4
				WHERE "clients_id" = $1;`;
				pool.query(queryString, [id, userId, note, editTimeStamp])
				.then(responseForPut2 => {
					res.sendStatus(201);
				})
				.catch(err => {
					console.log(err);
					res.sendStatus(500);
				})
			})
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			});
	},
);

export default router;
