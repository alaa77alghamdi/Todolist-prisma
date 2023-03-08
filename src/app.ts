import express, { Application, Request, Response } from "express";
import taskRoute from "./routes/task.route";
import { PrismaClient } from "@prisma/client";
import userRoute from "./routes/user.route";
import * as dotenv from "dotenv";
import cors from "cors";
const prisma = new PrismaClient();
const app: Application = express();
const port = process.env.PORT ||3004;






app.use(express.json());
app.use(cors());
app.use("/user",userRoute);
app.use("/task", taskRoute);


app.listen(port, () => console.log(`Server is running on port ${port}`));
