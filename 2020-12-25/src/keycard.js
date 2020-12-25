const startSubjectNumber = BigInt(7);
const modValue = BigInt(20201227);

function generateKey(loopSize, subjectNumber) {
  const bigSubjectNumber = BigInt(subjectNumber);
  var key = BigInt(1);
  for (i = 0; i < loopSize; i++) {
    key = key * bigSubjectNumber % modValue;
  }
  return key;
}

function keycard(cardKey, doorKey) {
  var loopSize = 0;
  var memory = BigInt(1);
  const bigCardKey = BigInt(cardKey);
  while (memory !== bigCardKey) {
    // // infinite loop protection
    // if (loopSize > 20) {
    //   return 'bad implementation';
    // }
    memory = memory * startSubjectNumber % modValue;
    loopSize++;
  }

  return generateKey(loopSize, doorKey).toString();
}
module.exports = keycard;