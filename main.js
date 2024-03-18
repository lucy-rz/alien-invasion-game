/* --- const
audio
*/

// --- state varibles
let player;
let spaceship;
let grid;
let points;
let timer;


// --- cached elements
const startBtn = document.getElementById("startBtn");
let playAgainBtn;

// --- event listeners
startBtn.addEventListener("click", startGame);
// --- functions
init()
function init() {
    timer = 60;
    points = 0;
    render()
}

function startGame() {
    remainingTime()
};

function remainingTime() {
    timer--;
    if(timer > 0) {
        setTimeout(remainingTime, 1000);
    } 
    console.log(timer);
    renderRemainingTime()
}

function renderPoints() {};

function renderRemainingTime() {
    const timerEl = document.getElementById("time-display")
    timerEl.innerText = timer
};


function render() {
    renderRemainingTime();
    renderPoints();

}