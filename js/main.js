/*----------  CONTANTS ----------*/
const COLOR_LOOKUP = {
    "1": "orange",
    "-1": "purple",
    null: "white" 
};





/*----------  APP STATE ----------*/
// ARRAY OF 9 ELEMENTS 
// NULL -> sq avail; 1 or -1 for players
let board;
let turn;
let gameStatus; //null -> game in play, 1/-1 = win, "T" for tie 




/*----------  CAHED ELEMENT REFERENCES ----------*/
const squareEls = document.querySelectorAll("#board > div");
const msgEl = document.querySelector("h1")




/*----------  EVENT LISTENERS ----------*/







/*----------  FUNCTIONS ----------*/

function init() {
    board = new Array(9).fill(null);
    turn = 1;
    gameStatus = null;
    render();
}

function render() {
    squareEls.forEach(function(squareEl, idx) {
        squareEl.style.backgroundColor = COLOR_LOOKUP[board[idx]];
    });
    renderMessage();
}

function renderMessage() {
    if (gameStatus === null) {
        msgEl.innerHTML = `Player ${COLOR_LOOKUP[turn]}'s Turn`;
    } else if (gameStatus === "T") {
        msgEl.innerHTML = "goodbye";
    } else {
        msgEl.innerHTML = 
    }
}