const express = require("express");
const app = express();
app.set("port", process.env.PORT || 4000);
const cors = require("cors");

header('Access-Control-Allow-Origin: *')
header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE')
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.redirect("api/contact")
});


const contactController = require('./controllers/contactController')
app.use("/api/contact", contactController);
// const linkController = require('./controllers/linkController')
// app.use("/api/link", linkController);


if(!module.parent){
	app.listen(app.get('port'), () => {
		console.log(`✅ PORT: ${app.get('port')} 🌟`);
	})
};

module.exports = app