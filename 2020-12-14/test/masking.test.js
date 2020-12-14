const masking = require('../src/masking');
const addresses = require('../src/addresses');
const docking = require('../src/docking');
const dockingmemory = require('../src/dockingmemory');

test('test mask part 1 11 to 73', () => {
  expect(masking('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X', 11)).toBe(73);
});

test('test mask part 1 101 to 101', () => {
  expect(masking('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X', 101)).toBe(101);
});

test('test mask part 1 0 to 64', () => {
  expect(masking('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X', 0)).toBe(64);
});

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(docking(data)).toBe(165);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(docking(data)).toBe(4297467072083);
  });
});

test('test mask part 2 26', () => {
  expect(addresses('00000000000000000000000000000000X0XX', 26)).toEqual(expect.arrayContaining([
    16, 17, 18, 19, 24, 25, 26, 27
  ]));
});

test('test input part 2', () => {
  fs = require('fs');
  fs.readFile('test-input2', 'utf8', function (err,data) {
    if (err) throw err;
    expect(dockingmemory(data)).toBe(208);
  });
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(dockingmemory(data)).toBe(5030603328768);
  });
});