import { Request, Response } from "express";

import { UserRepository } from "../../repositories/user";

export const updateUserService = async (req: Request, res: Response) => {
  const { uuid } = req.params;
  if (req.uuid === uuid || req.isAdm) {
    await new UserRepository().modifyUser(uuid, req.body);

    const { password, ...updatedUser } = await new UserRepository().findUserByUuid(uuid);

    req.user = updatedUser;

  } else {
    return res.status(401).json({ message: "Missing admin permissions" });
  }
}