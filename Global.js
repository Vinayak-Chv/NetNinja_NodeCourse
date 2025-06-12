// Show the Global Objects
console.log(global)

setTimeout(() => {
    console.log("Shut Up 🤐")
    clearInterval(int)  // Int function will continuously untill we reach the 3 seconds
}, 3000);

const int = setInterval(() => {
    console.log("Dattebayo!!")
}, 1000);

// Quite Useful
console.log(__dirname)  // This gives the absolute path and directory
console.log(__filename) // Same as Dirname but with filename which we are working