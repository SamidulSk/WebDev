const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/palestine", (req, res) => {
  res.render("palestine");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
