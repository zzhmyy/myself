

$(document).ready(function(){
	$(".down1 li").hover(function(){
//		alert("11")
	    var index=$(this).index();
//	    alert(index)
		$(".down2").show();
        $(".down2 center").eq(index).show(500).siblings().hide();
       
        
		       
    },function(){
     })
	
//	遮罩
	$(".pop").hover(function(){
		$(".zhezhao").show();
	},function(){
		$(".zhezhao").hide();
	})
	
	
	
	
//	地址的弹框的文本框
    $(".tan-input ").focus(function(){
     	  $(this).addClass("border");
     	  //$(this).css({"border":"1px solid red"});
     })
     
     $(".tan-input ").blur(function(){
     	  $(this).removeClass("border");
     	  //$(this).css({"border":"1px solid #808080"});
     })
//	搜索框的下拉菜单

    $(".dropdown-menu > li").each(function(){
    	$(this).click(function(){
    		var a = $(this).text();
    		$(this).parent().prev().children("font").text(a);   		    		
    	})
    })
     
	
	//轮播左右点击  
			$('.lunbo-img').mouseenter(function () {
		        $(this).find("font").show();
		    });
		    $('.lunbo-img').mouseleave(function () {
		        $('.lunbo-img font').hide();
		    });


             $('.img_btn-l').click(function () {
		     	var $b = parseInt($(this).parent().scrollLeft());
		     	//alert($b)
		     	
		     	if ($b == 0) {
		     		return false;
		     	} else{
		     		$(this).parent().animate({scrollLeft: $b-1430+'px'},2000);	
		     	}
		    }); 
		    
		    //	左右滑动轮播  两个块
		    $('.img_btn-r').click(function () {
		    	var $b = parseInt($(this).parent().scrollLeft());
		    	if ($b == 1340) {
		    		 return false;
		    	} else{
		    		$(this).parent().animate({scrollLeft: '1340px'},2000);
		    	}
		      
		    });
		    
		     
		    
//		   左右滑动轮播  四个块
		    $('.img_btn-2').click(function () {
		    	var $b = parseInt($(this).parent().scrollLeft());
		    	//alert($b)
		    	
		    	if ($b == 5360) {
		    		 return false;
		    	} else{
		    		$(this).parent().animate({scrollLeft: $b+1430+'px'},2000);
//		    		$(this).parent().animate({scrollLeft: '5360px'},2000);
		    	}
		      
		    });
		    
		    
//		      左右滑动轮播  三个块
		    $('.img_btn-3').click(function () {
		    	var $b = parseInt($(this).parent().scrollLeft());
		    	//alert($b)
		    	
		    	if ($b == 4020) {
		    		 return false;
		    	} else{
		    		$(this).parent().animate({scrollLeft: $b+1430+'px'},2000);
//		    		$(this).parent().animate({scrollLeft: '5360px'},2000);
		    	}
		      
		    });

            
//          遮罩
//       $(".departmen").hover(function(){
//       	$(this).parent().siblings().show();
//       })
      


   })	

