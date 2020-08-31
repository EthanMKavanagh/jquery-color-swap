$( document ).ready( onReady );

//Global Variables
let incrementing = 1;
incrementing++;

function onReady(){
    $( document ).on( 'click', '.generateBtn', generate );
    $( document ).on( 'click', 'yellowBtn', backgroundYellow );
} // end onReady

function generate(){
    console.log( 'in generate' );
    $( '.block' ).css( 'background-color', 'red' );
    $( '.block' ).append(`
        <p></p>
        <button class="yellowBtn">Yellow</button>
        <button class="removeBtn">Remove</button>
    `)

    incrementing();
} // end generate

function backgroundYellow(){
    $( '.block' ).css( 'background-color', 'yellow' );
} // end backgroundYellow