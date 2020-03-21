// Requiring our custom middleware for checking if a user is logged in
// let isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");
const insClassFilter = require("../lib/instructorFilter");
const stuClassFilter = require("../lib/studentFilter");
let isInstructor = require("../config/middleware/isInstructor");
let isStudent = require("../config/middleware/isStudent");

module.exports = function (app) {

  app.get("/instructors", isInstructor, (req, res) => {

    db.Class.findAll({}).then(function (dbClass) {

      dbClassValues = dbClass.map(classObj => {
        return classObj.dataValues;
      });

      let hbsObject = {
        classes: dbClassValues
      };

      res.render("instructors", hbsObject);
    });
  });

  app.get("/students", isStudent, (req, res) => {

    db.Class.findAll({}).then(function (dbClass) {

      dbClassValues = dbClass.map(classObj => {
        return classObj.dataValues;
      });

      let hbsObject = {
        my: false,
        all: true,
        classes: dbClassValues
      };

      res.render("students", hbsObject);
    });
  });

  // instructors filtered view route 
  app.get("/instructors/filtered/", isInstructor, function (req, res) {

    let filterSettings = JSON.parse(req.query.parameters);
    console.log(filterSettings);

    insClassFilter(req.user.id, filterSettings).then(dbClassValues => {
      res.render("instructors", { classes: dbClassValues });
    })

  });

  // student filtered view route 
  app.get("/students/filtered/", isStudent, function (req, res) {

    let filterSettings = JSON.parse(req.query.parameters);
    console.log(filterSettings);

    stuClassFilter(req.user.id, filterSettings).then(dbClassValues => {

      if (filterSettings.classes === "my") {
        res.render("students", { classes: dbClassValues, my: true, all: false })
      } else {
        res.render("students", { classes: dbClassValues });
      }
    })

  });

  // homepage
  app.get('/', (req, res) => {

    res.render('index');

  });

}