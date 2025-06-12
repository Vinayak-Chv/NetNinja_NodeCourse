const {people, morePeople} = require("./People")

console.log("Normal Print:")
console.log(people)

console.log("Side-by-Side:")
console.log(people, morePeople)

const os = require("os")

// Info about the Operating System
console.log(os.platform(), os.homedir())