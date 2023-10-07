const express = require("express");
const router = express.Router();
const {createProduct, fetchAllProducts} = require('../controller/Product');

//router
//router link added in base project
router.post('/', createProduct).get('/', fetchAllProducts);

module.exports  = router;