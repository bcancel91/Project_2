// Requiring our custom middleware for checking if a user is logged in
// let isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");
let isInstructor = require("../config/middleware/isInstructor");
let isStudent = require("../config/middleware/isStudent");

module.exports = function (app) {

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/instructors", isInstructor, (req, res) => {
    // here we need to find all classes, sorted by date, and put in hbs object containing the classes


    db.Class.findAll({
    }).then(function (dbClass) {
      // res.json(dbClass);
      // console.log(req.user);
      // const instructorClasses = dbClass.filter(classItem => {
      //     return classItem.instructorId === req.user.id;
      // });
      // console.log(instructorClasses);

      dbClassValues = dbClass.map(classObj => {
        return classObj.dataValues;
      });

      let hbsObject = {
        classes: dbClassValues,
        // instructorClasses: instructorClasses
      };
      // console.log(hbsObject);
      res.render("instructors", hbsObject);

    });


    // let hbsObject = {};
  });

  app.get("/students", isStudent, (req, res) => {

    db.Class.findAll({
    }).then(function (dbClass) {
      // res.json(dbClass);
      console.log(req.user);
      // const instructorClasses = dbClass.filter(classItem => {
      //     return classItem.instructorId === req.user.id;
      // });
      // console.log(instructorClasses);

      dbClassValues = dbClass.map(classObj => {
        return classObj.dataValues;
      });

      let hbsObject = {
        classes: dbClassValues,
        // instructorClasses: instructorClasses
      };
      console.log(hbsObject);
      res.render("students", hbsObject);

    });
  });

  app.get('/', (req, res) => {

    res.render('index');

  });

};
