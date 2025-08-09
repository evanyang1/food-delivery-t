const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kipyyxb.mongodb.net/FoodieFrenzy`
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error);
    });
};

module.exports = connectDB;
