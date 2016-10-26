var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { root: 'public' });
});

router.get('/getmalename', function(req, res, next) {
  console.log('in getmalename');
  fs.readFile(__dirname + '/firstNamesM.txt', (err, data) => {
    if(err) throw err;
    console.log('in readFile');
    var content = data.toString().split(' ');
    console.log(content);
    res.status(200).json(content);
  });

});

router.get('/getfemalename', function(req, res, next) {
  console.log('in getfemalename');
  fs.readFile(__dirname + '/firstNamesF.txt', (err, data) => {
    if(err) throw err;
    console.log('in readFile');
    var content = data.toString().split(' ');
    console.log(content);
    res.status(200).json(content);
  });

});

router.get('/getlastname', function(req, res, next) {
  console.log('in getlastname');
  fs.readFile(__dirname + '/lastNames.txt', (err, data) => {
    if(err) throw err;
    console.log('in readFile');
    var content = data.toString().split(' ');
    console.log(content);
    res.status(200).json(content);
  });

});


module.exports = router;
