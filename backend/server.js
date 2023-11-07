require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const tasksRoute = require("./routes/tasks");

mongoose
  .connect("mongodb://mongo-db:27017/ToDoAppDb")
  .then(() => console.log("Connected"))
  .catch((error) => {
    console.error("Connection error:", error);
    process.exit(1); // Exit the application on connection error
  });

const app = express();

app.use(morgan("combined")); // Use morgan for logging

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(tasksRoute);

app.listen(5000, () => {
  console.log("Running on 5000");
});
