const { Schema, model } = require('mongoose');

//Schema to create Flight Model
const flightSchema = new Schema(
    {
        airline: {
            type: String,
            required: true,
            trim: true,
        },
        airportfrom: {
            type: String,
            required: true,
            trim: true,
        },
        airportto: {
            type: String,
            required: true,
            trim: true,
        },
        departuredate: {
            type: String,
            required: true,
            trim: true,
        },
        arrivaldate: {
            type: String,
            required: true,
            trim: true,
        },
        flightcost: {
            type: Number,
            required: true,
        },
    }
)

const Flight = model('flight', flightSchema);

module.exports = Flight;