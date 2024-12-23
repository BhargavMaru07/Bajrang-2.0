require("dotenv").config();
const express = require("express");
const ConnectDB = require("./Database/connect");
const app = express();
//server port
const Port = process.env.PORT || 8001;

app.get("/", (req, res) => res.send("Hello World!"));

const start = async () => {
  try {
    //Connect to Database
    await ConnectDB(process.env.MONGODB_URL)
      .then(() => console.log("MongoDB connected successfully"))
      .catch((error) => console.error("MongoDB connection error:", error));
    app.listen(Port, () => {
      console.log(`Server start at port ${Port}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
