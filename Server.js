// This is the Simple Routing Code
const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {

    // Set header content type
    res.setHeader("Content-Type", "text/html")

    let path = "./Website/"
    switch(req.url) {
        case "/":
            path += "index.html"
            res.statusCode = 200
            break

        case "/about":
            path += "about.html"
            res.statusCode = 200
            break

        case "/about-me":
            res.statusCode = 301
            res.setHeader("Location", "/about")
            res.end()
            break

        default:
            path += "error.html"
            res.statusCode = 404
            break
    }

    // Send an Html File
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        }
        else {
            // res.write(data) 
            res.end(data)   // It still does the same thing
        }
    })
})

server.listen(3000, () => {
    console.log("Listening for requests on port 3000")
})