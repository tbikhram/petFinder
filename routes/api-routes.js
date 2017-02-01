var db = require ("../models");

//route keys:
//findAll
//findOne
//create
//update

//petFinder = user
module.exports = function(app){

	//GET route to get all users
	app.get("petFinder", function(req, res){
		db.petFinder.findAll({}).then(function(dbpetFinder){
			res.json(dbpetFinder);
		});
	});

	//GET route to get single user
	app.get("petFinder/:id", function(req, res){
		db.petFinder.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(dbpetFinder){
			res.json(dbpetFinder);
		});
	});

	//POST route for saving a new user
	app.post("petFinder", function(req, res){
		db.petFinder.create(req.body).then(function(dbpetFinder){
			res.json(dbpetFinder);
		});
	});

	//PUT route for updating a new user

	app.put("petFinder", function(req, res) {
		db.petFinder.update(
			req.body,
			{
				where: {
					id: req.body.id
				}
			}).then(function(dbpetFinder) {
				res.json(dbpetFinder);
			});
		});
//END OF MODULE.EXPORTS

};