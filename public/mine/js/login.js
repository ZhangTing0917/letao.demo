/**
 * Created by Administrator on 2018/9/16.
 */
$(function(){
    $('[type = button]').on('tap',function(){
        var userName = $('.userName').val().trim();
        var userPass = $('.userPass').val().trim();
        if(!userName){
            mui.toast("请填写姓名");
            return;
        }
        if(!userPass){
            mui.toast("请填写密码");
            return;
        }
        $.ajax({
            url:" /user/login",
            type:"post",
            data:{username:userName,password:userPass},
            success:function(res){
                console.log(res);
                if(res.success){
                    mui.toast("登录成功");
                    setTimeout(function(){
                        location.href = "user.html";
                    },2000)
                }else{
                    mui.toast(res.message);
                }
            }
        })


    })
})