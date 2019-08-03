
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());

  }
  console.log('Key pressed');
});


// $.ajax({
//   type: 'POST',
//   url:'http://127.0.0.1:3000',
//   data: direction,
//   success: function(direction){SwimTeam.move(direction)},
//   dataType: 'text'
// })

//  $.get('http://127.0.0.1:3000'), (direction) => {
//        SwimTeam.move(direction);
// })

$("#change").on("click", (event) => {
  $.get('http://127.0.0.1:3000'), (direction) => {
    console.log('this is direction', direction);
    // console.log(`Lets go: ${direction}`)
    // SwimTeam.move(direction);
  }
});
$("#change").on("click", (event) => {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000',
    // data: direction,
    success: () => {console.log('click successful')},
    dataType: 'text'
  })
});

// $.ajax({
//   url:url,
//   data: data,
//   success: success,
//   dataType: dataType
// })

console.log('Client is running in the browser!');
