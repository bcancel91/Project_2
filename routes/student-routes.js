// This file offers a set of routes for displaying and saving classes data to the db
const isStudent = require('../config/middleware/isStudent')
// Requiring our models
const db = require("../models");

module.exports = function (app) {

    // POST route for adding a new class to student's classes cart
    app.post("/api/students/add", isStudent, (req, res) => {
        console.log(req.user.id);
        console.log(req.body.id);

        let studentClass = {
            ClassId: req.body.id,
            UserId: req.user.id
        }

        // console.log('hit', studentClass);

        db.UserClass.create(studentClass).then(() => {
            // console.log(addedIds);
            res.sendStatus(200);
        });
    });

      // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/api/students/myclasses", isStudent, (req, res) => {
    // here we need to find all classes that belong to this student
    db.UserClass.findAll({
    }).then(function (studentClass) {
      res.json(studentClass);
      console.log(req.user);
      // const instructorClasses = dbClass.filter(classItem => {
      //     return classItem.instructorId === req.user.id;
      // });
      // console.log(instructorClasses);

      studentClassVals = studentClass.map(classObj => {
        return classObj.dataValues;
      });

      let hbsObject = {
        classes: studentClassVals,
      };
      // console.log(hbsObject);
      res.render("students", hbsObject);

    });
});
}

