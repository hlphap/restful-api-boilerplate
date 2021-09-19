

import { CustomError } from "../utils/response/custom-error/custom-error";
import env from '../configs/env';
import { Request, Response, NextFunction } from "express";

const errorConverter = (err: Error, req: Request, res: Response, next: NextFunction) => {

}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

}

export {
    errorConverter,
    errorHandler,
}