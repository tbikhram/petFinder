var db = require ("../models");

//route keys:
//findAll
//findOne
//create
//update

//petFinder = user
module.exports = function(app){

//foundlist page
	app.get('/found', function(request, response){
		db.petFindeID.findAll({
			where: {
				found: true
			}
		}).then(function(foundPets){
			db.petFindeID.findAll({
				where: {
					found: true
				}
			}).then(function(foundPets){
				var handlebarObj = {
					foundPets: foundPets
				}
				response.render('foundList',foundPets);		
			})
		})
	})
//lostlist page
app.get('/post', function(request, response){
		db.petFindeID.findAll({
			where: {
				found: false
			}
		}).then(function(foundPets){
			var handlebarObj = {
				foundPets: foundPets
			}
			response.render('lostList',foundPets);
		})
	})

//account page

app.get('/account', function(request, response){

})



	app.get('/users/:id', function(request, response) {
		db.Users.findOne({
			id: request.params.id
		}).then(function(user) {
			var handlebarObj = {
				user: user
			}
			res.render('/profile', handlebarObj);
		})
	});

	//GET route to get all users
	app.get("/petFinder", function(req, res){
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