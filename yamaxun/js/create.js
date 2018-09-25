$(document).ready(function(){
	$("input").focus(function(){
     	  $(this).addClass("border");
     })
     
     $("input").blur(function(){
     	  $(this).removeClass("border");
     })
})