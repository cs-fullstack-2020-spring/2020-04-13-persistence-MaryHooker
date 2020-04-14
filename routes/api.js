// mongodb+srv://Student:C0d3Cr3w@cluster0-p8fhv.mongodb.net/cs_database?retryWrites=true&w=majority

//create route
let express = require('express');
let router = express.Router();

//Get reference to our model
let ProductCollection = require('../models/ProductSchema');

let productArray =
    [
        {
            "productID": 0,
            "productName": "Grandfather Clock",
            "productPrice": 1000.00,
            "productQuantity": 10
        },
        {
            "productID": 1,
            "productName": "Monocles",
            "productPrice": 500.00,
            "productQuantity": 8
        },
        {
            "productID": 32,
            "productName": "Unicycle",
            "productPrice": 700.00,
            "productQuantity": 6
        }
    ]


//Read in CRUD
//get all products
router.get('/', (req, res) => {
    // res.send(productArray);
    ProductCollection.find({},(errors,results)=>{
        if(errors){
            res.send(errors);
        } else{
            res.send(results);
        }})
})

//Read in CRUD
//get a specific product
router.get('/:product_id', (req, res) => {
    // res.send(productArray[req.params.product_id]);
    // ProductCollection.findById(req.params.product_id,
    ProductCollection.findOne(
        {productID:req.params.product_id},(errors,results)=>{
            if(errors){
                res.send(errors);
            } else{
                res.send(results);
            }}
    )
})


//Create in CRUD
//add a new product
router.post('/', (req, res) => {
    // req.body.status = 'CREATED';
    // res.send(req.body);
    ProductCollection.create(
        {
            productID: req.body.productID,
            productName: req.body.productName,
            productPrice:req.body.productPrice,
            productQuantity: req.body.productQuantity
        },(errors,results)=>{
            if(errors){
                res.send(errors);
            } else{
                res.send(results);
            }
        }
    );
    // res.send(`Product Created!`);
})

module.exports = router;