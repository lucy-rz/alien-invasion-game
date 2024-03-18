/* --- const
audio
*/

// --- state varibles
let player;
let spaceship;
let grid;
let points;
let timer;
let currentlyPlaying;


// --- cached elements
const startBtn = document.getElementById("startBtn");
const playAgainBtn = document.getElementById("playAgainBtn");


// --- event listeners
startBtn.addEventListener("click", startGame);

// --- functions
init()
function init() {
    timer = 60;
    points = 0;
    currentlyPlaying = false;
    render()
}

function startGame(evt) {
    evt.preventDefault()
    if(evt.target.tagName !== "DIV") {
        return;
    }
    let i = parseInt(evt.target.id, 10)
    if (currentlyPlaying === true) {
        return;
    }
    currentlyPlaying = true;
    remainingTime()
};

function remainingTime() {
    timer--;
    if (timer > 0) {
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