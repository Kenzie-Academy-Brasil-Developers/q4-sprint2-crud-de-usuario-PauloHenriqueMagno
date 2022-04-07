import { Request } from "express";

import { UserRepository } from "../../repositories/user";

export const deleteUserService = async (req: Request) => {
  const { uuid } = req.params;
  
  const deleteResulte = await new UserRepository().deleteUser(uuid);
  
  return deleteResulte
};