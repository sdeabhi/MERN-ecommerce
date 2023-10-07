const express = require("express");
const { fetchCategories, createCategory } = require("../controller/Category");
const router = express.Router();

//router
//router link added in base project
router.post('/', createCategory).get('/', fetchCategories);

module.exports  = router;