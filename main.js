import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.90,
    INR: 76,
    SAR: 3.75,
    CAD: 1.37,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "enter from currency",
        type: 'list',
        choices: ['USD', 'EUR', 'INR', 'SAR', 'CAD', 'PKR']
    },
    {
        name: 'to',
        message: "enter to currency",
        type: 'list',
        choices: ['USD', 'EUR', 'INR', 'SAR', 'CAD', 'PKR']
    },
    {
        name: "amount",
        message: "enter your amount",
        type: 'number'
    }
]);
let fromaoumt = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromaoumt;
let coventertedamount = baseamount * toamount;
console.log(coventertedamount);
console.log(fromaoumt);
console.log(toamount);
console.log(amount);
