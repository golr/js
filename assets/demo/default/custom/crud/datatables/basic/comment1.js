
jQuery(document).ready(function() {



$("#m_table_comment1").DataTable({
	 
	  bFilter:false,
        destroy: true,
		paging: true,
		bStateSave: true,
		processing: true,
			responsive: !0,
			pagingType: "full_numbers",
			ordering: false,
			serverSide: true,
			searching: false,
			ajax:"/comment1",
			columns: [
			{
				data: "ID",
				
				bVisible: false
			}],
			
			columnDefs: [{
				targets: -1,
				
				 "render": function(data, type, row) {  
                var html = '<div class="m-widget3__item">'+
				'<div class="m-widget3__header">'+
					'<div class="m-widget3__user-img">	'	+					 
					'	<img class="m-widget3__img" src="static/assets/app/media/img/users/user4.jpg" alt=""> ' +
					'</div>'+
					'<div class="m-widget3__info">'+
					'	<span class="m-widget3__username">'+
						'Lebron King James '+  
					'	</span><br> '+
					'	<span class="m-widget3__time">'+
						'1 day ago'+
					'	</span>	'	+ 
					'</div>'+
					'<span class="m-widget3__status m--font-brand">'+
					'<ul class="m-portlet__nav">'
				'<li class="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">'+
					'<a href="#" class="m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle">'+
					'<i class="la la-ellipsis-h m--font-brand"></i>'+
					'</a>'+
					'<div class="m-dropdown__wrapper" style="z-index: 101;">'+
						'<span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style="left: auto; right: 13.5px;"></span>'+
						'<div class="m-dropdown__inner">'+
							'<div class="m-dropdown__body">'+
							'	<div class="m-dropdown__content">'+
								'	<ul class="m-nav">'+
									'	<li class="m-nav__item">'+
								'<a href="" class="m-nav__link">'+
								'			<i class="m-nav__link-icon flaticon-share"></i>'+
								'			<span class="m-nav__link-text">回复</span>'+
									'		</a>'+
									'	</li>'+
										
										'<li class="m-nav__item">'+
								'<a href="" class="m-nav__link">'+
										'	<i class="m-nav__link-icon flaticon-share"></i>'+
										'	<span class="m-nav__link-text">举报</span>'+
										'	</a>'+
										'</li>'+
										
									'</ul>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</li>'+
			'</ul>'+
					
					'</span>'+	
				'</div>'+
				'<div class="m-widget3__body">'+
					'<p class="m-widget3__text"> '+
						'Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper.	'+				
					'</p>'+
				'</div>'+
			'</div>'
                return html;  
            },  
			
				//title: "Title",
				//orderable: !1,
				//render: function(a, e, n, t) {
				//	return '<a href="#" class="btn btn-success">查看</a>\n<a href="#" class="btn btn-primary">编辑</a>\n<a href="#" class="btn btn-danger">删除</a>'
				//}
			}]
});

 /*$('#m_table_1').on('click', 'a.delete', function(e) {  
			var table = $('#m_table_1').DataTable();  
			var data = table.row( $(this).parents('tr') ).data();
		 
		 // alert(data['ID']);
		 
			swal({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				type: "warning",
				showCancelButton: !0,
				confirmButtonText: "Yes, delete it!"
			}).then(function(e) {
				 $.ajax({
						type: "POST",
						url: "/delonearticles",
						//contentType: "application/json; charset=utf-8",
						data: data,
						dataType: "json",
						success: function (res) {
						  if (res.delstatue ==1) {
							alert('删除失败')
						  } else if (res.delstatue ==2) {
							  table.ajax.reload();
							  e.value && swal("Deleted!", "Your file has been deleted.", "success")
						  }
						}
					  });
				
			})
		
  
    });  */
  

});


