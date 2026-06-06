const express = require("express");
const cors = require("cors");
require("dotenv").config();

const chatRoute = require("./routes/chat");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/chat", chatRoute);

app.listen(3000, () => {
  console.log("ABISC Bank chatbot running on http://localhost:3000");
});