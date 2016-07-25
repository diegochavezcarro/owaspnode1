var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
var updateRestaurants = function(db, callback) {
   db.collection('restaurants').updateOne(
      { "borough" : "Moron" },
      {
        $set: { "cuisine": "American (New)" },
        $currentDate: { "lastModified": true }
      }, function(err, results) {
      console.log(results);
      callback();
   });
};
var removeRestaurants = function(db, callback) {
   db.collection('restaurants').deleteMany(
      { "borough": "Moron" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("conectado a MongoDB");
    updateRestaurants(db, function () {
        removeRestaurants(db, function () {
            db.close();
        });
    });
});