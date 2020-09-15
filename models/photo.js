const mongodb = require('mongodb');
const getDb = require('../utilities/database').getDb;

class Photo {
  constructor(fileName, photoUrl, dateTimeTaken, location, id, userId) {
    this.fileName = fileName;
    this.photoUrl = photoUrl;
    this.dateTimeTaken = dateTimeTaken;
    this.location = location;
    this._id = id ? new mongodb.ObjectID(id) : null;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    let dbOp = db;
    if (this._id) {
      // Update the photo
      dbOp = db
        .collection('photos')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('photos').insertOne(this);
    }
    return dbOp
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('photos')
      .find()
      .toArray()
      .then((photos) => {
        return photos;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(photoId) {
    const db = getDb();
    return db
      .collection('photos')
      .find({ _id: new mongodb.ObjectID(photoId) })
      .next()
      .then((photo) => {
        console.log(photo);
        return photo;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteById(photoId) {
    const db = getDb();
    return db
      .collection('photos')
      .deleteOne({ _id: new mongodb.ObjectID(photoId) })
      .then(result => {
        console.log('Deleted!')
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Photo;
