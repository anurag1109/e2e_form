const express = require("express");
const app = express();

//cors
const cors = require("cors");
app.use(cors());
app.use(express.json());

//mongoose
const mongoose = require("mongoose");
require("dotenv").config();

// importing files
const { connection } = require("./configs/db");
const { userrouter } = require("./routes/userRoutes");

//homepage
app.get("/", async (req, res) => {
  res.send("Homepage");
});

// routing
app.use("/users", userrouter);

// establishing connection with db
app.listen(4500, async (req, res) => {
  try {
    await connection;
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }
  console.log(`server running at port 4500`);
});
