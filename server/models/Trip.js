const { Schema, model } = require('mongoose');

//Schema to create User Model
const tripSchema = new Schema(
    {
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
        budget: {
            type: Number,
            required: true,
        },
        guests: {
            type: String,
            required: true,
        },
    }
)

const Trip = model('trip', tripSchema);

module.exports = Trip;