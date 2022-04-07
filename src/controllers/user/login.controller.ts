import { Request, Response } from "express";

import { loginService } from "../../services/user";

export const loginController = async (req: Request, res: Response) => {
  await loginService(req, res);
  
  if (req.token) {
    return res.status(200).send({ token: req.token });
  };
};