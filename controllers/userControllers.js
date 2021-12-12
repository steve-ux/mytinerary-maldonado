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
          error: "Username already exist",
          response: null,
        });
      } else {
        password = bcryptjs.hashSync(password, 10);

        const newUser = new User({
          name,
          lastName,
          email,
          password,
          img,
          country,
          google,
        });
        const token = jwt.sign({ ...newUser }, process.env.SECRET_KEY);
        console.log(token)
        await newUser.save();
        res.json({ success: true, response: { token, newUser }, error: null });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  logIn: async (req, res) => {
    const { email, password, google } = req.body;
    console.log(req.body);
    try {
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        res.json({
          success: true,
          error: "The email and/or password are incorrect",
        });
      } else {
        let passwordMatch = bcryptjs.compareSync(
          password,
          existingUser.password
        );
        if (passwordMatch) {
          const token = jwt.sign({ ...existingUser }, process.env.SECRET_KEY);
          console.log(token)
          res.json({ success: true, response: { token, email }, error: null });
        } else {
          res.json({
            success: true,
            error: "The email and/or password are incorrect",
          });
        }
        if (existingUser.google && !google) throw new Error ("Invalid email");
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = userControllers;
