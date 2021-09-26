import express from "express";
import { checkJwt } from "../../../middlewares/check-jwt";
import { validate } from '../../../middlewares/validate';
import { loginSchema, registerSchema, changePasswordSchema } from '../../validators/auth.validation';
import { authControllers } from "../../controllers";

const router = express.Router();

router.post("/login", [validate(loginSchema)], authControllers.login);
router.post("/register", [validate(registerSchema)], authControllers.register);
router.post("/change-password", [checkJwt, validate(changePasswordSchema)], authControllers.changePassword);

export default router;
