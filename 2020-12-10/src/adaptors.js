function adaptors(input) {
  const addzero = input += "\n0";
  const lines = addzero.split("\n");
  lines.sort((a, b) => a - b);
  var diff1 = 0;
  var diff3 = 1;
  for (i = 0; i < lines.length - 1; i++) {
    const difference = lines[i + 1] - lines[i];
    if (difference === 1) {
      diff1++;
    }
    else if (difference === 3) {
      diff3++;
    }
  }
  return diff1 * diff3;
}
module.exports = adaptors;