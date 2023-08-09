class CategoryController
{
    static getAllCategories = async(req, res) => {
        res.send("get All Categories");
    }
    static addNewCategory = async(req, res) => {
        res.send("Add new Category");
    }
}

export default CategoryController;