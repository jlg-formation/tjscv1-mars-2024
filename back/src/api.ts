import express from "express";
import { Article } from "./interfaces/Article";

const app = express.Router();

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.34, qty: 123 },
  { id: "a2", name: "Pelle", price: 3.56, qty: 67 },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export default app;
