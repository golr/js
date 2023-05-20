jQuery(document).ready(function() {
	initdujitang();//毒鸡汤
	initgunnews();//滚动新闻
	initwangzhituijian();//网址推荐
	initjingqutuijian();//网址推荐
	initcaipu();//菜谱
	initdianyingziyuanone();//电影资源今天
	inityouhuixinxitaobao();//优惠信息淘宝
	initbaohudongwu();//保护动物
	inityouxisteam();//游戏steam
	initshu();//shu
	
	initdianying();//电影
	initwenzhangtuijian();//文章推荐
	initruanjiantuijiana();//软件推荐
	$('.dujitang').click(function(){
		initdujitang();
	});
	$('.wangzhituijian').click(function(){
		initwangzhituijian();
	});
	$('.jingqutuijian').click(function(){
		initjingqutuijian();
	});
	$('.caipu').click(function(){
		$(".caipulist").html("")
		initcaipu();
	});
	$('.dianyingziyuantwo').click(function(){
		$(".dianyingziyuantwolist").html("")
		initdianyingziyuantwo();
	});
	$('.dianyingziyuanjingpin').click(function(){
		$(".dianyingziyuanjingpinlist").html("")
		initdianyingziyuanjingpin();
	});
	$('.youhuixinxijd').click(function(){
		$(".youhuixinxijdlist").html("")
		inityouhuixinxijd();
	});
	$('.youhuixinxiother').click(function(){
		$(".youhuixinxiotherlist").html("")
		inityouhuixinxiother();
	});
	$('.baohudongwu').click(function(){
		initbaohudongwu();
	});
	$('.youxisteam').click(function(){
		$(".youxisteamlist").html("")
		inityouxisteam();
	});
	$('.youxishouyou').click(function(){
		$(".youxishouyoulist").html("")
		inityouxishouyou();
	});
	$('.youxiduli').click(function(){
		$(".youxidulilist").html("")
		inityouxiduli();
	});
	$('.shu').click(function(){
		$(".shulist").html("")
		initshu();
	});
	
	$('.ruanjiantuijianb').click(function(){
		$(".ruanjiantuijianblist").html("")
		initruanjiantuijianb();
	});
	$('.ruanjiantuijianc').click(function(){
		$(".ruanjiantuijianclist").html("")
		initruanjiantuijianc();
	});
	$('.ruanjiantuijiand').click(function(){
		$(".ruanjiantuijiandlist").html("")
		initruanjiantuijiand();
	});
	$('.ruanjiantuijiane').click(function(){
		$(".ruanjiantuijianelist").html("")
		initruanjiantuijiane();
	});
	$('.ruanjiantuijianf').click(function(){
		$(".ruanjiantuijianflist").html("")
		initruanjiantuijianf();
	});
	$('.dianyingbtn').click(function(){
		//$('.dianying').attr('src',""); 
		initdianying();
	});
	$('.wenzhangtuijian').click(function(){
		$(".wenzhangtuijianlist").html("")
		initwenzhangtuijian();
	});
	function initdujitang(){
		 $.ajax({
           type : "POST",
           url : "/dujitang",
           success : function(result) {
               
				$('.dujitangh3').html(result.data.Content)
            }
            
            
        });
	};
	function initgunnews(){
		$.ajax({
           type : "POST",
           url : "/gunnews",
           success : function(result) {
              console.log(result.data);
			   $.each(result.data,function (index) {
				  var da = result.data[index].Summarytime;
    da = new Date(da);

    var hours = da.getHours();
    var minutes = da.getMinutes();
    if(minutes<10){
	minutes="0"+minutes
}
    //console.log([hours,minutes].join(':'));

					  var html='<div class="m-timeline-2__item m--margin-bottom-30">'+
						'<span class="m-timeline-2__item-time">'+[hours,minutes].join(':')+'</span>'+	
						'<div class="m-timeline-2__item-cricle">'	+								 
							'<i class="fa fa-genderless m--font-'+result.data[index].Summaryrand+'"></i>	'+								 
						'</div>'+
						'<a href="'+result.data[index].Summarylink +'" target="_blank"class="m-timeline-2__item-text  m--padding-top-5">'+
							     result.data[index].Summary+                                   	                                	               
						'</a>'+
					'</div>'
				
				$(".gunnews").append(html)
			   })
				
            }
            
            
        });
	}
	function initwangzhituijian(){
		$.ajax({
           type : "POST",
           url : "/wangzhituijian",
           success : function(result) {
              // console.log(result)
			   $('.wangzhilink').html(result.data.Link)
				$('.lead').html(result.data.Linktext)
				$('.wangzhilink').attr('href',result.data.Link); 
            }
            
            
        });
	}
	function initjingqutuijian(){
		 $.ajax({
           type : "POST",
           url : "/jingqutuijian",
           success : function(result) {
              
				$('.jingname').html(result.data.Jingname)
				$('.jingimg ').css("background-image","url("+result.data.Imgurl+")" )
				$('.diqu').html(result.data.Diqu)
				$('.zuijiatime').html(result.data.Zuijiatime)
				$('.kaitime').html(result.data.Kaitime)
				$('.feiyong').html(result.data.Feiyong)
            }
            
            
        });
	};
	function initcaipu(){
		 $.ajax({
           type : "POST",
           url : "/caipu",
           success : function(result) {
			  // console.log(result.data)
			   $('.caipuname1').html(result.data[0].Caipuname)
			    $('.caipuname2').html(result.data[1].Caipuname)
				 $('.caipuname3').html(result.data[2].Caipuname)
				  $('.caipuname4').html(result.data[3].Caipuname)
			   $.each(result.data,function (index) {
				   var a=""
				   if (index=="0"){
					   a="active"
				   }
				   
               var html=' <div id="m_personal_income_quater_'+index+'" class="tab-pane '+a+'">'+				      	 
						'<div class="row  align-items-center">'+
							'<div class="col">'+
								'<div id="m_chart_personal_income_quater_'+index+'" class="m-widget27__chart" style="height: 160px">'+
									'<img class="caipuimg1"style="width:100%;height:auto;max-height:100%;"src="'+result.data[index].Imgurl+'">'+
								'</div>'+
							'</div>'+
							'<div class="col">'+
								'<div class="m-widget27__legends">'+
									'<div class="m-widget27__legend">'+
										'<span class="m-widget27__legend-bullet m--bg-accent"></span><br/>'+
										'<span class="m-widget27__legend-text">制作方法:<span class="zhizuo1">'+result.data[index].Zhizuo+'</span></span>'+
									'</div>'+
									'<div class="m-widget27__legend">'+
										'<span class="m-widget27__legend-bullet m--bg-warning"></span><br/>'+
										'<span class="m-widget27__legend-text">主料:<span class="zhuliao1">'+result.data[index].Zhuliao+'</span></span>'+
									'</div>'+
									'<div class="m-widget27__legend">'+
										'<span class="m-widget27__legend-bullet m--bg-brand"></span><br/>'+
										'<a target="_block" href="'+result.data[index].Caipuurl+'"class="caipuurl">查看菜谱</a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>	'+					 			      	
				    '</div>'
					$(".caipulist").append(html)
			   });
            }
		
            
        });
	};
	function initdianyingziyuanone(){
		 $.ajax({
           type : "POST",
           url : "/dianyingziyuanone",
           success : function(result) {
              // console.log(result.data)
			   $.each(result.data,function (index) {
				   var da = result.data[index].Fabutime;
    da = new Date(da);

    var hours = da.getHours();
    var minutes = da.getMinutes();
    if(minutes<10){
		minutes="0"+minutes
		}
				var html='<a href="/dianyingziyuandetail/'+result.data[index].Id+'" target="_blank"class="m-list-timeline__item">'+
								'<span class="m-list-timeline__badge m-list-timeline__badge--'+result.data[index].Colorone+'"></span>'+
								'<span class="m-list-timeline__text">'+result.data[index].Ziyuanname+'<span class="m-badge m-badge--'+result.data[index].Colortwo+' m-badge--wide">'+result.data[index].Fenshu+'</span></span>'+
								'<span class="m-list-timeline__time">'+[hours,minutes].join(':')+'</span>'+
							'</a>'
					$(".dianyingziyuanonelist").append(html)
			   });					
            }
            
            
        });
	}
	function initdianyingziyuantwo(){
		 $.ajax({
           type : "POST",
           url : "/dianyingziyuantwo",
           success : function(result) {
               //console.log(result.data)
			   $.each(result.data,function (index) {
				   var da = result.data[index].Fabutime;
    da = new Date(da);

    var hours = da.getHours();
    var minutes = da.getMinutes();
    if(minutes<10){
		minutes="0"+minutes
		}
				var html='<a href="/dianyingziyuandetail/'+result.data[index].Id+'" target="_blank"class="m-list-timeline__item">'+
								'<span class="m-list-timeline__badge m-list-timeline__badge--'+result.data[index].Colorone+'"></span>'+
								'<span class="m-list-timeline__text">'+result.data[index].Ziyuanname+'<span class="m-badge m-badge--'+result.data[index].Colortwo+' m-badge--wide">'+result.data[index].Fenshu+'</span></span>'+
								'<span class="m-list-timeline__time">'+[hours,minutes].join(':')+'</span>'+
							'</a>'
					$(".dianyingziyuantwolist").append(html)
			   });					
            }
            
            
        });
	}
	function initdianyingziyuanjingpin(){
		 $.ajax({
           type : "POST",
           url : "/dianyingziyuanjingpin",
           success : function(result) {
              // console.log(result.data)
			   $.each(result.data,function (index) {
				   var da = result.data[index].Fabutime;
    da = new Date(da);
//console.log(da);
    var month = da.getMonth()+1;
    var day = da.getDate();
    
				var html='<a href="/dianyingziyuandetail/'+result.data[index].Id+'" target="_blank"class="m-list-timeline__item">'+
								'<span class="m-list-timeline__badge m-list-timeline__badge--'+result.data[index].Colorone+'"></span>'+
								'<span class="m-list-timeline__text">'+result.data[index].Ziyuanname+'<span class="m-badge m-badge--'+result.data[index].Colortwo+' m-badge--wide">'+result.data[index].Fenshu+'</span></span>'+
								'<span class="m-list-timeline__time">'+[month,day].join('-')+'</span>'+
							'</a>'
					$(".dianyingziyuanjingpinlist").append(html)
			   });					
            }
            
            
        });
	}
function inityouhuixinxitaobao(){
	$.ajax({
           type : "POST",
           url : "/youhuixinxitaobao",
           success : function(result) {
              // console.log(result.data)
			    $.each(result.data,function (index) {
			   var html='<div class="m-widget2__item m-widget2__item--'+result.data[index].Color+'">'+
						'<div class="m-widget2__checkbox">'+
							
						'</div>'+
						'<div class="m-widget2__desc">'+
							'<span class="m-widget2__text">'+
							result.data[index].Youhuitext+
							'</span><br>'+
							'<span class="m-widget2__user-name">'+
							'<a href="#" class="m-widget2__link">'+
							result.data[index].Link+
							'</a>'+
							'</span>'+		 
						'</div>'+
					'</div>'
					$(".youhuixinxitaobaolist").append(html)
				});
            }
            
            
        });
}
function inityouhuixinxijd(){
	$.ajax({
           type : "POST",
           url : "/youhuixinxijd",
           success : function(result) {
               //console.log(result.data)
			   $.each(result.data,function (index) {
			   var html='<div class="m-widget2__item m-widget2__item--'+result.data[index].Color+'">'+
						'<div class="m-widget2__checkbox">'+
							
						'</div>'+
						'<div class="m-widget2__desc">'+
							'<span class="m-widget2__text">'+
							result.data[index].Youhuitext+
							'</span><br>'+
							'<span class="m-widget2__user-name">'+
							'<a href="#" class="m-widget2__link">'+
							result.data[index].Link+
							'</a>'+
							'</span>'+		 
						'</div>'+
					'</div>'
					$(".youhuixinxijdlist").append(html)
				});
            }
            
            
        });
}
function inityouhuixinxiother(){
	$.ajax({
           type : "POST",
           url : "/youhuixinxiother",
           success : function(result) {
               //console.log(result.data)
			  $.each(result.data,function (index) {
			   var html='<div class="m-widget2__item m-widget2__item--'+result.data[index].Color+'">'+
						'<div class="m-widget2__checkbox">'+
							
						'</div>'+
						'<div class="m-widget2__desc">'+
							'<span class="m-widget2__text">'+
							result.data[index].Youhuitext+
							'</span><br>'+
							'<span class="m-widget2__user-name">'+
							'<a href="#" class="m-widget2__link">'+
							result.data[index].Link+
							'</a>'+
							'</span>'+		 
						'</div>'+
					'</div>'
					$(".youhuixinxiotherlist").append(html)
				});
            }
            
            
        });
}
function initbaohudongwu(){
		 $.ajax({
           type : "POST",
           url : "/baohudongwu",
           success : function(result) {
              //console.log(result.data)
				 $('.baohudongwuimg').attr('src',result.data.Dongwuimg); 
				 $('.baohudongwuname').html(result.data.Dongwuname);
				 $('.baohujibie').html(result.data.Jibie);
            }
            
            
        });
	};
function inityouxisteam(){
		 $.ajax({
           type : "POST",
           url : "/youxisteam",
           success : function(result) {
            //  console.log(result.data)
				 $.each(result.data,function (index) {
					 var html='<div class="m-timeline-3__item m-timeline-3__item--'+result.data[index].Color+'">'+
							'<span style="width:6rem;"class="m-timeline-3__item-time ">'+result.data[index].Leibie+'</span>' +
							'<div class="m-timeline-3__item-desc">	'	+					 
								'<span class="m-timeline-3__item-text">'+
								result.data[index].Youxiname+
								'</span><br>'+
								'<span class="m-timeline-3__item-user-name">'+
								'<a href="#" class="m-link m-link--metal m-timeline-3__item-link">'+
								result.data[index].Zhizuoshang+
								'</a>'+
								'</span>'	+	 
							'</div>'+
						'</div>'
					 $(".youxisteamlist").append(html)
				 });
            }
            
            
        });
	};
function inityouxishouyou(){
		 $.ajax({
           type : "POST",
           url : "/youxishouyou",
           success : function(result) {
           // console.log(result.data)
					 $.each(result.data,function (index) {
					 var html='<div class="m-timeline-3__item m-timeline-3__item--'+result.data[index].Color+'">'+
							'<span style="width:6rem;" class="m-timeline-3__item-time">'+result.data[index].Leibie+'</span>' +
							'<div class="m-timeline-3__item-desc">	'	+					 
								'<span class="m-timeline-3__item-text">'+
								result.data[index].Youxiname+
								'</span><br>'+
								'<span class="m-timeline-3__item-user-name">'+
								'<a href="#" class="m-link m-link--metal m-timeline-3__item-link">'+
								result.data[index].Zhizuoshang+
								'</a>'+
								'</span>'+	 
							'</div>'
						'</div>'
					 $(".youxishouyoulist").append(html)
				 });
            }
            
            
        });
	};
function inityouxiduli(){
		 $.ajax({
           type : "POST",
           url : "/youxiduli",
           success : function(result) {
              //console.log(result.data)
					 $.each(result.data,function (index) {
					 var html='<div class="m-timeline-3__item m-timeline-3__item--'+result.data[index].Color+'">'+
							'<span style="width:6rem;" class="m-timeline-3__item-time ">'+result.data[index].Leibie+'</span>' +
							'<div class="m-timeline-3__item-desc">	'		+				 
								'<span class="m-timeline-3__item-text">'+
								result.data[index].Youxiname+
								'</span><br>'+
								'<span class="m-timeline-3__item-user-name">'+
								'<a href="#" class="m-link m-link--metal m-timeline-3__item-link">'+
								result.data[index].Zhizuoshang+
								'</a>'+
								'</span>'	+	 
							'</div>'+
						'</div>'
					 $(".youxidulilist").append(html)
				 });
            }
            
            
        });
	};
function initshu(){
		 $.ajax({
           type : "POST",
           url : "/shu",
           success : function(result) {
             // console.log(result.data)
			  $.each(result.data,function (index) {
			  var html='<div class="m-widget_content">'+
				'<h3 class="m-widget_content-title">'+result.data[index].Shuming+'</h3>'+
				'<div class="m-widget_content-items">'+
				 	'<div class="m-widget_content-item">'+
				 		'<span>作者</span>'+
				 		'<span class="m--font-accent">'+result.data[index].Zuozhe+'</span>'+
					'</div>	'+
					'<div class="m-widget_content-item">'+
				 		'<span>出版社</span>'+
				 		'<span class="m--font-brand">'+result.data[index].Chubanshe+'</span>'+
					'</div>'+
					'<div class="m-widget_content-item">'+
				 		'<span>出版日期</span>'+
				 		'<span>'+result.data[index].Chubanriqi+'</span>'+
				'</div>'+
				'</div>'+
			'</div>'
			 $(".shulist").append(html)
			  });
            }
            
            
        });
	};
function initruanjiantuijiana(){
		 $.ajax({
           type : "POST",
           url : "/ruanjiantuijiana",
           success : function(result) {
              //console.log(result.data)
			  var html=""
			  $.each(result.data,function (index) {
			 var html='<div class="m-widget5__item">'+
						'<div class="m-widget5__content">'+
							'<div class="m-widget5__pic"> '+
								'<img class="m-widget7__img" src="'+result.data[index].Ruanjianimg+'" alt=""> '+
							'</div>'+
							'<div class="m-widget5__section">'+
								'<h4 class="m-widget5__title">'+
									result.data[index].Ruanjianname+
								'</h4>'+
								'<span class="m-widget5__desc">'+
								result.data[index].Ruanjianjieshao+ 
								'</span>'+
								'<div class="m-widget5__info">'+
									'<span class="m-widget5__author">'+
									'作者:'+
									'</span>'+
									
									'<span class="m-widget5__info-author-name">'+
									result.data[index].Ruanjianauthor+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'Released:'+
									'</span>'+
									'<a href="'+result.data[index].Ruanjianlink+'" class="m-widget5__info-date m--font-info">'+
									'软件地址'+
									'</a>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="m-widget5__content">'	+
							'<div class="m-widget5__stats1">'+
								'<span class="m-widget5__number">费用</span><br>'+
								'<span class="m-widget5__sales">'+result.data[index].Ruanjianfeiyong+'</span> '+
							'</div>'+
							
						'</div>	'+
					'</div>'
			 $(".ruanjiantuijianalist").append(html)
			
			  });
			  //console.log(html);
			  
			   //$("#m_widget5_tab1_content .m-widget5").append(html)
			   //$("#m_widget5_tab1_content").trigger("create"); 
            }
            
            
        });
	};
function initruanjiantuijianb(){
		 $.ajax({
           type : "POST",
           url : "/ruanjiantuijianb",
           success : function(result) {
              //console.log(result.data)
			  $.each(result.data,function (index) {
			  var html='<div class="m-widget5__item">'+
						'<div class="m-widget5__content">'+
							'<div class="m-widget5__pic"> '+
								'<img class="m-widget7__img" src="'+result.data[index].Ruanjianimg+'" alt=""> '+
							'</div>'+
							'<div class="m-widget5__section">'+
								'<h4 class="m-widget5__title">'+
									result.data[index].Ruanjianname+
								'</h4>'+
								'<span class="m-widget5__desc">'+
								result.data[index].Ruanjianjieshao+ 
								'</span>'+
								'<div class="m-widget5__info">'+
									'<span class="m-widget5__author">'+
									'作者:'+
									'</span>'+
									
									'<span class="m-widget5__info-author-name">'+
									result.data[index].Ruanjianauthor+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'Released:'+
									'</span>'+
									'<a href="'+result.data[index].Ruanjianlink+'" class="m-widget5__info-date m--font-info">'+
									'软件地址'+
									'</a>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="m-widget5__content">'	+
							'<div class="m-widget5__stats1">'+
								'<span class="m-widget5__number">费用</span><br>'+
								'<span class="m-widget5__sales">'+result.data[index].Ruanjianfeiyong+'</span> '+
							'</div>'+
							
						'</div>	'+
					'</div>'
			 $(".ruanjiantuijianblist").append(html)
			  });
            }
            
            
        });
	};
function initruanjiantuijianc(){
		 $.ajax({
           type : "POST",
           url : "/ruanjiantuijianc",
           success : function(result) {
              //console.log(result.data)
			  $.each(result.data,function (index) {
			  var html='<div class="m-widget5__item">'+
						'<div class="m-widget5__content">'+
							'<div class="m-widget5__pic"> '+
								'<img class="m-widget7__img" src="'+result.data[index].Ruanjianimg+'" alt=""> '+
							'</div>'+
							'<div class="m-widget5__section">'+
								'<h4 class="m-widget5__title">'+
									result.data[index].Ruanjianname+
								'</h4>'+
								'<span class="m-widget5__desc">'+
								result.data[index].Ruanjianjieshao+ 
								'</span>'+
								'<div class="m-widget5__info">'+
									'<span class="m-widget5__author">'+
									'作者:'+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'author:'+
									'</span>'+
									'<span class="m-widget5__info-author-name">'+
									result.data[index].Ruanjianauthor+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'官网:'+
									'</span>'+
									'<span class="m-widget5__info-date m--font-info">'+
									result.data[index].Ruanjianlink+
									'</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="m-widget5__content">'	+
							'<div class="m-widget5__stats1">'+
								'<span class="m-widget5__number">费用</span><br>'+
								'<span class="m-widget5__sales">'+result.data[index].Ruanjianfeiyong+'</span> '+
							'</div>'+
							
						'</div>	'+
					'</div>'
			 $(".ruanjiantuijianclist").append(html)
			  });
            }
            
            
        });
	};	
function initruanjiantuijiand(){
		 $.ajax({
           type : "POST",
           url : "/ruanjiantuijiand",
           success : function(result) {
              //console.log(result.data)
			  $.each(result.data,function (index) {
				  var html=""
			  html+='<div class="m-widget5__item">'+
						'<div class="m-widget5__content">'+
							'<div class="m-widget5__pic"> '+
								'<img class="m-widget7__img" src="'+result.data[index].Ruanjianimg+'" alt=""> '+
							'</div>'+
							'<div class="m-widget5__section">'+
								'<h4 class="m-widget5__title">'+
									result.data[index].Ruanjianname+
								'</h4>'+
								'<span class="m-widget5__desc">'+
								result.data[index].Ruanjianjieshao+ 
								'</span>'+
								'<div class="m-widget5__info">'+
									'<span class="m-widget5__author">'+
									'作者:'+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'author:'+
									'</span>'+
									'<span class="m-widget5__info-author-name">'+
									result.data[index].Ruanjianauthor+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'官网:'+
									'</span>'+
									'<span class="m-widget5__info-date m--font-info">'+
									result.data[index].Ruanjianlink+
									'</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="m-widget5__content">'	+
							'<div class="m-widget5__stats1">'+
								'<span class="m-widget5__number">费用</span><br>'+
								'<span class="m-widget5__sales">'+result.data[index].Ruanjianfeiyong+'</span> '+
							'</div>'+
							
						'</div>	'+
					'</div>'
			 $(".ruanjiantuijiandlist").append(html)
			  });
            }
            
            
        });
	};	
function initruanjiantuijiane(){
		 $.ajax({
           type : "POST",
           url : "/ruanjiantuijiane",
           success : function(result) {
             // console.log(result.data)
			  $.each(result.data,function (index) {
			  var html='<div class="m-widget5__item">'+
						'<div class="m-widget5__content">'+
							'<div class="m-widget5__pic"> '+
								'<img class="m-widget7__img" src="'+result.data[index].Ruanjianimg+'" alt=""> '+
							'</div>'+
							'<div class="m-widget5__section">'+
								'<h4 class="m-widget5__title">'+
									result.data[index].Ruanjianname+
								'</h4>'+
								'<span class="m-widget5__desc">'+
								result.data[index].Ruanjianjieshao+ 
								'</span>'+
								'<div class="m-widget5__info">'+
									'<span class="m-widget5__author">'+
									'作者:'+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'author:'+
									'</span>'+
									'<span class="m-widget5__info-author-name">'+
									result.data[index].Ruanjianauthor+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'官网:'+
									'</span>'+
									'<span class="m-widget5__info-date m--font-info">'+
									result.data[index].Ruanjianlink+
									'</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="m-widget5__content">'	+
							'<div class="m-widget5__stats1">'+
								'<span class="m-widget5__number">费用</span><br>'+
								'<span class="m-widget5__sales">'+result.data[index].Ruanjianfeiyong+'</span> '+
							'</div>'+
							
						'</div>	'+
					'</div>'
			 $(".ruanjiantuijianelist").append(html)
			  });
            }
            
            
        });
	};	
function initruanjiantuijianf(){
		 $.ajax({
           type : "POST",
           url : "/ruanjiantuijianf",
           success : function(result) {
              //console.log(result.data)
			  $.each(result.data,function (index) {
			  var html='<div class="m-widget5__item">'+
						'<div class="m-widget5__content">'+
							'<div class="m-widget5__pic"> '+
								'<img class="m-widget7__img" src="'+result.data[index].Ruanjianimg+'" alt=""> '+
							'</div>'+
							'<div class="m-widget5__section">'+
								'<h4 class="m-widget5__title">'+
									result.data[index].Ruanjianname+
								'</h4>'+
								'<span class="m-widget5__desc">'+
								result.data[index].Ruanjianjieshao+ 
								'</span>'+
								'<div class="m-widget5__info">'+
									'<span class="m-widget5__author">'+
									'作者:'+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'author:'+
									'</span>'+
									'<span class="m-widget5__info-author-name">'+
									result.data[index].Ruanjianauthor+
									'</span>'+
									'<span class="m-widget5__info-label">'+
									'官网:'+
									'</span>'+
									'<span class="m-widget5__info-date m--font-info">'+
									result.data[index].Ruanjianlink+
									'</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="m-widget5__content">'	+
							'<div class="m-widget5__stats1">'+
								'<span class="m-widget5__number">费用</span><br>'+
								'<span class="m-widget5__sales">'+result.data[index].Ruanjianfeiyong+'</span> '+
							'</div>'+
							
						'</div>	'+
					'</div>'
			 $(".ruanjiantuijianflist").append(html)
			  });
            }
            
            
        });
	};	
function initdianying(){
		 $.ajax({
           type : "POST",
           url : "/dianying",
           success : function(result) {
              
				 $('.dianying').attr('src',result.data.Dianyingimg); 
				
            }
            
            
        });
	};	
	function initwenzhangtuijian(){
		 $.ajax({
           type : "POST",
           url : "/wenzhangtuijian",
           success : function(result) {
               //console.log(result.data)
				 $.each(result.data,function (index) {
					 var html='<div class="alert alert-success" role="alert">'+
		'<a class="m--font-light" href="'+result.data[index].Wenzhanglink+'"><strong>'+result.data[index].Wenzhangtitle+'</strong></a>'+
		'</div>'
					$(".wenzhangtuijianlist").append(html)  
				 });
				 
            }
            
            
        });
	};	
	
	
	
	
	
});
