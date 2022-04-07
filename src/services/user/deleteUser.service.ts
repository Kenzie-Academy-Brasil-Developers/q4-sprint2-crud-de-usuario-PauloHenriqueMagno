import { Request, Response } from "express";

import { UserRepository } from "../../repositories/user";

export const deleteUserService = async (req: Request, res: Response) => {
  const { uuid } = req.params;
  
  if (req.uuid === uuid || req.isAdm) {
    const deletedUser = await new UserRepository().deleteUser(uuid);

    return deletedUser;
  };

  return res.status(401).json({ message: "Missing admin permissions" });
}