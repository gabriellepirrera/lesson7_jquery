/*
    Program Name: Recipe Display Application 
    Author: Gabrielle Pirrera 
    Date: November 18, 2016
    Filename: drill4.js
*/
//displays the next element after the current target
function display(event) {

    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
//$("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
    
}//end of display2

// attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display2);

//change the background color of h3 elements to invoke display function when clicked
$("h3").hover(function() {
    
    $(this).css("background-color", "blue");
    }, function() {
    $(this).css("background-color", "pink");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);