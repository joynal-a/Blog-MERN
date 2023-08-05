import express from "express";
import AuthController from "../controllers/authController.js";
const router = express.Router();

router.post('/user/register', AuthController.userRagistration )
router.post('/user/login', AuthController.userLogin )


export default router;