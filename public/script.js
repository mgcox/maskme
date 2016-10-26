$(document).ready(function() {
  $('button').click(function() {
    var url = '';
    var firstname = '';
    if(document.getElementById('male').checked) {
      console.log('male');
      url = '../getmalename';
    }
    else if (document.getElementById('female').checked) {
      console.log('female');
      url = '../getfemalename';
    }
    //set url based on whether or not the user wants to get male or female data
    $.get(url, function(data, status) {
      //manipulate data
      console.log(data.toString());
    });

    var url2 = '../getlastname';
    var lastname = '';
    $.get(url2, function(data, status) {
        console.log(data.toString());
    });
  });
});
