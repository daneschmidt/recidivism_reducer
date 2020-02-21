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

//Route POST to add new participant
router.post('/', (req: Request, res: Response): void => {
  const data = req.body;
  console.log(data);
  const queryText: string = `INSERT INTO "participants"
  ("id","parName","status")
VALUES
  ('${data.id}','', 'step1');`;
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
  let queryText: string = '';
  if (data.name && data.status) {
    queryText = `UPDATE "participants" 
    SET ("parName", "status") = ('${data.name}', '${data.status}')
    WHERE "id" = '${id}';`;
  } else if (data.name) {
    queryText = `UPDATE "participants" 
    SET "parName" = '${data.name}'
    WHERE "id" = '${id}';`;
  } else {
    queryText = `UPDATE "participants" 
    SET "status" = '${data.status}'
    WHERE "id" = '${id}';`;
  }

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

router.delete('/:id', (req: Request, res: Response): void => {
  const id = req.params.id;
  pool
    .query('DELETE FROM "participants" WHERE id=$1', [req.params.id])
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(`Error deleting participant list ${err}`);
      res.sendStatus(500);
    });
});

export default router;
