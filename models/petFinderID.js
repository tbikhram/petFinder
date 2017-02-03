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
   petPic: {
     type: DataTypes.BLOB,
     allowNull: false,
   },
   animaltype: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
     len: [1]
   },
   foundLost: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
     
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
   
   },
   {

   classMethods: {
    associate: function(models){
      petId.belongsTo(models.petFinder,
      {
        onDelete: "cascade",
        foreignKey: {
          allowNull: false
        }
        });
      }
    }
   });
 return petId;
};

