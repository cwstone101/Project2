//Importing express
const express = require('express');
const Products = require('./models/books')
const app = express();
const methodOverride = require('method-override');

//Importing dotenv in order to connec to database
require('dotenv').config();

// Setting engine to display my JSX
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('Running Routes');
    next();
});

app.use(methodOverride('_method'));


//defining new variable to my model
const bookData = require('./models/books')

// First route that renders the welcome jsx
app.get('/', (req,res) => {
    res.render('Welcome')
});

// route that renders Index.jsx and show all products
app.get('/home', (req,res) => {
    res.render('Index', {Products: bookData,id:req.params.id })
});

// route that takes you to form to create new product
app.get('/home/new', (req,res) => {
    res.render('New')
});

// route that takes to a form for editing product
app.get('/home/edit', (req,res) => {
    res.render('Edit')
});


//route that takes to delete Page 
app.get('/delete', (req,res) => {
    res.render('Deleted')
});


// route for deleting item
app.delete('/home/:id/delete?_method=DELETE', (req,res) => {
    console.log(req.params.id)
    let deleteBook = Products.findByIdAndDelete(req.params.id)
        console.log(deleteBook)
        res.redirect('/home/Deleted')

});







// route to post new data to my home page
app.post('/home', (req,res) => {
    Products.push(req.body)
    console.log(bookData)
    res.redirect('home')

});

// route that takes you to individual product and gives you data
app.get('/product/:id', (req,res) => {
    res.render('Show', {Products: bookData[req.params.id],id:req.params.id});
});


// Port Listener
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
});
