// BOOKS routes with controller //
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
    .post(booksController.create)
    .get(booksController.findAll);

router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

// router.route("/saved")
//     .get(booksController.findAll);

module.exports = router;