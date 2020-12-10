function remainingCombinations(lines, current, resultCache) {
  if (resultCache.has(current)) {
    return resultCache.get(current);
  }
  // console.log(lines);
  if (lines.length === 0) {
    return 1;
  }
  const remainingLines = [...lines];
  var combinations = 0;
  var next = remainingLines.shift();
  while (next < current + 4) {
    combinations += remainingCombinations(remainingLines, next, resultCache);
    next = remainingLines.shift();
  }
  resultCache.set(current, combinations);
  return combinations;
}

function combinations(input) {
  const lines = input.split("\n").map(value => parseInt(value));
  lines.sort((a, b) => a - b);
  lines.push(lines[lines.length - 1] + 3);
  const resultCache = new Map();
  return remainingCombinations(lines, 0, resultCache);
}
module.exports = combinations;