const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userControllers = {
  newUser: async (req, res) => {
    let { name, lastName, email, password, img, country, google } = req.body;
    console.log(req.body);
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.json({
          success: false,
          errores: [{ messages: "Email already exist" }],
          response: null,
        });
      } else {
        const passwordHasheada = bcryptjs.hashSync(password, 10);

        const newUser = new User({
          name,
          lastName,
          email,
          password: passwordHasheada,
          img,
          country,
          google,
        });
        const token = jwt.sign({ ...newUser }, process.env.SECRET_KEY);
        console.log(token);
        await newUser.save();
        res.json({ success: true, response: { token, newUser }, error: null });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  logIn: async (req, res) => {
    const { email, password, google } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        res.json({
          success: true,
          error: "The email is incorrect",
        });
      } else {
        let passwordMatch = bcryptjs.compareSync(
          password,
          existingUser.password
        );
        if (passwordMatch) {
          const token = jwt.sign({ ...existingUser }, process.env.SECRET_KEY);
          console.log(token);
          res.json({
            success: true,
            response: {
              token,
              email,
              img: existingUser.img,
              name: existingUser.name,
            },
            error: null,
          });
        } else {
          res.json({
            success: true,
            error: "The password is incorrect",
          });
        }
        if (existingUser.google && !google) throw new Error("Invalid email");
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  authUser: (req, res) => {
    res.json({ name: req.user.name, img: req.user.img, _id: req.user._id });
  },
};

module.exports = userControllers;
