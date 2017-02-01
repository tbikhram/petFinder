module.exports = function(sequelize, DataTypes) {
 var petId = sequelize.define("petId", {
   petName: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       len: [1]
     }
   },
   breed: {
     type: DataTypes.TEXT,
     allowNull: false,
     len: [1]
   },
   animaltype: {
     type: DataTypes.TEXT,
     allowNull: false,
     len: [1]
   },
   comments: {
     type: DataTypes.TEXT,
   },
   zipcode_pet: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
     len:[5]
   },
   },
   created_at: {
    type: DataTypes.DATE 
     },
   });
 return petId;
};