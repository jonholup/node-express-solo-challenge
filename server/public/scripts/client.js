$(document).ready(function() {
  console.log('jquery loaded');
  displayJokes();

  $('#submitButton').on('click', function(){
    var newJokeObject = {};
    $.ajax({
      type: 'POST',
      url: '/joke/new',
      data: newJokeObject,
      success: function(response){
        console.log(response);
      }
    });
    displayJokes();
  }); //submitButton on.click function end



}); //end doc.ready


function displayJokes(){
    $.ajax({
        type: 'GET',
        url: '/jokes',
        success: function(response) {
            console.log('response: ', response);
              $('#displayName').empty();
              $('#displayJoke').empty();
              $('#displayPunchLine').empty();
            for (var i = 0; i < response.length; i++) {
                $('#displayName').append('<li>' + response[i].whoseJoke + '</li>');
                $('#displayJoke').append('<li>' + response[i].jokeQuestion + '</li>');
                $('#displayPunchLine').append('<li>' + response[i].punchLine + '</li>');
            }
        }
    });
  }; //displayJokes function end
