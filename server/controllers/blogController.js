import blogModel from "../models/blogModel.js";
class BlogController
{
    static getAllBlogs = async(req, res) => {
        try{
            const fetchAllBlog = await blogModel.find({});
            return res.status(200).json(fetchAllBlog);
        }catch(error){
            return res.status(400).json({ message: error.message });
        }
    }
    static addNewBlog = async(req, res) => {
        const {title, category, description,} = req.body;
        try{
            if(title && category && description){
                const addBlog = new blogModel({
                    title: title,
                    description: description,
                    category: category,
                    // thumbnail: req.file.filename,
                    user: req.body._id,
                });

                const saveBlog= await addBlog.save();

                if(saveBlog){
                    return res.status(200).json({ message: 'Blog saved' });
                }else{
                    return res.status(400).json({ message: 'Blog Not saved' });
                }

            }else{
                return res.status(400).json({ message: 'All fields are required' });
            }
        }catch(error){
            return res.status(400).json({ message: error.message });
        }

    }
    static getSingleBlog = async(req, res) => {
      const {id} = req.params;
      try {
        if (id) {
            const fetchBlogByID = await blogModel.find(id);
            return res.status(200).json(fetchBlogByID);
        } else {
            return res.status(400).json({ message: `invalid url` });
        }
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    }
}

export default BlogController;