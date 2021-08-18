
import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('expects rock to beat scissors', (expect) => {

    const expected = 'player wins';


    const actual = didUserWin('rock', 'scissors');


    expect.equal(actual, expected);
});


const test2 = QUnit.test;

test2('expects paper to beat rock', (expect) => {

    const expected = 'player wins';


    const actual = didUserWin('paper', 'rock');


    expect.equal(actual, expected);
});

const test3 = QUnit.test;

test3('expects scissors to beat paper', (expect) => {

    const expected = 'player wins';


    const actual = didUserWin('scissors', 'paper');


    expect.equal(actual, expected);
});
