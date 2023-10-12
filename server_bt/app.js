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

// To reduce preflight request.
const corsOptions = {
  origin: "https://silver-tiramisu-d2b9a9.netlify.app/", // Allow requests from this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable cookies and authentication headers
};

app.use(cors(corsOptions));

// Routes
app.use("/", feedbackRoutes);
app.use("/", userRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  req.next();
});

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
