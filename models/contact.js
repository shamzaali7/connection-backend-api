const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: String,
    connection: String,
    email: String,
    gitHub: String,
    linkedIn: String,
})

module.exports =  mongoose.model("Contact", contactSchema)
