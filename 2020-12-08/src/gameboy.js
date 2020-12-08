function gameboy(input) {
  const lines = input.split("\n");
  var accumulator = 0;
  var nextop = 0;
  var visited = [];
  while (true) {
    if (visited.includes(nextop)) {
      return accumulator;
    }
    visited.push(nextop);
    const op = lines[nextop].split(" ");
    switch (op[0]) {
      case "nop":
        nextop++;
        break;
      case "acc":
        nextop++;
        accumulator += parseInt(op[1]);
        break;
      case "jmp":
        nextop += parseInt(op[1]);
        break;
    }
  }
  return accumulator;
}
module.exports = gameboy;