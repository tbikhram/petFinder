var Sequelize = require("sequelize");

var sequelize = new Sequelize("petFinder_db", "root", "55capone", {
	host:"localhost",
	dialect:"mysql",
	pool:{
		max: 10,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;