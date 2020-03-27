module.exports = function (sequelize, DataTypes) {
    const Class = sequelize.define("Class", {
        topic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [10, 100]
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.TEXT,
            allowNull: false,
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
        Class.hasMany(models.UserClass, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });
    };
    return Class;
};