const mongoose = require("mongoose");


// user model
const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: "string",
  },
  email: {
    required: true,
    type: "string",
  },
  password: {
    required: true,
    type: "string",
  },
  mobile: {
    required: true,
    type: "number",
  },
  gender: {
    required: true,
    type: "string",
    enum: ["male", "female"],
  },
  language: {
    required: true,
    type: "string",
    enum: ["english", "hindi"],
  },
  country: {
    required: true,
    type: "string",
  },
  state: {
    required: true,
    type: "string",
  },
  city: {
    required: true,
    type: "string",
  },
});

const userModel = mongoose.model("formData", userSchema);


// login model
const loginSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    strict: false,
  }
);
const loginModel = mongoose.model("users", loginSchema);

module.exports = { userModel, loginModel };
