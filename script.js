// 	Task 1 Declare and Use Variables

console.log("Task 1: Declare and Use Variables\n");

let studentName = "Julia";
let studentAge = 100;
let isEnrolled = true;
console.log(`Student name is ${studentName}, student age is ${studentAge}, student is enrolled: ${isEnrolled}.`);

// 	Task 2 Demonstrate Data Types

console.log("\nTask 2: Demonstrate Data Types\n");

let streetName = 'Yonge st';
let buildingNumber = 56;
let isResidential = true;
let potentialBuers = ["Jack", "Sarah", "Kate"];

const owner = new Object();
owner.name = "Mary";
owner.citizenship = "Canadian";

console.log(`Our real estate company has a building for sale. \nThe address is ${buildingNumber} ${streetName}. \nThe building is residential: ${isResidential}. \nThe owner is ${owner.name}, owner citizenship is ${owner.citizenship}. \nPotencial buers  are ${potentialBuers}.`);

//   Task 3: Use Basic Operators

console.log("\nTask 3: Use Basic Operators\n");

console.log(`This year ${studentName} is ${studentAge} years old`);

studentAge--;
console.log(`Last year ${studentName} was ${studentAge} years old`);
let isLessCenture = studentAge < 100;
console.log(`Last year she was younger than 100: ${isLessCenture}`);

studentAge = studentAge + 2;
console.log(`Next year ${studentName} will be ${studentAge} years old`);
isLessCenture = studentAge < 100;
console.log(`Next year she will be younger than 100: ${isLessCenture}`);

studentAge--;
console.log(`\nThis year ${studentName} is ${studentAge} years old`);
let isYounge = ((studentAge+1)<100) && ((studentAge-1)<100);
console.log(`${studentName} was younger 100 last year and will be younger 100 next year: ${isYounge}`);
isYounge = ((studentAge+1)<100) || ((studentAge-1)<100);
console.log(`${studentName} was younger 100 last year or will be younger 100 next year: ${isYounge}`);