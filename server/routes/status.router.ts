import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import rejectUnauthenticated from '../modules/authentication-middleware';

const router: express.Router = express.Router();

//Route to GET status names
router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  const queryText: string = `SELECT * FROM "competition_status" 
    WHERE "competition_status"."id" = '1';`;
  pool
    .query(queryText)
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error retrieving competition_status list ${err}`);
      res.sendStatus(500);
    });
});

//Route to UPDATE status names
router.put('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  const data = req.body;
  const queryText: string = `UPDATE "competition_status" SET "step1" = '${data.step1}',
    "step2" = '${data.step2}',"step3" = '${data.step3}',"step4" = '${data.step4}',
    "step5" = '${data.step5}',"step6" = '${data.step6}'
    WHERE "id" = '1';`;
  pool
    .query(queryText)
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error updating competition_status list ${err}`);
      res.sendStatus(500);
    });
});

export default router;
