// Requiring our models and passport as we've configured it
const db = require("../models");
let passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the instructors page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(typeof req.body.instructor, req.body.instructor);

    if (req.body.instructor === "true") {
      // if instructor create instructor
      db.Instructor.create({
        email: req.body.email,
        name: req.body.password,
        User: {
          email: req.body.email,
          password: req.body.password,
          instructor: req.body.instructor
        }
      }, {
        include: [db.User]
      })
        .then(function () {
          res.redirect(307, "/api/login");
        })
        .catch(err => {
          console.log(err);
          res.status(401).json(err);
        });

    } else {
      db.Student.create({
        email: req.body.email,
        name: req.body.password,
        User: {
          email: req.body.email,
          password: req.body.password,
          instructor: req.body.instructor
        }
      }, {
        include: [db.User]
      })
        .then(function () {
          res.redirect(307, "/api/login");
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });

  // route for adding instructor row on signup
  app.post("/api/addInstructor/:userid", (req, res) => {
    let userid = req.params.userid;

    db.User.findOne({
      where: {
        id: userid
      }
    })
      .then((res) => {
        console.log(res);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
