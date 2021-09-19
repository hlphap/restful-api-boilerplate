
import httpStatusCode from "http-status-codes"
import { CustomError } from "../utils/response/custom-error/custom-error";
import { Request, Response, NextFunction } from "express";
import mongoose from 'mongoose';

//Convert Error Unknown to CustomError
const errorConverter = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let error = err;
    if (!(error instanceof CustomError)) {
        const statusCode = error instanceof mongoose.Error ? httpStatusCode.BAD_REQUEST : httpStatusCode.INTERNAL_SERVER_ERROR;
        const errorType = error.name;
        const message = error.message || httpStatusCode.getStatusText(statusCode);
        error = new CustomError(statusCode, errorType, message);
    }
    next(error)
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.HttpStatusCode).json(err.JSON);
}

export {
    errorConverter,
    errorHandler,
}