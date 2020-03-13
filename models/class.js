module.exports = function (sequelize, DataTypes) {
    const Class = sequelize.define("Class", {
        topic: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        },
        date: {
            type: DataTypes.DATETIME,
            allowNull: false,
            validate: {

            }
        },
        start_time: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        end_time: {
            type: DataTypes.DATETIME,
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
        Class.belongsTo(models.Teacher, {
            foreignKey: {
                allowNull: false
            }
        });

        Class.hasMany(models.Student)
    };

    return Class;
};