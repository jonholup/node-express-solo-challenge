$(document).ready(function() {
  console.log('jquery loaded');
  displayJokes();


  $('#submitButton').on('click', function() {
    var newJokeObject = {};
    newJokeObject.whoseJoke = $('#whoseJoke').val();
    newJokeObject.jokeQuestion = $('#jokeQuestion').val();
    newJokeObject.punchLine = $('#punchLine').val();
    console.log(newJokeObject);
    $.ajax({
      type: 'POST',
      url: '/jokes/new',
      data: newJokeObject,
      success: function(response) {
        console.log(response);

      }
    });
    $('input[type="text"]').val('');
    displayJokes();
  });

  function displayJokes() {
    $.ajax({
      type: 'GET',
      url: '/jokes',
      success: function(response) {
        console.log('response: ', response);
        $('#displayTable').empty();
        for (var i = 0; i < response.length; i++) {
          $('#displayTable').append('<tr> <td>' + response[i].whoseJoke + '</td><td>' + response[i].jokeQuestion + '</td><td>' + response[i].punchLine + '</td></tr>')
          // $('#displayName').append('<li>' + response[i].whoseJoke + '</li>');
          // $('#displayJoke').append('<li>' + response[i].jokeQuestion + '</li>');
          // $('#displayPunchLine').append('<li>' + response[i].punchLine + '</li>');
        }
      }
    });
  }; //displayJokes function end

}); //end doc.ready
