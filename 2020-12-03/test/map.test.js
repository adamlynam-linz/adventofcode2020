const map = require('../src/map');

test('test case 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(map(data.split("\n"), 3)).toBe(7);
  });
});

test('my test case 1', () => {
  fs = require('fs');
  fs.readFile('my-test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(map(data.split("\n"), 3)).toBe(1);
  });
});

test('part 1 answer', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(map(data.split("\n"), 3)).toBe(278);
  });
});

test('downmove test case', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(map(data.split("\n"), 1, 2)).toBe(2);
  });
});

test('test case 2', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(
      map(data.split("\n"), 1) *
      map(data.split("\n"), 3) *
      map(data.split("\n"), 5) *
      map(data.split("\n"), 7) *
      map(data.split("\n"), 1, 2)
    ).toBe(336);
  });
});

test('part 2 answer', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(
      map(data.split("\n"), 1) *
      map(data.split("\n"), 3) *
      map(data.split("\n"), 5) *
      map(data.split("\n"), 7) *
      map(data.split("\n"), 1, 2)
    ).toBe(9709761600);
  });
});