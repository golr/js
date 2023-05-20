jQuery(document).ready(function() {
	$('.note-editable').css('font-size','18px'); 
	$(".summernote").summernote({
			dialogsFade: true,
			height: 500,
			tabsize: 3,
			
			fontSizes: ['10','12','14','16','18','20','22','24','36'],
			toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'italic', 'underline', 'clear']],
    ['fontname', ['fontname']],
    ['color', ['color']],
	['fontsize', ['fontsize']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
    ['table', ['table']],
    ['insert', ['link', 'picture', 'hr']],
    ['view', ['fullscreen', 'codeview']]
    
  ],

			callbacks: {
					onImageUpload: function(files) {
						
					  //上传图片到服务器，使用了formData对象，至于兼容性...据说对低版本IE不太友好
					  var formData = new FormData();
					  formData.append('file',files[0]);
					  $.ajax({
						url : '/upload/posts',//后台文件上传接口
						type : 'POST',
						data : formData,
						processData : false,
						contentType : false,
						success : function(data) {
							
						  $('.summernote').summernote('insertImage',data,'img');
						}
					  });
					}
				  }
		});

});