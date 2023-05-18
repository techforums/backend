const express = require("express");
const app = express();
const route = require("./route");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const connectToDatabase = require("./config");
connectToDatabase();

const PORT = process.env.port;
const corsOptions = {
  origin: "https://master--tech-forum.netlify.app/",
  withCredentials: true,
  credentials: true,
  optionSuccessStatus: 200,
};

const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://master--tech-forum.netlify.app/");
  res.header("Access-Control-Allow-Methods", "GET,PATCH,PUT, POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
};
app.use(allowCrossDomain);
app.use(cors({ origin: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);
app.use(cors(corsOptions));
app.options(
  "*",
  cors({
    origin: "https://master--tech-forum.netlify.app/",
    credentials: true,
  })
);
app.listen(PORT, () => {
  console.log("Server started");
});
