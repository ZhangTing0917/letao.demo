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
            }
        })
    })
    $('[type = button]').on('tap',function(){
        var userName = $('.userName').val().trim();
        var userNumber = $('.userNumber').val().trim();
        var userPass = $('.userPass').val().trim();
        var userPassAgain = $('.userPassAgain').val().trim();
        var userCode = $('.userCode').val().trim();

        if(!registerCode){

        }
    })
})