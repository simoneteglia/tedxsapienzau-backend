import express from "express";
import {
	register,
	login,
	logout,
	isUserLoggedIn,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/isUserLoggedIn", isUserLoggedIn);
export default router;
