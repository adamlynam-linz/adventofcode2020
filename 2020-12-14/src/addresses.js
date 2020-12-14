function padTo36(value) {
  var newValue = "";
  for (i = value.length; i < 36; i++) {
    newValue += "0";
  }
  return newValue + value;
}

function masking(mask, address) {
  const binaryAddress = padTo36(parseInt(address).toString(2));
  var masked = [""];
  for (i = 0; i < mask.length; i++) {
    if (mask[i] === 'X') {
      const zeros = masked.map(add => {
        return add + '0';
      });
      const ones = masked.map(add => {
        return add + '1';
      });
      masked = [...zeros, ...ones];
    }
    else if (mask[i] === '1') {
      masked = masked.map(add => {
        return add + '1';
      });
    }
    else {
      masked = masked.map(add => {
        return add + binaryAddress[i];
      });
    }
  }
  // console.log(masked);
  return masked.map(value => {
    return parseInt(value, 2);
  });
}
module.exports = masking;