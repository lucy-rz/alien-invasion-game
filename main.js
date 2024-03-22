const laserGunSound ='http://www.freesound.org/data/previews/42/42106_70164-lq.mp3';

// --- state varibles
let player;
let spaceship;
let grid;
let points;
let timer;
let currentlyPlaying;
let message;


// --- cached elements
const startBtn = document.getElementById("startBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const gridArea = document.getElementById("grid");
const messageEl = document.getElementById("message");
const sound = new Audio();

// --- event listeners
startBtn.addEventListener("click", startGame);
gridArea.addEventListener("click", handleGridClick);
playAgainBtn.addEventListener("click", playAgain);

// --- functions
init()
function init() {
    timer = 13;
    points = 0;
    grid = [null, null, null, null, null, null, null, null, null, null, 
            null, null, null, null, null, null, null, null, null, null, 
            null, null, null, null, null, null, null, null, null, null, 
            null, null, null, null, null, null, null, null, null, null, 
            null, null, null, null, null, null, null, null, null, null];
    currentlyPlaying = false;
    message = "Click the spaceship with the tip of the laser gun"
    sound.src = laserGunSound;
    render()
}

function startGame(evt) {
    evt.preventDefault();
    if (currentlyPlaying === true) {
        return;
    }
    currentlyPlaying = true;
    message = "";
    updateGrid();
    remainingTime();
}

function updateGrid() {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = null;
    } 
    if (timer === 0) {
        renderGrid();
        return;
    }
    let randomIdx = Math.floor(Math.random() * grid.length);
    grid[randomIdx] = "sp";
    setTimeout(updateGrid, 1500);
    renderGrid();
}

function handleGridClick(evt) {
    let i = parseInt(evt.target.id, 10)
    if (grid[i] === "sp") {
        points += 100;
        grid[i] = null;
    } 
    sound.currentTime = 0;
    sound.play();
    render();
}

function remainingTime() {
    timer--;
    if (timer > 0) {
        setTimeout(remainingTime, 1000);
    } 
    if (timer === 0) {
        message = "Game over!";
        if (points >= 500) {
            message = "You saved humanity!";
        } updateGrid();
    }
    render();
}

function playAgain(evt) {
    if (timer === 0){
    init();
    startGame(evt);
    }
}

function renderMessage() {
    messageEl.innerText = message;
}

function renderPoints() {
    const pointsEl = document.getElementById("points-display");
    pointsEl.innerText = points;
}
    
function renderRemainingTime() {
    const timerEl = document.getElementById("time-display");
    timerEl.innerText = timer;
}

function renderGrid () {
    grid.forEach(function(gridValue, gridIdx) {
        const gridEl = document.getElementById(gridIdx)
        if (gridValue !== null) {
            gridEl.classList.add("spaceship");
        } else {
            gridEl.classList.remove("spaceship");
        }
    })
        
    
}

function render() {
    renderRemainingTime();
    renderPoints();
    renderGrid();
    renderMessage();
}