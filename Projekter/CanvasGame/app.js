const c = document.getElementById("game");
const ctx = c.getContext("2d");
let dx = 0; 
let dy = 0;
let linePosX = [10,30];
let linePosY = [60,250];
let points = 5;
let randomCoinPos = [];

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let coinsX = []
let coinsY = []

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("click", keyUpHandler);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    } else if(e.key == "up" || e.key == "ArrowUp") {
        upPressed = true;
    } else if(e.key == "down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    } else if(e.key == "up" || e.key == "ArrowUp") {
        upPressed = false;
    } else if(e.key == "down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

function randomCords() {
    let minC = 30;
    let maxC = 470;
    coinsX[0] = Math.floor(Math.random() * (maxC - minC) + minC);
    coinsX[1] = Math.floor(Math.random() * (maxC - minC) + minC);
    coinsX[2] = Math.floor(Math.random() * (maxC - minC) + minC);
    coinsX[3] = Math.floor(Math.random() * (maxC - minC) + minC);
    coinsX[4] = Math.floor(Math.random() * (maxC - minC) + minC);
    coinsY[0] = Math.floor(Math.random() * (maxC - minC) + minC);
    coinsY[1] = Math.floor(Math.random() * (maxC - minC) + minC);
    coinsY[2] = Math.floor(Math.random() * (maxC - minC) + minC);
    coinsY[3] = Math.floor(Math.random() * (maxC - minC) + minC);
    coinsY[4] = Math.floor(Math.random() * (maxC - minC) + minC);
}

randomCords();

function randomNumber0to500() {
    return Math.floor(Math.random() * 500);
}

function drawLine() {
    ctx.beginPath();
    ctx.fillRect(linePosX[0], linePosY[0], 10, 10);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawCoins() {
    ctx.beginPath();
    ctx.arc(coinsX[0], coinsY[0], points, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(coinsX[1], coinsY[1], points, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(coinsX[2], coinsY[2], points, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(coinsX[3], coinsY[3], points, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(coinsX[4], coinsY[4], points, 0, 2 * Math.PI);
    ctx.stroke();
}

function draw() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.font = "20px Calibri";
    ctx.fillText(`Points: ${points}`,415,25);
    drawLine();         // Tegner linje
    drawCoins();
    if (rightPressed) {
        dx = 2;
        dy = 0;
    } else if (leftPressed) {
        dx = -2;
        dy = 0;
    } else if (upPressed) {
        dx = 0;
        dy = -2;
    } else if (downPressed) {
        dx = 0;
        dy = 2;
    } else if (!rightPressed || !leftPressed || !upPressed || !downPressed) {
        dx = 0;
        dy = 0;
    }

    let coinX1Pos = [coinsX[0] - 10, coinsX[0] - 9, coinsX[0] - 8, coinsX[0] - 7, coinsX[0] - 6, coinsX[0] - 5, coinsX[0] - 4, coinsX[0] - 3, coinsX[0] - 2, coinsX[0] - 1, coinsX[0] + 1, coinsX[0] + 2, coinsX[0] + 3, coinsX[0] + 4, coinsX[0] + 5, coinsX[0] + 6, coinsX[0] + 7, coinsX[0] + 8, coinsX[0] + 9, coinsX[0] + 10];
    let coinY1Pos = [coinsY[0] - 10, coinsY[0] - 9, coinsY[0] - 8, coinsY[0] - 7, coinsY[0] - 6, coinsY[0] - 5, coinsY[0] - 4, coinsY[0] - 3, coinsY[0] - 2, coinsY[0] - 1, coinsY[0] + 1, coinsY[0] + 2, coinsY[0] + 3, coinsY[0] + 4, coinsY[0] + 5, coinsY[0] + 6, coinsY[0] + 7, coinsY[0] + 8, coinsY[0] + 9, coinsY[0] + 10];

    let coinX2Pos = [coinsX[1] - 10, coinsX[1] - 9, coinsX[1] - 8, coinsX[1] - 7, coinsX[1] - 6, coinsX[1] - 5, coinsX[1] - 4, coinsX[1] - 3, coinsX[1] - 2, coinsX[1] - 1, coinsX[1] + 1, coinsX[1] + 2, coinsX[1] + 3, coinsX[1] + 4, coinsX[1] + 5, coinsX[1] + 6, coinsX[1] + 7, coinsX[1] + 8, coinsX[1] + 9, coinsX[1] + 10];
    let coinY2Pos = [coinsY[1] - 10, coinsY[1] - 9, coinsY[1] - 8, coinsY[1] - 7, coinsY[1] - 6, coinsY[1] - 5, coinsY[1] - 4, coinsY[1] - 3, coinsY[1] - 2, coinsY[1] - 1, coinsY[1] + 1, coinsY[1] + 2, coinsY[1] + 3, coinsY[1] + 4, coinsY[1] + 5, coinsY[1] + 6, coinsY[1] + 7, coinsY[1] + 8, coinsY[1] + 9, coinsY[1] + 10];

    let coinX3Pos = [coinsX[2] - 10, coinsX[2] - 9, coinsX[2] - 8, coinsX[2] - 7, coinsX[2] - 6, coinsX[2] - 5, coinsX[2] - 4, coinsX[2] - 3, coinsX[2] - 2, coinsX[2] - 1, coinsX[2] + 1, coinsX[2] + 2, coinsX[2] + 3, coinsX[2] + 4, coinsX[2] + 5, coinsX[2] + 6, coinsX[2] + 7, coinsX[2] + 8, coinsX[2] + 9, coinsX[2] + 10];
    let coinY3Pos = [coinsY[2] - 10, coinsY[2] - 9, coinsY[2] - 8, coinsY[2] - 7, coinsY[2] - 6, coinsY[2] - 5, coinsY[2] - 4, coinsY[2] - 3, coinsY[2] - 2, coinsY[2] - 1, coinsY[2] + 1, coinsY[2] + 2, coinsY[2] + 3, coinsY[2] + 4, coinsY[2] + 5, coinsY[2] + 6, coinsY[2] + 7, coinsY[2] + 8, coinsY[2] + 9, coinsY[2] + 10];

    let coinX4Pos = [coinsX[3] - 10, coinsX[3] - 9, coinsX[3] - 8, coinsX[3] - 7, coinsX[3] - 6, coinsX[3] - 5, coinsX[3] - 4, coinsX[3] - 3, coinsX[3] - 2, coinsX[3] - 1, coinsX[3] + 1, coinsX[3] + 2, coinsX[3] + 3, coinsX[3] + 4, coinsX[3] + 5, coinsX[3] + 6, coinsX[3] + 7, coinsX[3] + 8, coinsX[3] + 9, coinsX[3] + 10];
    let coinY4Pos = [coinsY[3] - 10, coinsY[3] - 9, coinsY[3] - 8, coinsY[3] - 7, coinsY[3] - 6, coinsY[3] - 5, coinsY[3] - 4, coinsY[3] - 3, coinsY[3] - 2, coinsY[3] - 1, coinsY[3] + 1, coinsY[3] + 2, coinsY[3] + 3, coinsY[3] + 4, coinsY[3] + 5, coinsY[3] + 6, coinsY[3] + 7, coinsY[3] + 8, coinsY[3] + 9, coinsY[3] + 10];

    let coinX5Pos = [coinsX[4] - 10, coinsX[4] - 9, coinsX[4] - 8, coinsX[4] - 7, coinsX[4] - 6, coinsX[4] - 5, coinsX[4] - 4, coinsX[4] - 3, coinsX[4] - 2, coinsX[4] - 1, coinsX[4] + 1, coinsX[4] + 2, coinsX[4] + 3, coinsX[4] + 4, coinsX[4] + 5, coinsX[4] + 6, coinsX[4] + 7, coinsX[4] + 8, coinsX[4] + 9, coinsX[4] + 10];
    let coinY5Pos = [coinsY[4] - 10, coinsY[4] - 9, coinsY[4] - 8, coinsY[4] - 7, coinsY[4] - 6, coinsY[4] - 5, coinsY[4] - 4, coinsY[4] - 3, coinsY[4] - 2, coinsY[4] - 1, coinsY[4] + 1, coinsY[4] + 2, coinsY[4] + 3, coinsY[4] + 4, coinsY[4] + 5, coinsY[4] + 6, coinsY[4] + 7, coinsY[4] + 8, coinsY[4] + 9, coinsY[4] + 10];

    if(linePosX[0] == -3 || linePosY[0] == -1){
        alert('Game over')
        document.location.reload();
        clearInterval(interval); // Needed for Chrome to end game
    }

    if      (coinX1Pos.includes(linePosX[0]) && coinY1Pos.includes(linePosY[0])) {
        points += 1;
        coinsX[0] = randomNumber0to500();
        coinsY[0] = randomNumber0to500();
    } else if (coinX2Pos.includes(linePosX[0]) && coinY2Pos.includes(linePosY[0])) {
        points += 1;
        coinsX[1] = randomNumber0to500();
        coinsY[1] = randomNumber0to500();
    } else if (coinX3Pos.includes(linePosX[0]) && coinY3Pos.includes(linePosY[0])) {
        points += 1;
        coinsX[2] = randomNumber0to500();
        coinsY[2] = randomNumber0to500();
    } else if (coinX4Pos.includes(linePosX[0]) && coinY4Pos.includes(linePosY[0])) {
        points += 1;
        coinsX[3] = randomNumber0to500();
        coinsY[3] = randomNumber0to500();
    } else if (coinX5Pos.includes(linePosX[0]) && coinY5Pos.includes(linePosY[0])) {
        points += 1;
        coinsX[4] = randomNumber0to500();
        coinsY[4] = randomNumber0to500();
    }

    linePosX[0] += dx;  // Tilføjer dx til linjens start-x-position 
    linePosX[1] += dx;  // Tilføjer dx til linjens slut-x-position
    linePosY[0] += dy;  // Tilføjer dx til linjens start-x-position 
    linePosY[1] += dy;  // Tilføjer dx til linjens slut-x-position

}
const interval = setInterval(draw, 20);