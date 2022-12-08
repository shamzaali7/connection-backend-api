const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: String,
    connection: String,
    email: String,
    gitHub: String,
    linkedIn: String,
    links: [String]
})

module.exports =  mongoose.model("Contact", dateSchema)
