let num1 = prompt("enter num 1:");
let num2 = prompt("enter num 2:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const sum = num1 + num2;
const dif = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${dif}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
