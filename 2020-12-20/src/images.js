function buildTopEdge(lines) {
  return lines[0];
}

function buildLeftEdge(lines) {
  return lines.reduce((edge, line) => {
    return edge + line[0];
  }, '');
}

function buildRightEdge(lines) {
  return lines.reduce((edge, line) => {
    return edge + line[line.length - 1];
  }, '');
}

function buildBottomEdge(lines) {
  return lines[lines.length - 1];
}

function buildEdges(tile) {
  const rows = tile.split("\n");
  const id = parseInt(rows.shift().replace('Tile ', '').replace(':', ''));
  return {
    id: id,
    edges: [buildTopEdge(rows), buildLeftEdge(rows), buildRightEdge(rows), buildBottomEdge(rows)],
  };
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

function flipEdges(tilesByEdges) {
  return tilesByEdges.flatMap(tile => {
    return [...tile.edges, ...tile.edges.map(edge => {
      return reverseString(edge);
    })];
  });
}

function removeEdges(tile, allEdges) {
  const otherEdges = [...allEdges];
  tile.forEach(edge => {
    otherEdges.splice(otherEdges.indexOf(edge), 1);
    otherEdges.splice(otherEdges.indexOf(reverseString(edge)), 1);
  });
  return otherEdges;
}

function edgeMatches(tile, allEdges) {
  const otherEdges = removeEdges(tile.edges, allEdges);
  // console.log(otherEdges);
  return tile.edges.reduce((matches, edge) => {
    // console.log(edge);
    if (otherEdges.includes(edge) || otherEdges.includes(reverseString(edge))) {
      return matches + 1;
    }
    return matches;
  }, 0);
}

function findCorners(tilesByEdges) {
  const allEdges = flipEdges(tilesByEdges);
  // console.log(allEdges);
  return tilesByEdges.reduce((corners, tile) => {
    // console.log(tile);
    // console.log(edgeMatches(tile, allEdges));
    if (edgeMatches(tile, allEdges) === 2) {
      corners.push(tile);
    }
    return corners;
  }, []);
}

function images(input) {
  const tiles = input.split("\n\n");
  const tilesByEdges = tiles.map(tile => {
    return buildEdges(tile);
  });
  // console.log(tilesByEdges);
  const corners = findCorners(tilesByEdges);
  return corners.reduce((product, tile) => {
    return product * tile.id;
  }, 1);
}
module.exports = images;