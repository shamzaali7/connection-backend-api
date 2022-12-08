const mongoose = require("./connection")
const Contact = require("../models/Contact")
const Link = require("../models/Links")
const contactSeed = require("./contactSeed.json")
const linkSeed = require("./linkSeed.json")

Contact.deleteMany({})
    .then(() => contactSeed.map(contact => 
        contact
    ))
    .then(res => Contact.insertMany(res))
    .then(res => console.log(res))
    .then(err => console.log(err))

