import express from "express";
import { joinStudent } from "../controllers/join.js";

const router = express.Router();

router.post("/student", joinStudent);

export default router;
