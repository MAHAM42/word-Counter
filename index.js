#! /usr/bin/env node
// This line is called a shebang, it tells to OS to run it with node.js
// Import the 'inquirer' module, which is a command line interface for Node.js. 
import inquirer from "inquirer";
// Declare a constant 'answers' anD assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word:"
    }
]);
const words = answers.Sentence.trim().split(" ");
// Print the array of words to the console 
console.log(words);
// print the word count of the sentence to the console
console.log(`Your Sentence word count is ${words.length}`);
