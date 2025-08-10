const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js");
const userRouter = require("./routes/userRoute");

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS policy violation"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db
connectDB();

// routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Food Delivery API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
