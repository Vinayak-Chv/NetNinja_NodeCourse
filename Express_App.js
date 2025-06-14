const express = require("express")
const app = express()

// Listening the Port
app.listen(3000, () => {
    console.log("Listening....")
})

// Middleware
app.use((req, res, next) => {
    console.log("New Request Made:")
    console.log(`Host : ${req.hostname}`)
    console.log(`Path : ${req.path}`)
    console.log(`Method : ${req.method}`)
    next()
})

app.use((req, res, next) => {
    console.log("In the next Middleware")
    next()
})

// Listen the Request
app.get("/", (req, res) => {
    // res.send("<p>Home Page</p>")
    res.sendFile("./Website/index.html", {root: __dirname})
})

app.get("/about", (req, res) => {
    // res.send("<p>About Page</p>")
    res.sendFile("./Website/about.html", {root: __dirname})

})

// Redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about")
})

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile("./Website/error.html", {root: __dirname})
})