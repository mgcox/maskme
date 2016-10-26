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


  });
});
