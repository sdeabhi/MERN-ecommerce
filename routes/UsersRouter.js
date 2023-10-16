const express = require("express");

const { fetchUserById, updateUser } = require("../controller/User");
const router = express.Router();

//router
//router link added in base users
router.get('/', fetchUserById)
.patch('/', updateUser);

module.exports  = router;