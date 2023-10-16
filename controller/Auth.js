const User = require("../models/User");

exports.createUser = async (req, res) => {
  /* SAVE User */
  const user = new User(req.body);
  try {
    const doc = await user.save();
    console.log(doc);
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  /* login User */
  try {
    const user = await User.findOne(
      { email: req.body.email },
    ).exec();
    // this is temporary, we will use strong password auth
    if (!user) {
      res.status(401).json({ message: "no such user found" });
    } else if (user.password === req.body.password) {
      // TODO: we will make adressess independent of login.
      res.status(200).json({id:user.id, email:user.email, name:user.name, addresses:user.addresses});
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (error) {
    res.status(400).json(err);
  }
};
