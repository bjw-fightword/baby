$(function(){
	var pages = $(".main-wrp");
	var btn = $(".babypages");
	var index = 0;
	function lunbo(type){
		if(type == 'r'){
			index ++;
			if(index >= pages.length){
				index = 0 ;
			}
		}
		else if(type == 'l'){
			index -- ;
			if(index <= -1){
				index = pages.length-1;
			}
		}
		pages.hide();
		pages.eq(index).fadeIn();
		btn.css({background:'#fff'});
		btn.eq(index).css({background:'#757575'});
	}
	var t = setInterval(function(){
		lunbo("r");
	},10000);
	$(".css3gallery").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			lunbo('r')
		},10000)
	})
	$(".arrow-left").click(function(){
		lunbo('l');
	})
	$(".arrow-right").click(function(){
		lunbo('r');
	})
	btn.click(function(){
		var index1 = $(this).index();
		pages.hide();
		pages.eq(index1).fadeIn();
		btn.css({background:'#fff'});
		btn.eq(index1).css({background:'#757575'});
		index=$(this).index();
	})
})