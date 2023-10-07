const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  /* SAVE CATEGORY */
  const category = new Category(req.body);
  try {
    const doc = await category.save();
    console.log(doc);
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(err);
  }
};

exports.fetchCategories = async (req,res)=>{
    try { 
        const categories = await Category.find({}).exec();
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json(err);
    }
}


