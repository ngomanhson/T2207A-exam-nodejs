const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
    ProductCode: {
        type: String,
        required: [true, "This field is required to enter"],
        minLength: 2,
        unique: true,
    },
    ProductName: {
        type: String,
        required: [true, "This field is required to enter"],
        minLength: 10,
        maxLength: 255,
        unique: true,
    },
    ProductData: {
        type: Date,
    },
    ProductOriginPrice: {
        type: Number,
        required: [true, "This field is required to enter"],
        minLength: 0,
    },
    Quantity: {
        type: Number,
        required: [true, "This field is required to enter"],
        minLength: 0,
    },
    ProductStoreCode: {
        type: String,
        required: [true, "This field is required to enter"],
        minLength: 2,
        unique: true,
    },
});

module.exports = mongoose.model("Product", product_schema);
