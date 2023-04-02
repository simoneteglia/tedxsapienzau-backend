import express from "express";
import { joinStudent, joinPartner, joinAdvise } from "../controllers/join.js";

const router = express.Router();

router.post("/student", joinStudent);
router.post("/partner", joinPartner);
router.post("/advise", joinAdvise);

export default router;
