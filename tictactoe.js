//GLOBAL VARIABLES
const prompt = require("prompt-sync")();
const board = {"A1":12, "A2":16, "A3":20, "B1":37, "B2":41, "B3":45, "C1":62, "C2":66, "C3":70};
let availableSpaces = Object.keys(board); // -> ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']
let killSwitch = false;

//Our turn historys, updated within their respective functions -> humanTurn() and computersTurn()
let humanHistory = [];
let computerHistory = [];

// Game Board, set to update each turn render
let splitBoard = `1   2   3
A   |   |  
 ---+---+---
B   |   |  
 ---+---+---
C   |   |    `;


// .splice(): At position 2, remove 1 item from end, and add (Lemon, Kiwi):
// fruits.splice(2, 1, "Lemon", "Kiwi");
// function takes which player (either human or computer), and their chosen move as parameters
function inputRender(player, move) {
    //splitBoard is going to be the gameboard, split into an array of each individual characters
    splitBoard = splitBoard.split('');

    //splice will replace a character (in this case a ' ') at the index located within the board object using the "move" variable ***which is passed into this function*** and replace it with the player symbol ('X' || 'O')
    splitBoard.splice(board[move], 1, player);
    splitBoard = splitBoard.join('');
    console.log(splitBoard);
    availableSpaces.splice(availableSpaces.indexOf(move), 1);

}

//board.move //-> is trying to access the property called move within the board object
// === "A1"
//board[move] // -. is accessing the property for the value associated with the move variable within the board object
// === "12"

function humanTurn() {
    //Prompt user for an input of the available spaces
    console.log('Choose one of the available spaces: ', availableSpaces);
    let move = prompt("Make a move ").toUpperCase();
    // inputvalidation to make SURE the user picks an appropriate space
    if (availableSpaces.includes(move) === true) {
        console.log('THE HUMAN HAS MOVED!!!\n')
        inputRender('X', move);
        humanHistory.push(move);
        checkForWin(humanHistory);
    } else {
        console.log('THIS WAS NOT AN APPROPRIATE MOVE HUMAN, TRY AGAIN');
        humanTurn();
    }

}

function computersTurn() {
    if (killSwitch === false) {
        // generate random number from the remaining board spaces, and use that random number to pick from available spaces
        randomNumber = randomNumberGenerator(0, availableSpaces.length);
        computerMove = availableSpaces[randomNumber];
        console.log('THE COMPUTER HAS MADE ITS COUNTER MOVE!!!!\n')
        // call inputRender with the computer's move
        inputRender('O', computerMove);
        computerHistory.push(computerMove);
        // check for a winning turn
        checkForWin(computerHistory);
    }
}

function randomNumberGenerator(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

function checkForWin(turnHistory) {
    // list of win scenarios
    const winCombos = [
        ['A1', 'A2', 'A3'],
        ['B1', 'B2', 'B3'],
        ['C1', 'C2', 'C3'],
        ['A1', 'B1', 'C1'],
        ['A2', 'B2', 'C2'],
        ['A3', 'B3', 'C3'],
        ["A1", "B2", "C3"],
        ["A3", "B2", "C1"]
    ];

    // loop through EVERY element of the win combos arrays, checking if user's or computer's turnHistory satisfy any win scenario
    for (let win of winCombos) {
        if (win.every(move => turnHistory.includes(move))) {
            killSwitch = true;
            console.log('we have a winner');
        }
    }

}
// Actual function to run our game
function startGame() {
    while (killSwitch == false) {
        // human turn goes
        humanTurn();
        // if human hasn't won (which is checked at the end of their turn), check if it's a tie by seeing if there are no more available spaces
        if (availableSpaces.length === 0) {
            // 
            killSwitch = true;
            console.log('A TIE?! WE HAVE MATCHED WITS, PUNY HUMAN');
        } else {
            computersTurn();
        }
    }
}

startGame();