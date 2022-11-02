const express = require('express')
const morgan =require('morgan');
const expressLayouts = require('express-ejs-layouts');
const app = express();
app.set('view engine', 'ejs');
// const mongoose = require('mongoose');
const { default: mongoose } = require('mongoose');
mongoose.connect('mongodb://localhost/Category',()=> {console.log('Connected to Category')});


// const port = process.env.PORT || 6000;


require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout','./layouts/main');
const routes = require('./server/routes/plantRoutes.js');
// const { default: mongoose } = require('mongoose');
app.use('/',routes);

// app.listen(port,()=> console.log(`Lisening to port ${port}`));
app.listen(3000, () => {
    console.log(`listening on port 3000`);
  });

