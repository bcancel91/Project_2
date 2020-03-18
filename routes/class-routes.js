// This file offers a set of routes for displaying and saving classes data to the db
const isInstructor = require('../config/middleware/isInstructor')
// Requiring our models
const db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the classes


    // POST route for adding a new class
    app.post("/api/instructors/add", isInstructor, (req, res) => {
        console.log(req.user)
        db.Instructor.findOne({
            where: {
                UserId: req.user.id
            }
        }).then(dbInstructor => {
            const newClass = req.body;
            newClass.InstructorId = dbInstructor.id
            // console.log(dbInstructor)
            console.log(newClass)
            db.Class.create(newClass).then(function () {
                // find all classes created by the logged-in instructor
                db.Class.findAll({})
                    .then(allClasses => {
                        let hbsObject = {
                            classes: allClasses
                        };
                        res.render("instructors", hbsObject)
                    });
            });
        })

    });

    app.post("/api/instructors/update", isInstructor, (req, res) => {
        console.log(req.body);
        let classid = req.body.id;
        delete req.body.id;

        db.Class.update(req.body, {
            where: {
                id: classid
            }
        }).then(result => {
            res.sendStatus(200);
        });
    });
}