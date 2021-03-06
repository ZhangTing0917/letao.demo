/**
 * Created by Administrator on 2018/9/16.
 */
$(function(){
    var registerCode ;
    $('.getCode').on('tap',function(){
        $.ajax({
            url:'/user/vCode',
            type:'get',
            success:function(res){
                registerCode = res.vCode;
                console.log(registerCode);
            }
        })
    });
    $('[type = button]').on('tap',function(){
        var userName = $('.userName').val().trim();
        var userNumber = $('.userNumber').val().trim();
        var userPass = $('.userPass').val().trim();
        var userPassAgain = $('.userPassAgain').val().trim();
        var userCode = $('.userCode').val().trim();
        if(!userName){
            mui.toast("请填写姓名");
            return;
        }
        if(userNumber.length!=11){
            mui.toast("请填写正确号码");
            return;
        }
        if(!userPass){
            mui.toast("请填写密码");
            return;
        }
        if(!(userPassAgain==userPass)){
            mui.toast("请确认密码正确");
            return;
        }
        if(!(userCode==registerCode)){
            mui.toast("请输入验证码");
            return;
        }
        //isExist(userName,"请填写姓名");
        //isExist(userNumber,"请填写号码");
        //isExist(userPass,"请填写密码");
        //isExist((),"请确认密码正确");
        //isExist((userCode==registerCode),"请输入验证码");
        $.ajax({
            url:"/user/register",
            type:"post",
            data:{username:userName,password:userPass,mobile:userNumber,vCode:userCode},
            success:function(res){
                if(res.success){
                    mui.toast("注册成功");
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