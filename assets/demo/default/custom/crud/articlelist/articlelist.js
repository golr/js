 // 实现滚动条滚动start
    var pageNum = 1;  // 当前页码
    var pageSize =9; // 当前每页条数
    var pageCount=0;//总页数
    var winH = $(window).height();//页面可视区域高度 

    var p=0, t=0; // 顶部和底部的距离
    $(function(){
		var html1 = '';
			html1 += '<div class="row"></div>'
					$(".m-content").append(html1);
        getData();//初始获取数据，加载数据事件
        //鼠标滚动事件 
			//alert($(window).height());
        $(window).scroll(function() {
			//console.log(winH)
			//alert($('.m-content').height());
            var pageH = $('.m-content').height();//当前文档总高度
			//console.log(pageH)
            var scrollT = $(window).scrollTop(); //滚动条top的值 
			//console.log(scrollT)
            var bottomH = (pageH - winH - scrollT) / winH;  // 当前所滚动位置到底部距离
			//console.log(bottomH)
            p = $(this).scrollTop(); 
			//console.log(t)//顶部距离
			//console.log(p)
            if(t <= p){ // 判断是否下滚  
                if (bottomH< 0.03) { 
 				//console.log(pageCount)
                   if (pageNum !== pageCount) {
                       pageNum++;
					 // console.log(pageNum++)
				
                       getData();
                   }else{ //没有数据
                      $(".nodata").show().html("别滚动了，已经到底了...");
                   }
                }
            }
            setTimeout(function(){t = p;},2000);//延时2秒   
        });  

    })
    function getData() {
        var html = '';
		
        $.ajax({
            type: "post",
            url:"/articlelist",
            data:{"pageNum":pageNum,"pageSize":pageSize},
            success: function (result) {
              
                    pageCount=result.pageCount;
					
				
                   
                        $.each(result.data, function(index, val) {
							
                            html += '<div class="col-xl-4">'+
	'<!--begin:: Widgets/Blog-->'+
	'<div class="m-portlet m-portlet--bordered-semi m-portlet--full-height m-portlet--rounded-force">'+
		'<div class="m-portlet__head m-portlet__head--fit">'+
		'</div>'+
		'<div class="m-portlet__body">'+
			'<div class="m-widget19">'+
				'<div class="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides" style="min-height-: 286px">'+
					'<img src="static/assets/app/media/img//blog/blog1.jpg" alt="">'+
					'<h3 class="m-widget19__title m--font-light">'+
					val.Title+
					'</h3>'+
					'<div class="m-widget19__shadow">'+
					'</div>'+
				'</div>'+
				'<div class="m-widget19__content">'+
					'<div class="m-widget19__header">'+
						'<div class="m-widget19__user-img">'+
							'<img class="m-widget19__img" src="static/assets/app/media/img//users/user1.jpg" alt="">'+
						'</div>'+
						'<div class="m-widget19__info">'+
							'<span class="m-widget19__username">'+
						'Anna Krox  '+
							'</span><br>'+
							'<span class="m-widget19__time">'+
						'UX/UI Designer, Google'+
							'</span>'+
						'</div>'+
						'<div class="m-widget19__stats">'+
							'<span class="m-widget19__number m--font-brand">'+
						'18'+
							'</span>'+
							'<span class="m-widget19__comment">'+
						'Comments'+
							'</span>'+
						'</div>'+
					'</div>'+
					'<div class="m-widget19__body">'+
					val.Content+
					'</div>'+
				'</div>'+
				'<div class="m-widget19__action">'+
					'<button type="button" class="btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom">Read More</button>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'+
	'<!--end:: Widgets/Blog-->'+
'</div>'
						});
                        $(".row").append(html);
                    }
                
       
    });
	}
 