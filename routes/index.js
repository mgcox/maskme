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

router.get('/getaddress', function(req, res, next) {
  console.log('in getaddress');

  fs.readFile(__dirname + '/addresses.txt', (err, data) => {
    if(err) throw err;
    var arr = data.toString().split('\n');
    var index = getRandomInt(1, arr.length-1);
    console.log("output: "+arr[index]);
    var arr2 = (arr[index]).split(',');
    var address = arr2[0]+', '+arr2[1]+', '+arr2[2]+', '+arr2[4];
    var str = arr2[5];
    var phone = str.substring(1, str.length);
    console.log(address);
    console.log(phone);

    res.status(200).json('{\"address\":\"'+address+'\",\"phone\":\"'+phone+'\"}');
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
