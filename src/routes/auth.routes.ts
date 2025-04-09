import { Router } from "express";
import { register, login } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register); // ✅ POST for register
router.post("/login", login);       // ✅ POST for login

export default router;
