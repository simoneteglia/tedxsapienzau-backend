import express from "express";
import {
	getBlogID,
	getBlog,
	postBlog,
	countBlog,
} from "../controllers/blog.js";

const router = express.Router();

router.get("/", getBlog);
router.get("/:id", getBlogID);
router.post("/", postBlog);
router.get("/count", countBlog);

export default router;
