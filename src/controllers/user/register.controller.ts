import { Request, Response } from "express"
import { registerService } from "../../services/user"; 

export const registerController = async (req: Request, res: Response) => {
  await registerService(req, res);

  if (req.user){
    return res.status(201).send(req.user);
  }
}