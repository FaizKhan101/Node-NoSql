const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Product", productSchema)

// const { ObjectId } = require("mongodb");
// const db = require("../util/database");

// class Product {
//   constructor(title, imageUrl, price, description, id, userId) {
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.price = price;
//     this.description = description;
//     this._id = id ? new ObjectId(id) : null;
//     this.userId = new ObjectId(userId)
//   }

//   save() {
//     if (this._id) {
//       return db.getDb().collection("products").updateOne({ _id: new ObjectId(this._id) }, { $set: this })
//     } else {
//       return db.getDb().collection("products").insertOne(this);
//     }
//   }

//   static findAll() {
//     return db.getDb().collection("products").find().toArray();
//   }

//   static findById(id) {
//     return db
//       .getDb()
//       .collection("products")
//       .findOne({ _id: new ObjectId(id) });
//   }

//   static deleteById(id) {
//     return db.getDb().collection("products").deleteOne({ _id: new ObjectId(id) })
//   }
// }

// module.exports = Product;
