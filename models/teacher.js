module.exports = function (sequelize, DataTypes) {
    const Instructor = sequelize.define("Instructor", {
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

    Instructor.associate = function (models) {

        Instructor.hasMany(models.Class, {
            onDelete: "cascade"
        });
        Instructor.belongsTo(models.User);
    };
    return Instructor;
};

