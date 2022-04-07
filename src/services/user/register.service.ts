import { Request, Response } from "express"
import { UserRepository } from "../../repositories/user";
import { QueryFailedError } from "typeorm";

import { IDetail } from "../../interfaces/error";

export const registerService = async (req: Request, res: Response) => {
  try {
    const { password, ...user} = await new UserRepository().createUser(req.body);
  
    return user;
  } catch (error) {
    if (error instanceof QueryFailedError) {
      const detail = (error as IDetail).detail;
      if (detail.includes("already exists")) {
        return res.status(409).json({ message: "E-mail already registered" });
      };
    };
  };
};