class Ball {
    constructor ( x, y, r, vx, vy ) {
        this.x = x;
        this.y = y;

        this.r = r;

        this.vx = vx;
        this.vy = vy;

        this.touch = false;
    }

    move () {
        this.x += this.vx;
        this.y += this.vy;
    }
    
    edge () {
        if ( this.x > canvas.width + this.r ) {
            
            this.vx = -1;
            this.vy = 1;

            this.vx *= -1;

            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.touch = true;
            score1++;
            fScore ( "1" );
        }
        
        if ( this.y > canvas.height - this.r ) {
            Audioplay ();
            this.vy *= -1;
        }
        
        if ( this.x < 0 ) {
            
            ball.vx = 1;
            ball.vy = 1;

            this.vx *= -1;

            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.touch = true;
            score2++;
            fScore ( "2" );
        }

        if ( this.y < 0 ) {
            Audioplay ();
            this.vy *= -1;
        }
    }

    show () {
        const img = new Image ();

        img.src = "./src/img/ball.png";
        ctx.drawImage ( img, this.x, this.y, this.r, this.r );
        ctx.stroke ();
    }
}