var DropzoneDemo = {
	init: function() {
		Dropzone.options.mDropzoneThree = {
			url:"/upload",
			paramName: "file",
			maxFiles: 12,
			maxFilesize: 10,
			addRemoveLinks: !0,
			acceptedFiles: "image/*,",
			autoProcessQueue: true, // true:自动上传，一次性上传parallelUploads个文件，上传成功后后面排队的其他队伍也会继续排队上传。false:关闭自动上传, 手动调度 ,但每次需要点击“上传”按钮才会触发上传，排队的其他文件不会自动上传。 
			parallelUploads: 2, //最大并行处理量（一次同时上传的个数，不设置的话，默认：2个）

			accept: function(e, o) {
				"justinbieber.jpg" == e.name ? o("Naha, you don't.") : o()
				
				var arr="";
				arr+=e.name;
				console.log(arr);
			},
		init: function () {
            this.on("addedfile", function (file) {
                //上传文件时触发的事件
 console.log("请注意开始上传了"+file.name);
            });
            this.on("success", function (file, data) {
                //上传成功触发的事件
                if (data != null && data != "") {
					 console.log("请注意上传成功"+data);
                    var html='<input name="pic[]" value="'+data+'">';
				   $("#dandanform").append(html);
                }
 
            });
            this.on("error", function (file, data) {
                //上传失败触发的事件
  console.log("请注意上传失败");
            });
            this.on("removedfile", function (file) {//删除文件触发结果
                //console.log(file);
				 console.log("请注意删除了");
                $("#BannarImgId").val("");
            });
        }

			
              
			
		}
	}
};
DropzoneDemo.init();