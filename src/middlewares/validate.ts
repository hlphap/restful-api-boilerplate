import Joi from 'joi';
import httpStatus from 'http-status-codes';

import { CustomError } from '../utils/custom-error';
import { pickKeys } from '../utils/pick-keys';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema) => (req: Request, res: Response, next: NextFunction) => {
    const validSchema = pickKeys(schema, ['params', 'query', 'body']);
    const object = pickKeys(req, Object.keys(validSchema));
    console.log(object);
    const { value, error } = Joi.compile(validSchema).prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);
    if (error) {
        return next(new CustomError(httpStatus.BAD_REQUEST, 'Validation', error.message));
    }
    Object.assign(req, value);
    return next();
}