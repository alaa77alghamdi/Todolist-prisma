import { prisma } from "../config/db";
import express, { Request, Response } from "express";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
  try {
    let hash = await argon2.hash(req.body.password);
    let user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: hash,
      },
    });

    if (user) {
      return res.status(200).json({ "user added successfully!": user });
    }

    throw "there was an error";
  } catch (e) {
    res.status(500).json({ e: e });
  }
};



export const Log = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
        
      },
    });
    if (!user) {
      return res.status(400).json({ error: "wrong email address" });
    } 
    else if (!(await argon2.verify(user.password, req.body.password))) {
      return res.status(400).json({ error: "wrong password" });
    } 
  let token=jwt.sign({
    id:user.id,
    name:user.name,
  },process.env.API_SECRET as string,{expiresIn:"3h"}) 
      return res.status(400).json({ message: `hello ,  ${user.name}` ,token:token });
    


  } catch (err) {
    console.log(err);
    res.json({ error: "not created" });
  }
};
