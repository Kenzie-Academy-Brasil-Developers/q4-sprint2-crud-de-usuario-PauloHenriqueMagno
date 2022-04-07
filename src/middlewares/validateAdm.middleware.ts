import { NextFunction, Request, Response } from "express";

export const validateAdm = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAdm){
    return res.status(401).json({
      message: "Unauthorized"
    });
  };

  return next();
};