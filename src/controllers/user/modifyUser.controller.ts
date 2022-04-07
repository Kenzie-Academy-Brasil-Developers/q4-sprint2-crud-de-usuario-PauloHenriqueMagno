import { Request, Response } from "express";
import { updateUserService } from "../../services/user";

export const modifyUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req, res);

  return res.status(200).json(updatedUser)
}