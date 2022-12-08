const express = require("express")
const router = express.Router()

const Link = require("../models/Link")

router.get("/", async (req, res, next) => {
    try{
        const allLinks = await Link.find({})
        res.sendStatus(200).json(allLinks)
    }catch(err){
        next(err)
    }
})

router.get("/:name", async (req, res, next) => {
    try{
        const oneLink = await Contact.findOne(req.body.name.replace("%20", " "))
        res.sendStatus(200).json(oneLink)
    }catch(err){
        next(err)
    }
})

module.exports = router