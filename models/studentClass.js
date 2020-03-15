// Each Class belongs to many Students through studentClass and each Student belongs to many Classes through studentClass.

module.exports = function(sequelize, DataTypes) {
    const Joined = sequelize.define("Joined", {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      attended: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  
    Joined.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Joined.belongsTo(models.Class, {
        foreignKey: {
          allowNull: false
        }
      });
      Joined.belongsTo(models.Student, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Joined;
  };