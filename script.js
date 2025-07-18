'use strict';

'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);





// const player0E1 = document.querySelector('.player--0');
// const player1E1 = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// //this scores is big size Scores

// let scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing =true;
// // text content changed number to 0
// score0El.textContent = 0;
// score1El.textContent = 0;

// //added new clss in html
// diceEl.classList.add('hidden');

// // Switch player

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;

//   player0E1.classList.toggle('player--active');
//   player1E1.classList.toggle('player--active');
// };

// //rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if(playing){
//   // 1.generating a random dice roll

//   const dice = Math.trunc(Math.random() * 6) + 1;
//   // console.log(dice);

//   // 2.display dice

//   diceEl.classList.remove('hidden');
//   diceEl.src = `dice-${dice}.png`;

//   // check for rolled 1 : if true,changed to next player
//   if (dice !== 1) {
//     currentScore = currentScore + dice;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//   } else {
//     switchPlayer();
//   }
// }
// });

// btnHold.addEventListener('click', function () {
//   // 1. add current score to active player

//   scores[activePlayer] = scores[activePlayer] + currentScore;
//   // console.log(scores[activePlayer]);
//   document.getElementById(`score--${activePlayer}`).textContent =
//     scores[activePlayer];
//   //  2. check player score > =100 finish the gamee

//   if (scores[activePlayer] >= 100) {
//     playing= false;
//     document
//       .querySelector(`player--${activePlayer}`)
//       .classList.add('player--winner');
//     document
//       .querySelector(`player--${activePlayer}`)
//       .classList.remove('player--winner');
//   }
//   else{
//     //  3. switch to next player
//     switchPlayer();
//   }
  
  
// });

// current0El.textContent = 0;
// current1El.textContent = 0;

// score0El.textContent = 0;
// score1El.textContent = 0;

// const score = [0, 0]; //payers final score
// let currentScore = 0;
// let activePlayer = 0;

// diceEl.classList.add('hidden');

// // Rolling dice functionality

// btnRoll.addEventListener('click', function () {
//   // 1.Generating a random dice

//   const dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(dice);

//   // 2. Display the dice

//   diceEl.classList.remove('hidden');
//   diceEl.src = `dice-${dice}.png`;

//   // 3. Check rolled 1 ; IF TRUE , switch to next player

//   if (dice !== 1) {
//     currentScore = currentScore + dice;
//     current0El.textContent = currentScore;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//   } else {
//     // switch to next player
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     currentScore = 0;
//   }
// });
