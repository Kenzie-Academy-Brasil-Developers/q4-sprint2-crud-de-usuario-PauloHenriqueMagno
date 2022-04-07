import { Request, Response } from "express";
import { deleteUserService } from "../../services/user";

export const deleteUserController = async (req: Request, res: Response) => {
  const { uuid } = req.params;

  if (req.uuid === uuid || req.isAdm) {
    const response = await deleteUserService(req);

    if (response.affected > 0) {
      return res.status(200).json({
        "message": "User deleted with success",
      });
    };

    return res.status(404).json({ message: "User not found" });
  };

  if (!req.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" });
  };
};