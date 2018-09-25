$(document).ready(function(){
     $("input").focus(function(){
     	  $(this).addClass("border");
     	  //$(this).css({"border":"1px solid red"});
     })
     
     $("input").blur(function(){
     	  $(this).removeClass("border");
     	  //$(this).css({"border":"1px solid #808080"});
     })
     


     $(".dropdown").click(function(){
    	if ($(".dropdown1").css("display") == "none") {
    		$(".dropdown1").show();
    	} else{
           // $(".more1").hide();
            $(".dropdown1").css("display","none");

    	}
    });
})
