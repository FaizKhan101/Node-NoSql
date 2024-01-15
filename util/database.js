const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = () => {
  return MongoClient.connect("mongodb://localhost:27017/node-nosql")
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
