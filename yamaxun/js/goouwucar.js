$(document).ready(function(){
	$(".num-down li").click(function(){
       var b = $(this).find("a").text();
       $(this).parent().siblings("button").text(b);  
       var n = $(".num1").text();
       var p = $(".danjia").text().substring(1);
       var s = n*p;
       s= s.toFixed(2);
       $(".total").text(s);
	})
	
//	轮播
	$('.lnu').mouseenter(function () {
		     $(this).find("font").show();
		});
	$('.lnu').mouseleave(function () {
		   $(this).find("font").hide();
		});
		
	$(".img_btn-l").click(function(){
		var $a = $(this).next().next().children().eq(0).css("display");
		if($a == "block"){
			$(this).next().next().children().eq(0).css("display","none");
		}else{
			$(this).next().next().children().eq(0).css("display","block");
		}
		
		var $b = $(this).next().next().children().eq(1).css("display")
	    if($b == "none"){
			$(this).next().next().children().eq(1).css("display","block")
			
		}else{
		$(this).next().next().children().eq(1).css("display","none")
		}
		
	})
		
		
		$(".img_btn-r").click(function(){
		var $a = $(this).next().children().eq(0).css("display");
		if($a == "block"){
			$(this).next().children().eq(0).css("display","none");
		}else{
			$(this).next().children().eq(0).css("display","block");
		}
		
		var $b = $(this).next().children().eq(1).css("display")
	    if($b == "none"){
			$(this).next().children().eq(1).css("display","block")
			
		}else{
		$(this).next().children().eq(1).css("display","none")
		}
		
	})
//	$('.img_btn-l').click(function(){
//		var $a = $("#lun li").eq(0).css("display");
//		if($a == "block"){
//			$("#lun li").eq(0).css("display","none");
//		}else{
//			$("#lun li").eq(0).css("display","block");
//		}
//		var $b = $("#lun li").eq(1).css("display")
//		if($b == "none"){
//			$("#lun li").eq(1).css("display","block")
//			
//		}else{
//			$("#lun li").eq(1).css("display","none")
//		}

		
//	})
	
//		$(".lun ul li").hover(function(){
//			alert("11")
//		})
    
	
})