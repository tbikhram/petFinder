var express = require("express");
var bodyParser = require ("body-Parser");
var methodOverride = require ("method-override");
//var Drift = require("drift-zoom");//new lib

//set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// requiring our models for sycncing

var db = require("./models");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//static directory
app.use(express.static("./public"));

//routes

// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//syncing the sequelize models and then starting our express app
<<<<<<< HEAD
db.sequelize.sync({ force: true }).then(function(){
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});

//1) how to incorporate multiple handlebars to main.handlbars while requiiing multinple csr
//2) how to establish both tables and update to handlebars.
//3) how to include background photo's in different main.handlebars.
//3) push/pull on github
//4)







=======
db.sequelize.sync({ force: true }).then(function() {
 app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });
});
>>>>>>> 1817ee023020047d104ac4f9a12bccf1f1959cec
