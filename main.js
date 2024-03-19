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
    remainingTime();
};

function handleGridClick(evt) {
    let i = parseInt(evt.target.id, 10)
    if (grid[i] !== null) {
        return
    } else {
        let randomIdx = Math.floor(Math.random() * grid.length);
        grid[randomIdx] = "sp"
    }
    renderGrid()
};

function remainingTime() {
    timer--;
    if (timer > 0) {
        setTimeout(remainingTime, 1000);
    } 
    console.log(timer);
    renderRemainingTime()
}

function victory() {
    //spaceship clicked in the spanned time
};

// function countPoints() {
//     if ( function victory () return === true) {
//     points =+ 100 
//     }
// }

function renderPoints() {};
    //countPoints()
    const pointsEl = document.getElementById("points-display");
    pointsEl.innerText = points;

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

/*
function renderControls() {
    playAgainBtn.style.visibility = winner ? "visible" : "hidden";
    markerEls.forEach(function(markerEl, idx) {
        const hideMarker = !board[idx].includes(null) || winner
        markerEl.style.visibility = hideMarker ? "hidden" : "visible"
    });
} */