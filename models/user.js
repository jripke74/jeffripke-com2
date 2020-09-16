const mongodb = require('mongodb');
const { findById } = require('./photo');
const getDb = require('../utilities/database').getDb;

const ObjectId = mongodb.ObjectID;

class User {
  constructor(username, email, list, id) {
    this.name = username;
    this.email = email;
    this.list = list; // { list: [] }
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToList(photo) {
    // const listPhoto = this.list.photos.findIndex(lp => {
    //   return lp._id === photo._id;
    // });
    const updatedList = { items: [{ ...photo }]};
    const db = getDb();
    return db.collection('users').updateOne(
      { _id: new ObjectId(this._id) },
      { $set: { cart: updatedList } }
    );
  }

  static findById(userId) {
    const db = getDb();
    return db.collection('users').findOne( {_id: new ObjectId(userId)} );
  }
}

module.exports = User;
