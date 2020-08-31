$( document ).ready( onReady );

function onReady(){
    $( document ).on( 'click', '.generateBtn', generate );
    $( document ).on( 'click', '.yellowBtn', backgroundYellow );
    $( document ).on( 'click', '.removeBtn', removeDiv );
} // end onReady

// generate the divs
function generate(){
    console.log( 'in generate' );
    // append div with p tag and buttons
    $( '.block' ).append(`
        <div class="div">
            <p class="count"></p>
            <button class="yellowBtn">Yellow</button>
            <button class="removeBtn">Remove</button>
        </div>
    `)
    // background color red
    $( '.div' ).css( 'background-color', 'red' );

    // call incrementing function
    incrementing();
} // end generate

// yellow button background color switch
function backgroundYellow(){
    $( '.div' ).css( 'background-color', 'yellow' );
} // end backgroundYellow

// displays count
let number = 0;
function incrementing(){
    number++;
    $( '.count' ).append( number )
} // end incrementing

// remove div
function removeDiv(){
    $( '.div' ).remove();
} // end removeDiv