// This file offers a set of routes for displaying and saving classes data to the db

// Requiring our models
const db = require("../models");

// Routes
module.exports = function (app) {

    // GET route for getting all of the classes
    app.get("/classes", (req, res) => {
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
    app.post("/classes", (req, res) => {
        db.Class.create(req.body).then(function (dbClass) {
            res.json(dbClass);
        });
    });
};