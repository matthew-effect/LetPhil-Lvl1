function calculateAvg(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function assignGrade(avg) {
    if (avg >= 90) {
        return "A";
    } else if (avg >= 80) {
        return "B";
    } else if (avg >= 70) {
        return "C";
    } else if (avg >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// get user input
const score1 = parseFloat(prompt("Enter first score:"));
const score2 = parseFloat(prompt("Enter second score:"));
const score3 = parseFloat(prompt("Enter third score:"));

// with a loop 
// const scores = [];
// for (let i = 0; i < 3; i++) {
//     const score = prompt(`Enter score ${i + 1}:`)
//     scores.push(parseInt((score));
// }

const average = calculateAvg(score1, score2, score3);
const grade = assignGrade(average);

console.log(`Average score: ${average}`);
console.log(`Final Grade: ${grade}`);

