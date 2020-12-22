function sortByAllergen(a, b) {
  const [allergena, ingredienta] = a;
  const [allergenb, ingredientb] = b;
  if (allergena > allergenb) {
    return 1;
  }
  return -1;
}

function findCommonIngredients(foods, allergensFound) {
  const commonIngredients = [];
  foods[0].ingredients.filter(ingredient => !allergensFound.includes(ingredient)).forEach(ingredient => {
    if (foods.every(food => food.ingredients.includes(ingredient))) {
      commonIngredients.push(ingredient);
    }
  });
  return commonIngredients;
}

function allergens(input) {
  const foods = input.split("\n").map(food => {
    const parts = food.split(' (contains ');
    return {
      ingredients: parts[0].split(' '),
      allergens: parts[1].replace(')', '').split(', '),
    }
  });

  const allergens = new Set(foods.flatMap(food => {
    return food.allergens;
  }));

  const allergenNames = new Map();
  const allergensFound = new Set();
  while (allergensFound.size !== allergens.size) {
    [...allergens].filter(allergen => !allergensFound.has(allergen)).forEach(allergen => {
      const foodsWithAllergen = foods.filter(food => food.allergens.includes(allergen));
      // console.log(foodsWithAllergen);
      const commonIngredients = findCommonIngredients(foodsWithAllergen, [...allergenNames.values()]);
      // console.log(commonIngredients);
      if (commonIngredients.length === 1) {
        // console.log(allergen + ' is ' + commonIngredients[0]);
        allergenNames.set(allergen, commonIngredients[0]);
        allergensFound.add(allergen);
      }
    });
  }

  return [...allergenNames.entries()].sort(sortByAllergen).map(([allergen, ingredient]) => ingredient).join(',');
}
module.exports = allergens;