import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";

import { IUser, IUserRepo } from '../../interfaces/user';

class UserRepository implements IUserRepo {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = getRepository(User);
  };

  createUser = async (user: IUser) => await this.ormRepo.save(user);

  findUserByEmail = async (email: string) => await this.ormRepo.findOne({ where: { email } });

  findUserByUuid = async (uuid: string) => await this.ormRepo.findOne({ where: { uuid } });

  findUsers = async () => await this.ormRepo.find();

  deleteUser = async (uuid: string) => await this.ormRepo.delete({ uuid });

  modifyUser = async (uuid: string, newData: any) => await this.ormRepo.update(uuid, newData);
};

export { UserRepository };