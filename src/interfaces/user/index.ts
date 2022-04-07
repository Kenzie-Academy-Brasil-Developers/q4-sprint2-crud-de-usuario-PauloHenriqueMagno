import { DeleteResult, UpdateResult } from "typeorm";
import { User } from "../../entities/User";

interface IUser {
  uuid: string;
  name: string;
  email: string;
  password?: string;
  isAdm: boolean;
  createdOn: Date;
  updatedOn: Date;
};

interface IUserRepo {
  createUser: (user: IUser) => Promise<User>;
  findUserByEmail: (email: string) => Promise<User>;
  findUserByUuid: (uuid: string) => Promise<User>;
  findUsers: () => Promise<User[]>;
  deleteUser: (uuid: string) => Promise<DeleteResult>;
  modifyUser: (uuid: string, newData: any) => Promise<UpdateResult>
};

export {
  IUser,
  IUserRepo
};
