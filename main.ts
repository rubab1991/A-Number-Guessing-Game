#! /usr/bin/env node

import inquirer from "inquirer"
//Divide thge project in chunks
//computer will generate a random number
// user input for guessing number
//compare user input and  computer generated number and show result
const random=Math.floor(Math.random()*10+1);
const answer = await inquirer.prompt([{
name:"UserGuessedNumber",
type:"number",
message:"Please guess the number between 1 to 10:",
},]);
if(answer.UserGuessedNumber === random){console.log("Congratulations!You guessed right numbner")}
else{console.log("You guessed wrong Number");}
