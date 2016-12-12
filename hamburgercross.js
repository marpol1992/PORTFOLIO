/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 

$(document).ready(function(){
    $( window ).resize(function() {
       if($( window ).width()>=710){
        $( ".menu" ). hide();
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
       } 
        
        
    });
$(".menu").hide();
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
    
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
});