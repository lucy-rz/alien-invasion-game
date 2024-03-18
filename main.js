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
    grid = [null, null, null, null, null, null, null, null, null, null];
    currentlyPlaying = false;

    render()
}

function startGame(evt) {
    evt.preventDefault()
    if(evt.target.tagName !== "DIV" && evt.target.tagName !== "BUTTON") {
        return;
    }
    let i = parseInt(evt.target.id, 10)
    if (grid[i] !== null) {
        return
    } else {
        grid[i] = Math.floor(Math.random() * grid.length);
    }
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

function countPoints() {

}

function renderPoints() {};
    const pointsEl = document.getElementById("points-display");
    pointsEl.innerText = points;

function renderRemainingTime() {
    const timerEl = document.getElementById("time-display");
    timerEl.innerText = timer;
};

function renderGrid () {
    grid.forEach(function(gridValue, gridIdx){
        const spaceshipEl = document.getElementById(gridIdx)
        spaceshipEl.innerText = gridValue;
    })
        
    
};

function render() {
    renderRemainingTime();
    renderPoints();
    renderGrid()
}

/*
function renderControls() {
    playAgainBtn.style.visibility = winner ? "visible" : "hidden";
    markerEls.forEach(function(markerEl, idx) {
        const hideMarker = !board[idx].includes(null) || winner
        markerEl.style.visibility = hideMarker ? "hidden" : "visible"
    });
} */