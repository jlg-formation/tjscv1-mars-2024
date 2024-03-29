import express, { json } from "express";
import { Article } from "./interfaces/Article";
import { randomUUID } from "node:crypto";

const app = express.Router();

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.34, qty: 123 },
  { id: "a2", name: "Pelle", price: 3.56, qty: 67 },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", json(), (req, res) => {
  const newArticle = req.body;
  const article = { ...newArticle, id: randomUUID() };
  articles.push(article);
  res.status(201).end();
});

export default app;
