const express = require("express");
const app = express();
const cors = require("cors");
const contactController = require('./controller/contactController')
const parser = require("body-parser")

app.set("port", process.env.PORT || 4000);

app.use(cors({
    origin: "*"
}))

app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());

app.get("/", (req, res) => {
    res.redirect("api/contacts")
   
});

app.use("/api/contacts", contactController);

app.listen(app.get("port"), () => {
    console.log('server is running')
});