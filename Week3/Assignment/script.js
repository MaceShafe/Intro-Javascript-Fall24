
console.log('This is connected to the HTML!')

// constants
const GRIDSIZE=3;
// globals
// mark means the "mark" the user makes when clicking on a box
let xMark = "X";
let oMark = "O";
let lastMark = oMark;
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

        for (let row = 1; row<=GRIDSIZE; row++){
        htmlCode += '<div class="row h-25">';
            for (let col=1; col<=GRIDSIZE; col++){
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
let mark = ""
    //? if the lastMark is X, then set mark=O, else set mark=X
    if(lastMark == "X") {
        mark = "O"
        lastMark = "O"
    } else {
        mark="X"
        lastMark = "X"
    }


    document.getElementById(row+'_'+col).innerHTML = mark;

    //? save the mark in boardArray multidimensional array  (remember Array indexes start at 0 and not 1)

boardArray [row-1] [col-1] = mark; //literally just un-offsetting it because its broken otherwise and i dont know wh

console.log(row);
console.log(col);
console.log(boardArray);


    // check if there's a winner
    let winner = checkBoard();
    if (winner!="") {
        alert("Game Over! "+winner);
    }
}

// ****************************************************************
function checkBoard() {


for (col=0; col<GRIDSIZE; col++) {  // loop through all columns
        for (row=0; row<GRIDSIZE; row++) { // loop through all rows
         
            if (boardArray[row][0] === boardArray[row][1] && boardArray[row][1] === boardArray[row][2] && boardArray[row][0]!==null  && boardArray[row][1]!==null && boardArray[row][0]!==null  && boardArray[row][2]!==null)
                 return boardArray[row][0] + 'wins horisontally!';
            else 
                return "";

        }
        // if (xTest===true) {
        //     return xMark+" is the vertical winner!";
        // }
        // return ("");
    }
}
// ****************************************************************

function newGame() {location.reload()} 

//"The simplest solution is always the best"
//
// 
//                -Ghandi probably, i dont really know
