import { NextFunction, Request, Response } from "express"
import { AnySchema } from 'yup';

export const validateShape = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = await schema.validate(req.body);

    req.body = userData;

    return next();
  } catch (e) {
    
    return res.status(400).send({ error: e.errors[0]});
  };
};