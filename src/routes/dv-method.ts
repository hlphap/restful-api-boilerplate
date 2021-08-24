import Router from "express-promise-router";
import { DVMethodControllers } from "../app/controllers";
import { validateParam, validateBody, dvMethodSchema } from "../middlewares";

const router = Router();

router.route("/")
    .get(DVMethodControllers.getAll)
    .post(
        validateBody(dvMethodSchema.createDVMethod),
        DVMethodControllers.create
    )

export default router;