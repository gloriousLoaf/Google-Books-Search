// EXPORT books.js to server-side api
const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;