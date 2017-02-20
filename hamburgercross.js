/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var objekt;
var flaga = false;
 function myFunction(x) {
     objekt = x;
   
}

$(document).ready(function(){
    $( window ).resize(function() {
        
       if(($( window ).width()>710) && (flaga)){
        $( ".menu" ). hide();
        flaga = false;
        objekt.classList.toggle("change");
       } 
        
        
    });
$(".menu").hide();
$( ".cross" ).hide();
$( ".menu" ).hide();

$( ".hamburger" ).click(function() {
     objekt.classList.toggle("change");
     flaga = !flaga;
$( ".menu" ).slideToggle( "slow", function() {

});
});

$( ".cross" ).click(function() {
    flaga = 0;
     objekt.classList.toggle("change");
$( ".menu" ).slideToggle( "slow", function() {

});
});
});