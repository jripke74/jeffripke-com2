// const mongodb = require('mongodb');
// const getDb = require('../utilities/database').getDb;

// const ObjectId = mongodb.ObjectID;

// class User {
//   constructor(username, email, list, id) {
//     this.name = username;
//     this.email = email;
//     this.list = list; // { list: [] }
//     this._id = id;
//   }

//   save() {
//     const db = getDb();
//     return db.collection('users').insertOne(this);
//   }

//   addToList(photo) {
//     const listPhotoIndex = this.list.items.findIndex(pl => {
//       return pl;
//     });
//     const updatedList = {
//       photos: [{ photoId: new ObjectId(photo._id) }]
//     };
//     const db = getDb();
//     return db
//       .collection('users')
//       .updateOne(
//         { _id: new ObjectId(this._id) },
//         { $set: { list: updatedList } }
//       );
//   }

//   static findById(userId) {
//     const db = getDb();
//     return db.collection('users').findOne({ _id: new ObjectId(userId) });
//   }
// }

// module.exports = User;
