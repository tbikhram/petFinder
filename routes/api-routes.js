var db = require ("../models");

module.exports = function(app){

	//GET route to get all users
	app.get("/api/petFinder", function(req, res){
		db.Author.findAll({}).then(function(dbpetFinder){
			res.json(dbAuthor);
		});
	});

	//GET route to get single user
	app.get("/api/petFinder/:id", function(req, res){
		db.Author.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(dbAuthor){
			res.json(dbAuthor);
		});
	});

	//POST route for saving a new user
	app.post("/api/petFinder", function(req, res){
		db.Author.create(req.body).then(function(dbAuthor){
			res.json(dbAuthor);
		});
	});

	//PUT route for updating a new user

	app.put("/api/petFinder", function(req, res) {
		db.petFinder.update(
			req.body,
			{
				where: {
					id: req.body.id
				}
			}).then(function(dbAuthor) {
				res.json(dbAuthor);
			});
		});

};