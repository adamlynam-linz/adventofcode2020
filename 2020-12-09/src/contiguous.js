const xmas = require('./xmas')

function contiguous(input, preamblelength) {
  const target = xmas(input, preamblelength);
  const lines = input.split("\n").map(string => parseInt(string));
  for (i = 0; i < lines.length; i++) {
    var window = [lines[i]];
    var remaining = target - lines[i];
    for (j = 1; remaining > 0; j++) {
      remaining -= lines[i + j];
      window.push(lines[i + j]);
    }
    if (remaining === 0) {
      window.sort();
      return window[0] + window[window.length - 1];
    }
  }
  return 0;
}
module.exports = contiguous;