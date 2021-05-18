const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log("path: ", path.join(__dirname, "public/img"));
app.get("/", (req, res) => {
  res.render("home");
  // res.send(` <h1 style="color:red";>Hello World123!</h1> `);
});
app.get("/news", (req, res) => {
  res.render("news");
  // res.send(` <h1 style="color:red";>Hello World123!</h1> `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
