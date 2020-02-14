const mongoose = require('mongoose');
const Book = require('./models/books');
const dotenv = require('dotenv');

dotenv.config();


let seeds = [
  {"title": "Northanger Abbey", "author": "Austen, Jane", "year_written": 1814, "edition": "Penguin", "price":  18.2, "image": "https://kbimages1-a.akamaihd.net/dfad203e-c553-443a-9002-85fdc6dc39f6/353/569/90/False/northanger-abbey-51.jpg"},
  {"title": "War and Peace", "author": "Tolstoy, Leo", "year_written": 1865, "edition": "Penguin", "price":  12.7, "image": "https://kbimages1-a.akamaihd.net/24a0aa16-905f-4519-a258-518b3812fdf5/353/569/90/False/war-and-peace-mermaids-classics.jpg"},
  {"title": "Anna Karenina", "author": "Tolstoy, Leo", "year_written": 1875, "edition": "Penguin", "price":  13.5, "image": "https://kbimages1-a.akamaihd.net/3a4d2c0b-79ad-4da4-aa83-198af07be8b0/353/569/90/False/anna-karenina-vollstandige-deutsche-ausgabe-mit-personenregister-2.jpg"},
  {"title": "Mrs. Dalloway", "author": "Woolf, Virginia", "year_written": 1925, "edition": "Harcourt Brace", "price":  25, "image": "https://kbimages1-a.akamaihd.net/48031422-d02c-4a53-bbbf-a6c2fded0b4c/353/569/90/False/mrs-dalloway-29.jpg "},
  {"title": "The Hours", "author": "Cunningham, Michael", "year_written": 1999, "edition": "Harcourt Brace", "price":  12.35, "image": "https://kbimages1-a.akamaihd.net/56e22c9b-b025-4ecf-ba2d-e48c6344ec91/353/569/90/False/the-hours-2.jpg"},
  {"title": "Huckleberry Finn", "author": "Twain, Mark", "year_written": 1865, "edition": "Penguin", "price":  5.76, "image": "https://kbimages1-a.akamaihd.net/6e38f435-29d4-450c-a8a9-3f0b30b3978f/353/569/90/False/huckleberry-finn-40.jpg"},
  {"title": "Bleak House", "author": "Dickens, Charles", "year_written": 1870, "edition": "Random House", "price":  5.75, "image": "https://kbimages1-a.akamaihd.net/24d5b16c-0b00-4907-be53-8ab9c0e86db8/353/569/90/False/bleak-house-203.jpg"},
  {"title": "Tom Sawyer", "author": "Twain, Mark", "year_written": 1862, "edition": "Random House", "price":  7.75, "image": "https://kbimages1-a.akamaihd.net/55ad46b4-7eb9-400d-aeef-568d58d8f44b/353/569/90/False/tom-sawyer-31.jpg"},
  {"title": "A Room of One's Own", "author": "Woolf, Virginia", "year_written": 1922, "edition": "Penguin", "price":  29, "image": "https://kbimages1-a.akamaihd.net/699e23ea-5ce1-44d1-bbae-1dac72aac66b/353/569/90/False/a-room-of-one-s-own-3.jpg"},
  {"title": "Harry Potter", "author": "Rowling, J.K.", "year_written": 2000, "edition": "Harcourt Brace", "price":  19.95, "image": "https://kbimages1-a.akamaihd.net/c27231f9-6717-472e-8a47-b8199f52bd31/353/569/90/False/harry-potter-la-collection-complete-1-7.jpg"},
  {"title": "One Hundred Years of Solitude", "author": "Marquez", "year_written": 1967, "edition": "Harper  Perennial", "price":  14.00, "image": "https://kbimages1-a.akamaihd.net/2e154a45-6c3d-4418-8e38-5740dd5af668/353/569/90/False/one-hundred-years-of-solitude-3.jpg"},
  {"title": "Hamlet, Prince of Denmark", "author": "Shakespeare", "year_written": 1603, "edition": "Signet  Classics", "price":  7.95, "image": "https://kbimages1-a.akamaihd.net/f51e8214-467f-4bc9-89ef-492de5ff8d66/353/569/90/False/hamlet.jpg"},
  {"title": "Lord of the Rings", "author": "Tolkien, J.R.", "year_written": 1937, "edition": "Penguin", "price":  27.45, "image": "https://kbimages1-a.akamaihd.net/4cbc1ba6-b2a9-41ab-b828-54a53ef3533c/353/569/90/False/the-lord-of-the-rings-the-fellowship-of-the-ring-the-two-towers-the-return-of-the-king.jpg"}
];
//Adding books to the database

async function seedDB() {
  try {
    await Book.remove({});

    for (const seed of seeds) {
      let book = await Book.create(seed);
      book.save();
    }
  } catch(err) {
    console.log('Error', err);
  }
}




module.exports = seedDB
