const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    newSocial: String
})

const contactSchema = new Schema({
    name: String,
    connection: String,
    email: String,
    gitHub: String,
    linkedIn: String,
    links: [linkSchema]
})

module.exports =  mongoose.model("Contact", contactSchema)
