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

    res.status(200).json(getRand(data));
  });

});

router.get('/getfemalename', function(req, res, next) {
  console.log('in getfemalename');

  fs.readFile(__dirname + '/firstNamesF.txt', (err, data) => {
    if(err) throw err;

    res.status(200).json(getRand(data));
  });

});

router.get('/getlastname', function(req, res, next) {
  console.log('in getlastname');

  fs.readFile(__dirname + '/lastNames.txt', (err, data) => {
    if(err) throw err;

    res.status(200).json(getRand(data));
  });

});

function getRand(data) {
  var content = data.toString();//.split(',');
  var arr = content.split('\r');
  var length = arr.length;
  var index = getRandomInt(1, length-2);
  console.log("output: "+arr[index]);
  var result = "{\"name\":\""+arr[index]+"\"}"
  return result;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = router;
