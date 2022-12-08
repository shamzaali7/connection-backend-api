const mongoose = require("mongoose")
require("dotenv").config();

const mongoURI= process.env.DATABASE_URL;

mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    