import express from "express";
import * as path from "path";
import { toBeRead } from "../data/data.js";

const toBeReadRouter = express.Router();
const __dirname = path.resolve();

// router
toBeReadRouter.get("/", (req, res) => {
  let selectedToBeRead = toBeRead;
  // search logic
  if (req.query.name) {
    selectedToBeRead = toBeRead.filter(
      (book) => book.name.toLowerCase() === req.query.name.toLowerCase(),
    );
  }
  res.render(path.join(__dirname, "views/pages/index"), {
    pageType: "to-be-read",
    bookInfo: selectedToBeRead,
  });
});

// so it its /to-be-read/... in search engine
toBeReadRouter.get("/:name", (req, res) => {
  const bookName = req.params.name;
  const book = toBeRead.find(
    (b) => b.name.toLowerCase() === bookName.toLowerCase(),
  );

  if (book) {
    res.render("pages/book-detail", {
      book: book,
      pageType: "book-detail",
    });
  } else {
    res.status(404).send("I don't want to read that!!??!");
  }
});

export default toBeReadRouter;
