// This file offers a set of routes for displaying and saving classes data to the db
// Requiring our models
const db = require("../models");
let passport = require("../config/passport");

// Routes
module.exports = function (app) {

    // GET route for getting all of the classes
    app.get("/instructor/classes", (req, res) => {
        let query = {};
        //We use new way to pass optional parameters here: req.query
        //example url: "/api/posts?author_id=1"
        if (req.query.instructor_id) {
            query = {
                InstructorId: req.query.instructor_id
            }
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Instructor
        db.Post.findAll({
            where: query,
            include: [db.Instructor]
        }).then(function (dbClass) {
            res.json(dbClass);
        });
    });
};