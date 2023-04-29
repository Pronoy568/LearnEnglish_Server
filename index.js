const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());

const categories = require("./Categories.json");
const courses = require("./Courses.json");

app.get("/", (req, res) => {
  res.send("Learn English server running !!!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(courses);
  } else {
    const selectedCategories = courses.filter((c) => c.categories_id === id);
    res.send(selectedCategories);
  }
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedCourse = courses.find((c) => c.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
