const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Data = require("./Models/Data")
const { result } = require("lodash")

// Use to connect the database and Reduce the Deprecations 
mongoose.connect("mongodb://localhost:27017/Node")
.then(() => app.listen(3000))
.catch((err) => console.log(err))

app.get("/add-data", (req, res) => {
    const data = new Data({
        title: "Lil Baby",
        snippet: "Non",
        body: "No Ties to Gang"
    })

    data.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => console.log(err))
})

// To Get the Single Data
app.get("/single-data", (req, res) => {
    Data.findById("684ff7154eac3d9c6d122055")
        .then((result) => res.send(result))
        .catch((err) => console.log(err))
})

// To Get all the Data
app.get("/all-blogs", (req, res) => {
    Data.find().then((result) => {
        res.send(result)
    }).catch((err) => console.log(err))
})