var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var encoder=bodyParser.urlencoded();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* POST login page. */
router.post('/login', encoder ,function(req, res, next) {
  console.log(req.body)
  res.render('login');
});



module.exports = router;
