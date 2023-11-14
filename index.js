const express = require("express");
const cors = require("cors");
const app = express();

const origin = process.env.CORS_ORIGIN;

app.use(
  cors({
    options: origin,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("route endpoint");
  res.send("Welcome to Plant site");
});

app.listen(5050, function () {
  console.log("running on port 5050");
});
