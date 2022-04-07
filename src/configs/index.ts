import dotenv from "dotenv";

dotenv.config();

export const JWTConfig: { secret: any; expiresIn: string } = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRES_IN,
};