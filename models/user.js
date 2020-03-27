// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
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
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 16],
          msg: "Password must have a least 8 characters. Please try again."
        }
      }
    },
    // True if they are a instructor, false if they are student
    instructor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};