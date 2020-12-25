const game = require('./cups');

function million(input) {
  const cups = input.split('').map(value => parseInt(value));
  for(i = 10; i <= 1000000; i++) {
    cups.push(i);
  }
  const result = game(cups, 10000000);
  // const result = game(cups, 10000);
  return result[0] * result[1];
}
module.exports = million;