jQuery(document).ready(function() {
	
	 // 用来做一系列选择判断的变量
    var etarg = '';
    // 选择一张图片作为显示，建议是带有提示上传的图片（要填哦，不填会出问题）
    var _myimg_ = '';
    //把图片放入到img中
    //$('.d1').attr('src', _myimg_);

    // input的值发生改变时触发change
    $("#customFile").change(function(e) {
        var imgBox = e.target;
        //这里发生赋值问题
        etarg = imgBox;
		var v= $("input[name='imgtag']").val()
        uploadImg(v,imgBox);
    });

    function uploadImg(v,tag) {
        var file = tag.files[0];
		
        if (file == '' || file == undefined || file == null) {
            alert("请选择图片！")
                //因为发生赋值，需要清空，防止用户直接点击上传按钮
            etarg = '';
            $('.d1').attr('src', _myimg_);
            return;
        }
        if (!/image\/\w+/.test(file.type)) {
            alert("您选择的不是图片,请选择图片！");
            //因为发生赋值，需要清空，防止用户直接点击上传按钮
            etarg = '';
            return;
        }
		if (file.size>1024 * 1024 * 5) {
            alert("您选的图片大于5M,请压缩图片后上传,或者重新选一张！");
            //因为发生赋值，需要清空，防止用户直接点击上传按钮
            etarg = '';
            return;
        }
		console.log(file.size)
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
			  // 重新获取input的files
        var _file_ = $('#customFile')[0].files[0];
        // 创建FormData空对象
        var formData = new FormData();
        // 把获取input的files放入FormData空对象
        formData.append('file', _file_);
        $.ajax({
            url: '/upload/'+v,
            type: 'POST',
            cache: false, //上传文件不需要缓存
            data: formData, //把值传给后端
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: false, // 告诉jQuery不要去设置Content-Type请求头
            success: function(data) {
                // 根据后台提示，在提示上传成功
                //alert("上传成功");
				//$('.fimgurl').val(data);
				 // 用户选择图片后，替换成用户选择的图片
            //$('.d1').attr('src', data);
		
			
			$(".imgurl").attr('src',data); 
		 
		 $(".imgfilename").val(data)
		 //console.log($('.imgul li').length);
		 
		 
		 
		 
            },
            error: function(data) {
                alert("上传失败");
            }
        })
           
        };
		
    }


});