import { Request, Response } from "express";
import { updateUserService } from "../../services/user";

export const modifyUserController = async (req: Request, res: Response) => {
  await updateUserService(req, res);

  if (req.user) {
    return res.status(200).json(req.user)
  };
};