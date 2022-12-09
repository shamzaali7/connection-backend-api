const mongoose = require("./connection")
const Contact = require("../models/contact")
// const Link = require("../models/Link")
const contactSeed = require("./contactSeed.json")
// const linkSeed = require("./linkSeed.json")


Contact.deleteMany({})
    .then(() => contactSeed.map(contact => 
        contact
    ))
    .then(res => Contact.insertMany(res))
    .then(res => console.log(res))
    .then(err => console.log(err))

// Link.deleteMany({})
//     .then(() => linkSeed.map(link => 
//         link
//     ))
//     .then(res => Link.insertMany(res))
//     .then(res => console.log(res))
//     .then(err => console.log(err))git add 