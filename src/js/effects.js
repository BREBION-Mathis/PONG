$ ( '.welcome' ).fadeIn ( 5500 );

setTimeout ( () => {
    $ ( ".welcome" ).css ( { top: '0', bottom: "70%", transition: ".5s" } );
    $ ( ".buttonPlay" ).css ( { transform: "scale(1)", transition: ".5s" } );
}, 2750 );