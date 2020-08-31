$( document ).ready( onReady );

function onReady(){
    $( document ).on( 'click', '.generateBtn', generate );
    $( document ).on( 'click', '.yellowBtn', backgroundYellow );
    $( document ).on( 'click', '.removeBtn', removeDiv );
} // end onReady

function generate(){
    console.log( 'in generate' );
    $( '.block' ).append(`
        <div class="div">
            <p class="count"></p>
            <button class="yellowBtn">Yellow</button>
            <button class="removeBtn">Remove</button>
        </div>
    `)
    $( '.div' ).css( 'background-color', 'red' );

    incrementing();
} // end generate


function backgroundYellow(){
    $( '.div' ).css( 'background-color', 'yellow' );
} // end backgroundYellow


let number = 0;
function incrementing(){
    number++;
    $( '.count' ).append( number )
} // end incrementing

function removeDiv(){
    $( '.div' ).remove();
} // end removeDiv