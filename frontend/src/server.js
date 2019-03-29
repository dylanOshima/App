var express = require('express');
var bodyParser = require('body-parser');
var validator = require('validator');
var cors = require('cors');
var app = express();

app.use(cors());

const path = require('path')
const PORT = process.env.PORT || 5000

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/2048scores';
    var MongoClient = require('mongodb').MongoClient, format = require('util').format;

    var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
        db = databaseConnection;
    });

    db.collection('persons', function(er, collection) {
        collection.find()(function(err, results) {
            console.log(results)
        });
    });

    app.use(express.static(path.join(__dirname, 'public')));

    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
