module.exports = function (sequelize, DataTypes) {
    const Class = sequelize.define("Class", {
        topic: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {

            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        }
    });

    Class.associate = function (models) {
        Class.belongsTo(models.Instructor, {
            foreignKey: {
                allowNull: false
            }
        });

        Class.hasMany(models.Student)
    };

    return Class;
};