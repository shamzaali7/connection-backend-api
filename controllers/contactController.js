const express = require("express")
const router = express.Router()

const Contact = require("../models/contact")

router.get("/", async (req, res, next) => {
    try{
        const allContacts = await Contact.find({})
        res.status(200).json(allContacts)
    }catch(err){
        next(err)
    }
})

router.get("/:name", async (req, res, next) => {
    try{
        const oneContact = await Contact.findOne(req.body.name.replace("%20", " "))
        res.status(200).json(oneContact)
    }catch(err){
        next(err)
    }
})

