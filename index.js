const express = require('express'),
app = express();
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
methodOverride = require('method-override'),
expressSanitzer = require('express-sanitizer'),
Book = require('./models/books'),
dotenv = require('dotenv');
//seedDB = require('./seeds');

dotenv.config();

const password = process.env.MD_pass;

mongoose.connect(password, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() =>{
  console.log('Connected to DB!');
}).catch(err => {
  console.log('Error', err.message);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressSanitzer());
app.use(methodOverride('_method'));
app.set("view engine", "ejs");

app.get('/', (req, res)=> {
  res.redirect('/books')
})

//seedDB();
//INDEX -show all books available
app.get('/books', (req, res) => {
  Book.find({}, function(err, allBooks){
    if(err){
      console.log('Error', err)
    } else {
      res.render('index', {books: allBooks})
    }
  })
})

//NEW ROUTE
app.get('/books/new', (req, res) => {
  res.render('new');
})

//CREATE ROUTE
app.post('/books', (req, res) =>{
  //create Books
  let title = req.body.title;
  let author = req.body.author;
  let year = req.body.year_written;
  let edition = req.body.edition;
  let price = req.body.price;
  let image = req.body.image;
  let newBook = {title: title, author: author, year_written: year, edition: edition, price: price, image: image}
  //Create new book and add to database
  Book.create(newBook, function(err, newlyCreated){
    if(err){
      console.log(err)
    } else {
      res.redirect('/books');
    }
  })
})
//SHOW ROUTE
app.get('/books/:id', (req, res) =>{
  Book.findById(req.params.id, function(err, foundBook) {
    if(err){
      res.redirect('/books');
    } else {
      res.render('show', {book: foundBook})
    }
  })
});

//EDIT ROUTE
app.get('/books/:id/edit', (req, res) =>{
  Book.findById(req.params.id, function(err, foundBook){
    if(err){
      res.redirect('/books')
    } else {
      res.render('edit', {book: foundBook})
    }
  })
})

//UPDATE ROUTE
app.put('/books/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, function(err, updatedBook) {
    if(err){
      res.redirect('/books')
    } else {
      res.redirect('/books/' + req.params.id)
    }
  })
})

//DELETE ROUTE
app.delete('/books/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, function(err){
    if(err) {
      res.redirect('/books')
    } else {
      res.redirect('/books')
    }
  })
});

app.listen(3000, () => {
  console.log("Server is running!");
})
