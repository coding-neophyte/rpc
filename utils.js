export function didUserWin(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'win';
    } if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'win';
    } if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';
    } if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return 'lose';
    } if (computerChoice === 'paper' && playerChoice === 'rock') {
        return 'lose';
    } if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return 'lose';
    }
}
