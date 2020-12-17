const cubes = require('../src/cubes');
const fourdimensions = require('../src/fourdimensions');

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(cubes(data)).toBe(112);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(cubes(data)).toBe(211);
  });
});

test('test input part 2', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(fourdimensions(data)).toBe(848);
  });
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(fourdimensions(data)).toBe(1952);
  });
});