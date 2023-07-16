const mongoose = require("mongoose");
// establishing connection
const connection = mongoose.connect("mongodb://127.0.0.1:27017/test");

module.exports = {
  connection,
};
