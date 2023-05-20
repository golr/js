jQuery(document).ready(function() {
	initminghua();

	
function initminghua(){
		 $.ajax({
           type : "POST",
           url : "/yishu/minghua",
           success : function(result) {
             //console.log(result)
			   
				$.each(result.data,function (index,val) {
				console.log(val)
				var html='<label class="m-radio">'+
						'<input type="radio" name="fenlei" value="'+val.Id+'"> '+val.Categoryname+'<span></span>'+
						'</label>'
					$(".fenleilist").append(html)  
				});
				 
            }
            
            
        });
	};	

	
	
	
});