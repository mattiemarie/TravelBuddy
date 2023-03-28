const { Schema, model } = require('mongoose');

//Schema to create User Model
const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            max_length: 50,
        },
        last_name: {
            type: String,
            required: true,
            max_length: 50,
        },
        username: {
            type: String,
            trim: true,
            required: 'Username is Required'
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        password: {
            type: String,
            trim: true,
            required: 'Password is Required'
        },
    }
)

const User = model('User', userSchema);

module.exports = User;