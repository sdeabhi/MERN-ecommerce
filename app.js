const express = require('express')
const app = express();
var bodyParser = require('body-parser')
const {getConnect } = require('./config/db');
const productRouter  = require("./routes/productRouter");
const brandRouter  = require("./routes/brandRouter");
const categoryRouter  = require("./routes/categoryRouter");
const UsersRouter  = require("./routes/UsersRouter");
const AuthRouter  = require("./routes/AuthRouter");
const cartRouter  = require("./routes/cartRouter");
const orderRouter  = require("./routes/orderRouter");

getConnect();


//  Middlewares
app.use(express.json());  // to parse req.body
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));


//Routes
app.use('/products', productRouter);
app.use('/brands', brandRouter);
app.use('/categories', categoryRouter);
app.use('/users', UsersRouter);
app.use('/auth', AuthRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);



module.exports = app;