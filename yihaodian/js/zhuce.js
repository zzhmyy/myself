$(function(){
	$(".down-list").hover(function(){
		$(this).children("ul").show();
	},function(){
		$(this).children("ul").hide();
	})
	
//	注册的文本框
// 第一个
	$(".content-box1 input").focus(function(){		
		$(".alert1-2").show("slow");
		$(".txt1").animate({left:"-60px"});
	})
	
	$(".content-box1 input").blur(function(){
		$(this).css("border","2px solid red");
		$(".alert1-2").hide("slow");
		$(".alert1-1").show("slow");		
	})
	
// 第二个
	$(".content-box2 input").focus(function(){		
		$(".alert2-2").show("slow");
		$(".txt2").animate({left:"-60px"});
	})
	
	$(".content-box2 input").blur(function(){
		$(this).css("border","2px solid red");
		$(".alert2-2").hide("slow");
		$(".alert2-1").show("slow");		
	})
// 第三个	
	$(".content-box3 input").focus(function(){		
		$(".alert3-2").show("slow");
		$(".txt3").animate({left:"-60px"});
	})
	
	$(".content-box3 input").blur(function(){
		$(this).css("border","2px solid red");
		$(".alert3-2").hide("slow");
				
	})
	
// 第四个
   $(".content-box4 input").focus(function(){		
		$(".alert4-2").show("slow");
		$(".txt4").animate({left:"-60px"});
		
		
	})
	
	$(".content-box4 input").blur(function(){
		$(this).css("border","2px solid red");
		$(".alert4-2").hide("slow");
		$(".alert4-1").show("slow");		
	})

  // 第五个
	 $(".content-box5 input").focus(function(){		
		$(".alert5-2").show("slow");
		$(".txt5").animate({left:"-60px"});	
	})
	$(".content-box5 input").blur(function(){
		$(this).css("border","2px solid red");
		$(".alert5-2").hide("slow");	
	})

	//	注册的文本框结束
	
	
	
//背景图片的淡入淡出
    var count = 0;
    var timer = null;
    function fade(){
    	$(".background-img div").fadeOut(3000);
    	$(".background-img div").eq(count).fadeIn(3000);
    	$(".background-img div").eq(count+1).fadeIn(3000);
    }
    
    function time(){
    	count ++;
    	if(count+1 >= $(".background-img div").length){
    		count = 0;
    	}
    	fade();
    }
    fade();
    timer = setInterval(time, 5000);
   //背景图片的淡入结束 
   
// 弹出广告  
 	$(".ad_exit").click(function(){
 		$(".adv").hide();
 	})

})

