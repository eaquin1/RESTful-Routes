const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year_written: Number,
  edition: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("Book", bookSchema);
