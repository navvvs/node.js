const { json } = require("express/lib/response");
const { readFileSync } = require("fs");
var load = () => JSON.parse(readFileSync('data.json'));


function filewriter() {
    const fs = require('fs')
    const jsonFile = require("./data.json")

    var newdata = {
        "id": 09, "name": "Palvin", "gender": "Female", "email": "barbarapalvin@yahoo.com", "type": "Premium", "phone": 7592818429, "amount": 9500
    }
    jsonFile.push(newdata)

    fs.writeFile('data.json',JSON.stringify(jsonFile),err => {
        if (err) throw err;
        console.log("Written");
    })
}

module.exports = { load };
module.exports.filewriter = filewriter;