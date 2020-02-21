import { Request, Response } from "express";
import express  from 'express';
import rejectUnauthenticated from '../../modules/authentication-middleware';
import pool from '../../modules/pool';
import userStrategy from '../../strategies/user.strategy';
import {encryptPassword} from '../../modules/encryption';

const router: express.Router = express.Router();

// Handles PUT request to change password
// Password gets encrypted before being inserted
router.put('/', rejectUnauthenticated, (req: Request, res: Response, next: express.NextFunction): void => { 
    const id: number | null = <number>req.body.id;
    const password: string | null = encryptPassword(req.body.enteredNewPassword); 
  
    const queryText: string = `UPDATE "user" SET "password" = $1
    WHERE "user".id = $2;`;
    pool.query(queryText, [password, id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error updating password: ${err}`);
        res.sendStatus(500)}
        );
  });
export default router;