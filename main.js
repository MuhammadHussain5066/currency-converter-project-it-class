#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.7,
    KWD: 0.3,
    PKR: 280,
};
const userreply = await inquirer.prompt([
    {
        name: "from",
        message: "Enter the currency you are converting from:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "KWD", "PKR"]
    },
    {
        name: "to",
        message: "Enter the currency you are converting to:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "KWD", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount:",
        type: "number"
    }
]);
const fromCurrency = currency[userreply.from];
const toCurrency = currency[userreply.to];
const amount = userreply.amount;
const amountInUSD = amount / fromCurrency;
const convertedAmount = amountInUSD * toCurrency;
console.log(convertedAmount);
