import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validateParam = (schema: Joi.Schema, name: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const validatorResult = schema.validate({ param: req.params[name] })
        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error)
        } else {
            req.params[name] = validatorResult.value.param;
            next();
        }
    }
}

const validateBody = (schema: Joi.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const validatorResult = schema.validate(req.body);
        if (validatorResult.error) return res.status(400).json(validatorResult.error);
        else {
            req.body = validatorResult.value;
            next();
        }
    }
}

export {
    validateParam,
    validateBody,
}