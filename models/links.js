const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linksSchema = new Schema({
    newSocial: String
})

module.exports = mongoose.model("Links", linksSchema)