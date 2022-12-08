const express = require("express");
const app = express();
app.set("port", process.env.PORT || 4000);
const cors = require("cors");

app.use(cors({
    origin: "*"
}))