/*
Goals (slot_machine):
1. Deposit some money.
2. Determine the no1. of lines to bet on.
3. collect bet amount.
4. spin the slot machine.
5. check if user won/lost.
6. give the user their winnings (or take away their bet if lost).
7. play again
*/

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount! try again.\n");
        }
        else {
            return numberDepositAmount;
        }
    }

}

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines! try again.\n");
        }
        else {
            return numberOfLines;
        }
    }

}

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines) {
            console.log("Invalid bet amount! try again.\n");
        }
        else {
            return numberBet;
        }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);




