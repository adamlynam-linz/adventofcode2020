function explore(lines, accumulator, nextop, visited) {
  var exploredaccumulator = accumulator;
  var explorednextop = nextop;
  var explored = [...visited];
  while (true) {
    if (explored.includes(explorednextop)) {
      return false;
    }
    if (explorednextop === lines.length) {
      return exploredaccumulator;
    }
    explored.push(explorednextop);
    const op = lines[explorednextop].split(" ");
    switch (op[0]) {
      case "nop":
        explorednextop++;
        break;
      case "acc":
        explorednextop++;
        exploredaccumulator += parseInt(op[1]);
        break;
      case "jmp":
        explorednextop += parseInt(op[1]);
        break;
    }
  }
}

function gameboy(input) {
  const lines = input.split("\n");
  var accumulator = 0;
  var nextop = 0;
  var visited = [];
  while (true) {
    if (visited.includes(nextop)) {
      throw Exception('bad implementation');
    }
    visited.push(nextop);
    const op = lines[nextop].split(" ");
    switch (op[0]) {
      case "nop":
        result = explore(lines, accumulator, nextop + parseInt(op[1]), visited);
        if (result !== false) {
          return result;
        }
        nextop++;
        break;
      case "acc":
        nextop++;
        accumulator += parseInt(op[1]);
        break;
      case "jmp":
        result = explore(lines, accumulator, nextop + 1, visited);
        if (result !== false) {
          return result;
        }
        nextop += parseInt(op[1]);
        break;
    }
  }
  return accumulator;
}
module.exports = gameboy;