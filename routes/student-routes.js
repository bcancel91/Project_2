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

        console.log('hit', studentClass);

        db.UserClass.create(studentClass).then(() => {
            // console.log(addedIds);
            res.sendStatus(200);
        });
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/api/students/myclasses", isStudent, (req, res) => {
        // here we need to find all classes that belong to logged in student
        db.UserClass.findAll({
            where: {
                UserId: req.user.id
            },
            include: [db.Class],
        }).then(function (classArr) {

            console.log(classArr)
            let classId = classArr.UserClass.dataValues.id;
            console.log(classId)

            // db.Class.findAll({
            //     where: {
            //         id: classId
            //     }
            // }).then(function (classInfo) {
            // console.log(classInfo)
            //     let data= {
            //         topic: ClassInfo.topic,
            //         description: ClassInfo.description,
            //         datetime: ClassInfo.datetime,
            //         duration: ClassInfo.duration,
            //         capacity: ClassInfo.capacity,
            //         price: ClassInfo.price,
            //     }
            //    console.log(data);
            //    res.render('students', {data:data})

            // })
        })
    })

    app.get("/api/removeclass/:id", isStudent, (req, res) => {
        db.UserClass.destroy({
            where: {
                UserId: req.user.id,
                ClassId: req.params.id
            }
        }).then(data => {
            res.redirect("/students/enrolled")
        })
    })
}