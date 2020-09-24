# Google Books Search
A **MERN** stack app to query and save your next read.

![GitHub language count](https://img.shields.io/github/languages/count/gloriousLoaf/Google-Books-Search)
![GitHub top language](https://img.shields.io/github/languages/top/gloriousLoaf/Google-Books-Search)

## Table of Contents
* [Description](#-description)
* [Installation](#-installation)
* [Usage](#-usage)
* [Images](#-images)
* [License](#-license)
* [Tools](#-tools)
* [Questions](#-questions)
<p>&nbsp;</p>

#### Get straight to the business? Visit [Google Books Search](https://google-books-loaf.herokuapp.com/)
<p>&nbsp;</p>

## 📝 Description
This full-stack app utilizes the **Google Books API** to all users to search for books by author or title. The app is built with the **MERN** stack, and uses no other frameworks. All styles are custom-built. It is **PWA** friendly and can be installed on your device if your build your own instance. The home page features a search input, and the data returned is populated into individual cards by entry. Each card will feature the author(s), title, image if available, description, link to view on Google Books, and a **Save to Library** button. Desired books can be store on the users "Bookshelf" and viewed by selecting **Your Library** from the navigation bar. In the library, books can be **Deleted** as desired.
<p>&nbsp;</p>

## 💾 Installation
* **Local Instance:**
Clone this repository to your machine, and from the root directory run ``` npm install ``` The package.json scripts will install the root-level dependencies for the backend, then it will ``` cd client ``` and install the **React** dependencies for you in one pass. To run the app for testing and use locally, first open your **MongoDB** CLI and run ``` mongod ``` from the root directory. Next, run ```npm start ``` from the root directory in another terminal window, which will utilize the **Concurrently** node package start the server. In your browser, navigate to **localhost:3000** to begin using the app! 
* **Deployment:**
My app is deployed with the help of [Heroku Buildpack](https://github.com/mars/create-react-app-buildpack), by [Mars Hall](https://github.com/mars), and the database is hosted through [MongoDB Atlas](https://docs.atlas.mongodb.com/). Please follow those links to view their documentation for details. You can see the app in action as deployed on Heroku here 👉 [Google Books Search](https://google-books-loaf.herokuapp.com/).
<p>&nbsp;</p>

## 📲 Usage
This app was built to demonstrate the core usage of the **MERN** stack in a simple presentation. The user of this app is someone who wants to:
* Query for their next read.
* Do so without ads or tracking.
* Find new titles or authors to enjoy by simple keywords.
* Save books to their bookshelf to seek out for purchase online.
* Install a simple PWA on their mobile device to make all this happen.

## 📷 Images
<img src="https://github.com/gloriousLoaf/Google-Books-Search/blob/main/client/src/pages/search.png" alt="Google Books search results" height="325">
<p>&nbsp;</p>
<img src="https://github.com/gloriousLoaf/Google-Books-Search/blob/main/client/src/pages/library.png" alt="Library saved from Google Books search" height="350">
<p>&nbsp;</p>

## 📜 License
**MIT** • *(If you fork and recreate this, please be kind and rebrand your version!)*
<p>&nbsp;</p>

## 🔨 Tools 
* [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/) [React](https://reactjs.org/), and [Node](https://nodejs.org/)
<p>&nbsp;</p>

## ❔ Questions?
  * **David Metcalf**
  * **GitHub:** [gloriousLoaf](https://github.com/gloriousLoaf)
  * <hello@metcalf.dev>

<img src="https://github.com/gloriousLoaf.png" alt="GitHub Profile Pic" width="125" height="125">
<p>&nbsp;</p>

---

##### This markdown was created with [Readme Generator](https://github.com/gloriousLoaf/Readme-Generator)
