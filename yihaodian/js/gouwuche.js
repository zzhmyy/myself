$(document).ready(function(){
	// 弹出广告  
	 	$(".ad_exit").click(function(){
	 		$(".adv").hide();
	 	})
//	 顶部导航条	
	$(".nav-right ul li").hover(function(){
	$(this).children("ul").show();
    },function(){
	$(this).children("ul").hide();
  })
	
	$('.down-list').hover(function () {
	     $(this).css("background","white");
	     $(this).find("img").addClass("xwcms1");
		}, function () {
	    $(this).css("background","#f4f4f4");
		$(this).find("img").removeClass("xwcms1");
		});
		
	$('.down-list2').hover(function () {
	     $(this).css("background","white");
	      $(this).find("img").addClass("xwcms1");
		}, function () {
	    $(this).css("background","#f4f4f4");
	    $(this).find("img").removeClass("xwcms1");
		});  
		
//	地址栏的选项卡	
     $(".address").click(function(){
     	$(".xuanka").show();
     });
     
     //   点击X关闭窗口
     $(".xuanka-similar img").click(function(){
     	$(".xuanka").hide();
     })
     
     $(".xuanka-similar ul li").click(function(){
     	$(this).css({"background-color":"white","padding-bottom":"1px"})
     	$(this).siblings().css({"background-color":"#F8F8F8","padding-bottom":"0px"})
     	var index = $(this).index();
     	$(".xuanka").children("div").eq(index).show();
     	if(index == 0){
     		$(".xuanka").children("div").eq(index).nextAll().hide();
     	}else if(index == 1){
     		$(".xuanka").children("div").eq(index).prev().hide();
     		$(".xuanka").children("div").eq(index).next().hide();
     	}else if(index == 2){
     		$(".xuanka").children("div").eq(index).prev().hide();
     		$(".xuanka").children("div").eq(index).prev().prev().hide();
     	}
     	
     });
     
     //轮播左右点击  
			
     $('.lunbo').hover(function () {
		        $('.img_car_l').show();
		        $('.img_car_r').show();
		    },function(){
		    	$('.img_car_l').hide();
		        $('.img_car_r').hide();
		    });
		    
		     $('.img_car_l').click(function () {
		     	var $a = parseInt($('.shop-list').css("marginLeft"));
		     	//alert($a)
		     	if ($a == 0) {
		     		return;
		     	} else{
		     		$('.shop-list').animate({marginLeft: $a+1220+'px'},2000);
		     		var $c = parseInt($('.shop-list').css("marginLeft"));
		    		 var $b =  parseInt(Math.abs(($c)/1220)) -1;
		    		 //alert($b)
		     		$(".hot li").eq($b).css({"background":"#FE3C3A","color":"white","padding-left":"7px"}).siblings().css({"background":"#CCCCCC","color":"black","padding-left":"0px"});
		     	}
		    });
		    $('.img_car_r').click(function () {
		    	var $a = parseInt($('.shop-list').css("marginLeft"));
		    	if ($a == -3660) {
		    		return;
		    	} else{
		    		 $('.shop-list').animate({marginLeft:$a-1220+'px'},2000);
		    		 var $c = parseInt($('.shop-list').css("marginLeft"));
		    		 var $b =  parseInt(Math.abs(($c)/1220)) +1;
		    		 //alert($b)
		     		$(".hot li").eq($b).css({"background":"#FE3C3A","color":"white","padding-left":"7px"}).siblings().css({"background":"#CCCCCC","color":"black","padding-left":"0px"});
		    	}
		    });
		    
		    $(".hot li").click(function(){
		    	var $a = $(this).index();
		    	 $('.shop-list').animate({marginLeft:-$a*1220+'px'},2000);
		    	 $(this).css({"background":"#FE3C3A","color":"white","padding-left":"7px"}).siblings().css({"background":"#CCCCCC","color":"black","padding-left":"0px"});
		    })
		    


     
     
     
     
	})	