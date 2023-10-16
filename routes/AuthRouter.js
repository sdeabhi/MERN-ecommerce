const express = require("express");
const { createUser, loginUser } = require("../controller/Auth");
const router = express.Router();

//router
//router link added in base project
router.post('/signup', createUser).post('/login', loginUser) ;

module.exports  = router;