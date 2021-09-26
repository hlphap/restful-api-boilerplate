import express from "express";
import { checkJwt } from "../../../middlewares/check-jwt";
import { validate } from '../../../middlewares/validate';
import { loginSchema } from '../../validators/auth.validation';
import { authControllers } from "../../controllers";

const router = express.Router();

router.post("/login", [validate(loginSchema)], authControllers.login);
router.post("/register", authControllers.register);
router.post("/change-password", [checkJwt], authControllers.changePassword);

export default router;
