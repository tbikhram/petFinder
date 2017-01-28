module.exports = function(sequelize, DataTypes){
	var petFinder = sequelize.define("petFinder",{

		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len:[1]
			}
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: false,
			len: [1]
		},
		catagory: {
			type: DataTypes.STRING,
			defaultValue: false
		}

	});
	return petFinder;
};