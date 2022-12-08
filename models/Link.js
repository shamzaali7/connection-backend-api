const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    newSocial: String,
    contact: {type: mongoose.Types.ObjectId, ref: "Contact"}
})

module.exports = mongoose.model("Link", linkSchema)