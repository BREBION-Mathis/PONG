function drawStadium () {
    for ( let i = 0 ; i < 10 ; i++ ) {
        ctx.beginPath ();
        ctx.moveTo ( canvas.width / 2, 0 );
        ctx.strokeStyle = "white";
        ctx.lineTo ( canvas.width / 2, canvas.height );
        ctx.stroke ();

        ctx.moveTo ( 0, canvas.height / 4 );
        ctx.lineTo ( canvas.width / 8, canvas.height / 4 );
        ctx.lineTo ( canvas.width / 8, canvas.height - canvas.height / 4 );
        ctx.moveTo ( 0, canvas.height - canvas.height / 4 );
        ctx.lineTo ( canvas.width / 8, canvas.height - canvas.height / 4 );
        ctx.stroke ();

        ctx.beginPath ();
        ctx.arc ( canvas.width / 2, canvas.height / 2, canvas.height / 4, 0, Math.PI * 2, true );
        ctx.stroke ();

        ctx.beginPath ();
        ctx.moveTo ( canvas.width, canvas.height / 4 );
        ctx.lineTo ( ( canvas.width / 8 ) * 7, canvas.height / 4 );
        ctx.lineTo ( ( canvas.width / 8 ) * 7, ( canvas.height / 4 ) * 3 );
        ctx.moveTo ( canvas.width, ( canvas.height / 4 ) * 3 );
        ctx.lineTo ( ( canvas.width / 8 ) * 7, ( canvas.height / 4 ) * 3 );
        ctx.stroke ();

    }
}