function occupiedSeatSeen(x, y, seats, xdirection, ydirection) {
  var distance = 1;
  var checkx = x + (xdirection * distance);
  var checky = y + (ydirection * distance);
  while (checkx > -1 && checkx < seats.length && checky > -1 && checky < seats[0].length) {
    if (seats[checkx][checky] === '#') {
      return true;
    }
    else if (seats[checkx][checky] === 'L') {
      return false;
    }
    distance++;
    checkx = x + (xdirection * distance);
    checky = y + (ydirection * distance);
  }
  return false;
}

function occupiedSeats(x, y, seats) {
  var occupiedSeats = 0;
  [-1,0,1].forEach(xdirection => {
    [-1,0,1].forEach(ydirection => {
      if (xdirection !== 0 || ydirection !== 0) {
        if (occupiedSeatSeen(x, y, seats, xdirection, ydirection)) {
          occupiedSeats++;
        }
      }
    });
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
          if (occupiedSeats(i, j, seats) > 4) {
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