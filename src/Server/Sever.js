
const express = require("express");
const mogoose = require("mogoose");

// 3 ประสาน middleware
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("core");

// app
const app = express();

// middleware
app.use(morgan("dev"));

// Route 1
app.get("/register", (req, res) => {
  // code
  console.log("Hello register");
  res.send("สวัสดี");
});

app.listen(5000, () => console.log("Server is running on port 5000"));
