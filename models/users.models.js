const db = require("../data/database");
const mongodb = require("mongodb");

class User {
  constructor(name, id) {
   this.name = name,
   this.id = id
  }

  static async getAllUsers(){
  const userDocuments = await db.getDb().collection("users").find().toArray();

  return userDocuments.map(function(userDocument){
    return new User(userDocument.name, userDocument._id);
  })
  }

  save() {
    if (this.id) {
      const userId = new mongodb.ObjectId(this.id);
      return db
        .getDb()
        .collection("users")
        .updateOne({ _id: userId }, { $set: { name: this.name } });
    } else {
      return db.getDb().collection("users").insertOne({ name: this.name });
    }
  }

  delete(){
    if(!this.id){
        throw new Error("Trying to delete user without id!")
    }

    const userId = new mongodb.ObjectId(this.id);

    return db.getDb().collection("users").deleteOne({ _id: userId }); 
  }
}

module.exports = User;
