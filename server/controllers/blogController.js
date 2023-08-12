import blogModel from "../models/blogModel.js";
class BlogController
{
    static getAllBlogs = async(req, res) => {
        try{
            const fetchAllBlog = await blogModel.find({});
            return res.status(400).json(fetchAllBlog);
        }catch(error){
            return res.status(400).json({});
        }
    }
    static addNewBlog = async(req, res) => {
        res.send("Add new blog");
    }
    static getSingleBlog = async(req, res) => {
        res.send("get single blog");
    }
}

export default BlogController;