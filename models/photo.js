const getDb = require('../utilities/database').getDb;

class Photo {
  constructor(fileName, dateTimeTaken, location) {
    this.fileName = fileName;
    this.dateTimeTaken = dateTimeTaken;
    this.location = location;
  }

  save() {
    const db = getDb();
    db.collection('photos')
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Photo;
