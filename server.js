// EXPRESS SERVER entry point for app //
// dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server enviroment logic, update for production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API routes
app.use(routes);

// Mongo DB / Mongoose
// dev
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books-search",
//     {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

// prod
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://user:qwerpoiu@cluster0.8kpt2.mongodb.net/google-books-search?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Start server
app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}!`);
});
