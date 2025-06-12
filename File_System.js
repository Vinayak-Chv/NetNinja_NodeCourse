const fs = require("fs")

// Read File
fs.readFile("./Text Files/Text1.txt", (err, data) => {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
})

// Write File

fs.writeFile("./Text Files/Text1.txt", "Blueface Baby!! Aight!", () => {
    console.log("File was Written")
})

fs.writeFile("./Text Files/Text2.txt", "Murda Beatz!!", () => {
    console.log("File was Written")
})

// Dictories - Create only once
// This code once the folder is created it deletes it and vice - versa 
if(!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if(err) {
            console.log(err)
        }
        console.log("Folder Created")
    })
}

else {
    fs.rmdir("./assets", (err) => {
        if(err) {
            console.log(err)
        }

        console.log("File Removed Successfully")
    })
}

// Delete File
if(fs.existsSync("./Text Files/DeleteMe.txt")) {
    fs.unlink("./Text Files/DeleteMe.txt", (err) => {
        if(err) {
            console.log(err)
        }
        
        console.log("File Deleted Successfully")
    })
}