const cupsToPickup = 3;

function getInsertCup(currentCup, nextCupLookup, grabbedCups) {
  var insertCup = currentCup;
  while (insertCup === currentCup || (grabbedCups.includes(insertCup))) {
    insertCup--;
    if (insertCup < 1) {
      insertCup = nextCupLookup.size;
    }
  }
  return insertCup;
}

function eightValuesAfterOne(nextCupLookup) {
  // const cupOneIndex = currentOrder.indexOf(1);
  var currentCup = nextCupLookup.get(1);
  var output = [];
  for (counter = 0; counter < 8; counter++) {
    output.push(currentCup);
    currentCup = nextCupLookup.get(currentCup);
  }
  return output;
}

function cups(cups, moves) {
  const nextCup = new Map();
  nextCup.set(cups[cups.length - 1], cups[0]);
  for (i = 0; i < cups.length - 1; i++) {
    nextCup.set(cups[i], cups[i + 1]);
  }

  var currentCup = cups[0];
  for (i = moves; i > 0; i--) {
    // console.log('order currently ' + eightValuesAfterOne(nextCup));
    // console.log('current cup ' + currentCup);
    const firstGrabbed = nextCup.get(currentCup);
    const grabbedCups = [];
    var lastGrabbed = currentCup;
    for (j = cupsToPickup; j > 0; j--) {
      lastGrabbed = nextCup.get(lastGrabbed);
      grabbedCups.push(lastGrabbed);
    }
    // console.log('grabbed ' + grabbedCups);

    var insertCup = getInsertCup(currentCup, nextCup, grabbedCups);
    // console.log('insert after cup ' + insertCup);

    nextCup.set(currentCup, nextCup.get(lastGrabbed));
    nextCup.set(lastGrabbed, nextCup.get(insertCup));
    nextCup.set(insertCup, firstGrabbed);

    currentCup = nextCup.get(currentCup);
  }

  return eightValuesAfterOne(nextCup);
}
module.exports = cups;
