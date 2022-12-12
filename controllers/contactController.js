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
        const oneContact = await Contact.findOne({name: req.params.name.replace("%20", " ")})
        res.status(200).json(oneContact)
    }catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const newContact = await Contact.create({
            name: req.body.name,
            connection: req.body.connection,
            email: req.body.email,
            github: req.body.github,
            linkedIn: req.body.linkedIn,
            links: req.body.links
        });
        res.status(200).json(newContact)
    }catch(err){
        next(err)
    }
})

router.delete("/",  async (req, res, next) => {
    try{
        const deletedContact = await Contact.findOneAndDelete({_id : req.body.id})
        if(deletedContact){
            res.status(200).json(deletedContact)
        }else{
            res.status(404)
        }
    }catch(err){
        next(err)
    }
})

router.put("/", async (req, res, next) => {
    try{
        console.log("im inside the put function")
        const updatedContact = await Contact.findOneAndUpdate({_id: req.body.id}, {
            name: req.body.name,
            connection: req.body.connection,
            email: req.body.email, 
            github: req.body.github,
            linkedIn: req.body.linkedIn,
            links: req.body.links
        }, {new: true})
        if(updatedContact){
            res.status(200).json(updatedContact)
        }else{
            res.status(404)
        }
    }catch(err){
        next(err)
    }
})

module.exports = router
