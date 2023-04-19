  1   2   3 
A   |   |  
 ---+---+---
B   |   |  
 ---+---+---
C   |   |  

1. PRINT OUT BOARD - YUHBOH
2. PROMPT FOR USER INPUT (A1 || B2 || C3) - VANG
3. FILL OUT THE SPACE DEPENDING ON THE PROMPT - ANDERS
4. BUILD COMPUTER - ELI
5. CHECK FOR WIN - WHOMEVER

ARRAY OF OPEN SPOTS.
WHENEVER A SPOT IS CHOSEN, SPLICE THAT SPOT OUT OF THE ARRAY.
WHEN COMPUTER CHOOSES

FUNCTIONS:
    - TAKE USER INPUT
      - PROMPT USER, AND PASS INPUT INTO RENDERUPDATES FUNCTION
    - DETERMINE COMPUTER
      - ROLL FOR RANDOM NUMBER
    - RENDER UPDATES
    - RANDOM GENERATOR (ARRAY.LENGTH);
    - CHECK FOR WINNING CONDITIONS
      - []
  - MAP OBJECT:
    - [[A1, A2, A3],
    - [B1, B2, B3],
    - [C1, C2, C3]]

<!--  -->
WIN CHECK = [
    [A1, A2, A3],
    [B1, B2, B3],
    [C1, C2, C3],
    [A1, B1, C1],
    [A2, B2, C2],
    [A3, B3, C3],
    [A1, B2, C3],
    [A3, B2, C1]
];

Object.values(GAME-MAP) -> ["X", '', 'O', '', 'X']

<!-- How can we loop through array and check JUST for the winning numbers -->


<!-- we'd have to store user and computer input in an array -->
FUNCTION USER/COMPUTER INPUT TRACKER (inputArray) {
    <!-- store winning scenarios -->
    <!-- compare winning scenarios with inputArray -->
    <!-- called after each input to check if it was a winning turn -->
}


function checker = winningGuesses.every(guess => playerGuesses.includes(guess));

lets make a function called checker
- the guesses is like the player or the computer guesses.
- .every is going to test makes sure that all values 

[a1, a2, c3, c4]
[a1, a2, a3]


a1 -> winningCondition.includes(playerGuess)) if 

computer looks at number of guesses, if 3 guesses have been made, 6 spots remain. 
so we need a running list of available spaces. so computer will look at available spaces