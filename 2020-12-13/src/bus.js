function bustime(input) {
  const lines = input.split("\n");
  const arriving = parseInt(lines[0]);
  const buses = lines[1].split(',');
  var bestDepartureTime = Number.MAX_SAFE_INTEGER;
  var solution = -1;
  buses.forEach(bus => {
    if (bus !== 'x') {
      const busTime = parseInt(bus);
      var i = 0;
      var departureTime = 0;
      for (; i * busTime < arriving; i++) {
        departureTime = i * busTime; 
      }
      departureTime = i * busTime;
      if (departureTime < bestDepartureTime) {
        bestDepartureTime = departureTime;
        solution = (departureTime - arriving) * bus;
      }
    }
  });
  return solution;
}
module.exports = bustime;