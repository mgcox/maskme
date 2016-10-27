
$(document).ready(function() {

  $('button').click(function() {
    var fullName='';
    var url = '';
    var firstName = '';
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
      var res = JSON.parse(data.toString());
      var firstName = res.name;
      fullName += firstName.trim();
      console.log(firstName);
    });

    var url2 = '../getlastname';
    var lastName = '';
    $.get(url2, function(data, status) {
      var res = JSON.parse(data.toString());
      var lastName = res.name;
      fullName += (' '+lastName.trim());
      console.log(lastName);
      console.log("fullName: "+fullName);
      $('#identity').html('<p><b>Name: </b>'+fullName+'</p>');
    });


    var start = new Date(1930,12,01);
    var end = new Date(1991,12,20);
    var date = new Date(+start + Math.random() * (end - start));
    var dateString = date.toString('yyyy-MM-dd');
    $('#birthday').html('<p><b>Birthdate: </b>'+ dateString+'</p>');

    var url3 = '../getaddress';
    var address = '';
    $.get(url3, function(data, status) {
      var res = JSON.parse(data.toString());
      console.log(res);
      $('#address').html('<p><b>Address: </b>'+res.address+'</p>');
      $('#phone').html('<p><b>Phone Number: </b>'+res.phone+'</p>');

    });

  });
});
