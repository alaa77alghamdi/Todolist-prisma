import express, { Application, Request, Response } from "express";
import { Log, createUser } from "../controller/user.controller";
import validate from "../middleware/validate";
import { userType } from "../zod.schema/zod.user";


let router = express.Router();
router.post("/",validate(userType), createUser);
router.get("/", Log);


export default router;
