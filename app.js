const express = require('express')
const app = express();
var bodyParser = require('body-parser')
const {getConnect } = require('./config/db');
const productRouter  = require("./routes/productRouter");
const brandRouter  = require("./routes/brandRouter");
const categoryRouter  = require("./routes/categoryRouter");

getConnect();


//  Middlewares
app.use(express.json());  // to parse req.body
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));


//Routes
app.use('/products', productRouter);
app.use('/brands', brandRouter);
app.use('/categories', categoryRouter);



module.exports = app;