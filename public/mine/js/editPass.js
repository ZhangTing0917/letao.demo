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
            mui.toast("����д����");
            return;
        }
        if(userNumber.length!=11){
            mui.toast("����д��ȷ����");
            return;
        }
        if(!userPass){
            mui.toast("����д����");
            return;
        }
        if(!(userPassAgain==userPass)){
            mui.toast("��ȷ��������ȷ");
            return;
        }
        if(!(userCode==registerCode)){
            mui.toast("��������֤��");
            return;
        }
        //isExist(userName,"����д����");
        //isExist(userNumber,"����д����");
        //isExist(userPass,"����д����");
        //isExist((),"��ȷ��������ȷ");
        //isExist((userCode==registerCode),"��������֤��");
        $.ajax({
            url:"/user/register",
            type:"post",
            data:{username:userName,password:userPass,mobile:userNumber,vCode:userCode},
            success:function(res){
                if(res.success){
                    mui.toast("ע��ɹ�");
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