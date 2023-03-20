class Player {
    constructor ( x, w, h, vx, vy ) {
        this.w = w;
        this.h = h;

        this.x = x;
        this.y = ( canvas.height / 2 ) - ( this.h / 2 );

        this.vx = vx;
        this.vy = vy;
    }

    move () {
        const canvasLocation = canvas.getBoundingClientRect ();
        let mouseLocation;
        
        $ ( "canvas" ).mousemove ( e => {
            mouseLocation = e.clientY - canvasLocation.y;
            this.y = mouseLocation - ( this.h ) * 7.5;
        } );
    }

    edge () {
        if ( this.y < 0 )
            this.y = 0;

        if ( this.y + this.h > canvas.height )
            this.y = canvas.height - this.h;
    }

    show () {
        ctx.beginPath ();
        ctx.fillRect ( this.x, this.y, this.w, this.h );
        ctx.stroke ();
    }
}