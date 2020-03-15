// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
let isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/instructors", isAuthenticated, (req, res) => {
    if (!req.user.instructor) {
      res.send("Can't access this page!");
    } else {
      res.sendFile(path.join(__dirname, "../public/instructors.html"));
    }
  });

  app.get("/students", isAuthenticated, (req, res) => {
    if (req.user.instructor) {
      res.send("Can't access this page!");
    } else {
      res.sendFile(path.join(__dirname, "../public/students.html"));
    }
  });

};
