// 'use strict';

// const score0Element = document.querySelector('#score--0');
// const score1Element = document.querySelector('#score--1');

// // players
// const player0Element = document.querySelector('.player--0');
// const player1Element = document.querySelector('.player--1');

// // current score
// const currentScore0Element = document.querySelector('#current--0');
// const currentScore1Element = document.querySelector('#current--1');

// // dice
// const diceElement = document.querySelector('.dice');

// // buttons
// const startAgainButton = document.querySelector('.btn-new');
// const rollDiceButton = document.querySelector('.btn-roll');
// const holdScoreButton = document.querySelector('.btn-hold');

// let activePlayer, scores, currentScore, playing;
// const init = function () {
//   activePlayer = 0;
//   scores = [0, 0];
//   currentScore = 0;
//   playing = true;

//   currentScore0Element.textContent = 0;
//   currentScore1Element.textContent = 0;

//   score0Element.textContent = 0;
//   score1Element.textContent = 0;

//   diceElement.classList.add('hidden');

//   player0Element.classList.remove('player--winner');
//   player1Element.classList.remove('player--winner');

//   player0Element.classList.add('player--active');
//   player1Element.classList.remove('player--active');

//   rollDiceButton.classList.remove('hidden');
//   holdScoreButton.classList.remove('hidden');
// };

// init();

// const switchPlayer = () => {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;

//   // add or remove active class
//   player0Element.classList.toggle('player--active');
//   player1Element.classList.toggle('player--active');
// };

// rollDiceButton.addEventListener('click', function () {
//   if (playing) {
//     const diceNumber = Math.trunc(Math.random() * 6) + 1;

//     diceElement.classList.remove('hidden');

//     diceElement.src = `dice-${diceNumber}.png`;

//     if (diceNumber !== 1) {
//       currentScore += diceNumber;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // switch the player
//       switchPlayer();
//     }
//   }
// });

// startAgainButton.addEventListener('click', init);

// holdScoreButton.addEventListener('click', () => {
//   if (playing) {
//     scores[activePlayer] += currentScore;

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     if (scores[activePlayer] >= 100) {
//       playing = false;
//       diceElement.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');

//       rollDiceButton.classList.add('hidden');
//       holdScoreButton.classList.add('hidden');
//     } else {
//       switchPlayer();
//     }
//   }
// });

'use strict';

// buttons
const rollDiceButton = document.querySelector('.btn-roll');
const holdScoreButton = document.querySelector('.btn-hold');
const startAgainButton = document.querySelector('.btn-new');

// players
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// current scores
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');

const totalScore1 = document.querySelector('#score--0');
const totalScore2 = document.querySelector('#score--1');

// dice
const dice = document.querySelector('.dice');

// default state
let activePlayer, currentScore, playing, scores;
const init = () => {
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  scores = [0, 0];

  // hide the dice initially
  dice.classList.add('hidden');

  //set score to zero
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  totalScore1.textContent = 0;
  totalScore2.textContent = 0;

  player1.classList.add('player--active');
  player2.classList.remove('player--active');

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');

  rollDiceButton.classList.remove('hidden');
  holdScoreButton.classList.remove('hidden');
};

init();

// switch player

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// roll the dice

rollDiceButton.addEventListener('click', () => {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    // change the dice image
    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      // update the current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// hold the score
holdScoreButton.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      rollDiceButton.classList.add('hidden');
      holdScoreButton.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

// start game again

startAgainButton.addEventListener('click', init);
