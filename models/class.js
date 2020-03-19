module.exports = function (sequelize, DataTypes) {
    const Class = sequelize.define("Class", {
        topic: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1],
            validate: {

            }
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {

            }
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {

            }
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {

            }
        },
        price: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {

            }
        },
        // states: {
        //     values: ['active','cancelled']
        // }
    });

    Class.associate = function (models) {
        Class.belongsTo(models.Instructor, {
            foreignKey: {
                allowNull: false
            }
        });
        // Class.belongsToMany(models.Student,{
        //     through: "UserClass",
        //     as: "class",
        //     foreignKey: "classId",
        // });
        // Class.hasMany(models.Student)
    };
    return Class;
};