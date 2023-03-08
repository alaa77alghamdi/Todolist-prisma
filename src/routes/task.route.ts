import express, { Application, Request, Response } from "express";
import { taskDelete, taskUpdate, taskcreate, usertask } from "../controller/task.controller";
import auth from "../middleware/auth";
let router=express.Router();


router.post("/",auth,taskcreate) 
router.get("/task/:userId", usertask)
router.put("/tasks/:id",auth,taskUpdate)
router.delete("/tasks/:id",taskDelete )

export default router;