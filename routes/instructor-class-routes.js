// This file offers a set of routes for displaying and saving classes data to the db

const isInstructor = require('../config/middleware/isInstructor')
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require('moment');

module.exports = function (app) {
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
        });
    });

    app.put("/api/instructors/update", isInstructor, (req, res) => {
        console.log(req.body);
        let classid = req.body.id;
        delete req.body.id;

        db.Class.update(req.body, {
            where: {
                id: classid
            }
        }).then(() => {
            res.sendStatus(200);
        });
    });

    app.delete("/api/instructors/delete", isInstructor, (req, res) => {
        console.log(req.body.id);

        db.Class.destroy({
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.sendStatus(200);
        });
    });

    app.get("/api/instructors/search", isInstructor, (req, res) => {
        let {
            term
        } = req.query;
        term = term.toLowerCase();

        db.Class.findAll({
                where: {
                    topic: {
                        [Op.like]: "%" + term + "%"
                    }
                },
                include: [db.Instructor]
            })
            .then(function (dbClass) {

                dbClassValues = dbClass.map(classObj => {
                  return {
                    ...classObj.dataValues,
                    datetime: moment(classObj.dataValues.datetime).format("M/D/YYYY h:mm p"),
                    Instructor: classObj.dataValues.Instructor.dataValues
                  }
                });
                
                res.render("instructors", {
                classes: dbClassValues
            });
        })
            .catch(err => console.log(err));
    });
};