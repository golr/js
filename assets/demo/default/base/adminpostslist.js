
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
			searching:false,
			"ajax": {
            "url": "/admin/postslist",
            "type": "POST"
        },
			columns: [
			{
				data: "Id",
			},
			{
				data: "Title",
			}, 
			{
				data: "Firstimglink",
			}, 
			{
				data: "Cid",
			}, 
			{
				data: "Actime",
			}],
			columnDefs: [{
				targets: 5,
				width: "30px",
				
				orderable: !1,
				render: function(e, a, t, n) {
					return '\n <a  href="/admin/editpost/'+t.Id+'" class="btn btn-info">修改</button>  '
				}
			},{
				targets: 6,
				width: "30px",
				
				orderable: !1,
				render: function(e, a, t, n) {
					return '\n  <a href="javascript:void(0);" class="delete btn btn-danger">删除</a>'
				}
			},{
				targets: 7,
				width: "30px",
				data: "Id",
				orderable: !1,
				render: function(e, a, t, n) {
					return '\n <a target="_blank" href="/detail/'+t.Cid+'/'+e+'"class="btn btn-accent">查看</a>'
				}
			}] 
			
});
 
   $('#m_table_1').on('click', 'a.delete', function(e) {  
			var table = $('#m_table_1').DataTable();  
			var data = table.row( $(this).parents('tr') ).data();
		 
		 // alert(data['ID']);
		 
			swal({
				title: "确定删除吗?",
				text: "点击确定,本条数据将从你的数据库中消失",
				type: "warning",
				showCancelButton: !0,
				confirmButtonText: "Yes, delete it!"
			});
			$(".swal2-confirm").click(function() { 
				 $.ajax({
						type: "POST",
						url: "/admin/delpost",
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
			});
			$(".swal2-cancel ").click(function() {

			});
		
  
    });  

});


