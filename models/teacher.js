module.exports = function (sequelize, DataTypes) {
    const Instructor = sequelize.define("Instructor", {
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
          },
    });

    Instructor.associate = function (models) {

        // Instructor.hasMany(models.Class, {
        //     onDelete: "cascade"
        // });
        Instructor.belongsTo(models.User);
        // Instructor.belongsToMany(models.Class, {
        //     through: "UserClass",
        //     as: "instructor",
        //     foreignKey: "instructorId",
        // });
    };
    return Instructor;
};

