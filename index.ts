#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message: "Enter first Number", type: "number", name: "firstNumber"},
{message: "Enter second Number", type: "number", name: "secondNumber"},
{
    message: "Select one from the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Divistion"],
},
]);

 // conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Divistion") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select valid operator")
}
