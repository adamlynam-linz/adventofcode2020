const tiles = require('../src/tiles');
const art = require('../src/art');

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect([...tiles(data).values()]
      .filter(tile => tile === 'black')
      .length
    ).toBe(10);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect([...tiles(data).values()]
      .filter(tile => tile === 'black')
      .length
    ).toBe(351);
  });
});

test('test input part 2', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(art(data)).toBe(2208);
  });
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(art(data)).toBe(3869);
  });
});