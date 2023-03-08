import { prisma } from "../config/db";
import express, {  Request, Response } from "express";

export const taskcreate =async (req: Request, res: Response) => {
    try {
      let task = await prisma.task.create({
        data: {
          title: req.body.title,
          userId: res.locals.user.id,
        },
      });
  
      res.json(task);
    } catch (e) {
      res.json(e);
    }
  }
  

  export const usertask=async (req: Request, res: Response) => {
    let tasks = await prisma.task.findMany({
      where: {
        userId: res.locals.user.id,
      },
  
      select: {
        title: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    res.json(tasks);
  };


  export const taskUpdate= async (req: Request, res: Response) => {
    try {
      let tasks = await prisma.task.updateMany({
        where: {
         id:req.params.id,
         userId:req.body.userId //task id
        },
        data: {
          title:req.body.title,
          isComplete:req.body.isComplete,
        },
      });
      res.json("tasks updated successfully!");
    } catch (e) {
  
      res.json(e);
    }
};


export const taskDelete=async (req: Request, res: Response) => {
    try {
      let tasks = await prisma.task.deleteMany({
        where: {
         id:req.params.id,
         userId:req.body.userId //task id
        }
      });
      res.json("tasks updated successfully!");
    } catch (e) {
  console.log(e);
  
      res.json(e);
    }
  };
  
  