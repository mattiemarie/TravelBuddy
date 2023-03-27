const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/travelBuddy';


mongoose.connect(process.env.MONGODB_URI || url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
console.log('Connected!')

module.exports = mongoose.connection;