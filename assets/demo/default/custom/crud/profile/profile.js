jQuery(document).ready(function() {
				 // 用来做一系列选择判断的变量
    var etarg = '';
    // 选择一张图片作为显示，建议是带有提示上传的图片（要填哦，不填会出问题）
	if($('.d1').attr('src') ){
		 var _myimg_ = '';
		
	}else{
		 var _myimg_ = 'https://ftp.bmp.ovh/imgs/2019/11/905174a9cc40ffa3.jpg';
		 $('.d1').attr('src', _myimg_);
		 
	}
   
    //把图片放入到img中
   // 

    // input的值发生改变时触发change
    $("#customFile").change(function(e) {
        var imgBox = e.target;
        //这里发生赋值问题
        etarg = imgBox;
        uploadImg($('.bcd'), imgBox);
    });

    function uploadImg(element, tag) {
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
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            // 用户选择图片后，替换成用户选择的图片
            $('.d1').attr('src', this.result);
        };
    }

    // 上传按钮
    $('.upload').click(function() {
        if (etarg == '') {
            alert('请选择图片上传')
            return;
        }
        // 重新获取input的files
        var _file_ = $('#customFile')[0].files[0];
        // 创建FormData空对象
        var formData = new FormData();
        // 把获取input的files放入FormData空对象
        formData.append('file', _file_);
        $.ajax({
            url: '/upload',
            type: 'POST',
            cache: false, //上传文件不需要缓存
            data: formData, //把值传给后端
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: false, // 告诉jQuery不要去设置Content-Type请求头
            success: function(data) {
                // 根据后台提示，在提示上传成功
                alert("上传成功");
				$('.fimgurl').val(data);
				 $('.d1').attr('src', data);
            },
            error: function(data) {
                alert("上传失败");
            }
        })
    })
	
//2. 用来做一系列选择判断的变量
    var etarg2 = '';
    // 选择一张图片作为显示，建议是带有提示上传的图片（要填哦，不填会出问题）
   
    //把图片放入到img中
    //$('.d12').attr('src', _myimg2_);
	if($('.d12').attr('src') ){
		 var _myimg2_ = '';
		
	}else{
		 var _myimg2_ = 'https://ftp.bmp.ovh/imgs/2019/11/905174a9cc40ffa3.jpg';
		 $('.d12').attr('src', _myimg2_);
		 
	}
    // input的值发生改变时触发change
    $("#customFile2").change(function(e) {
        var imgBox = e.target;
        //这里发生赋值问题
        etarg2 = imgBox;
        uploadImg2($('.bcd2'), imgBox);
    });

    function uploadImg2(element, tag) {
        var file = tag.files[0];
        if (file == '' || file == undefined || file == null) {
            alert("请选择图片！")
                //因为发生赋值，需要清空，防止用户直接点击上传按钮
            etarg2 = '';
            $('.d12').attr('src', _myimg2_);
            return;
        }
        if (!/image\/\w+/.test(file.type)) {
            alert("您选择的不是图片,请选择图片！");
            //因为发生赋值，需要清空，防止用户直接点击上传按钮
            etarg2 = '';
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            // 用户选择图片后，替换成用户选择的图片
            $('.d12').attr('src', this.result);
        };
    }

    // 上传按钮
    $('.upload2').click(function() {
        if (etarg == '') {
            alert('请选择图片上传')
            return;
        }
        // 重新获取input的files
        var _file_ = $('#customFile2')[0].files[0];
        // 创建FormData空对象
        var formData = new FormData();
        // 把获取input的files放入FormData空对象
        formData.append('file', _file_);
        $.ajax({
            url: '/upload',
            type: 'POST',
            cache: false, //上传文件不需要缓存
            data: formData, //把值传给后端
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: false, // 告诉jQuery不要去设置Content-Type请求头
            success: function(data) {
                // 根据后台提示，在提示上传成功
                alert("上传成功");
				$('.fimgurl2').val(data);
            },
            error: function(data) {
                alert("上传失败");
            }
        })
    })
	
// 3.用来做一系列选择判断的变量
    var etarg3 = '';
    // 选择一张图片作为显示，建议是带有提示上传的图片（要填哦，不填会出问题）
   
    //把图片放入到img中
    //$('.d13').attr('src', _myimg3_);
	if($('.d13').attr('src') ){
		 var _myimg3_ = '';
		
	}else{
		 var _myimg3_ = 'https://ftp.bmp.ovh/imgs/2019/11/905174a9cc40ffa3.jpg';
		 $('.d13').attr('src', _myimg3_);
		 
	}
    // input的值发生改变时触发change
    $("#customFile3").change(function(e) {
        var imgBox = e.target;
        //这里发生赋值问题
        etarg3 = imgBox;
        uploadImg3($('.bcd3'), imgBox);
    });

    function uploadImg3(element, tag) {
        var file = tag.files[0];
        if (file == '' || file == undefined || file == null) {
            alert("请选择图片！")
                //因为发生赋值，需要清空，防止用户直接点击上传按钮
            etarg3 = '';
            $('.d13').attr('src', _myimg3_);
            return;
        }
        if (!/image\/\w+/.test(file.type)) {
            alert("您选择的不是图片,请选择图片！");
            //因为发生赋值，需要清空，防止用户直接点击上传按钮
            etarg3 = '';
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            // 用户选择图片后，替换成用户选择的图片
            $('.d13').attr('src', this.result);
        };
    }

    // 上传按钮
    $('.upload3').click(function() {
        if (etarg3 == '') {
            alert('请选择图片上传')
            return;
        }
        // 重新获取input的files
        var _file_ = $('#customFile3')[0].files[0];
        // 创建FormData空对象
        var formData = new FormData();
        // 把获取input的files放入FormData空对象
        formData.append('file', _file_);
        $.ajax({
            url: '/upload',
            type: 'POST',
            cache: false, //上传文件不需要缓存
            data: formData, //把值传给后端
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: false, // 告诉jQuery不要去设置Content-Type请求头
            success: function(data) {
                // 根据后台提示，在提示上传成功
                alert("上传成功");
				$('.fimgurl3').val(data);
            },
            error: function(data) {
                alert("上传失败");
            }
        })
    })
		
	});
