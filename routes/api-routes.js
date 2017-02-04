var db = require ("../models");
var passport = require('passport'),
	 LocalStrategy = require('passport-local').Strategy;

module.exports = function(app){

	app.post('/login',
  passport.authenticate('local', { successRedirect: 'account',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

//foundlist page
	app.get('/found', function(request, response){
		db.petId.findAll({
			where: {
				foundLost: true
			}
		}).then(function(foundPets){
			//console.log(foundPets);
			var handlebarObj = {
				foundPets: foundPets

			}
			response.render('foundList', handlebarObj);
		})
	})

//lostlist page
	app.get('/lost', function(request, response){
		db.petId.findAll({
			where: {
				foundLost: false
			}
		}).then(function(foundPets){
			//console.log("lost: " + foundPets)
			var handlebarObj = {
				lostPets: foundPets
			}
			response.render('lostList',handlebarObj);
		})
	})

//account page: includes:[]
	// app.get('/account/:id', function(request, response) {
	// 	db.petFinder.findOne({
	// 		id: request.params.id
	// 	},
	// 	{ 
	// 	 includes: [db.petId]
	// 	}).then(function(user) {
	// 		console.log(user);
	// 		var handlebarObj = {
	// 			user: user
	// 		}
	// 		res.render('/profile', handlebarObj);
	// 	})
	// });

	//new post page
 	app.get("/petId", function(req, res){
 		res.render("foundLostForm")
 	})
	// post to pet table "petFinderID" 

	app.post('/petId/create', function(request, response){
		db.petId.create({
			petName: request.body.petName,
			breed: request.body.breed,
			petPic: request.body.petPic,
			animaltype: request.body.animaltype,
			foundLost: request.body.foundLost,
			comments: request.body.comments,
			zipcode_pet: request.body.zipcode_pet
		}).then(function(res){
			response.redirect('/petId');
		});
	});

	//put to pet table "petFinderID" 
	app.put('/petId/update/:id', function(request, response){
		db.petId.update({
			petName: request.body.petName,
			breed: request.body.breed,
			petPic: request.body.petPic,
			animaltype: request.body.animaltype,
			foundLost: request.body.foundLost,
			comments: request.body.comments,
			zipcode_pet: request.body.zipcode_pet
		}, {
			where:{
				id: request.params.id
			}
		}).then(function(res){
			response.redirect('/petId');
		});
	});



	// post to account user db "petFinder" 

	// app.post('newAccountPage/create', function(request, response){
	// 	db.petFinder.create({
	// 		userName: request.body.userName,
	// 		email: request.body.email,
	// 		password: request.body.password,
	// 		zipcode_user: request.body.zipcode_user,
	// 	}).then(function(res){
	// 		response.redirect('accountPage');
	// 	});
	// });

	// //put to account user db "petFinder" 
	// app.put('newAccountPage/update/:id', function(request, response){
	// 	db.petFinder.update({
	// 		userName: request.body.userName,
	// 		email: request.body.email,
	// 		password: request.body.password,
	// 		zipcode_user: request.body.zipcode_user,
	// 	}, {
	// 		where:{
	// 			id: request.params.id
	// 		}
	// 	}).then(function(res){
	// 		response.redirect('accountPage');
	// 	});
	// });




// //END OF MODULE.EXPORTS

};