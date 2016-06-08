var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/nosqlinj';
var insertDocument = function(db, callback) {
   db.dropCollection("usuarios");
   db.collection('usuarios').insertMany(     [{
        "_id": 1,
        "userName": "admin",
        "firstName": "Node Goat",
        "lastName": "Admin",
        "password": "Admin_123",
    }, {
        "_id": 2,
        "userName": "user1",
        "firstName": "John",
        "lastName": "Doe",
        "password": "User1_123"
    }, {
        "_id": 3,
        "userName": "user2",
        "firstName": "Will",
        "lastName": "Smith",
        "password": "User2_123"
    }], function(err, result) {
    assert.equal(err, null);
    console.log("Inserted documents in usuarios collection.");
    callback();
  });
};


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  insertDocument(db, function() {
      db.close();
  });
});
