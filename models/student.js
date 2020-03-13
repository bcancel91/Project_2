module.exports = function (sequelize, DataTypes) {
    const Student = sequelize.define("Student", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        }
    });

    Student.associate = function (models) {
        Student.belongsToMany(models.Class, { through: "studentClasses" });
    };
    return Student;
};

Student.belongsTo(models.User);