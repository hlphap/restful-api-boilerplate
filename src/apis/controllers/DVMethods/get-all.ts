import { Request, Response, NextFunction } from "express"
import { DVMethod } from "../../models"

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const dvmethods = await DVMethod.find({});
    res.status(200).json(dvmethods);
}

export default getAll;