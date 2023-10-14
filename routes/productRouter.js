const express = require("express");
const router = express.Router();
const {createProduct, fetchAllProducts, fetchProductById, updateProduct} = require('../controller/Product');

//router
//router link added in base project
router.post('/', createProduct)
.get('/', fetchAllProducts)
.get('/:id', fetchProductById)
.patch('/:id', updateProduct);

module.exports  = router;