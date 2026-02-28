import express from "express";
import * as path from "path";
import { favourites } from "../data/data.js";

const favouritesRouter = express.Router();
const __dirname = path.resolve();

//router
favouritesRouter.get("/", (req, res) => {
  let selectedFavourites = favourites;
  if (req.query.name) {
    selectedFavourites = favourites.filter(
      (book) => book.name.toLowerCase() === req.query.name.toLowerCase(),
    );
  }
  res.render(path.join(__dirname, "views/pages/index"), {
    pageType: "favourites",
    bookInfo: selectedFavourites,
  });
});

favouritesRouter.get("/:name", (req, res) => {
  const bookName = req.params.name;
  const book = favourites.find(
    (b) => b.name.toLowerCase() === bookName.toLowerCase(),
  );

  if (book) {
    res.render("pages/book-detail", {
      book: book,
      pageType: "book-detail",
    });
  } else {
    res.status(404).send("thats not one of my favourites :(");
  }
});

export default favouritesRouter;
