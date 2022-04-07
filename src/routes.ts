import { Router } from "express";

import {
  loginController,
  registerController,
  getUsersController,
  getUserProfileController,
  modifyUserController,
  deleteUserController
} from "./controllers/user";

import {
  validateShape,
  hashPassword,
  validateToken,
  validateAdm
} from "./middlewares";

import {
  registerUserShape,
  loginUserShape,
  updateUserShape
} from "./shapes";

const routes = Router();

routes.post(
  "/users",
  hashPassword,
  validateShape(registerUserShape),
  registerController
);

routes.post(
  "/login",
  validateShape(loginUserShape),
  loginController
);

routes.get(
  "/users",
  validateToken,
  validateAdm,
  getUsersController
);

routes.get(
  "/users/profile",
  validateToken,
  getUserProfileController
);

routes.patch(
  "/users/:uuid",
  validateShape(updateUserShape),
  validateToken,
  modifyUserController
);

routes.delete(
  "/users/:uuid",
  validateToken,
  deleteUserController
);

export { routes };