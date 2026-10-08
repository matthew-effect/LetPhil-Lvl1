const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

// get number between 1 - 6
function diceRoll() {
    const roll = Math.floor(Math.random() * 6) + 1;
    scoreTracker[roll]++; // increment count of rolled number
    console.log(`You rolled ${roll}`);
}

function displayScore() {
    console.log(`Dice Roll Score Tracker:`);
    for (const roll in scoreTracker) {
        console.log(`${roll}: ${scoreTracker[roll]} times`);
    }
}

// dice rolls
for (let i = 0; i < 25; i++) {
    diceRoll();
}

// display final score
displayScore();
