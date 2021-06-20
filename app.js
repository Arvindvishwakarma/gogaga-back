var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const Users = require('./models/users');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cors = require('cors')

mongoose.connect('mongodb+srv://arvind2588:12345@cluster0.maocg.mongodb.net/gogaga?retryWrites=true&w=majority',

  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('db connected on PORT 4000');
  })

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
app.use(cors()) 
//get api route
app.get('/users', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Users.find().then((data) => {
    res.json(data)
  })
})

//post api route
app.post('/users', jsonParser, function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const data = new Users({
    name: req.body.name,
    location: req.body.location
  })
  data.save().then((result) => {
    res.status(201).json(result)
  }).catch((error) => console.warn(error))
})




app.listen(4000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
