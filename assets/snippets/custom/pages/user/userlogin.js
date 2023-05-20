var SnippetLogin = function() {
		var e = $("#m_login"),
			i = function(e, i, a) {
				var l = $('<div class="m-alert m-alert--outline alert alert-' + i + ' alert-dismissible" role="alert">\t\t\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\t\t\t<span></span>\t\t</div>');
				e.find(".alert").remove(), l.prependTo(e), mUtil.animateClass(l[0], "fadeIn animated"), l.find("span").html(a)
			},
			a = function() {
				e.removeClass("m-login--forget-password"), e.removeClass("m-login--signup"), e.addClass("m-login--signin"), mUtil.animateClass(e.find(".m-login__signin")[0], "flipInX animated")
			},
			l = function() {
				$("#m_login_forget_password").click(function(i) {
					i.preventDefault(), e.removeClass("m-login--signin"), e.removeClass("m-login--signup"), e.addClass("m-login--forget-password"), mUtil.animateClass(e.find(".m-login__forget-password")[0], "flipInX animated")
				}), $("#m_login_forget_password_cancel").click(function(e) {
					e.preventDefault(), a()
				}), $("#m_login_signup").click(function(i) {
					i.preventDefault(), e.removeClass("m-login--forget-password"), e.removeClass("m-login--signin"), e.addClass("m-login--signup"), mUtil.animateClass(e.find(".m-login__signup")[0], "flipInX animated")
				}), $("#m_login_signup_cancel").click(function(e) {
					e.preventDefault(), a()
				})
			};
		return {
			init: function() {
				l(), $("#m_login_signin_submit").click(function(e) {
					e.preventDefault();
					var a = $(this),
						l = $(this).closest("form");
					l.validate({
						rules: {
							fullname: {
								required: !0,
								
							},
							password: {
								required: !0
							}
						}
					}), l.valid() && (a.addClass("m-loader m-loader--right m-loader--light").attr("disabled", !0), l.ajaxSubmit({
						type:"post",
						
						url: "/usersignin",
						
						
						success: function(result) {

							if(result.loginstatus=="2"){
								 a.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(l, "success", "登陆成功.")
								  window.location.href = "/userprofile"
							}else if(result.loginstatus=="1"){
								a.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(l, "danger","账户用户名或者密码错误")
							}
						 
							
							
						}
					}))
				}), $("#m_login_signup_submit").click(function(l) {
					l.preventDefault();
					var t = $(this),
						r = $(this).closest("form");
					r.validate({
						rules: {
							fullname: {
								required: !0
							},
							//code: {
							//	required: !0,
								
							
								//此处必须返回邀请码确认正确
							//},
						phone:{
							required: !0,
							//isPhone:true,
							
						},
							password: {
								required: !0
							},
							rpassword: {
								required: !0,
								equalTo: "#password"
							},
							agree: {
								required: !0,
								
							}
						}
					}), r.valid() && (t.addClass("m-loader m-loader--right m-loader--light").attr("disabled", !0), r.ajaxSubmit({
						type:"post",
						
						url: "/usersignup",
						
						success: function(result) {
							
								if(result.status=="0"){
									t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(r, "danger","用户名已存在")
								
								}else if(result.status=="1"){
										t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(r, "danger","手机号已存在")
											
								//}else if(result.status=="3"){
								//	t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(r, "danger","邀请码不正确")
								}else if(result.status=="4"){
								t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(r, "danger","短信验证码有误")
								}else if(result.status=="6"){
										t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(r, "danger","注册成功")
								 window.location.href = "/userprofile"
								}
							
						}
					}))
				}), $("#m_login_forget_password_submit").click(function(l) {
					l.preventDefault();
					var t = $(this),
						r = $(this).closest("form");
					r.validate({
						rules: {
							fullname: {
								required: !0,
								
							},
							phone: {
								required: !0,
								isPhone:true,
								
							},
							ordernumber: {
								required: !0,
								
							}
						}
					}), r.valid() && (t.addClass("m-loader m-loader--right m-loader--light").attr("disabled", !0), r.ajaxSubmit({
						type:"post",
						url: "/userforgetpassword",
						success: function(result) {
							if(result.status=="0"){
									t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(r, "danger","手机号或者用户名有误")
								
								}else if(result.status=="1"){
										t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(r, "danger","订单号有误")
											
								}else if(result.status=="6"){
									t.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(r, "danger","找回成功")
								 window.location.href = "/userprofile"
								}
						}
					}))
				})
			}
		}
	}();
jQuery(document).ready(function() {
	SnippetLogin.init()
//验证用户名是否可用,可用的话
$(".signupfullname").blur(function(){

$.ajax({
        //async:false,
        type: "POST",
        url: '/usersignup/fullname/'+$(this).val(),
       
        success: function(result){
			
         　if(result.status==2){
				$(".fullnamehelpa").css("display","block");
				$(".fullnamehelpb").css("display","none");
			 }else if(result.status==0){
				$(".fullnamehelpb").css("display","block");
				$(".fullnamehelpa").css("display","none");
			 }

            }
    });
   //$("input[name='fullname']").css({"background-color":"#8FCF7E","color":"#ffffff"});
   
});


//当邀请码输入框失去焦点,验证邀请码是否正确.ajax
//验证邀请码是否输入正确,正确的话显示验证码,不正确的话给与提示,改变背景或者显示文字提醒,正确的话,显示验证码输入框
$("input[name='code']").blur(function(){//当邀请码输入框失去焦点,验证邀请码是否正确.ajax


  
});
	
jQuery.validator.addMethod("isPhone", function(value, element) {
          var length = value.length;
          var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
          return this.optional(element) || (length == 11 && mobile.test(value));
}, "请填写正确的手机号码");//可以自定义默认提示信息

// 验证手机号是否正确,不正确提醒
$("input[name='phone']").blur(function(){
	//先判断是否已经注册或者号码是否正确
	
	$.ajax({
        //async:false,
        type: "POST",
        url: '/usersignup/isphone/'+$("input[name='phone']").val(),
       
        success: function(result){
			
         　if(result.status==0){
				$(".codehelpc").css("display","block");
				$(".codehelpd").css("display","none");
				$(".codehelpe").css("display","none");
				$(".inphonecode").css("display","block");
			 }else if(result.status==1){
				$(".codehelpc").css("display","none");
				$(".codehelpd").css("display","block");
				$(".codehelpe").css("display","none");
			 }else if(result.status==2){
				$(".codehelpc").css("display","none");
				$(".codehelpd").css("display","none");
				$(".codehelpe").css("display","block");
			 }

            }
    });
	

   //$("input[name='fullname']").css({"background-color":"#8FCF7E","color":"#ffffff"});
   
});


$('.phonecode').bind('click',function(){
	//alert($("input[name='phone']").val())
	$.ajax({
        //async:false,
        type: "POST",
        url: '/usersignup/phone/'+$("input[name='phone']").val(),
       
        success: function(result){
			
         　if(result.status==2){
				
			 }else if(result.status==0){
				
			 }

            }
    });
	//获取电话号码并传给后台发短信
	var codeflag = 60;
	if(codeflag==60){
		var timeflag = setInterval(function(){
		if(codeflag>0){
			$('.phonecode').val(codeflag+'秒后重发');
			$('.phonecode').css({'color':'gray'});
			$('.phonecode').attr('disabled','disabled');
			codeflag--;

		}else {
			codeflag=60;
			$('.phonecode').val('重新发送验证码');
			$('.phonecode').css({'color':'#0000FF'});
			$('.phonecode').removeAttr('disabled');
			clearInterval(timeflag);

		}
		},1000);

	}
})
	
	
});

