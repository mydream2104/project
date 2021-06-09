$(document).ready(function() {
    //fenge
    $("#frm").validate({
        rules: {
            username: {
                required: true,
                checkName: true,
            },
            pwd: {
                required: true,
                checkPwd: true,
            },
            con_pwd: {
                required: true,
                equalTo: pwd,
            },
            email: {
                required: true,
                checkEmail: true,
            },
            phone: {
                required: true,
                checkPhone: true,
            },


        },
        messages: {
            username: {
                required: "*必填！",
                rangelength: "*长度为2到10位！",
            },

            pwd: {
                required: "*必填！",
                rangelength: "*长度为6到16位！",
            },
            con_pwd: {
                required: "*必填！",
                equalTo: "*两次输入的密码不一致！"
            },
            email: {
                required: "*必填！",
                email: "*请输入正确的邮箱！",
            },
            phone: {
                required: "*必填！",

            },

            // check: {
            //     required: "*必填！",
            //     remote: "*验证码有误！",
            // },
        },
        submitHandler: function(form) {
            var username = document.querySelector('[name="username"]').value;
            var pwd = document.querySelector('[name="pwd"]').value;
            var email = document.querySelector('[name="email"]').value;
            var phone = document.querySelector('[name="phone"]').value;
            $.ajax({
                url: "../php/register.php",
                type: "POST",
                data: {
                    username: username,
                    pwd: pwd,
                    email: email,
                    phone: phone,

                },
                success(dt) {
                    console.log(dt);
                    if (/成功/.test(dt)) {
                        $("#d1").removeClass("show");
                        $(".warning1").removeClass("fade1");
                        $("#d2").addClass("show");
                        $("#li1").removeClass("brc");
                        $("#li2").addClass("brc");
                        setTimeout(() => {
                            location.href = "./login.html"
                        }, 2000);
                    } else {
                        $(".warning1").addClass("fade1");
                    }
                }
            })
        },
        //是否在获取焦点时验证
        //onfocusout:false,
        //是否在敲击键盘时验证
        //onkeyup:false,
        //提交表单后，（第一个）未通过验证的表单获得焦点
        focusInvalid: true,
        //当未通过验证的元素获得焦点时，移除错误提示
        focusCleanup: true,
    });

    //自定义正则表达示验证方法
    $.validator.addMethod("checkPhone", function(value, element, params) {
        var checkPhone = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        return this.optional(element) || (checkPhone.test(value));
    }, "*请输入正确的手机号码！");

    $.validator.addMethod("checkEmail", function(value, element, params) {
        var checkEmail = /^[a-z0-9]+@([a-z0-9]+\.)+[a-z]{2,4}$/i;
        return this.optional(element) || (checkEmail.test(value));
    }, "*请输入正确的邮箱！");

    $.validator.addMethod("checkName", function(value, element, params) {
        var checkName = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/g;
        return this.optional(element) || (checkName.test(value));
    }, "*只允许1位以上中文、英文字母、数字或者下划线!");

    $.validator.addMethod("checkPwd", function(value, element, params) {
        var checkPwd = /^\w{6,16}$/g;
        return this.optional(element) || (checkPwd.test(value));
    }, "*只允许6-16位英文字母、数字或者下划线！");

    var form = document.querySelector("form");
});