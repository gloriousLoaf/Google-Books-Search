// API //
import axios from "axios"

export default {
    // Google Search
    searchBooks: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    // save new book
    saveBook: function (data) {
        return axios.post("/api/books", data)
            .then(
                (response) => { console.log(response) },
                (error) => { console.log(error.response) }
            );
    },

    // get saved books for saveBook
    getSavedBooks: function () {
        return axios.get("/api/books")
            .then(
                (response) => { console.log(response) },
                (error) => { console.log(error.response) }
            );
    },

    // delete book by id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}