import { Request, Response } from "express";
import express from 'express';
import pool from '../../modules/pool';
import rejectUnauthenticated from '../../modules/authentication-middleware';

const router: express.Router = express.Router();

//GET Request for top four tasks by client
//Order by due date ascending
router.get('/byClients/:clientId/:trueOrFalse', rejectUnauthenticated, (req: Request, res: Response, next: express.NextFunction): void => {
    // const userSecurityLevel: number | null = <number>Number(req.params.userSecurityLevel);
    const clientId: number | null = <number>parseInt(req.params.clientId);
    const trueOrFalse: string | null =<string>(req.params.trueOrFalse); 
    console.log(clientId)
    const queryText: string = `SELECT "tasks".id AS "tasksId", "tasks"."dueBy",
    "user".id AS "userId", "tasks".clients_id AS clients_id,
    "tasks"."assignedOn", "tasks".task, "clients"."firstName" AS "clientsFirstName", 
    "clients"."lastName" AS "clientsLastName", "user"."firstName" AS "userFirstName", 
    "user"."lastName" AS "userLastName", "tasks".complete FROM "tasks"
    JOIN "clients" ON "tasks".clients_id = "clients".id
    JOIN "user" ON "tasks".users_id = "user".id
    WHERE "clients".id = $1
    ORDER BY "tasks".complete ASC, "tasks"."dueBy" ASC;`;
    pool.query(queryText, [clientId])
    .then((response) => {
        res.send(response.rows)
    })
    .catch((err) => {
        console.log(`error getting tasks ${err}`)
        res.sendStatus(500);
    })
});

//GET Request for top ten tasks by user
//Order by due date ascending
router.get('/byUser/:userId/:trueOrFalse', rejectUnauthenticated, (req: Request, res: Response, next: express.NextFunction): void => {
    const userId: number | null = <number>Number(req.params.userId);
    const trueOrFalse: string | null =<string>(req.params.trueOrFalse);

    const queryText: string = `SELECT "tasks".id AS "tasksId", "tasks"."dueBy",
    "user".id AS "userId",  
    "tasks"."assignedOn", "tasks".task, "clients"."firstName" AS "clientsFirstName", 
    "clients"."lastName" AS "clientsLastName", "user"."firstName" AS "userFirstName", 
    "user"."lastName" AS "userLastName", "tasks".complete FROM "tasks"
    JOIN "clients" ON "tasks".clients_id = "clients".id
    JOIN "user" ON "tasks".users_id = "user".id
    WHERE "user".id = $1 AND "tasks".complete = $2
    ORDER BY "tasks"."dueBy" ASC
    LIMIT 5;`;
    pool.query(queryText, [userId, trueOrFalse])
    .then((response) => {
        res.send(response.rows)
    })
    .catch((err) => {
        console.log(`error getting tasks ${err}`)
        res.sendStatus(500);
    })
});

//GET Request for top ten tasks by all
//Order by due date ascending
router.get('/byAll/:trueOrFalse', rejectUnauthenticated, (req: Request, res: Response, next: express.NextFunction): void => {
    const trueOrFalse: string | null =<string>(req.params.trueOrFalse); 

    const queryText: string = `SELECT "tasks".id AS "tasksId", "tasks"."dueBy",
    "user".id AS "userId",  
    "tasks"."assignedOn", "tasks".task, "clients"."firstName" AS "clientsFirstName", 
    "clients"."lastName" AS "clientsLastName", "user"."firstName" AS "userFirstName", 
    "user"."lastName" AS "userLastName", "tasks".complete FROM "tasks"
    JOIN "clients" ON "tasks".clients_id = "clients".id
    JOIN "user" ON "tasks".users_id = "user".id
    WHERE "tasks".complete = $1
    ORDER BY "tasks"."dueBy" ASC
    LIMIT 10;`;
    pool.query(queryText, [trueOrFalse])
    .then((response) => {
        res.send(response.rows)
    })
    .catch((err) => {
        console.log(`error getting tasks ${err}`)
        res.sendStatus(500);
    })
});

export default router;