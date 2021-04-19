const express = require("express");
const bodyParser = require("body-parser");
const PORT = 5000;
const app = express();

var todoArray = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let day = date.toLocaleDateString("en-US", options);
  res.render("index", { day: day, todos: todoArray });
});

app.post("/", (req, res) => {
  let todo = req.body.toDoInput;
  todoArray.push(todo);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`open on localhost:${PORT}`);
});
