function findsum(target, window) {
  for (i = 0; i < window.length; i++) {
    const value = window[i];
    if (value !== target - value && window.includes(target - value)) {
      return true;
    }
  }
  return false;
}

function xmas(input, preamblelength) {
  const lines = input.split("\n").map(string => parseInt(string));
  var window = [];
  for (i = 0; i < preamblelength; i++) {
    window.push(lines[i]);
  }
  var index = preamblelength;
  while (index < lines.length) {
    if (!findsum(lines[index], window)) {
      return lines[index];
    }
    window.shift();
    window.push(lines[index]);
    index++;
  }
  return 0;
}
module.exports = xmas;