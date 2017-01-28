var db = require ("../models");

module.exports = function(app){
	app.get("api/petFinder", function(req, res){
		db.petFinder.findAll({}).then(function(dbpetFinder){
			res.json(dbpetFinder);
		});
	});
}