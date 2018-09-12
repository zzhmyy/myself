$(function(){
	
		// 弹出广告  
	 	$(".ad_exit").click(function(){
	 		$(".adv").hide();
	 	})
//	下拉框	
	$(".down-list").hover(function(){
		$(this).children("ul").show();
	},function(){
		$(this).children("ul").hide();
	})
	
	$(".center-r input:first").hover(function(){
		$(this).attr("placeholder","");
	},function(){
		$(this).attr("placeholder","邮箱/手机/用户名");
	})
	
	
//	点击弹出中间的字
	$("#check").click(function(){
		if( $("#tip").css("display") == "none"){
			$("#tip").show();
       }else{
       	   $("#tip").css("display","none");
       }
	});
	
//  $(".more-net").toggle(function(){
//  	$(".more1").show();
//  },function(){
//  	$(".more1").hide();
//  });


//  点击弹出各种网站
    $(".more-net").click(function(){
    	if ($(".more1").css("display") == "none") {
    		$(".more1").show();
    	} else{
           // $(".more1").hide();
            $(".more1").css("display","none");

    	}
    	
   
    });
		
})
