var express = require("express");
var bodyParser = require ("body-Parser");
var methodOverride = require ("method-override");
var PORT = process.env.PORT || 3000;

// app.use(express.static(__dirname + "/assets"));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/petFinderController.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function(){
	console.log("Listening on port:%s", PORT);
});