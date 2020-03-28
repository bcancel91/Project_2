// This file offers a set of routes for displaying and saving classes data to the db

const isStudent = require('../config/middleware/isStudent')
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require('moment');

module.exports = function (app) {

    // POST route for adding a new class to student's classes cart
    app.post("/api/students/add", isStudent, (req, res) => {
        console.log(req.user.id);
        console.log(req.body.id);

        let studentClass = {
            ClassId: req.body.id,
            UserId: req.user.id
        };

        db.UserClass.create(studentClass).then(() => {
            // console.log(addedIds);
            res.sendStatus(200);
        });
    });

    app.delete("/api/removeclass/:id", isStudent, (req, res) => {
        console.log("delete id", req.params.id)
        db.UserClass.destroy({
            where: {
                UserId: req.user.id,
                ClassId: req.params.id
            }
        }).then(data => {
            res.sendStatus(200);
        })
    });

    // Search for classes

    app.get("/api/students/search", isStudent, (req, res) => {
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
                    datetime: moment(classObj.dataValues.datetime).format("M/D/YYYY h:mm a"),
                    Instructor: classObj.dataValues.Instructor.dataValues
                  }
                });

                res.render("students", {
                    classes: dbClassValues
                })
            })
            .catch(err => console.log(err));
    });
};

