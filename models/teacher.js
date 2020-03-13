module.exports = function (sequelize, DataTypes) {
    const Teacher = sequelize.define("Teacher", {
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

    Teacher.associate = function (models) {

        Teacher.hasMany(models.Class, {
            onDelete: "cascade"
        });
        Teacher.belongsTo(models.User);
    };
    return Teacher;
};

