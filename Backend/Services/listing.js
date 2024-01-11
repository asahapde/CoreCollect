const listRoutes = require("express").Router();
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const serviceAccount = require("../serviceKey.json");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { verifyUser } = require("./Auth");

const { db, fireapp, admin } = require("../firebase");

listRoutes.get("/getListings", async (req, res) => {
    const products = [];
    const catalog = await db.collection('listings').get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
         products.push(doc.data());
        });
      });
    res.send(products);
});

listRoutes.post("/createListing", verifyUser, async (req, res) => {

    let userId = req.authData.user;

    //Validation Schema for the input parameters
    const schema = Joi.object({
        category: Joi.string().max(50).required(),
        name: Joi.string().max(100).required(),
        description: Joi.string().max(500).required(),
        bidStartTime: Joi.date(),
        bidCloseTime: Joi.date(),
        minBidAmount: Joi.number(),
        imageURL: Joi.string(),
    });
    

    const result = schema.validate(req.body);

    //Error if the validation fails
    if (result.error) {
        return res.status(400).send({ err: result.error.details[0].message });
    }


    //req.body contains item category, item name, and item description
    if (!req.body.category || req.body.category.trim() == "")
        return res.send({ err: "You must provide an item category" });
    if (!req.body.name || req.body.name.trim() == "")
        return res.send({ err: "You must provide an item name" });
    if (!req.body.description || req.body.description.trim() == "")
        return res.send({ err: "You must provide an item description" });
    if (!req.body.bidStartTime || req.body.bidStartTime.trim() == "")
        return res.send({ err: "You must provide an item bid start Time" });
    if (!req.body.bidCloseTime || req.body.bidCloseTime.trim() == "")
        return res.send({ err: "You must provide an item bid close Time" });
    if (!req.body.minBidAmount || req.body.minBidAmount.trim() == "")
        return res.send({ err: "You must provide an item minimum bid amount" });

    let category = req.body.category;
    let name = req.body.name;
    let description = req.body.description;
    let bidStartTime = req.body.bidStartTime;
    let bidCloseTime = req.body.bidCloseTime;
    let minBidAmount = req.body.minBidAmount;
    let imageURL = req.body.imageURL;

    
    //const listingsRef = db.collection("listings");
    db.collection("listings").add({
        userId: userId,
        category: category,
        name: name, 
        description: description, 
        bidStartTime: bidStartTime,
        bidCloseTime: bidCloseTime,
        minBidAmount: minBidAmount,
        imageURL: imageURL
    })
    .then(async function(docRef) {
        let obj = await docRef.get();
        let obj2 = obj.data();
        res.send({...obj2, id: docRef.id});
    })
    .catch(function(error) {
        res.send(error);
    });
});

module.exports = { listRoutes };