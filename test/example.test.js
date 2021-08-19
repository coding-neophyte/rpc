
import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('expects rock to beat scissors', (expect) => {

    const expected = 'win';


    const actual = didUserWin('rock', 'scissors');


    expect.equal(actual, expected);
});


const test2 = QUnit.test;

test2('expects paper to beat rock', (expect) => {

    const expected = 'win';


    const actual = didUserWin('paper', 'rock');


    expect.equal(actual, expected);
});

const test3 = QUnit.test;

test3('expects scissors to beat paper', (expect) => {

    const expected = 'win';


    const actual = didUserWin('scissors', 'paper');


    expect.equal(actual, expected);
});


const test4 = QUnit.test;

test4('expects scissors to lose to rock', (expect) => {

    const expected = 'lose';


    const actual = didUserWin('scissors', 'rock');


    expect.equal(actual, expected);
});


const test5 = QUnit.test;

test5('expects paper to lose to scissors', (expect) => {

    const expected = 'lose';


    const actual = didUserWin('paper', 'scissors');


    expect.equal(actual, expected);
});

const test6 = QUnit.test;

test6('expects rock to lose to paper', (expect) => {

    const expected = 'lose';


    const actual = didUserWin('rock', 'paper');


    expect.equal(actual, expected);
});

const test7 = QUnit.test;

test7('expects paper and paper to draw', (expect) => {

    const expected = 'draw';


    const actual = didUserWin('paper', 'paper');


    expect.equal(actual, expected);
});


const test8 = QUnit.test;

test8('expects rock and rock to draw', (expect) => {

    const expected = 'draw';


    const actual = didUserWin('rock', 'rock');


    expect.equal(actual, expected);
});

const test9 = QUnit.test;

test9('expects scissors and scissors to draw', (expect) => {

    const expected = 'draw';


    const actual = didUserWin('scissors', 'scissors');


    expect.equal(actual, expected);
});
