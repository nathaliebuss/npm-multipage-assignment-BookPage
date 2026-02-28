import express from "express";
import * as path from "path";
import { favourites, toBeRead } from "../data/data.js";

const allBooks = [...favourites, ...toBeRead];

const bookRouter = express.Router();
const __dirname = path.resolve();

const bookData = { favourites, toBeRead };

bookRouter.get("/", (req, res) => {
  res.render("pages/index", {
    book_list: bookData.favourites,
    pagetype: "books",
  });
});

export default bookRouter;
