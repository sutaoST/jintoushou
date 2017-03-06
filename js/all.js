
window.onresize=window.onload=window.onscroll=function(){
	
	var obox=document.getElementById('sidebar');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var h=(document.documentElement.clientHeight-obox.offsetHeight)/2;
	obox.style.top=h+scrollTop+'px';	
}

$(function(){
	$('#sidebar li').hover(function(){
		$(this).children('.menu').show('fast');
		},function(){
		 $(this).children('.menu').hide();
	});	
	//返回顶部
	$('#top').click(function(){
		
		$('html,body').animate({'scrollTop':0},1000);
		
		return false;
	});
	

});

/*
window.onload=window.onscroll=function(){

	var dainji=document.getElementById('dianji');
	var sctolltop=document.documentElement.scrollTop||document.body.scrollTop;

	var timer=null;//创建一个空的定时器变量
	
	dianji.onclick=function(){
		timer=setInterval(function(){
		var sctolltop=document.documentElement.scrollTop||document.body.scrollTop;
		var speed=Math.floor(-sctolltop/8);
		if(sctolltop==0){
			clearInterval(timer);
			}
		 document.body.scrollTop=document.documentElement.scrollTop=sctolltop+speed;
			},50)
	}
}
*/
