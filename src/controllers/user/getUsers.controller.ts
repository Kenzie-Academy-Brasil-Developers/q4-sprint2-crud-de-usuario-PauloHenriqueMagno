import { Request, Response } from "express"

import { UserRepository } from "../../repositories/user"

export const getUsersController = async (_: Request, res: Response) => {
  const users = await new UserRepository().findUsers();

  const usersRemovedPassword = users.map((anyUser) => {
    const { password, ...userRemovedPassword } = anyUser;

    return userRemovedPassword
  });

  return res.status(200).json(usersRemovedPassword);
}