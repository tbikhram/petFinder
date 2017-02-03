module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
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
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
      }
    }
  },
      {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // When we delete an Author, we'll also delete their Posts "cascade"
          // An Author (foreignKey) is required or a Post can't be made
          Post.belongsTo(models.Author,
            {
              onDelete: "cascade",
              foreignKey: {
                allowNull: false
              }
            });
        }
      }
    });
  return Post;
};
