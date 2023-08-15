const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
let db = null;

//  connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected successfully to db server");

  //connect to myproject database
  db = client.db("myproject");
});

function create(name, email, password, favoriteColor) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    const doc = {
      name,
      email,
      password,
      favoriteColor,
      balance: 1000,
      movements: [],
      loggedIn: false,
    };
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      err ? reject(err) : resolve(doc);
    });
  });
}

function login(email, password) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    collection.findOne({ email: email }, function (err, result) {
      err ? reject(err) : resolve(result);
    });
  });
}

//all users
function all() {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({})
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
        console.log(docs);
      });
  });
}

module.exports = { create, login, all };
