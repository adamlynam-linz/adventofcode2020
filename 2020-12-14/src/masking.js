function padTo36(value) {
  var newValue = "";
  for (i = value.length; i < 36; i++) {
    newValue += "0";
  }
  return newValue + value;
}

function masking(mask, value) {
  const binaryInput = padTo36(parseInt(value).toString(2));
  var masked = "";
  for (i = 0; i < mask.length; i++) {
    if (mask[i] === 'X') {
      masked += binaryInput[i];
    }
    else {
      masked += mask[i];
    }
  }
  return parseInt(masked, 2);
}
module.exports = masking;