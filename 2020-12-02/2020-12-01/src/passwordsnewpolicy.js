function check(input) {
  const parts = input.split(' ');
  const indexes = parts[0].split('-');
  const letter = parts[1].replace(':', '');
  const password = parts[2];
  const indexOne = parseInt(indexes[0]);
  const indexTwo = parseInt(indexes[1]);

  if (password[indexOne - 1] == letter && password[indexTwo - 1] == letter) { 
    return false;
  }

  if (password[indexOne - 1] == letter || password[indexTwo - 1] == letter) { 
    return true;
  }
  
  return false;
}
module.exports = check;