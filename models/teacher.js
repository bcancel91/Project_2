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
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Teacher.hasMany(models.Class, {
            onDelete: "cascade"
        });
    };
    return Teacher;
};

Teacher.belongsTo(models.User);