export function didUserWin(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'player wins';
    } if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'player wins';
    } if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'player wins';
    } if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return 'player loses';
    } if (computerChoice === 'paper' && playerChoice === 'rock') {
        return 'player loses';
    } if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return 'player loses';
    }

}
