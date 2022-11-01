const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'));

// parse form data (content-type:application/x-www-form-urlencoded)
app.use(express.urlencoded({extended:false}));

// parse JSON data (content-type:application/javascript)
app.use(express.json());

// using router for people base route
app.use('/api/people',people);

// using router for login base route
app.use('/login',auth);

app.listen(5000,()=>{
    console.log('Server is listening on port 5000 ... ');
});