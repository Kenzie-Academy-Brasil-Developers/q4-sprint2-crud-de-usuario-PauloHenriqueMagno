import { Request, Response } from 'express';

import { UserRepository } from '../../repositories/user';

export const getUserProfileController = async (req: Request, res: Response) => {
  const { password, ...user} = await new UserRepository().findUserByEmail(req.email);

  return res.status(200).json(user)
};