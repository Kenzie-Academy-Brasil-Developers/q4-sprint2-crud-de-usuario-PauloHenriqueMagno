import { Request, Response } from "express"
import { registerService } from "../../services/user"; 

export const registerController = async (req: Request, res: Response) => {
  const user = await registerService(req, res);

  return res.status(201).send(user);
}