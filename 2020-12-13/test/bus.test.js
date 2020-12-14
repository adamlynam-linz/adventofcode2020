const bus = require('../src/bus');
const subsequent = require('../src/subsequent');

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(bus(data)).toBe(295);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(bus(data)).toBe(2095);
  });
});

test('my input part 2', () => {
  expect(subsequent("0\n3,10,11")).toBe(BigInt(9));
});

test('test input part 2', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(subsequent(data)).toBe(BigInt(1068781));
  });
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(subsequent(data)).toBe(BigInt(598411311431841));
  });
});