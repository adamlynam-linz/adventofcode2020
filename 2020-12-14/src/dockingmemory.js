const addresses = require('./addresses');

function docking(input) {
  const lines = input.split("\n");
  var memory = new Map();
  var mask = 0;
  lines.forEach(instruction => {
    const parts = instruction.split(' ');
    if (parts[0] === 'mask') {
      mask = parts[2];
    }
    else {
      const memoryAddress = parts[0].replace('mem[', '').replace(']', '');
      const value = parseInt(parts[2]);
      addresses(mask, memoryAddress).forEach(address => {
        memory.set(address, value);
      });
    }
  });
  // console.log(memory);
  return [...memory.values()].reduce((sum, current) => {
    return sum + current;
  }, 0);
}
module.exports = docking;