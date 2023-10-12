const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const feedbackRoutes = require("./router/feedBack");
const userRoutes = require("./router/user");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// To reduce preflight deplay add logic
app.use(
  cors({
    maxAge: 86400, // Cache preflight requests for 1 day
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Set caching headers for preflight response
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Max-Age", "86400"); // Cache preflight response for 1 hour (in seconds)
  }
  req.next();
});

// Routes
app.use("/", feedbackRoutes);
app.use("/", userRoutes);

mongoose.set("strictQuery", false); // overcome deploy error
mongoose
  .connect(
    "mongodb+srv://santhoshpemmaka:t5wzpiVGKBk10ntl@cluster0.a8ohjm1.mongodb.net/feedback"
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log("err", err);
  });
