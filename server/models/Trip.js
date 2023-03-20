const { Schema, model } = require('mongoose');

//Schema to create User Model
const tripSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        fromlocation: {
            type: String,
            required: true,
            trim: true,
        },
        tolocation: {
            type: String,
            required: true,
            trim: true,
        },
        startdate: {
            type: Date,
            required: true,
        },
        enddate: {
            type: Date,
            required: true,
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
        tripcost: {
            type: Number,
            required: true,
        },
    }
)

const Trip = model('trip', tripSchema);

module.exports = Trip;