const mongoose = require("mongoose")
require("dotenv").config();
mongoose.set('strictQuery', false)
mongoose.Promise = Promise;
let host = process.env.Host || "0.0.0.0";
let port = process.env.PORT || 8080;
let mongoURI = "";

if (process.env.NODE_ENV === "production"){
    mongoURI = process.env.DB_URL
}else{
    mongoURI = "mongodb://localhost/connection"
}

mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((instance) => 
    console.log(`connected to db: ${instance.connections[0].name}`)
    )
    .catch((error) => console.log('Connection failed!', error));
    

module.exports = mongoose
