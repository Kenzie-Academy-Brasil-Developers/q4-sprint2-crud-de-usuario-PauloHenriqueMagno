import { Request, Response } from "express";

import { loginService } from "../../services/user";

export const loginController = async (req: Request, res: Response) => {
  const token = await loginService(req, res);

  return res.status(200).send({ token: token });
};