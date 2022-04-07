import { Request, Response } from "express";
import { deleteUserService } from "../../services/user";

export const deleteUserController = async (req: Request, res: Response) => {
  const deletedUser = await deleteUserService(req, res);

  return res.status(200).json({
    "message": "User deleted with success",
  });
};