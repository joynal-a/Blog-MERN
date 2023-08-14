import express from "express";
import AuthController from "../controllers/authController.js";
import BlogController from "../controllers/blogController.js";
import CategoryController from "../controllers/categoryController.js";
import checkIsUserAuthenticate from "../middlewares/authMiddleware.js";


import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/upload/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
  });
  
  const upload = multer({ storage: storage })


const router = express.Router();

router.post('/user/register', AuthController.userRagistration );
router.post('/user/login', AuthController.userLogin );


router.get("/get/allblogs", BlogController.getAllBlogs);
router.get("/get/blog/:id", BlogController.getSingleBlog);
router.get("/get/allcategories", CategoryController.getAllCategories);

// Protected root

router.post("/add/blog", checkIsUserAuthenticate, upload.single("thumbnail"), BlogController.addNewBlog);
router.post("/add/category", checkIsUserAuthenticate, CategoryController.addNewCategory);

// router.post("/edit/blog", checkIsUserAuthenticate, CategoryController.addNewCategory);
// router.post("/delete/blog", checkIsUserAuthenticate, CategoryController.addNewCategory);



export default router;