function fieldparser(input) {
  const mapped = new Map();
  input.split(new RegExp('\n| ', 'g')).forEach(field => {
    const parts = field.split(':');
    mapped.set(parts[0], parts[1]);
  });
  return mapped;
}

function passport(input) {
  const fields = fieldparser(input);
  if (
    fields.has("byr") &&
    fields.has("iyr") &&
    fields.has("eyr") &&
    fields.has("hgt") &&
    fields.has("hcl") &&
    fields.has("ecl") &&
    fields.has("pid")
  ) {
    const birthyear = parseInt(fields.get('byr'));
    const issueyear = parseInt(fields.get('iyr'));
    const expiryyear = parseInt(fields.get('eyr'));
    const height = parseInt(fields.get('hgt'));

    if (birthyear < 1920 || birthyear > 2002) {
      return false;
    }

    if (issueyear < 2010 || issueyear > 2020) {
      return false;
    }

    if (expiryyear < 2020 || expiryyear > 2030) {
      return false;
    }

    if (!(fields.get('hgt').includes("cm") || fields.get('hgt').includes("in"))) {
      return false;
    }
    else if (fields.get('hgt').includes("cm") && (height < 150 || height > 193)) {
      return false;
    }
    else if (fields.get('hgt').includes("in") && (height < 59 || height > 76)) {
      return false;
    }

    if (!new RegExp('^#[0-9abcdef][0-9abcdef][0-9abcdef][0-9abcdef][0-9abcdef][0-9abcdef]$', 'i').test(fields.get('hcl'))) {
      return false;
    }

    if (!new RegExp('^amb|blu|brn|gry|grn|hzl|oth$', 'i').test(fields.get('ecl'))) {
      return false;
    }

    if (!new RegExp('^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$', 'i').test(fields.get('pid'))) {
      return false;
    }

    return true;
  }
  
  return false;
}
module.exports = passport;