import express from "express";
import { checkJwt } from "../../../middlewares/check-jwt";
import { authControllers } from "../../controllers";

const router = express.Router();

router.post("/login", authControllers.login);
router.post("/register", authControllers.register);
router.post("/change-password", [checkJwt], authControllers.changePassword);

export default router;
