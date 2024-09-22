
console.log('This is connected to the HTML!')

// constants
const GRIDSIZE=3;
// globals
// mark means the "mark" the user makes when clicking on a box
let xMark = "X";
let oMark = "O";
let lastMark = oMark;
let mark = "";
let boardArray = new Array(GRIDSIZE); // Array with initial size of GRIDSIZE

// references
//? tictacBoard
const tictacBoard =  document.getElementById("tictacBoard")
//? newGame


// EVENT LISTENERS ----------------
//? initialize on load
initialize();

//? event listener for newGame button
document.getElementById("btnNewGame").addEventListener('click',newGame);

// FUNCTIONS ----------------------
// ****************************************************************
function initialize() {
console.log('initialized!')
    // replace this pseudo code ...
    //? for every row, create an array of columns so that we can later reference the
    // tic-tac-toe cell as boardArray[row][column] -- a multidimensional array
    
    for (let i = 0; i < GRIDSIZE; i++) {
        boardArray[i] = new Array(GRIDSIZE);
        
    };


    // Draw board
    let boxNumber = 0;
    let htmlCode = '';
    let colSize = Math.round(12/GRIDSIZE);

        for (let row = 0; row<GRIDSIZE; row++){
        htmlCode += '<div class="row h-25">';
            for (let col=0; col<GRIDSIZE; col++){
            htmlCode += '<div onClick="markIt('+row+','+col+')" id="'+row+'_'+col+'" class="col-'+colSize+' h-100 bg-primary bg-gradient border border-info shadow d-flex align-items-center justify-content-center fs-1">'+boxNumber+++'('+row+','+col+')</div>';
            // you can clean up the output of that html if you want to :-)
        }
        htmlCode += '</div>';
    }
    console.log(tictacBoard);
    tictacBoard.innerHTML = htmlCode;
}

// ****************************************************************
function markIt(row,col) {
    //? if the lastMark is X, then set mark=O, else set mark=X
    if(lastMark == "X") {
        mark = "O"
    } else {
        mark="X"
    }

    lastMark = mark;

    document.getElementById(row+'_'+col).innerHTML = mark;

    //? save the mark in boardArray multidimensional array  (remember Array indexes start at 0 and not 1)

    boardArray[row][col] = mark;


    console.log(boardArray);


    // check if there's a winner
    let winner = checkBoard(mark);
    if (winner!="") {
        alert("Game Over! "+winner);
    }
}

// ****************************************************************
function checkBoard(Mark) {

let Test = true; //Assumes column is winner

// *COLUMNS
    for (col = 0; col < GRIDSIZE; col++) {  // loop through all columns
        let Test = true; //ensures reset
        Mark = boardArray[0][col]
        for (row = 0; row < GRIDSIZE; row++) { // loop through all rows
            if (boardArray[row][col] != Mark) {
                Test = false; //if the column is not the same, it doesnt go through
                break;
            }

        }
        if (Test === true && Mark != undefined) {
            return Mark + " is the vertical winner at column" + (col + 1) + "!"
        }
    }

//* ROWS
    for (row = 0; row < GRIDSIZE; row++) {  // loop through all rows
        let Test = true; //ensures reset
        Mark = boardArray[row][0]
        for (col = 0; col < GRIDSIZE; col++) { // loop through all cols
            if (boardArray[row][col] != Mark) {
                Test = false; //if the column is not the same, it doesnt go through
                break;
            }

        }
        if (Test === true && Mark != undefined) {
            return Mark + " is the vertical winner at row" + (row + 1) + "!"
        }
    }

//* LEFT RIGHT DIAGONALS
    Test = true; //resets test 
    Mark = boardArray[0][0]; //sets Mark to be the top left square 
    for (col = 0, row = 0; col < GRIDSIZE && row < GRIDSIZE; col++, row++) {  // loop through diagonal left to right
        if (boardArray[row][col] != Mark) { 
            Test = false; //if its  not the same, it doesnt go through
            break;
        }
    }
    if (Test === true && Mark != undefined) { 
        return Mark + " is the diagonal left to right winner!"
    }
//* RIGHT LEFT DIAGONALS
    Test = true; //resets test 
    Mark = boardArray[0][GRIDSIZE-1]; //sets Mark to be the top left square 
    for (col = GRIDSIZE-1, row = 0; col >= 0 && row <GRIDSIZE; col--, row++){  // loop through diagonal left to right
        console.log(row)
        console.log(col)
        if (boardArray[row][col] != Mark) { 
            Test = false; //if its  not the same, it doesnt go through
            break;
        }
    }
    if (Test === true && Mark != undefined) { 
        return Mark + " is the diagonal right to left winner!"
    }

return ""
}
// ****************************************************************

function newGame() {location.reload()} 

//"The simplest solution is always the best"
//
// 
//                -Ghandi probably, i dont really know
