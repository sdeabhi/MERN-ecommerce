const express = require("express");
const { fetchBrands, createBrand } = require("../controller/Brand");
const router = express.Router();

//router
//router link added in base project
router.get('/', fetchBrands).post('/', createBrand);

module.exports  = router;