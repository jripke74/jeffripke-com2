const mongodb = require('mongodb');
const getDb = require('../utilities/database').getDb;

class Photo {
  constructor(fileName, photoUrl, dateTimeTaken, location) {
    this.fileName = fileName;
    this.photoUrl = photoUrl;
    this.dateTimeTaken = dateTimeTaken;
    this.location = location;
  }

  save() {
    const db = getDb();
    return db
      .collection('photos')
      .insertOne(this)
      .then((result) => {})
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
      .then(photo => {
        console.log(photo);
        return photo;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Photo;
