const http = require("http")
const fs = require("fs")
const PORT = 8080
const server = http.createServer((req, res) => {
    let method = req.method
    let url = req.url
    if (url == "/Homepage" && method == "GET") {
        res.writeHead(200, "OK")
        res.end(fs.readFileSync("./Database/data.json"))
    } else if (url == "/Register" && method == "POST") {
        let user = {
            Name: req.headers.name,
            Surname: req.headers.surname,
            age: req.headers.age
        }
        let header = req.headers
        if (header.age !== undefined && header.name !== undefined && header.surname !== undefined) {
            fs.writeFileSync("./Database/data.json", JSON.stringify(user))
            res.writeHead(200, "Ok")
            res.end("You have Registerd is.")
        } else {
            res.writeHead(404, "Not Found")
            res.end("You have n't fill the gap. You must fill the gap.")
        }
    } else if (url == "/Login" && method == "GET"){
        
    }
}).listen(PORT, () => {
        console.log(`Your server: http://localhost:${PORT}`)
    })