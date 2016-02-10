$(document).ready(function() {
  $('form').submit(function(e){
    var length = $('#password').val().length;
    if (length < 7) {
      e.preventDefault();
      $('#rejected').append("<strong>to short, needs " 8 - length " more characters</strong>").css('color', 'red').css('text-transform', 'uppercase');
    } else {
      $('form').css('background-color', 'green');
    }
  });
});
