import { Request, Response } from "express";
import express from 'express';
import pool from '../../modules/pool';
import rejectUnauthenticated from '../../modules/authentication-middleware';

const router: express.Router = express.Router();

//PUT route to change completed status
//Order by due date ascending
router.put('/put', rejectUnauthenticated, (req: Request, res: Response, next: express.NextFunction): void => {
    const taskId: number | null =<number>(req.body.taskId);
    const completedOn: string | null =<string>req.body.completedOn;
    const checkbox: boolean | null =<boolean>req.body.checkbox;
    let queryText: string | null = ``;
    //Checks to see if task is marked as true or false
    if(checkbox == true){
        queryText = `UPDATE "tasks" SET "complete" = TRUE,
        "completedOn" = $2 
        WHERE "id" = $1;`;
    }else if(checkbox == false){
        queryText = `UPDATE "tasks" SET "complete" = FALSE,
        "completedOn" =$2 
        WHERE "id" = $1;`; 
    }
    pool.query(queryText, [taskId, completedOn])
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(`error editing tasks ${err}`)
        res.sendStatus(500);
    })
});

//POST route to add new task
router.post('/post',  (req: Request, res: Response, next: express.NextFunction): void => {
    const usersId: number = <number>req.body.users_id;
    const clientsId: number = <number>req.body.clients_id;
    const task: string = <string>req.body.task;
    const assignedOn: string = <string>req.body.assignedOn;
    const dueBy: string = <string>req.body.dueBy;
    
    const queryText: string = `INSERT INTO "tasks"
    ("users_id", "clients_id", "task", "assignedOn", "dueBy")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [usersId, clientsId, task, assignedOn, dueBy])
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(`error posting task ${err}`)
        res.sendStatus(500);
    })
})

export default router;
