const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userModel, loginModel } = require("../models/model");

// handelling register
const register = async (req, res) => {
  const {
    name,
    email,
    gender,
    password,
    mobile,
    language,
    state,
    country,
    city,
    _id,
  } = req.body;
  try {
    //searching for data if exist
    if (!!(await userModel.findOne({ _id }))) {
      await userModel.findOneAndUpdate(
        { _id },
        {
          name,
          email,
          gender,
          password,
          mobile,
          language,
          state,
          country,
          city,
        }
      );
      res.status(200).send({ msg: "success has been updated successfully" });
    } else {
      //storing data to db
      const user = new userModel({
        name,
        email,
        gender,
        password,
        mobile,
        language,
        state,
        country,
        city,
        password,
      });

      await user.save();
      res.status(200).send({ msg: "User has been added successfully" });
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

// handelling login

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const isUserExist = await loginModel.findOne({ email });
    //checking if user already exists
    if (!isUserExist) {
      const user = new loginModel({ email, password });
      await user.save();
      res.status(200).send({ msg: "User saved successfully" });
    } else if (isUserExist.password !== password) {
      res.status(400).send({ msg: "Password is not correct" });
    } else {
      //user if not exist
      const data = await userModel.findOne({ email });
      const token = jwt.sign({ userId: isUserExist._id }, "linkedin");
      res.status(200).send({ msg: "Login Successfull", token: token, data });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

// handelling users get request
const userData = async (req, res) => {
  user = await userModel.find();
  console.log(user);
  res.status(200).send(user);
};

module.exports = { register, login, userData };
