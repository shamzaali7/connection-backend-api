const mongoose = require("mongoose")
require("dotenv").config();

mongoose.Promise = Promise;

const mongoURI= process.env.DATABASE_URL;

mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((instance) => 
    console.log(`connected to db: ${instance.connections[0].name}`, error)
    )
    .catch((error) => console.log('Connection failed!', error));
    

module.exports = mongoose
