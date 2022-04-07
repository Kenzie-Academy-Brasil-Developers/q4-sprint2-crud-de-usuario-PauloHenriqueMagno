import { User } from "../entities/User";

declare global {
  namespace Express {
    interface Request {
      user: User,
      token: string,
      email: string,
      isAdm: boolean,
      uuid: string,
    }
  }
}