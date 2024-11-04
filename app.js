const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/socialmediaplatform";

main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hello this is root");
});

app.listen(1000, () => {
  console.log("Server listening on port 1000");
});
