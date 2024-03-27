const express = require("express");

const app = express.Router();

app.get("/articles", (req, res) => {
  res.json([
    { id: "a1", name: "Tournevis", price: 2.34, qty: 123 },
    { id: "a2", name: "Pelle", price: 3.56, qty: 67 },
  ]);
});

module.exports = app;
