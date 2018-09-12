
$(document).ready(function(){
	
	
		// 弹出广告  
	 	$(".ad_exit").click(function(){
	 		$(".adv").hide();
	 	})
 	
 	//顶部下拉导航
			 $('.top_r>ul>li').hover(function () {
	        $(this).children('ul').show().addClass('li-bgc');
			}, function () {
			    $(this).children('ul').hide();
			    });
			 
			 $('#user1').hover(function () {
	        $(this).css("background","white");
			}, function () {
			   $(this).css("background","#F9F9F9");
			    
			    }); 
			 
			  $('#user2').hover(function () {
	        $(this).css("background","white");
			}, function () {
			   $(this).css("background","#F9F9F9");
			    
			    }); 
			    
			    
			    
	    //1111111111111加
			$(".shopping_car_dis ul li #add").click(function(){
				var t = $(this).parent().find('input[class*=num]');
				if(t.val()==""||undefined||null){
					t.val(0);
				}
				t.val(parseInt(t.val()) + 1)
				var s = 0;
				var p = $(this).parent().parent().find('nav[class*=price1]').html();
				
				if(parseInt(t)==""||undefined||null || isNaN(t) || isNaN(parseInt(t))){
					t=0;
				}
				var a = $(this).parent().find('input[class*=num]').val();
				s = parseInt(a) * parseFloat(p);
				s = s.toFixed(2);
			var m = $(this).parent().parent().find('span[class*=meny]');
			m.html("¥"+s);
			})
			//111111111111减
			$(".shopping_car_dis ul li #dow").click(function(){
				var t = $(this).parent().find('input[class*=num]');
				if (t.val()<=1) {
					return;
				} else{
					if(t.val()==""||undefined||null){
					t.val(0);
				}
				t.val(parseInt(t.val()) - 1)
				var s = 0;
				var p = $(this).parent().parent().find('nav[class*=price1]').html();
				
				if(parseInt(t)==""||undefined||null || isNaN(t) || isNaN(parseInt(t))){
					t=0;
				}
				var a = $(this).parent().find('input[class*=num]').val();
				s = parseInt(a) * parseFloat(p);
				s = s.toFixed(2);
				var m = $(this).parent().parent().find('span[class*=meny]');
				m.html("¥"+s);
				}
			})
			
			//出现购物车
			$(".shopping_car").hover(function(){
				$(".shopping_car_dis").show();
			},function(){
				$(".shopping_car_dis").hide();
			})
			//购物车右上角删除
			$(".shopping_car_li_dow").click(function(){
				$(this).parent().parent().parent("li").remove("li");
			})
			
			//下拉所有分类
			$("#shopping_select_l").hover(function(){
				$(".banner_l").show();
			},function(){
				$(".banner_l").hide();
			})
			
			//关注爱心上下移动
			$(".deta_lef3_xin").hover(function(){
				$('.deta_lef3_xin ul').animate({marginTop: -18+'px'},1000);
			},function(){
				$('.deta_lef3_xin ul').animate({marginTop: 0+'px'},1000);
			})
			
			//图片移动显示
			$(".deta_lef2 ul li").hover(function(){
				var $a = $(this).index();
				$(this).children().css({"border":"1px solid black"});
				$(this).siblings().children().css({"border":"1px solid white"});
				$(".deta_lef_img ul li").eq($a).show().siblings().hide();
			})
			
			//显示优惠券
			$(".deta_cent4_fang").click(function(){
				$(".deta_cent4_happy").show();
			})
			$(".deta_cent4_happy p font").click(function(){
				$(".deta_cent4_happy").hide();
			})
			
			//111111111111111111111111111111111111111选项卡
			
			$(".car_xunka_1 ul li").click(function(){
				$(this).css({"padding-bottom":"1px","background-color":"white"});
				$(this).siblings().css({"padding-bottom":"0px","background-color":"#f8f8f8"});
				var index = $(this).index();
				$(".car_xunka").children("div").eq(index).show();
				if (index == 0) {
					$(".car_xunka").children("div").eq(index).nextAll().hide();
				} else if (index == 1) {
					$(".car_xunka").children("div").eq(index).prev().hide();
					$(".car_xunka").children("div").eq(index).next().hide();
				}else{
					index = index - 1;
					$(".car_xunka").children("div").eq(index).prev().hide();
					$(".car_xunka").children("div").eq(index).hide();
				}
			})
			//11111111111111111111111111111111111
			$(".car_xunka_1 img").click(function(){
				$(".car_xunka").hide();
			})
			
			$(".car_ka_1").click(function(){
				$(".car_xunka").show();
			})
			
			//数量加减
			//1111111111111加
			$("#num_add").click(function(){
				var t = $(this).parent().prev();
				if(t.val()==""||undefined||null){
					t.val(0);
				}
				t.val(parseInt(t.val()) + 1);
				$("#num_dow").children().attr("src","img/txt_dow2.png")
			})
			//111111111111减
			$("#num_dow").click(function(){
				var t = $(this).parent().prev();
				if (t.val()<=1) {
					return;
				} else{
					if(t.val()==""||undefined||null){
					t.val(0);}
				t.val(parseInt(t.val()) - 1);
				}
				if (t.val()==1) {
					$("#num_dow").children().attr("src","img/txt_dow1.png");
				}
			})
			
			//换一批
			var $chang = 1;
			
			$(".deta_rig1 div").click(function(){
				$(".deta_xiang_rig ul li").hide();
				var $num1 =  Math.floor(Math.random()*5+1);
				var $num2 =  Math.floor(Math.random()*5+1);

				while ($num2 == $num1){
					var $num2 =  Math.floor(Math.random()*5+1);
				}
				var $num3 =  Math.floor(Math.random()*5+1);
				while ($num3 == $num1||$num3 == $num2){
					var $num3 =  Math.floor(Math.random()*5+1);
				}
				console.log($num1)
				console.log($num2)
				console.log($num3)
				$(".deta_xiang_rig ul li").eq($num1).show();
				$(".deta_xiang_rig ul li").eq($num2).show();
				$(".deta_xiang_rig ul li").eq($num3).show();
			})
			//点击更换评价
			$(".detabod_xuan4_c ul li").click(function(){
				$(this).addClass("detabod_xuan4_e").siblings().removeClass("detabod_xuan4_e");
				var $a = $(this).index();
				$("#pingjia").children().eq($a).show().siblings().hide();
			})
			
			//点击更换商品介绍页面
			$(".deta_bod_rig1 ul li").click(function(){
				$(this).css({"background":"red","color":"white"}).siblings().css({"background":"#efeff4","color":"black"});
				var $a = $(this).index();
				switch($a){
					case 0:
						$(".deta_bod_xuan1").show()
						$(".deta_bod_xuan2").show()
						$(".deta_bod_xuan3").show()
						$(".deta_bod_xuan4").show();
						break;
					case 1:
						$(".deta_bod_xuan1").hide()
						$(".deta_bod_xuan2").hide()
						$(".deta_bod_xuan3").hide()
						$(".deta_bod_xuan4").show();
						break;
					case 2:
						$(".deta_bod_xuan1").hide()
						$(".deta_bod_xuan2").show()
						$(".deta_bod_xuan3").show()
						$(".deta_bod_xuan4").show();
						break;
					case 3:
						$(".deta_bod_xuan1").hide()
						$(".deta_bod_xuan2").hide()
						$(".deta_bod_xuan3").show()
						$(".deta_bod_xuan4").show();
						break;
				}
			
			
			
			
			})
			
			
						
			//放大镜
			$(".jqzoom").jqueryzoom({
			    xzoom: 560, //放大图的宽度(默认是 200)
			    yzoom: 400, //放大图的高度(默认是 200)
			    offset: -10, //离原图的距离(默认是 10)
			    position: "right", //放大图的定位(默认是 "right")
			    preload: 1
			  });
})