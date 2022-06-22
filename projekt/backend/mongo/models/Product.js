const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true       
    },
    price: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
    }
});

module.exports = model('Product', productSchema);