const { Schema, model } = require('mongoose');

//Schema to create Hotel Model
const hotelSchema = new Schema(
    {
        hotelname: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        checkin: {
            type: String,
            required: true,
            trim: true,
        },
        checkout: {
            type: String,
            required: true,
            trim: true,
        },
        hotelcost: {
            type: Number,
            required: true,
        },
    }
)

const Hotel = model('hotel', hotelSchema);

module.exports = Hotel;