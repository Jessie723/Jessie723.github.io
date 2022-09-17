
// Room and Ball Dimension Initiation
let roomWidth = 600;
let roomHeight = 500;
let ballWidth = 60;
let ballHeight = 60;

let room = document.getElementById("room");
room.style.width = roomWidth + 'px';
room.style.height = roomHeight + 'px';

let ball = document.getElementById("ball");
ball.style.width = ballWidth + 'px';
ball.style.height = ballHeight + 'px';

// Initializing Ball Physics
// Starting Postition 
let ballX = 0;
let ballY = 0;
let ballXSpeed = 3;
let ballYSpeed = 0;
let gravity = 1.3;

function moveBall() {
    ballYSpeed += gravity;
    ballX += ballXSpeed;
    ballY += ballYSpeed;

    if (ballX < 0 || ballX + ballWidth > roomWidth) {
        if (ballX < 0) {
            ballX = 0;
        } else { 
            ballX = roomWidth - ballWidth;
        } 
        ballXSpeed *= -1;
    }

    if (ballY + ballHeight > roomHeight) {
        if (ballY + ballHeight > roomHeight) {
            ballY = roomHeight - ballHeight;
        }
        ballXSpeed *= 0.99;
        ballYSpeed *= -0.85;
    }
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

setInterval(moveBall, 10);