function customs(input) {
  return new Set(input.replace(/\n/g,"")).size;
}
module.exports = customs;
