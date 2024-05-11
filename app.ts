#!  /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to `Shahzil`- Currency Convertor\n"));


let exchange_rate: any = {
     "USD": 1,
     "SAR": 3.75,
     "JYP": 113,
     "PKR": 278.45,
     "CAD": 1.3,
     "AUD": 1.65,
     "EUR": 0.9,
}

let user_answer = await inquirer.prompt([
  {
     name: "from_currency",
     type: "list",
     message: "Select the currency  to convert from:",
     choices: ["USD","SAR", "JYP", "PKR","CAD","AUD","EUR"] 
  },
  {
     name: "to_currency",
     type: "list",
     message: "Select the currency  to convert into:",
     choices: ["USD","SAR", "JYP", "PKR","CAD","AUD","EUR"] 

  },
  {
    name: "amount",
    type: "input",
    message: "Enter the amount to convert:"
  }  
]);
 
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// formula of currency conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`Converted Amount = ${converted_amount}`);

  
  



  







