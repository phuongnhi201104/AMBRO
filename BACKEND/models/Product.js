const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }, 
    weight: { type: Number, required: true }, 
    image: { type: String, required: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0, min: 0 },
    label: { type: String },
    description: { type: String, required: true },
    techStandard: { type: String, required: true },
    nutriComposition: { type: String, required: true },
    nutriIndex: { type: String, required: true },
    usage: { type: String },
    usageInstruction: { type: String },
    storageInstruction: { type: String, required: true },
    note: { type: String },
    category: { type: String, required: true }, 
    originalPrice: { type: Number, min: 0 }, 
});

module.exports = mongoose.model('Product', Product);