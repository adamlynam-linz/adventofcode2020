const masking = require('./masking');

function docking(input) {
  const lines = input.split("\n");
  var memory = [];
  var mask = 0;
  lines.forEach(instruction => {
    const parts = instruction.split(' ');
    if (parts[0] === 'mask') {
      mask = parts[2];
    }
    else {
      const memoryAddress = parts[0].replace('mem[', '').replace(']', '');
      const value = parseInt(parts[2]);
      memory[memoryAddress] = masking(mask, value);
    }
  });
  return memory.reduce((sum, current) => {
    return sum + current;
  }, 0);
}
module.exports = docking;