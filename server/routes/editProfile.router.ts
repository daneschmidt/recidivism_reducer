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
	"/edit/:id",
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
        "firstName" = $2, "lastName" = $3, "gender" = $4, "phoneNumber" = $5, "email" = $6,  "criminalRecord" = $7, "misdemOrFel" = $8, 
        "incarceratedYorN" = $9, "incarcerationLength" = $10, "releaseDate" = $11, "docNumber" = $12, "stateIncarcerated" = $13, 
        "paroleOnRelease" = $14, "agentName" = $15, "agentPhone" = $16, "connections" = $17, "ifYesConnections" = $18, "business" = $19,
        "businessStage" = $20, "whyAtBeTheBoss" = $21, "whatHopeToGain" = $22, "profilePic" = $23, "timeStamp" = $24, "isActive" = $25
        WHERE "id" = $1;`;
		pool
			.query(queryText, [
				profileId,
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
