import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import rejectUnauthenticated from '../modules/authentication-middleware';

const router: express.Router = express.Router();

//Route to create a list of competitions with joint clients to competitions
router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  const queryText: string = `SELECT * FROM "competitions" 
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

router.post('/', (req: Request, res: Response): void => {
  const data = req.body;
  pool
    .query(
      `INSERT INTO "competitions"
    ("name", "dateOf", "winnerName", "amountGranted", "businessName", "notes")
VALUES
    ('${data.name}', '${data.dateOf}', '${data.winnerName}', '${data.amountGranted}', '${data.businessName}', '${data.notes}'); `
    )
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error adding competition to list ${err}`);
      res.sendStatus(500);
    });
});

router.put('/:id', (req: Request, res: Response): void => {
  const data = req.body;
  const id = req.params.id;
  pool
    .query(
      `UPDATE "competitions"
    SET ("name", "dateOf", "winnerName", "amountGranted", "businessName", "notes")=
    ('${data.name}', '${data.dateOf}', '${data.winnerName}','${data.amountGranted}', '${data.businessName}', '${data.notes}')
    WHERE "id"='${id}'; `
    )
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error adding competition to list ${err}`);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req: Request, res: Response): void => {
  const id = req.params.id;
  pool
    .query('DELETE FROM "competitions" WHERE id=$1', [req.params.id])
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error deleting from competition list ${err}`);
      res.sendStatus(500);
    });
});

export default router;
