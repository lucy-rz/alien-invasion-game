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
const gridArea = document.getElementById("grid");

// --- event listeners
startBtn.addEventListener("click", startGame);
gridArea.addEventListener("click", handleGridClick);

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
    if (currentlyPlaying === true) {
        return;
    }
    currentlyPlaying = true;
    cleanGrid()
    remainingTime();
};

function cleanGrid() {

    for (let i = 0; i < grid.length; i++) {
        grid[i] = null
    } 
    if (timer === 0) {
        return
    }
    let randomIdx = Math.floor(Math.random() * grid.length);
    grid[randomIdx] = "sp";
    setTimeout(cleanGrid, 1000);
    console.log(grid)
    renderGrid()
};

function handleGridClick(evt) {
    let i = parseInt(evt.target.id, 10)
    if (grid[i] === "sp") {
        points += 100
    } 
    console.log(points)
    render()
};


function remainingTime() {
    timer--;
    if (timer > 0) {
        setTimeout(remainingTime, 1000);
    } 
    console.log(timer);
    renderRemainingTime()
}


function renderPoints() {
    const pointsEl = document.getElementById("points-display");
    pointsEl.innerText = points};
    

function renderRemainingTime() {
    const timerEl = document.getElementById("time-display");
    timerEl.innerText = timer;
};

function renderGrid () {
    grid.forEach(function(gridValue, gridIdx) {
        const gridEl = document.getElementById(gridIdx)
        if (gridValue !== null) {
            gridEl.innerText = gridValue;
        } else {
            gridEl.innerText = "";
        }
    })
        
    
};

// function playAgain() {
//     init();
//     renderGrid();
// }

function render() {
    renderRemainingTime();
    renderPoints();
    renderGrid()
}

