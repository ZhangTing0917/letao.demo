/**
 * Created by Administrator on 2018/9/19.
 */
var userInform ;
$.ajax({
    url:"/user/queryUserMessage",
    type:"get",
    async:false,
    success:function(res){
        if(res.error){
            location.href='login.html';
            return
        };
        userInform = res.success;
    }
})
$(function(){
    var registerCode ;
    $('.getCode').on('tap',function(){
        $.ajax({
            url:'/user/vCodeForUpdatePassword',
            type:'get',
            success:function(res){
                registerCode = res.vCode;
                console.log(registerCode);
            }
        })
    });
    $('[type = button]').on('tap',function(){
        var userNewPass = $('.userNewPass').val().trim();
        var userPass = $('.userPass').val().trim();
        var userPassAgain = $('.userPassAgain').val().trim();
        var userCode = $('.userCode').val().trim();
        if(!userPass){
            mui.toast("请填写原始密码");
            return;
        }
        if(!userNewPass){
            mui.toast("请填写新密码");
            return;
        }
        if(!(userPassAgain==userNewPass)){
            mui.toast("请确认密码正确");
            return;
        }
        if(!(userCode==registerCode)){
            mui.toast("请输入验证码");
            return;
        }
        $.ajax({
            url:"/user/updatePassword",
            type:"post",
            data:{oldPassword:userPass,newPassword:userNewPass,vCode:userCode},
            success:function(res){
                //console.log(res);
                if(res.success){
                    mui.toast("修改密码成功");
                    setTimeout(function(){
                        location.href = "login.html";
                    },2000)
                }else{
                    mui.toast(res.message);
                }
            }
        })


    })
})