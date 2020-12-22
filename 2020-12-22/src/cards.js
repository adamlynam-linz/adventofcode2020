function playRound(player1, player2) {
  const player1new = [...player1];
  const player2new = [...player2];

  const player1card = player1new.shift();
  const player2card = player2new.shift();

  if (player1card > player2card) {
    return {
      player1cards: [...player1new, player1card, player2card],
      player2cards: player2new,
    };
  }
  else {
    return {
      player1cards: player1new,
      player2cards: [...player2new, player2card, player1card],
    };
  }
}

function cards(input) {
  const players = input.split("\n\n").map(player => {
    const cards = player.split("\n").map(value => parseInt(value));
    cards.shift();
    return cards;
  });

  var player1cards = players[0];
  var player2cards = players[1];
  while (player1cards.length > 0 && player2cards.length > 0) {
    ({player1cards, player2cards} = playRound(player1cards, player2cards));
  }

  var winnerscards = player1cards;
  if (player2cards.length > 0) {
    winnerscards = player2cards;
  }
  
  return winnerscards.reverse().reduce((sum, card, index) => {
    return sum + (card * (index + 1));
  }, 0);
}
module.exports = cards;