const express = require("express")
const app = express()

app.use(express.static("Interest_Calculator"))

app.listen(3000, () => {
    console.log("Listening...")
})