$(document).ready(function(){
	//	地址的弹框的文本框
    $(".tan-input ").focus(function(){
     	  $(this).addClass("border");
     	  //$(this).css({"border":"1px solid red"});
     })
     
     $(".tan-input ").blur(function(){
     	  $(this).removeClass("border");
     	  //$(this).css({"border":"1px solid #808080"});
     })
})
