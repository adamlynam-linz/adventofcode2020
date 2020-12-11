function occupiedSeats(x, y, seats) {
  var occupiedSeats = 0;
  [x-1,x,x+1].forEach(checkx => {
    if (checkx > -1 && checkx < seats.length) {
      [y-1,y,y+1].forEach(checky => {
        if (checky > -1 && checky < seats[i].length) {
          if ((checkx !== x || checky !== y) && seats[checkx][checky] === '#') {
            occupiedSeats++;
          }
        }
      });
    }
  });
  return occupiedSeats;
}

function changeSeats(seats) {
  const newSeats = JSON.parse(JSON.stringify(seats));
  for (i = 0; i < seats.length; i++) {
    for (j = 0; j < seats[i].length; j++) {
      switch(seats[i][j]) {
        case 'L':
          if (occupiedSeats(i, j, seats) === 0) {
            newSeats[i][j] = '#';
          }
          break;
        case '#':
          if (occupiedSeats(i, j, seats) > 3) {
            newSeats[i][j] = 'L';
          }
          break;
      }
    }
  }
  return newSeats;
}

function sameLayout(seats, lastSeats) {
  // console.log("seats" + JSON.stringify(seats));
  // console.log("prev seats" + JSON.stringify(lastSeats));
  return JSON.stringify(seats) === JSON.stringify(lastSeats);
}

function countSeated(seats) {
  var seated = 0;
  for (i = 0; i < seats.length; i++) {
    for (j = 0; j < seats[i].length; j++) {
      if (seats[i][j] === '#') {
        seated++;
      }
    }
  }
  return seated;
}

function seats(input) {
  var seats = input.split("\n").map(value => value.split(""));
  var lastSeats = undefined;
  var rounds = 0;
  while(true) {
    if (sameLayout(seats, lastSeats)) {
      // console.log(rounds);
      // console.log(seats);
      return countSeated(seats);
    }
    lastSeats = JSON.parse(JSON.stringify(seats));;
    seats = changeSeats(seats);
    rounds++;
  }
}
module.exports = seats;