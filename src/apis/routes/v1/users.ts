import Router from "express";

import { userControllers } from '../../controllers';

const router = Router();

router.put("/:userID", userControllers.updateUser);
router.delete("/:userID", userControllers.deleteUser);
router.get("/", userControllers.getUsers);
router.post("/", userControllers.createUser);

export default router;