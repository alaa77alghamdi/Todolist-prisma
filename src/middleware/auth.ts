import express, { Application, NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken"

interface User{
    id:string,
    name:string
}

const auth=(req:Request, res:Response ,next:NextFunction)=>{
    try{
        let token = req.headers.authorization;

        if(!token){
        
           return res.status(403).json({ error:"no token"})
        }
        console.log("test before verify");
        console.log(token);

        const user =jwt.verify(token,process.env.API_SECRET as string) as User;
        console.log(user);
        res.locals.user=user;
        
        next()
    }catch(err){   
        return res.status(403).json({ error:"your not authorized please login"})}
}

export default auth;