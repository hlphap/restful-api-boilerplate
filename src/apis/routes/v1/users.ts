import Router from "express";
import { checkJwt, checkRole } from "../../../middlewares";

import { userControllers } from '../../controllers';

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMINISTRATOR"])], userControllers.getUsers);
router.post("/", [checkJwt, checkRole(["ADMINISTRATOR"])], userControllers.createUser);
router.put("/:userID", [checkJwt, checkRole(["ADMINISTRATOR", "STANDARD"], true)], userControllers.updateUser);
router.delete("/:userID", [checkJwt, checkRole(["ADMINISTRATOR"], true)], userControllers.deleteUser);


export default router;
