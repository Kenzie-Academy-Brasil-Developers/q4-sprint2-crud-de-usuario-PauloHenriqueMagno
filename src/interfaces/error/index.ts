import { QueryFailedError } from "typeorm";

interface IDetail extends QueryFailedError {
  detail: string;
};

export { IDetail };