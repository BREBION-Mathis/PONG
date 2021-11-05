const canvas = document.querySelector ( "canvas" ),
ctx = canvas.getContext ( "2d" ),
h1Count = document.getElementById ( "count" ),
score1P = document.getElementById ( "score1" ),
score2P = document.getElementById ( "score2" );

let touchP = false,
touchIA = false,
IALVL = 0.80;

let count = 3, timer, score1 = 0, score2 = 0;