module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1]
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
      len: [1]  
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
      len: [5]  
      }
    },
    zipcode_user: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      validate: {
      len:[5]
    }
  }, 
    petID:{
      type: DataTypes.STRING,
          allowNull: false,
          validate: {
          len: [1]
        } 
      }
    },
  // Here we'll pass a second "classMethods" object into the define method
  // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          Author.hasMany(models.Post);
        }
      }
    });
  return Author;
};
