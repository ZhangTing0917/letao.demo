/**
 * Created by Administrator on 2018/9/19.
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
            mui.toast("ÇëÌîĞ´ĞÕÃû");
            return;
        }
        if(userNumber.length!=11){
            mui.toast("ÇëÌîĞ´ÕıÈ·ºÅÂë");
            return;
        }
        if(!userPass){
            mui.toast("ÇëÌîĞ´ÃÜÂë");
            return;
        }
        if(!(userPassAgain==userPass)){
            mui.toast("ÇëÈ·ÈÏÃÜÂëÕıÈ·");
            return;
        }
        if(!(userCode==registerCode)){
            mui.toast("ÇëÊäÈëÑéÖ¤Âë");
            return;
        }
        //isExist(userName,"ÇëÌîĞ´ĞÕÃû");
        //isExist(userNumber,"ÇëÌîĞ´ºÅÂë");
        //isExist(userPass,"ÇëÌîĞ´ÃÜÂë");
        //isExist((),"ÇëÈ·ÈÏÃÜÂëÕıÈ·");
        //isExist((userCode==registerCode),"ÇëÊäÈëÑéÖ¤Âë");
        $.ajax({
            url:"/user/register",
            type:"post",
            data:{username:userName,password:userPass,mobile:userNumber,vCode:userCode},
            success:function(res){
                if(res.success){
                    mui.toast("×¢²á³É¹¦");
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