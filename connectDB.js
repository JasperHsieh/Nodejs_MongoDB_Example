// This is an example for connecting to mongodb
// It will connect to mongodb database, db name is "test"
// Remember to start mongodb with mongod --dbpath=/data --port 27017 command

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});
