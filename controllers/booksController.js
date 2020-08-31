// MONGODB CONTOLLER //
const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: (req, res) => {
        db.BooksSaved
            .find()
            .then((res) => {
                res.json(res)
            })
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.BooksSaved
            .create({
                title: req.body.title,
                link: req.body.link,
                author: req.body.author,
                desription: req.body.description,
                id: req.body.id
            })
    },
    remove: (req, res) => {
        db.BooksSaved
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};