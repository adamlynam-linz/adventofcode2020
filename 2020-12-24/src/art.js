const tiles = require('../src/tiles');

const neighbors = [
  {x: -1, y: 0},
  {x: 1, y: 0},
  {x: -1, y: 1},
  {x: 0, y: 1},
  {x: 0, y: -1},
  {x: 1, y: -1},
]

function generateNeighbors(tile) {
  const parts = tile.split(',');
  return neighbors.map(neighbor => {
    return (parseInt(parts[0]) + neighbor.x) + ',' + (parseInt(parts[1]) + neighbor.y);
  });
}

function includeEdgeTiles(floor) {
  const edgeTilesToo = new Map();
  floor.forEach((colour, tile) => {
    generateNeighbors(tile).forEach(neighbor => {
      edgeTilesToo.set(neighbor, undefined);
    });
  });
  floor.forEach((colour, tile) => {
    edgeTilesToo.set(tile, colour);
  });
  return edgeTilesToo;
}

function adjacentBlack(floor, tile) {
  return generateNeighbors(tile)
    .map(neighbor => {
      return floor.get(neighbor);
    })
    .filter(tile => tile === 'black')
    .length;
}

function art(input) {
  var floor = tiles(input);
  for (i = 0; i < 100; i++) {
    const newFloor = new Map();
    includeEdgeTiles(floor).forEach((colour, tile) => {
      const blackNeighbors = adjacentBlack(floor, tile);
      // console.log(colour);
      // console.log(blackNeighbors);
      switch (colour) {
        case 'black':
          if (blackNeighbors === 0 || blackNeighbors > 2) {
            newFloor.set(tile, 'white');
          }
          else {
            newFloor.set(tile, 'black');
          }
          break;
        case 'white':
        case undefined: 
          if (blackNeighbors === 2) {
            newFloor.set(tile, 'black');
          }
          else {
            newFloor.set(tile, 'white');
          }
          break;
      }
    });
    floor = newFloor;
  }
  return [...floor.values()]
    .filter(tile => tile === 'black')
    .length;
}
module.exports = art;