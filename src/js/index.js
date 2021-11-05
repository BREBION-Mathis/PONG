const player = new Player ( 5, 2, canvas.height / 5, 1, 1 ),
player2 = new Player ( ( canvas.width / 3 ) * 2, 2, canvas.height / 5, 1, 1 );

const IA = new Player ( canvas.width - 7, 2, canvas.height / 5, 1, 1 ),
IA2 = new Player ( ( canvas.width / 3 ), 2, canvas.height / 5, 1, 1 );

const ball = new Ball ( canvas.width / 2, canvas.height / 2, 7, 1, 1 );

function edgeBallPlayer () {
    if ( ball.x <= ( player.x + player.w ) && ball.y + ball.r >= ( player.y ) && ball.y <= ( player.y + player.h ) ) {
        ball.vx *= -1.05;
        touchP = true;
        touchIA = false;
        sound = true;
    }
}

function edgeBallPlayer2 () {
    if ( touchP && ball.x + ball.r >= player2.x && ball.x <= player2.x + player2.w && ( ball.x + ball.r ) >= player2.x && ball.y + ball.r >= ( player2.y ) && ball.y <= (player.y + player.h) ) {
        ball.vy *= -Math.PI / 3;
        touchP = false;
        sound = true;
    }
}

function edgeBallIA () {
    if ( ball.x + ball.r >= IA.x && ball.y < ( IA.y + IA.h ) && ball.y + ball.r > IA.y ) {
        ball.vx *= -1.05;
        touchIA = true;
        touchP = false;
        sound = true;
    }
}

function edgeBallIA2 () {
    if ( touchIA && ball.x < IA2.x + IA2.w && ball.x + ball.r > IA2.x && ball.x < ( IA2.x + IA2.w) && ball.y <= IA2.y + IA2.h && ball.y + ball.r > IA2.y ) {
        ball.vy *= -Math.PI / 3;
        touchIA = false;
        sound = true;
    }
}


function render () {
    ctx.clearRect ( 0, 0, canvas.width, canvas.height );
    requestAnimationFrame ( render );

    drawStadium ();

    ball.move ();
    ball.edge ();

    player.show ();
    player.move ();
    player.edge ();

    player2.show ();
    player2.edge ();
    player2.move ();

    IA.show ();
    IA.edge ();

    IA2.show ();
    IA2.edge ();

    edgeBallPlayer ();
    edgeBallPlayer2 ();
    edgeBallIA ();
    edgeBallIA2 ();

    if ( ball.touch ) {
        IA.y = ball.y;
        ball.touch = false;
    }

    IA.y += ball.vy * IALVL;
    IA2.y += ball.vy * IALVL;

    ball.show ();
}