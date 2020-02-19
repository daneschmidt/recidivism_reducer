import { Request, Response } from "express";
import express  from 'express';
import rejectUnauthenticated from '../../modules/authentication-middleware';
import pool from '../../modules/pool';
import userStrategy from '../../strategies/user.strategy';
import { encryptPassword} from '../../modules/encryption';
// import encryptLib from '../../modules/encryption';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  res.send(req.user);
});
//Route to add new user
router.post('/add', rejectUnauthenticated, (req: Request, res: Response, next: express.NextFunction): void => {
  const firstName: string | null = <string>req.body.firstName;
  const lastName: string | null = <string>req.body.lastName;
  const username: string | null = <string>req.body.username;
  const password: string | null = encryptPassword(req.body.password);
  const securityLevel: number | null = <number>req.body.securityLevel;
  const phoneNumber: number | null = <number>req.body.phoneNumber;
  const email: string | null = <string>req.body.email;
  const role: string | null = <string>req.body.role;

  const queryText: string = `INSERT INTO "user" ("firstName", "lastName", "username", "password", "securityLevel", "phoneNumber", "email", "role") 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`;
  pool.query(queryText, [firstName, lastName, username, password, securityLevel, phoneNumber, email, role])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(`Error saving user to database: ${err}`);
      res.sendStatus(500)}
    );
});

router.post('/login', userStrategy.authenticate('local'), (req: Request, res: Response): void => {
  res.sendStatus(200);
});

router.post('/logout', (req: Request, res: Response): void => {
  req.logout();
  res.sendStatus(200);
});

export default router;