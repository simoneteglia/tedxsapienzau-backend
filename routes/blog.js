import express from "express";
import {
	getBlogID,
	getBlog,
	postBlog,
	countBlog,
} from "../controllers/blog.js";

const router = express.Router();

router.get("/count", countBlog);
router.get("/:id", getBlogID);
router.post("/", postBlog);
router.get("/", getBlog);

export default router;
