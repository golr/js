jQuery(document).ready(function() {
	initrebang("V2ex");//V2ex
	$('.v2ex').click(function() {
	$(".rebanglist").html(""); initrebang("V2ex");
});
$('.zhihu').click(function() {
	$(".rebanglist").html(""); initrebang("ZhiHu");
});
$('.weibo').click(function() {
	$(".rebanglist").html(""); initrebang("WeiBo");
});
$('.tieba').click(function() {
	$(".rebanglist").html(""); initrebang("TieBa");
});
$('.douban').click(function() {
	$(".rebanglist").html(""); initrebang("DouBan");
});
$('.tianya').click(function() {
	$(".rebanglist").html(""); initrebang("TianYa");
});
$('.hupu').click(function() {
	$(".rebanglist").html(""); initrebang("HuPu");
});
$('.baidu').click(function() {
	$(".rebanglist").html(""); initrebang("BaiDu");
});
$('.36kr').click(function() {
	$(".rebanglist").html(""); initrebang("36Kr");
});
$('.qdaily').click(function() {
	$(".rebanglist").html(""); initrebang("QDaily");
});
$('.guokr').click(function() {
	$(".rebanglist").html(""); initrebang("GuoKr");
});
$('.huxiu').click(function() {
	$(".rebanglist").html(""); initrebang("HuXiu");
});
$('.zhdaily').click(function() {
	$(".rebanglist").html(""); initrebang("ZHDaily");
});
$('.segmentfault').click(function() {
	$(".rebanglist").html(""); initrebang("Segmentfault");
});
$('.wynews').click(function() {
	$(".rebanglist").html(""); initrebang("WYNews");
});
$('.waterandwood').click(function() {
	$(".rebanglist").html(""); initrebang("WaterAndWood");
});
$('.hacpai').click(function() {
	$(".rebanglist").html("");initrebang("HacPai");
});
$('.kd').click(function() {
	$(".rebanglist").html(""); initrebang("KD");
});

$('.weixin').click(function() {
	$(".rebanglist").html(""); initrebang("WeiXin");
});

$('.chiphell').click(function() {
	$(".rebanglist").html(""); initrebang("Chiphell");
});
$('.jiandan').click(function() {
	$(".rebanglist").html(""); initrebang("JianDan");
});
$('.chouti').click(function() {
	$(".rebanglist").html("") ;initrebang("ChouTi");
});
$('.ithome').click(function() {
	$(".rebanglist").html(""); initrebang("ITHome");
});
$('.guanchazhe').click(function() {
	$(".rebanglist").html(""); initrebang("Guanchazhe");
});	
$('.zaker').click(function() {
	$(".rebanglist").html(""); initrebang("Zaker");
});	
$('.pengpai').click(function() {
	$(".rebanglist").html(""); initrebang("Pengpai");
});	
$('.shejipi').click(function() {
	$(".rebanglist").html(""); initrebang("Shejipi");
});	
function initrebang(name){
		 $.ajax({
           type : "GET",
           url : "/shuju/rebang/"+name,
           success : function(result) {
              // console.log(result)
			   var obj =eval(result)
			 
				 $.each(obj,function (index) {
				// console.log(obj[index])
				 var html='<div class="m-timeline-3__item m-timeline-3__item--info">'+
							'<span class="m-timeline-3__item-time">'+(index+1)+'</span> '+
							'<div class="m-timeline-3__item-desc">	'	+					 
								'<span class="m-timeline-3__item-text">'+
								'<a target="_blank" href="'+obj[index]['url']+'" class=""style="color:#3f4047;font-size: 1.2rem;">'+
								obj[index]['title']+
								'</a>'+
								'</span><br>'+
								 
							'</div>'+
						'</div>'
					$(".rebanglist").append(html)  
				 });
				 
            }
            
            
        });
	};	

	
	
	
});