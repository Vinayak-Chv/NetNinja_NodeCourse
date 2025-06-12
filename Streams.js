// Big file Convert into small chunks and send it
const fs = require("fs")

const readStream = fs.createReadStream("./Text Files/Big.txt", {encoding: "utf-8"})
const writeStream = fs.createWriteStream("./Text Files/AnotherBig.txt")

// readStream.on("data", (chunk) => {
//     console.log("-----NEW CHUNKS-----")
//     console.log(chunk)

//     console.log("\nNEW CHUNK\n")
//     writeStream.write(chunk)
// })

// Pipe - Read the Data and Write it. Same as the above code
readStream.pipe(writeStream)