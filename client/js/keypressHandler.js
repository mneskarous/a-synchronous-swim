
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());

  }
  console.log('Key pressed');
});

$("button").on("click", (event) => {
  $.get('http://127.0.0.1:3000'), (direction) => {

    // console.log(randomizeDirection());
    // console.log(SwimTeam.move(direction));
  }
});


console.log('Client is running in the browser!');
