function map(input, rightmove, downmove = 1) {
  var path = "";
  const width = input[0].length - 1;
  for (i = 0; i * downmove < input.length; i++) {
    path += input[i * downmove][(i*rightmove)%width];
  }
  // console.log(path);
  return [...path.matchAll(new RegExp('#', 'g'))].length;
}

module.exports = map;