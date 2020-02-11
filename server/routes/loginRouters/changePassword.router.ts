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
    // const id: number | null = <number>req.body.id;
    const username: string | null = <string>req.body.username;
    const password: string | null = encryptPassword(req.body.password); 
  
    const queryText = `UPDATE "user" SET "password" = $1
    WHERE "user".username = $2;`;
    pool.query(queryText, [password, username])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error updating password: ${err}`);
        res.sendStatus(500)}
        );
  });
export default router;