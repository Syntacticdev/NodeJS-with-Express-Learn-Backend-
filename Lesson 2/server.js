const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

// METHOD 1

app.get("/", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("public/about.html", { root: __dirname });
});

// METHOD 2

app.get("/", (req, res) => {
  res.sendFile(__dirname + "public" + "index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "public" + "about.html");
});

//METHOD 3

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});
