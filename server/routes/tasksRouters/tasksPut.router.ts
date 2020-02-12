import { Request, Response } from "express";
import express from 'express';
import pool from '../../modules/pool';
import rejectUnauthenticated from '../../modules/authentication-middleware';

const router: express.Router = express.Router();

//PUT Request to change completed status
//Order by due date ascending
router.put('/', (req: Request, res: Response, next: express.NextFunction): void => {
    
    const taskId: number | null =<number>(req.body.taskId);
    const checkbox: boolean | null =<boolean>req.body.complete;
    console.log(checkbox)
    let queryText: string | null = ``;
    if(checkbox == false){
        queryText = `UPDATE "tasks" SET "complete" = TRUE 
        WHERE "id" = $1;`;
    }else if(checkbox == true){
        queryText = `UPDATE "tasks" SET "complete" = FALSE 
        WHERE "id" = $1;` 
    }
    

    // const queryText: string = `UPDATE "tasks" SET "complete" = $1 
    // WHERE "id" = $2;`;
    
    pool.query(queryText, [taskId])
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(`error editing tasks ${err}`)
        res.sendStatus(500);
    })
});



export default router;