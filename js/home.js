(function($) {

  var recognition = new webkitSpeechRecognition(),
    $body = $('body'),
    $field = $('#field'),
    $bodySite = $('#body-site'),
    recognizin = false,
    colors = {
      blue: '#405d9b',
      red: '#e12a2b',
      green: '#228b22',
      yellow: '#fcd209',
      black: '#171814'
    };

  recognition.continuous = true;
  recognition.interimResults = true;

  $field.on('focus', function(event) {
    if (recognizin) {
      return;
    }

    recognizin = true;
    recognition.start();
  });

  recognition.onresult = function(event) {
    var command;

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        execute(event.results[i][0].transcript);
      }
    }
  };

  function execute (command) {
    command = $.trim(command).toLowerCase();

    $field.val(command);

    switch (command) {
      case 'red':
        $bodySite.css('background', colors.red);
        break;
      case 'green':
        $bodySite.css('background', colors.green);
        break;
      case 'blue':
        $bodySite.css('background', colors.blue);
        break;
      case 'yellow':
        $bodySite.css('background', colors.yellow);
        break;
      case 'black':
        $bodySite.css('background', colors.black);
        break;
      case 'lights on':
        $.post('control/serial_port.php', {
          valor: 'a'
        });
        break;
      case 'lights off':
        $.post('control/serial_port.php', {
          valor: 'b'
        });
        break;
      case 'background red':
        $body.css('background', colors.red);
        break;
      case 'background green':
        $body.css('background', colors.green);
        break;
      case 'background blue':
        $body.css('background', colors.blue);
        break;
      case 'background yellow':
        $bodySite.css('background', colors.yellow);
        break;
      case 'background black':
        $body.css('background', colors.black);
        break;
    }
  }


})(jQuery);