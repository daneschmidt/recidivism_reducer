import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import rejectUnauthenticated from '../modules/authentication-middleware';

const router: express.Router = express.Router();

//Route to create a list of competitions with joint clients to competitions
router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  const queryText: string = `SELECT * FROM "participants"
  ORDER BY "participants"."id" ASC LIMIT 10;`;
  pool
    .query(queryText)
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error retrieving participants list ${err}`);
      res.sendStatus(500);
    });
});

router.post('/', (req: Request, res: Response): void => {
  const data = req.body;
  const queryText: string = `INSERT INTO "participants"
  ("parName")
VALUES
  ('${data.parName}');`;
  pool
    .query(queryText)
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error adding to participants list ${err}`);
      res.sendStatus(500);
    });
});

//Route to UPDATE status names
router.put('/:id', (req: Request, res: Response): void => {
  const data = req.body;
  const id = req.params.id;
  console.log(req.body);
  const queryText: string = `UPDATE "participants" SET "parName" = '${data.name}'
    WHERE "id" = '${id}';`;
  pool
    .query(queryText)
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error updating participant list ${err}`);
      res.sendStatus(500);
    });
});

export default router;
