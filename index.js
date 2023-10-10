import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let itemArray = [];
let workArray = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { itemArray: itemArray });
});

app.post("/submit", (req, res) => {
  const newTask = req.body.newTask;
  itemArray.push(newTask);
  // console.log(req.body.newTask);
  res.render("index.ejs", {
    itemArray: itemArray,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { workArray: workArray });
});

app.post("/submitWork", (req, res) => {
  const workTask = req.body.workTask;
  workArray.push(workTask);
  // console.log(req.body.newTask);
  res.render("work.ejs", {
    workArray: workArray,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
