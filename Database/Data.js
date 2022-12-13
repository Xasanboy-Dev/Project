const fetch = require("node-fetch")
const fs = require("fs")
let Users = []
const User = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.text())
    .then(text => {
        let u = JSON.parse(text)
        fs.appendFile("data.json", JSON.stringify(u), () => {
            console.log("File has written")
        })
    })