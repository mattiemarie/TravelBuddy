const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/travelBuddy';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    console.log('Connected!');
    db.close();
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/travelBuddy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;