// import functions and grab DOM elements

// initialize global state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';

const playNow = document.getElementById('playButton');
const winDisplay = document.getElementById('wins');
const lossDisplay = document.getElementById('losses');
const drawDisplay = document.getElementById('draws');
const resetButton = document.getElementById('reset');
const userInput = document.querySelector('input:checked');

let totalWins = 0;
let totalLosses = 0;
let totalDraws = 0;

playNow.addEventListener('click', () => {

});


resetButton.addEventListener('click', () => {
    location.reload();
});
