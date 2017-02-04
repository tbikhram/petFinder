// var path = require ("path");

// //SWITCH ROUTES TO HANDLEBARS

// module.exports = function(app){

// 	//home page
// 	app.get("/", function(req, res){
// 		res.sendFile(path.join(__dirname + '/../public/landing.html'));
// 	})

// 	//found page
// 	app.get("/found", function(req, res){
// 		res.render("foundList")
// 	})

// 	//lost page
// 	app.get("/lost", function(req, res){
// 		res.render("lostList")
// 	})

// 	//new post page
// 	app.get("/post", function(req, res){
// 		res.render("foundLostForm")
// 	})

// 	//login page
// 	app.get("/login", function(req, res){
// 		res.sendFile(path.join(__dirname + '/../public/login.html'));
// 	})

// 	//create new account page
// 	app.get("/newaccount", function(req, res){
// 		res.render("newAccountPage")
// 	})

// 	//acount page
// 	app.get("/account", function(req, res){
// 		res.render("accountPage")
// 	})

// 	// If no matching route is found default to home
// 	app.use(function (req, res) {
// 		res.sendFile(path.join(__dirname + '/../public/landing.html'));
// 	});
// }