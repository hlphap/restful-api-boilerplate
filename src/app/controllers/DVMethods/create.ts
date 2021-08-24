import { Request, Response, NextFunction } from "express";
import { DVMethod } from "../../models"

const create = async (req: Request, res: Response, next: NextFunction) =>{
    const dvMethod = new DVMethod(req.body);

    await dvMethod.save();

    return res.status(200).json({
        status: 200,
        message: "Create delivery method successfully",
    })
}

export default create;