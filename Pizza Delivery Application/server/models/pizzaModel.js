// models/Pizza.js
const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    varients: [String],
    prices: [mongoose.Schema.Types.Mixed],
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
