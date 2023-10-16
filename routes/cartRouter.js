const express = require("express");
const router = express.Router();
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require("../controller/Cart");

//router
//router link added in base project
router.post('/', addToCart)
.get('/', fetchCartByUser)
.patch('/:id', updateCart)
.delete('/:id', deleteFromCart);

module.exports  = router;