function generateNeighbors(cube) {
  const cubeDimensions = cube.split(',').map(value => parseInt(value));
  const neighbors = [];
  const xValues = [cubeDimensions[0], cubeDimensions[0] - 1, cubeDimensions[0] + 1];
  const yValues = [cubeDimensions[1], cubeDimensions[1] - 1, cubeDimensions[1] + 1];
  const zValues = [cubeDimensions[2], cubeDimensions[2] - 1, cubeDimensions[2] + 1];
  const wValues = [cubeDimensions[3], cubeDimensions[3] - 1, cubeDimensions[3] + 1];
  xValues.forEach(x => {
    yValues.forEach(y => {
      zValues.forEach(z => {
        wValues.forEach(w => {
          if (cubeDimensions[0] !== x || cubeDimensions[1] !== y || cubeDimensions[2] !== z || cubeDimensions[3] !== w) {
            neighbors.push(x + ',' + y + ',' + z + ',' + w)
          }
        });
      });
    });
  });
  return neighbors;
}

function cubes(input) {
  const lines = input.split("\n");
  var grid = new Set();

  // load start state
  lines.forEach((line, xIndex) => {
    const cubes = line.split('');
    cubes.forEach((cube, yIndex) => {
      if (cube === '#') {
        grid.add(xIndex + ',' + yIndex + ',0,0')
      }
    });
  });
  // console.log(grid);

  for (i = 6; i > 0; i--) {
    const activatedBy = new Map();
    grid.forEach(cube => {
      generateNeighbors(cube).forEach(neighbor => {
        if (!activatedBy.has(neighbor)) {
          activatedBy.set(neighbor, 0); 
        }
        activatedBy.set(neighbor, activatedBy.get(neighbor) + 1);
      });
    });
    // console.log(activatedBy);
    grid = new Set([...activatedBy.keys()]
      .filter(cube => {
        const activations = activatedBy.get(cube);
        if (activations === 3 || (activations === 2 && grid.has(cube))) {
          return true;
        }
        return false;
      })
    );
  }

  return grid.size;
}
module.exports = cubes;