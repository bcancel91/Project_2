module.exports = function (sequelize, DataTypes) {
    const Student = sequelize.define("Student", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: 
            {
              args: true,
              msg: "Email already taken!"
            },
            allowNull: {
              args: false,
              msg: "Please enter valid email."
            },
            validate: {
              isEmail: {
                args: true,
                msg: "Please enter valid email."
              }
            }
          }
    });

    Student.associate = function (models) {
        Student.belongsTo(models.User);
    };
    return Student;
};

