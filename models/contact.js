const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Links = require("./Links")

const contactSchema = new Schema({
    name: String,
    connection: String,
    email: String,
    gitHub: String,
    linkedIn: String,
})

module.exports =  mongoose.model("Contact", contactSchema)
