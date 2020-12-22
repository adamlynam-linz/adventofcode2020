const gameSeenBefore = new Map();

function playRound(player1, player2) {
  const player1new = [...player1];
  const player2new = [...player2];

  const player1card = player1new.shift();
  const player2card = player2new.shift();

  var winningplayer = 'player1';
  if (player1card <= player1new.length && player2card <= player2new.length) {
    // console.log('play ' + player1card + ' against ' + player2card + ' recursing');
    ({winningplayer} = freshGame(player1new.slice(0, 0 + player1card), player2new.slice(0, 0 + player2card)));
  }
  else {
    // console.log('play ' + player1card + ' against ' + player2card + ' comparing');
    if (player1card > player2card) {
      winningplayer = 'player1';
    }
    else {
      winningplayer = 'player2';
    }
  }

  if (winningplayer === 'player1') {
    // console.log('player 1 wins');
    return {
      player1cards: [...player1new, player1card, player2card],
      player2cards: player2new,
    };
  }
  else {
    // console.log('player 2 wins');
    return {
      player1cards: player1new,
      player2cards: [...player2new, player2card, player1card],
    };
  }
}

function saveRound(player1cards, player2cards) {
  return JSON.stringify([...player1cards, 0, ...player2cards]);
}

function freshGame(player1cards, player2cards) {
  const startState = saveRound(player1cards, player2cards);
  if (gameSeenBefore.has(startState)) {
    // console.log(startState);
    return gameSeenBefore.get(startState);
  }
  // console.log('never seen game underway' + startState);
  const roundsSeen = new Map();
  while (player1cards.length > 0 && player2cards.length > 0 && !roundsSeen.has(saveRound(player1cards, player2cards))) {
    roundsSeen.set(saveRound(player1cards, player2cards));
    ({player1cards, player2cards} = playRound(player1cards, player2cards));
  }

  if (player1cards.length === 0) {
    const result = {
      winningplayer: 'player2',
      winnerscards: player2cards,
    };
    gameSeenBefore.set(startState, result);
    return result;
  }
  else {
    const result = {
      winningplayer: 'player1',
      winnerscards: player1cards,
    }
    gameSeenBefore.set(startState, result);
    return result;
  }
}

function recursive(input) {
  const players = input.split("\n\n").map(player => {
    const cards = player.split("\n").map(value => parseInt(value));
    cards.shift();
    return cards;
  });

  const {winningplayer, winnerscards} = freshGame(players[0], players[1]);
  return winnerscards.reverse().reduce((sum, card, index) => {
    return sum + (card * (index + 1));
  }, 0);
}
module.exports = recursive;