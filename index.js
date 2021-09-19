const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();      
const passport = require('passport')
const {loginCheck} = require('./auth/passport')
loginCheck(passport)

//Mongo DB Connection
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

//Set view engine
app.set('view engine', 'ejs');

//Body parser middleware
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: process.env.secret,
    saveUninitialized: true,
    resave: true
}));

//User session 
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/', require('./routes/login'))

    
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Server listening on port: ' + PORT));