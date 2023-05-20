
jQuery(document).ready(function() {



$("#m_table_1").DataTable({
	 
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
			ajax:"/contentpagetwo",
			columns: [
			{
				data: "ID",
				
				bVisible: false
			},
			{
				data: "Title"
			}, {
				data: "PostTime"
			}, {
				data: null,
				
			}],
			
			columnDefs: [{
				targets: -1,
				
				 "render": function(data, type, row) {  
                var html = '<a target="_blank" href="/articlesingle?postid='+data.ID+'"  class="btn btn-success m-btn m-btn--custom" >查看</a>'  
                html += ' <a href="javascript:void(0);"  class="btn btn-info m-btn m-btn--custom" >编辑</a>'  
                html += ' <a href="javascript:void(0);" class="delete btn btn-danger m-btn m-btn--custom">删除</a>'  
                return html;  
            },  
			
				//title: "Title",
				//orderable: !1,
				//render: function(a, e, n, t) {
				//	return '<a href="#" class="btn btn-success">查看</a>\n<a href="#" class="btn btn-primary">编辑</a>\n<a href="#" class="btn btn-danger">删除</a>'
				//}
			}]
});

 $('#m_table_1').on('click', 'a.delete', function(e) {  
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
		
  
    });  
  

});


