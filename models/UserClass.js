// Each Class belongs to many Students through studentClass and each Student belongs to many Classes through studentClass.

module.exports = function(sequelize, DataTypes) {
    const UserClass = sequelize.define("UserClass", {
      // quantity: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   validate: {
      //     len: [1]
      //   }
      // },
      // attended: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false,
      //   allowNull: false
      // }
    });
  
    UserClass.associate = function(models) {
      UserClass.belongsTo(models.Class, {
        foreignKey: {
          allowNull: false
        }
      });
      UserClass.belongsTo(models.Student, {
        foreignKey: {
          allowNull: false
        }
      });
      // UserClass.belongsTo(models.Instructor, {
      //   foreignKey: {
      //     allowNull: false
      //   }
      // });
    };
    return UserClass;
  };