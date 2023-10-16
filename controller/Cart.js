const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  /* SAVE Cart */
  const cart = new Cart(req.body);
  try {
    const doc = await cart.save();
    const result = await doc.populate("product");
    //  console.log(result);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchCartByUser = async (req, res) => {
  const { user } = req.query;
  try {
    const cartItems = await Cart.find({ user: user })
      .populate("user")
      .populate("product");
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Cart.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
};
