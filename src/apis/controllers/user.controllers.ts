import httpStatus from "http-status-codes";
import { Request, Response, NextFunction } from "express";

import { userService } from "../services";
import catchAsync from "../../utils/catch-async";

const getUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("info");
    const users = await userService.getUsers();
    res.status(httpStatus.OK).send({ users });
  }
);

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send({ user });
  }
);

const updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await userService.updateUser(req.params.userID, req.body);
    res.status(httpStatus.OK).send({ newUser });
  }
);

const deleteUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const deletedUser = await userService.deleteUser(req.params.userID);
    res.status(httpStatus.OK).send({ deletedUser });
  }
);

export {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
