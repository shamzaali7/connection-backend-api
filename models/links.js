const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linksSchema = new Schema({
    newSocial: String,
    contact: {type: mongoose.Types.ObjectId, ref: "Contact"}
})

module.exports = mongoose.model("Links", linksSchema)