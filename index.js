"use strict";
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var Pokemons = require("./models/pokemon");

app.use(express.static("public"));
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(bodyParser.json());
let handlebars = require("express-handlebars");
app.engine(".html", handlebars({ extname: ".html" }));
app.set("view engine", ".html");
var pokemonMethods = require("./models/pokemonMethods");

app.get("/", (req, res, next) => {
  pokemonMethods
    .getAll()
    .then(items => {
      res.render("index", { pokemons: JSON.stringify(items) });
    })
    .catch(err => {
      return next(err);
    });
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("Magic happens on port " + port);
