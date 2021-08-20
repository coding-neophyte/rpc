import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';

const playNow = document.getElementById('playButton');
const winDisplay = document.getElementById('wins');
const lossDisplay = document.getElementById('losses');
const drawDisplay = document.getElementById('draws');
const resetButton = document.getElementById('reset');
//const userInput = document.querySelector('input:checked');
const gameResult = document.getElementById('throw-result');

let totalWins = 0;
let totalLosses = 0;
let totalDraws = 0;

playNow.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const winResult = didUserWin(userInput.value, getRandomThrow());
    if (winResult === 'win') {
        totalWins++;
        gameResult.textContent = 'Win';

    } else if (winResult === 'lose') {
        totalLosses++;
        gameResult.textContent = 'Lose';

    } else {
        totalDraws++;
        gameResult.textContent = 'Draw';
    }

    drawDisplay.textContent = totalDraws;
    lossDisplay.textContent = totalLosses;
    winDisplay.textContent = totalWins;
});

resetButton.addEventListener('click', () => {
    location.reload();
});
