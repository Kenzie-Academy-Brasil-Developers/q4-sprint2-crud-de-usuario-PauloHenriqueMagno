import { IUser } from '../interfaces/user'

declare global {
  namespace Express {
    interface Request {
      user: IUser,
      token: string,
      email: string,
      isAdm: boolean,
      uuid: string
    }
  }
}