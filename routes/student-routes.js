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
            StudentId: req.user.id
        }

        // console.log('hit', studentClass);

        db.UserClass.create(studentClass).then(() => {
            // console.log(addedIds);
            res.sendStatus(200);
        });
    });
};

