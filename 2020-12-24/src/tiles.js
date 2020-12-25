function tiles(input) {
  const instructions = input.split("\n");
  const floor = new Map();
  instructions.forEach(instruction => {
    var movesLeft = instruction;
    var x = 0;
    var y = 0;
    while (movesLeft.length > 0) {
      if (movesLeft.startsWith('e')) {
        movesLeft = movesLeft.substring(1);
        x--;
      }
      else if (movesLeft.startsWith('w')) {
        movesLeft = movesLeft.substring(1);
        x++;
      }
      else if (movesLeft.startsWith('se')) {
        movesLeft = movesLeft.substring(2);
        x--;
        y++;
      }
      else if (movesLeft.startsWith('sw')) {
        movesLeft = movesLeft.substring(2);
        y++;
      }
      else if (movesLeft.startsWith('ne')) {
        movesLeft = movesLeft.substring(2);
        y--;
      }
      else if (movesLeft.startsWith('nw')) {
        movesLeft = movesLeft.substring(2);
        x++;
        y--;
      }
      else {
        throw new Exception('unexpected input');
      }
    }
    const tile = x + ',' + y;
    // console.log(tile);
    if (floor.has(tile) && floor.get(tile) === 'black') {
      floor.set(tile, 'white');
    }
    else {
      floor.set(tile, 'black');
    }
  });
  // console.log(floor);
  return floor;
}
module.exports = tiles;