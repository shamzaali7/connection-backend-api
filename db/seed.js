const mongoose = require("./connection")
const Contact = require("../models/Contact")
const Link = require("../models/Link")
const contactSeed = require("./contactSeed.json")
const linkSeed = require("./linkSeed.json")
const Links = require("../models/Link")

Contact.deleteMany({})
    .then(() => contactSeed.map(contact => 
        contact
    ))
    .then(res => Contact.insertMany(res))
    .then(res => console.log(res))
    .then(err => console.log(err))

Link.deleteMany({})