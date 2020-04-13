// mongodb+srv://Student:C0d3Cr3w@cluster0-p8fhv.mongodb.net/cs_database?retryWrites=true&w=majority

//create route
let express = require('express');
let router = express.Router();

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

    res.send(productArray)
})

//Read in CRUD
//get a specific product
router.get('/:product_id', (req, res) => {

    res.send(productArray[req.params.product_id])
})


//Create in CRUD
//add a product
router.post('/', (req, res) => {
    req.body.status = 'CREATED';
    res.send(req.body);
})

module.exports = router;