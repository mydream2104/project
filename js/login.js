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


            // check: {
            //     required: "*必填！",
            //     remote: "*验证码有误！",
            // },
        },
        submitHandler: function(form) {
            var username = document.querySelector('[name="username"]').value;
            var pwd = document.querySelector('[name="pwd"]').value;
            $.ajax({
                url: "../php/login.php",
                type: "POST",
                data: {
                    username: username,
                    pwd: pwd,
                },
                success(dt) {
                    let search1 = location.search
                    console.log(dt);
                    if (dt == "1") {
                        // 设置cookie值为用户名
                        $.cookie('name', username, {
                            expires: 1,
                        });
                        if (search1) {
                            location.href = search1.split('=')[1]
                        } else { location.href = "./shouye.html" }
                    } else {
                        $(".loginbox>p").addClass("show");
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

    $.validator.addMethod("checkName", function(value, element, params) {
        var checkName = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/g;
        return this.optional(element) || (checkName.test(value));
    }, "*只允许1位以上中文、英文字母、数字或者下划线！");

    $.validator.addMethod("checkPwd", function(value, element, params) {
        var checkPwd = /^\w{6,16}$/g;
        return this.optional(element) || (checkPwd.test(value));
    }, "*只允许6-16位英文字母、数字或者下划线！");

    var form = document.querySelector("form");
});