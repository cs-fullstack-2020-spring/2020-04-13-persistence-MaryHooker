
//Uppercase because we are referencing a class
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//EXP of mongoose schema
//create new instance of schema and pass in a definition as an object
let ProductSchema = new Schema(
    {
        productID: Number,
        productName: String,
        productPrice: Number,
        productQuanitity: Number
    }
);

//Export the model schema/specify details of the model and collection name and schema it will be based on
module.exports = mongoose.model('product',ProductSchema);
