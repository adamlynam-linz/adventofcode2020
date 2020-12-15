function elfgame(input, rounds) {
  const startNumbers = input.split(',').map(value => parseInt(value));
  const lastSpoken = new Map();
  var index = 0;
  var nextNumber = -1;
  startNumbers.forEach(number => {
    lastSpoken.set(number, index);
    nextNumber = 0;
    index++;
  });
  while (index < rounds - 1) {
    var thisNumber = nextNumber;
    if (lastSpoken.has(nextNumber)) {
      nextNumber = index - lastSpoken.get(nextNumber);
    }
    else {
      nextNumber = 0;
    }
    lastSpoken.set(thisNumber, index);
    index++;
  }
  return nextNumber;
}
module.exports = elfgame;