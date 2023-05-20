
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
            "url": "/admin/shenheuserpostslist",
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
				data: "Aid",
			}, 
			 
			{
				data: "Cid",
			},
			{
				data: "Tags",
			},
			{
				data: "Actime",
			},{
				data: "Status",
			}],
			columnDefs: [{
				targets: 7,
				width: "30px",
				
				orderable: !1,
				render: function(e, a, t, n) {
					return '\n <a  target="_blank" href="/admin/shenheonepost/'+t.Id+'" class="btn btn-info">查看</button>  '
				}
			},{
				targets: 8,
				width: "30px",
				
				orderable: !1,
				render: function(e, a, t, n) {
					return '\n  <a href="/admin/shenheonepostno/'+t.Id+'" class="btn btn-danger">审核不通过</a>'
				}
			},{
				targets: 9,
				width: "30px",
				data: "Id",
				orderable: !1,
				render: function(e, a, t, n) {
					return '\n <a  href="/admin/shenheonepostyes/'+t.Id+'"class="btn btn-accent">审核通过</a>'
				}
			}] 
			
});
 
   $('#m_table_1').on('click', 'a.delete', function(e) {  
			var table = $('#m_table_1').DataTable();  
			var data = table.row( $(this).parents('tr') ).data();
		 
		 // alert(data['ID']);
		 
			swal({
				title: "确定审核不通过吗?",
				text: "点击确定,本条数据将从列表中消失",
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


