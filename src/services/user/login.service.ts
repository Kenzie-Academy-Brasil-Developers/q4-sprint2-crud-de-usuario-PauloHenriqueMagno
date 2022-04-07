import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken';

import { JWTConfig } from "../../configs";
import { UserRepository } from "../../repositories/user";

export const loginService = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await new UserRepository().findUserByEmail(email);

  if (!user) {
    res.status(401).json({ message: "Wrong email/password" });
  }

  const match = bcrypt.compareSync(password, user.password);
  
  if (!match) {
    res.status(401).json({ message: "Wrong email/password" });
  }

  console.log(user);

  const token = jsonwebtoken.sign({
      email: user.email,
      isAdm: user.isAdm,
      uuid: user.uuid
    }, 
    JWTConfig.secret,
    { expiresIn: JWTConfig.expiresIn }
  );

  return token;
};