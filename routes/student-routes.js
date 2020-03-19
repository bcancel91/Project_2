// This file offers a set of routes for displaying and saving classes data to the db
const isStudent = require('../config/middleware/isStudent')
// Requiring our models
const db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the classes is defined in html-routes
    // SO the user can see all classes after loggin-in


    // POST route for adding a new class to student's classes cart
    app.post("/api/students/add", isStudent, (req, res) => {
        console.log(req.user.id)
        db.Student.findAll({}).then(dbStudent => {

            studentClass = {
                classId = req.body.id,
                studentId = req.user.id
            }
            console.log(dbStudent);
            db.UserClass.create(studentClass).then(function(addedIds) {
                        // res.status(200);
                        res.json(addedIds);
                    });
            });
        });
    };
