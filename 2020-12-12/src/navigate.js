function turnLeft(facing, degrees) {
  const turns = degrees / 90;
  var newfacing = facing;
  for (i = turns; i > 0; i--) {
    switch(newfacing) {
      case 'N':
        newfacing = 'W';
        break;
      case 'S':
        newfacing = 'E';
        break;
      case 'E':
        newfacing = 'N';
        break;
      case 'W':
        newfacing = 'S';
        break;
    }
  }
  return newfacing;
}

function turnRight(facing, degrees) {
  const turns = degrees / 90;
  var newfacing = facing;
  for (i = turns; i > 0; i--) {
    switch(newfacing) {
      case 'N':
        newfacing = 'E';
        break;
      case 'S':
        newfacing = 'W';
        break;
      case 'E':
        newfacing = 'S';
        break;
      case 'W':
        newfacing = 'N';
        break;
    }
  }
  return newfacing;
}

function navigate(input) {
  var facing = "E";
  var currentx = 0;
  var currenty = 0;
  const directions = input.split("\n");
  directions.forEach(direction => {
    const command = direction[0];
    const distance = parseInt(direction.substring(1));
    switch (command) {
      case 'N':
        currentx -= distance;
        break;
      case 'S':
        currentx += distance;
        break;
      case 'E':
        currenty += distance;
        break;
      case 'W':
        currenty -= distance;
        break;
      case 'L':
        facing = turnLeft(facing, distance);
        break;
      case 'R':
        facing = turnRight(facing, distance);
        break;
      case 'F':
        switch (facing) {
          case 'N':
            currentx -= distance;
            break;
          case 'S':
            currentx += distance;
            break;
          case 'E':
            currenty += distance;
            break;
          case 'W':
            currenty -= distance;
            break;
        }
        break;
    }
    // console.log(currentx + ',' + currenty);
  });
  return Math.abs(currentx) + Math.abs(currenty);
}
module.exports = navigate;