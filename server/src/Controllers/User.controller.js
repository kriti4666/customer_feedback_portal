const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.find({ email });

    if (existingUser.length > 0) {
      return res.status(400).send("User already exists!");
    }

    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        return res.status(500).send("Something went wrong, please try again!");
      }

      const newUser = new UserModel({ email, password: hash });

      try {
        await newUser.save();
        return res.status(200).send("Signup successful");
      } catch (error) {
        console.log(error);
        return res.status(401).send({ message: error.message });
      }
    });
  } catch (error) {
    return res.status(500).send("Server error");
  }
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  const hash = user.password;

  try {
    bcrypt.compare(password, hash, function (err, result) {
      if (err) {
        return res
          .status(400)
          .send("Something went worng please try again later...!");
      }
      if (result) {
        const token = jwt.sign(
          { userId: user._id, role: user.role, email: user.email },
          process.env.JWT_SECRET
        );
        return res.status(200).send({ message: "Login Sucessfull", token });
      } else {
        return res.status(400).send("Invalid Credentails..!");
      }
    });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports = { loginUser, signupUser };
