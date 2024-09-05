const mealCost = 20;
const tipPercentage = 5 / 100;

const tipAmount = mealCost * tipPercentage;
const totalCost = mealCost + tipAmount;

console.log(`
  The total cost of your bill is: ${totalCost} euros`);

console.log(`
  ###################################################`);

const startingBalance = 1000;
const monthlyContribution = 300;
const months = 12;
const totalSavings = startingBalance + monthlyContribution * months;
console.log(
  `
  After ${months} months of saving, you will have $${totalSavings} in your account.`
);

console.log(`
  ###################################################`);

const radius = 5;
const circleArea = Math.PI * Math.pow(radius, 2);
const circumference = 2 * Math.PI * radius;
console.log(`
For a circle with a radius of ${radius} units:

- The area is approximately ${circleArea} square units.
- The circumference is approximately ${circumference} units.
`);
