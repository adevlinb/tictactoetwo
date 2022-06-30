/*----------  CONTANTS ----------*/
const COLOR_LOOKUP = {
    "1": "orange",
    "-1": "purple",
    null: "white" 
};

const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]




/*----------  APP STATE ----------*/
// ARRAY OF 9 ELEMENTS 
// NULL -> sq avail; 1 or -1 for players
let board;
let turn;
let gameStatus; //null -> game in play, 1/-1 = win, "T" for tie 




/*----------  CAHED ELEMENT REFERENCES ----------*/
const squareEls = [...document.querySelectorAll("#board > div")];
const msgEl = document.querySelector("h1")



/*----------  EVENT LISTENERS ----------*/
document.getElementById("board").addEventListener("click", handleMove);


/*----------  FUNCTIONS ----------*/

function init() {
    board = new Array(9).fill(null);
    turn = 1;
    gameStatus = null;
    console.log("nope")
    render();
}

function render() {
    squareEls.forEach(function(squareEl, idx) {
        squareEl.style.backgroundColor = COLOR_LOOKUP[board[idx]];
    });
    console.log("nope")
    renderMessage();
}

function renderMessage() {
    if (gameStatus === null) {
        msgEl.innerHTML = `Player <span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
    } else if (gameStatus === 'T') {
        // Tie game
        msgEl.textContent = "Tie Game";
    } else {
        // Player has won!
        msgEl.innerHTML = `Player <span style="color: ${COLOR_LOOKUP[gameStatus]}">${COLOR_LOOKUP[gameStatus].toUpperCase()}</span>'s Turn`;
    }
}


// in response to user interaction of "click" - 
// update all impacted state then lastly - call render
function handleMove(evt) {
    // Guards
    if (
        gameStatus ||
        !squareEls.includes(evt.target)
    ) return;
    const idx = squareEls.indexOf(evt.target);
    board[idx] = turn;
    gameStatus = getGameStatus();
    turn *= -1;
    render();
}

function getGameStatus() {
    for (let arr of WINNING_COMBOS) {
        if (Math.abs(board[arr[0]] + board[arr[1]] + board[arr[2]] === 3)) return turn;
    }
    if(!board.includes(null)) return "T";
    return null;
}