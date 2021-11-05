function play () {
    $ ( ".welcome" ).css ( { display: "none" } );
    $ ( ".play" ).css ( { display: "block" } );
    $ ( ".count" ).css ( { display: "block" } );
    $ ( "canvas" ).css ( { display: "block" } );
    $ ( ".scoreboard" ).css ( { display: 'block' } );

    timer = setInterval ( counter, 1000 );
}

function replay () {
    $ ( ".welcome" ).css ( { display: "none" } );
    $ ( ".play" ).css ( { display: "block" } );
    $ ( ".count" ).css ( { display: "block" } );
    $ ( "canvas" ).css ( { display: "block" } );
    $ ( ".scoreboard" ).css ( { display: 'block' } );
    $ ( ".buttonReplay" ).css ( 'display', 'none' );

    timer = setInterval ( counter, 1000 );
}

function counter () {
    count -= 1;
    if ( count >= 0 ) {
        h1Count.innerHTML = count.toString ();
    } else {
        clearInterval ( timer );
        
        $ ( ".play" ).css ( { display: "none" } );
        render ();
    }
}