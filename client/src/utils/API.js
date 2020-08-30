// API //
import axios from "axios"

export default {
    // Google Search
    getGoogleSearchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // get book by id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // save new book
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // delete book by id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}