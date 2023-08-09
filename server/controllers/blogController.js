class BlogController
{
    static getAllBlogs = async(req, res) => {
        res.send("get All blogs");
    }
    static addNewBlog = async(req, res) => {
        res.send("Add new blog");
    }
    static getSingleBlog = async(req, res) => {
        res.send("get single blog");
    }
}

export default BlogController;