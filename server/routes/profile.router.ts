import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/* GET route for selected individual client profile */
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

/* PUT route to edit the profile info for the selected client */
router.put(
	'/edit/:id',
	(req: Request, res: Response, next: express.NextFunction): void => {
		const profileId = req.params.id;
		const editFirstName = req.body.firstName;
		const editLastName = req.body.lastName;
		const editGender = req.body.gender;
		const editPhoneNumber = req.body.phoneNumber;
		const editEmail = req.body.email;
		const editCriminalRecord = req.body.criminalRecord;
		const editMisdemOrFel = req.body.misdemOrFel;
		const editIncarceratedYorN = req.body.incarceratedYorN;
		const editIncarcerationLength = req.body.incarcerationLength;
		const editReleaseDate = req.body.releaseDate;
		const editDocNumber = req.body.docNumber;
		const editStateIncarcerated = req.body.stateIncarcerated;
		const editParoleOnRelease = req.body.paroleOnRelease;
		const editAgentName = req.body.agentName;
		const editAgentPhone = req.body.agentPhone;
		const editConnections = req.body.connections;
		const editIfYesConnection = req.body.ifYesConnections;
		const editBusiness = req.body.business;
		const editBusinessStage = req.body.businessStage;
		const editWhyAtBeTheBoss = req.body.whyAtBeTheBoss;
		const editWhatHopeToGain = req.body.whatHopeToGain;
		const editProfilePic = req.body.profilePic;
		const editTimeStamp = req.body.timeStamp;
		const editIsActive = req.body.isActive;
		const queryText: string = `UPDATE "clients" SET 
        "firstName" = $1, "lastName" = $2, "gender" = $3, "phoneNumber" = $4, "email" = $5,  "criminalRecord" = $6, "misdemOrFel" = $7, 
        "incarceratedYorN" = $8, "incarcerationLength" = $9, "releaseDate" = $10, "docNumber" = $11, "stateIncarcerated" = $12, 
        "paroleOnRelease" = $13, "agentName" = $14, "agentPhone" = $15, "connections" = $16, "ifYesConnections" = $17, "business" = $18,
        "businessStage" = $19, "whyAtBeTheBoss" = $20, "whatHopeToGain" = $21, "profilePic" = $22, "timeStamp" = $23, "isActive" = $24
        WHERE "id" = $25;`;
		pool
			.query(queryText, [
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
				profileId,
			])
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
