const mongoose = require("mongoose")
require("dotenv").config();
mongoose.set('strictQuery', false)
mongoose.Promise = Promise;


let mongoURI = "";

if (process.env.NODE_ENV === "production"){
    mongoURI = process.env.DB_URL
}else{
    mongoURI = process.env.DB_URL
}

mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((instance) => 
    console.log(`connected to db: ${instance.connections[0].name}`)
    )
    .catch((error) => console.log('Connection failed!', error));
    

module.exports = mongoose
