const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Links = require("./links")

const contactSchema = new Schema({
    name: String,
    connection: String,
    email: String,
    gitHub: String,
    linkedIn: String,
    links: [Links]
})

module.exports =  mongoose.model("Contact", dateSchema)
