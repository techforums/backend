const express = require("express");
const app = express();
require("dotenv").config();
// const path = require("path");
const connectToDatabase = require("./config");
connectToDatabase();
const PORT = process.env.port || 8080;

// app.use(express.static(path.join(__dirname, "dist")));

app.use("/api", require("./views/api"));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
