function subsequent(input) {
  const lines = input.split("\n");
  const buses = lines[1].split(',');
  const values = buses.filter(value => value !== 'x');

  var timestamp = BigInt(values[0]);
  values.shift();
  var incrementBy = timestamp;
  values.forEach(value => {
    const indexOfValue = buses.indexOf(value.toString());
    while ((timestamp + BigInt(indexOfValue)) % BigInt(value) !== BigInt(0)) {
      timestamp += incrementBy;
    }
    incrementBy = incrementBy * BigInt(value);
  });
  return timestamp;
}
module.exports = subsequent;