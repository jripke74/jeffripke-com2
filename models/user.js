const mongodb = require('mongodb');
const { findById } = require('./photo');
const getDb = require('../utilities/database').getDb;

const ObjectId = mongodb.ObjectID;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db.collection('users').findOne( {_id: new ObjectId(userId)} );
  }
}

module.exports = User;
