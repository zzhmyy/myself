

$(document).ready(function(){
//	导航条下拉列表
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
//	购物车	
	$(".gouwuche").hover(function(){
	$(".gouwuche-list").show();
    },function(){
	$(".gouwuche-list").hide();
  })
	
//	旋转箭头
//   $(".jiantou1").hover(function(){
//   	$("xwcms").addClass("xwcms1");
//   })
//刷新页面弹出广告
    $(".ad_exit").click(function(){
 		$(".adv").hide();
 	})
	
	//图片轮播
			var count = 0;
		    var timer = null;
		    //
		    function slide() {
		        $('.page_img li').eq(count).show().siblings().hide();
		        //$('.page_con li').eq(count).css('background', '#FE3C3A').siblings().css('background', '#CCCCCC');
		    	$('.page_con li').eq(count).css({"background":"#FE3C3A","color":"white"}).siblings().css({"background":"#CCCCCC","color":"black"});
		    }
		    function time (){
		        count ++;
		        if(count >= $('.page_img li').length){
		            count = 0;
		        }
		        slide();
		    }
		    slide();
		    timer = setInterval(time, 1000);
		    $('.btn-l').click(function () {
		        count--;
		        if (count < 0) {
		            count = $('.page_img li').length - 1;
		        }
		        slide();
		    });
		    $('.btn-r').click(function () {
		        time();
		        return false;
		    });
		    $('.page_con li').mouseenter(function () {
		        clearInterval(timer);
		        count = $(this).index();
		        slide();
		        return false;
		    });
		    $('#banner_center').mouseenter(function () {
		        $('#banner_center span').show();
		        clearInterval(timer);
		        return false;
		    });
		    $('#banner_center').mouseleave(function () {
		        $('#banner_center span').hide();
		        timer = setInterval(time, 1000);
		        return false;
		    });
		    
		    //轮播结束
		    
//		    中间块二的左右轮播
		    
		    $('.img_lrlun').mouseenter(function () {
		        $('.img_lrlun s').show();
		    });
		    $('.img_lrlun').mouseleave(function () {
		        $('.img_lrlun s').hide();
		    });
		     $('.img_btn-l').click(function () {
		     	var $a = parseInt($('.img_lrlun ul').css("marginLeft"));
		     	//alert($a)
		     	if ($a == 987) {
		     		return;
		     	} else{
		     		$('.img_lrlun ul').animate({marginLeft: $a+987+'px'},2000);
		     	}
		    });
		    $('.img_btn-r').click(function () {
		    	var $a = parseInt($('.img_lrlun ul').css("marginLeft"));
		    	//alert($a)
		    	if ($a == -987) {
		    		
		    	} else{
		    		 $('.img_lrlun ul').animate({marginLeft:$a-987+'px'},2000);
		    	}
		      
		    });
		    
		    
		    
		//图片轮番1
		    var count1 = 0;
		    var timer1 = null;
		    function slide1() {
		        $('#foods-img li').eq(count1).show().siblings().hide();
		        $('#foods-con li').eq(count1).css('background', '#FE3C3A').siblings().css('background', '#CCCCCC');
		    }
		 	 function time1 (){
		        count1 ++;
		        if(count1 >= $('#foods-img li').length){
		            count1 = 0;
		        }
		        slide1();
		    }
		    slide1();
		    timer1 = setInterval(time1, 1500);
		     $('#foods_btn-l').click(function () {
		        count1--;
		        if (count1 < 0) {
		            count1 = $('#foods-img li').length - 1;
		        }
		        slide1();
		    });
		    $('#foods_btn-r').click(function () {
		        time1();
		        return false;
		    });
		    $('#foods-con li').mouseenter(function () {
		        clearInterval(timer1);
		        count1 = $(this).index();
		        slide1();
		        return false;
		    });
		    $('#foods_ad_2').mouseover(function () {
		    	 $('#foods_ad_2 font').show();
		        clearInterval(timer1);
		         return false;
		    });
		    $('#foods_ad_2').mouseout(function () {
		        $('#foods_ad_2 font').hide();
		        timer1 = setInterval(time1, 1500);
		        return false;
		    });
		    
		    
		    
		    //图片轮番2
		    var count2 = 0;
		    var timer2 = null;
		    function slide2() {
		        $('#foods-img3 li').eq(count2).show().siblings().hide();
		        $('#foods-con3 li').eq(count2).css('background', '#FE3C3A').siblings().css('background', '#CCCCCC');
		    }
		 	 function time2 (){
		        count2 ++;
		        if(count2 >= $('#foods-img3 li').length){
		            count2 = 0;
		        }
		        slide2();
		    }
		    slide2();
		    timer2 = setInterval(time2, 1500);
		     $('#foods_btn-l2').click(function () {
		        count2--;
		        if (count2 < 0) {
		            count2 = $('#foods-img3 li').length - 1;
		        }
		        slide2();
		    });
		    $('#foods_btn-r2').click(function () {
		        time2();
		        return false;
		    });
		    $('#foods-con3 li').mouseenter(function () {
		        clearInterval(timer2);
		        count2 = $(this).index();
		        slide2();
		        return false;
		    });
		    $('#foods_ad_3').mouseover(function () {
		    	 $('#foods_ad_3 font').show();
		        clearInterval(timer2);
		         return false;
		    });
		    $('#foods_ad_3').mouseout(function () {
		        $('#foods_ad_3 font').hide();
		        timer2 = setInterval(time2, 1500);
		        return false;
		    });
		    
		    
		    
		    
		    //图片轮番3
		    var count3 = 0;
		    var timer3 = null;
		    function slide3() {
		        $('#foods-img4 li').eq(count3).show().siblings().hide();
		        $('#foods-con4 li').eq(count3).css('background', '#FE3C3A').siblings().css('background', '#CCCCCC');
		    }
		 	 function time3 (){
		        count3 ++;
		        if(count3 >= $('#foods-img4 li').length){
		            count3 = 0;
		        }
		        slide3();
		    }
		    slide3();
		    timer3 = setInterval(time3, 1500);
		     $('#foods_btn-l3').click(function () {
		        count3--;
		        if (count3 < 0) {
		            count3 = $('#foods-img4 li').length - 1;
		        }
		        slide3();
		    });
		    $('#foods_btn-r3').click(function () {
		        time3();
		        return false;
		    });
		    $('#foods-con4 li').mouseenter(function () {
		        clearInterval(timer3);
		        count3 = $(this).index();
		        slide3();
		        return false;
		    });
		    $('#foods_ad_4').mouseover(function () {
		    	 $('#foods_ad_4 font').show();
		        clearInterval(timer3);
		         return false;
		    });
		    $('#foods_ad_4').mouseout(function () {
		        $('#foods_ad_4 font').hide();
		        timer3 = setInterval(time3, 1500);
		        return false;
		    });
		    
		
})
