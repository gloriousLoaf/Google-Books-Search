// API //
import axios from "axios"
// const URL = "https://www.googleapis.com/books/v1/volumes?q=";
// const KEY = "&api_key=AIzaSyB-gKYFkywMwTOoY3rn1GIpbayVMOsFmYU";
export default {
    // Google Search
    searchBooks: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        // return axios.get(URL + query + KEY);
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
        // .then(
        //     (response) => { console.log(response) },
        //     (error) => { console.log(error.response) }
        // );
    },

    // delete book by id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id)
        // .then(
        //     (response) => { console.log(response) },
        //     (error) => { console.log(error.response) }
        // );
    }
}