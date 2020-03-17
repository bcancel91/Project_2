// This file offers a set of routes for displaying and saving classes data to the db
const isInstructor = require('../config/middleware/isInstructor')
// Requiring our models
const db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the classes
    app.get("/classes/all", isInstructor, (req, res) => {
        let query = {};
        //We use new way to pass optional parameters here: req.query
        //example url: "/api/posts?author_id=1"
        if (req.query.instructor_id) {
            query = {
                InstructorId: req.query.instructor_id
            }
        }
        db.Class.findAll({
            where: query,
            // include: [db.Instructor]
        }).then(function (dbClass) {
            res.json(dbClass);
        });
    });

    // POST route for saving a new class
    app.post("/classes", isInstructor, (req, res) => {

        console.log(req.user)

        db.Instructor.findOne({
            where: {
                UserId: req.user.id
            }
        }).then(dbInstructor => {
            const newClass = req.body;
            newClass.InstructorId = dbInstructor.id

            console.log(dbInstructor)
            console.log(newClass)

            db.Class.create(newClass).then(function (dbClass) {
                res.json(dbClass);
            });
        })

    });
}