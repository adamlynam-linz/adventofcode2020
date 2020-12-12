function spinWaypointLeft(waypointx, waypointy, degrees) {
  var newx = waypointx;
  var newy = waypointy;
  const turns = degrees / 90;
  for (i = turns; i > 0; i--) {
    const oldx = newx;
    newx = newy;
    newy = oldx * -1;
  }
  return [newx, newy];
}

function spinWaypointRight(waypointx, waypointy, degrees) {
  var newx = waypointx;
  var newy = waypointy;
  const turns = degrees / 90;
  for (i = turns; i > 0; i--) {
    const oldx = newx;
    newx = newy * -1;
    newy = oldx;
  }
  return [newx, newy];
}

function navigate(input) {
  var currentx = 0;
  var currenty = 0;
  var waypointx = 10;
  var waypointy = -1;
  const directions = input.split("\n");
  directions.forEach(direction => {
    const command = direction[0];
    const distance = parseInt(direction.substring(1));
    switch (command) {
      case 'N':
        waypointy -= distance;
        break;
      case 'S':
        waypointy += distance;
        break;
      case 'E':
        waypointx += distance;
        break;
      case 'W':
        waypointx -= distance;
        break;
      case 'L':
        [waypointx, waypointy] = spinWaypointLeft(waypointx, waypointy, distance);
        break;
      case 'R':
        [waypointx, waypointy] = spinWaypointRight(waypointx, waypointy, distance);
        break;
      case 'F':
        for (i = distance; i > 0; i--) {
          currentx += waypointx;
          currenty += waypointy;
        }
        break;
    }
    // console.log('ship:' + currentx + ',' + currenty + "\nwaypoint:" + waypointx + ',' + waypointy);
  });
  return Math.abs(currentx) + Math.abs(currenty);
}
module.exports = navigate;