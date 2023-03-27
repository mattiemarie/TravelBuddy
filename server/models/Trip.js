const { Schema, model } = require('mongoose');

//Schema to create Trip Model
const tripSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        startDate: {
            type: Date,
            required: true,
            trim: true,
        },
        endDate: {
            type: Date,
            required: true,
            trim: true,
        },
        flight: {
            type: String,
            required: true,
            trim: true,
        },
        hotel: {
            type: String,
            required: true,
            trim: true,
        },
        guests: {
            type: Number,
            required: true,
        },
        budget: {
            type: Number,
            required: true,
        },
        tripCost: {
            type: Number,
            required: true,
        },
    }
)

const Trip = model('Trip', tripSchema);

module.exports = Trip;