require("dotenv").config();
const express = require("express");
const ConnectDB = require("./Database/connect");
const app = express();
const cors = require("cors");
//server port
const Port = process.env.PORT || 8001;
//routes
const auth_route = require("./routes/auth-route");

//cors
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
  })
);
//middleware
app.use(express.json());

app.get("/", (req, res) => res.send("Hello"));

app.use("/api/auth", auth_route);

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
