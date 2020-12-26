function reverseString(string) {
  return string.split("").reverse().join("");
}

function buildTopEdge(lines) {
  return lines[0];
}

function buildLeftEdge(lines) {
  return reverseString(lines.reduce((edge, line) => {
    return edge + line[0];
  }, ''));
}

function buildRightEdge(lines) {
  return lines.reduce((edge, line) => {
    return edge + line[line.length - 1];
  }, '');
}

function buildBottomEdge(lines) {
  return reverseString(lines[lines.length - 1]);
}

function parseTile(tile) {
  const rows = tile.split("\n");
  const id = parseInt(rows.shift().replace('Tile ', '').replace(':', ''));
  return {
    id: id,
    rows: rows,
    topEdge: buildTopEdge(rows),
    leftEdge: buildLeftEdge(rows),
    rightEdge: buildRightEdge(rows),
    bottomEdge: buildBottomEdge(rows),
  };
}

const targetEdgeDirection = new Map([
  ['top' , 'bottom'],
  ['left' , 'right'],
  ['right' , 'left'],
  ['bottom' , 'top'],
]);

const afterLeftRotation = new Map([
  ['top' , 'left'],
  ['left' , 'bottom'],
  ['bottom' , 'right'],
  ['right' , 'top'],
]);

function rotateTileLeft(tile) {
  // console.log('rotate ' + tile.id);
  const rotatedRows = rotateLines(tile.rows);
  // console.log(tile.rows);
  // console.log('rotates to')
  // console.log(rotatedRows);
  return {
    id: tile.id,
    rows: rotatedRows,
    topEdge: buildTopEdge(rotatedRows),
    leftEdge: buildLeftEdge(rotatedRows),
    rightEdge: buildRightEdge(rotatedRows),
    bottomEdge: buildBottomEdge(rotatedRows),
  };
}

function rotateLines(lines) {
  var rotatedLines = [];
  for (x = lines[0].length - 1; x >= 0; x--) {
    rotatedLines.push(lines.reduce((column, row) => {
      return column + row[x];
    }, ''));
  }
  return rotatedLines;
}

function flipTileHorizontally(tile) {
  // console.log('flipped ' + tile.id + ' horizontally');
  const flippedRows = tile.rows.map(row => {
    return reverseString(row);
  });
  return {
    id: tile.id,
    rows: flippedRows,
    topEdge: buildTopEdge(flippedRows),
    leftEdge: buildLeftEdge(flippedRows),
    rightEdge: buildRightEdge(flippedRows),
    bottomEdge: buildBottomEdge(flippedRows),
  };
}

function renderFullImage(grid) {
  // console.log(grid);
  const length = grid.get('0,0').rows.length;
  var lowestx = 0;
  var largestx = 0;
  var lowesty = 0;
  var largesty = 0;
  [...grid.keys()].forEach(index => {
    const indexNumbers = index.split(',').map(value => parseInt(value));
    lowestx = Math.min(lowestx, indexNumbers[0]);
    largestx = Math.max(largestx, indexNumbers[0]);
    lowesty = Math.min(lowesty, indexNumbers[1]);
    largesty = Math.max(largesty, indexNumbers[1]);
  });
  // console.log(lowestx);
  // console.log(largestx);
  // console.log(lowesty);
  // console.log(largesty);
  var output = [];
  for (y = largesty; y >= lowesty; y--) {
    var rows = [];
    for (i = 1; i < length - 1; i++) {
      var row = '';
      for (x = lowestx; x <= largestx; x++) {
        const tileRow = grid.get(x + ',' + y).rows[i];
        // console.log(x + ',' + y);
        row += tileRow.substring(1, tileRow.length - 1);
      }
      rows.push(row);
    }
    output = [...output, ...rows];
  }
  return output;
}

function rotateForMatch(tile, setTile, position, grid) {
  var adjustedTile = tile;
  for (i = 0; i < 4; i++) {
    const match = checkForTileMatch(adjustedTile, setTile, position);
    if (match) {
      // console.log('matched tile ' + adjustedTile.id + ' for ' + match);
      grid.set(match, adjustedTile);
      return match;
    }
    adjustedTile = rotateTileLeft(adjustedTile);
  }
  return false;
}


function checkForTileMatch(adjustedTile, setTile, index) {
  const indexNumbers = index.split(',').map(value => parseInt(value));
  if (setTile.topEdge === reverseString(adjustedTile.bottomEdge)) {
    return (indexNumbers[0]) + ',' + (indexNumbers[1] + 1);
  }
  else if (setTile.bottomEdge === reverseString(adjustedTile.topEdge)) {
    return (indexNumbers[0]) + ',' + (indexNumbers[1] - 1);
  }
  else if (setTile.rightEdge === reverseString(adjustedTile.leftEdge)) {
    return (indexNumbers[0] + 1) + ',' + (indexNumbers[1]);
  }
  else if (setTile.leftEdge === reverseString(adjustedTile.rightEdge)) {
    return (indexNumbers[0] - 1) + ',' + (indexNumbers[1]);
  }
  return false;
}

//                   # 
// #    ##    ##    ###
//  #  #  #  #  #  #   
function countSeaMonsters(lines) {
  var seaMonsters = 0;
  for(var y = 0; y < lines.length; y++) {
    for (var x = 0; x < lines[0].length; x++) {
      if (y >= 2 && x >= 19) {
        if (
          lines[y - 1][x] === '#' &&
          lines[y - 1][x - 1] === '#' &&
          lines[y - 2][x - 1] === '#' &&
          lines[y - 1][x - 2] === '#' &&
          lines[y][x - 3] === '#' &&
          lines[y][x - 6] === '#' &&
          lines[y - 1][x - 7] === '#' &&
          lines[y - 1][x - 8] === '#' &&
          lines[y][x - 9] === '#' &&
          lines[y][x - 12] === '#' &&
          lines[y - 1][x - 13] === '#' &&
          lines[y - 1][x - 14] === '#' &&
          lines[y][x - 15] === '#' &&
          lines[y][x - 18] === '#' &&
          lines[y - 1][x - 19] === '#'
        ) {
          seaMonsters++;
        }
      }
    }
  }
  return seaMonsters;
}

function seamonsters(input) {
  const tiles = input.split("\n\n");
  const tilesByEdges = tiles.map(tile => {
    return parseTile(tile);
  });
  // console.log(tilesByEdges);

  const remainingTiles = new Set([...tilesByEdges]);
  const firstTile = [...remainingTiles][0];
  remainingTiles.delete(firstTile);
  // console.log(firstTile);
  var grid = new Map();
  grid.set('0,0', firstTile);
  // console.log(exposedEdges);
  
  while (remainingTiles.size > 0) {
    const newGrid = new Map(grid);
    remainingTiles.forEach(tile => {
      grid.forEach((setTile, position) => {
        if (rotateForMatch(tile, setTile, position, newGrid)) {
          remainingTiles.delete(tile);
          // console.log('removing ' + tile);
        }
        else {
          if (rotateForMatch(flipTileHorizontally(tile), setTile, position, newGrid)) {
            remainingTiles.delete(tile);
            // console.log('removing ' + tile);
          }
        }
      });
    });
    // console.log(remainingTiles.length);
    // console.log(newGrid.size);
    grid = newGrid;
  }

  // console.log(remainingTiles);
  // console.log(grid);
  var image = renderFullImage(grid);
  var seaMonsters = countSeaMonsters(image);
  image = rotateLines(image);
  seaMonsters = Math.max(countSeaMonsters(image), seaMonsters);
  image = rotateLines(image);
  seaMonsters = Math.max(countSeaMonsters(image), seaMonsters);
  image = rotateLines(image);
  // console.log(image);
  seaMonsters = Math.max(countSeaMonsters(image), seaMonsters);
  return image.join('').split('').reduce((count, current) => current === '#' ? count + 1 : count, 0) - (seaMonsters * 15);
}
module.exports = seamonsters;