const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db
connectDB();

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the Food Delivery API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
