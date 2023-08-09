import express from "express";
import AuthController from "../controllers/authController.js";
import BlogController from "../controllers/blogController.js";
const router = express.Router();

router.post('/user/register', AuthController.userRagistration )
router.post('/user/login', AuthController.userLogin )

// Protected root

router.get("/get/allblogs", BlogController.getAllBlogs)
router.post("/add/blog", BlogController.addNewBlog)
router.get("/get/blog", BlogController.getSingleBlog)

export default router;