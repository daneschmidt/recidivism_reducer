import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import rejectUnauthenticated from '../modules/authentication-middleware';

const router: express.Router = express.Router();

//Route to create a list of competitions with joint clients to competitions
router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  const queryText: string = `SELECT * FROM "clients" 
    JOIN "clients_competitions" ON "clients_competitions".clients_id = "clients".id
    JOIN "competitions" ON "competitions".id = "clients_competitions".competitions_id
    ORDER BY "competitions"."dateOf" ASC LIMIT 10;`;
  pool
    .query(queryText)
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error retrieving client list ${err}`);
      res.sendStatus(500);
    });
});

// router.post('/', (req: Request, res: Response): void => {
//   const data = req.body;

//   //querying to match by client name and return ID to post into joint table
//   pool.query(` SELECT * FROM "clients"
//   WHERE "firstName" ILIKE '${data.firstName}' AND "lastName" ILIKE '${data.lastName}';`)
//     .then(response => {
// 		const clientID = response.rows[0].id
//       pool.query(``)
//       res.send(response.rows);
//     })
//     .catch(err => {
//       console.log(`Error adding to competition to list ${err}`);
//       res.sendStatus(500);
//     });
// });

export default router;
