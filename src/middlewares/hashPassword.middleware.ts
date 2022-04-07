import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';

export const hashPassword = async (req: Request, _: Response, Next: NextFunction) => {
  if (req.body.password){
    req.body.password = await bcrypt.hash(req.body.password, 10); 
  };

  return Next();
};