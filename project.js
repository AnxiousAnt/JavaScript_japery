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

const prompt = require("prompt-sync")({sigint: true});

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    A : 3,
    B : 3,
    C : 2,
    D : 4
};

const SYMBOL_VALUE = {
    A : 2,
    B : 3,
    C : 4,
    D : 5
};



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

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)){
        for(let i = 0; i<count; i++){
            symbols.push(symbol);
        }
    }
    
    const reels = [];
    for(let i = 0; i<COLS; i++){
        reels.push([]);
        const newReel = [...symbols];
        for(let j = 0; j< ROWS; j++){
            const randomIndex = Math.floor(Math.random()*newReel.length);
            reels[i].push(newReel[randomIndex]);
            newReel.splice(randomIndex, 1);
        }
    }
    return reels;
}

const transpose = (reels) => {
    const rows = [];
    for(let i = 0; i<ROWS; i++){
        rows.push([]);
        for(let j = 0; j<COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}

const printRows = (rows) => {
    for(const row of rows){
        let rowString = "";
        for(const [i, symbol] of Object.entries(row)){
            rowString += symbol;
            if (i != row.length -1 ){
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
console.log(reels);
console.log(rows);
printRows(rows);


