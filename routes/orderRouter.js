const express = require("express");
const { createOrder, fetchOrdersByUser, deleteOrder, updateOrder } = require("../controller/Order");
const router = express.Router();

//router
//router link added in base project
router.post('/', createOrder)
.get('/', fetchOrdersByUser)
.patch('/:id', deleteOrder)
.delete('/:id', updateOrder);

module.exports  = router;