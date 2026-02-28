import express from "express";
import * as path from "path";
import favourites from "./routes/favourites-route.js";
import toBeRead from "./routes/toBeRead-route.js";

const app = express();
const port = 3004;

const __dirname = path.resolve();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/index"), {
    pageType: "home",
  });
});

app.use("/favourites", favourites);
app.use("/to-be-read", toBeRead);

app.listen(port, () => console.log(`Listening on port ${port}`));