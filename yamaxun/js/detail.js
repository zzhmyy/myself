/*使用jqzoom*/
$(function() {
  $(".jqzoom").jqueryzoom({
    xzoom: 200, //放大图的宽度(默认是 200)
    yzoom: 200, //放大图的高度(默认是 200)
    offset: 10, //离原图的距离(默认是 10)
    position: "right", //放大图的定位(默认是 "right")
    preload: 1
  });
  
  //放大镜的图片移动显示
	$(".img-sl ul li").hover(function(){
	var $a = $(this).index();
	$(this).children().css({"border":"2px solid orange"});
	$(this).siblings().children().css({"border":"2px solid white"});
	$(".big-img ul li").eq($a).show().siblings().hide();
	
	})	
	
	
//	星星进度条
  
  $(".xingxing").parent().hover(function() {
           $(".jindu1").animate({"width":"80%"},100)
				   $(".jindu2").animate({"width":"60%"},100)
				   $(".jindu3").animate({"width":"30%"},100)
				   $(".jindu4").animate({"width":"25%"},100)
				   $(".jindu5").animate({"width":"45%"},100)
   }, function() {
           $(".jindu1").animate({"width":"0%"},100)
				   $(".jindu2").animate({"width":"0%"},100)
				   $(".jindu3").animate({"width":"0%"},100)
				   $(".jindu4").animate({"width":"0%"},100)
				   $(".jindu5").animate({"width":"0%"},100)
        
   });
  
   //improtant弹出框的关闭按钮
    $(".important").hover(function(){
    	$(".imp").show();
    },function(){
    	$(".imp").hide();
    })
   
    $(".pop-list span").click(function(){
    	  $(this).parent().parent().hide();
    })

  
  
  
})