/**
 * Created by Administrator on 2018/9/16.
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