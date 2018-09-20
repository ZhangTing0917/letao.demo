/**
 * Created by Administrator on 2018/9/20.
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
        }
        userInform = res.success;
    }
});
$(function(){
    $.ajax({
        url:"/address/queryAddress",
        type:"get",
        success:function(res){
            var html = template("addressTmp",{res});
            $('.addressUl').html(html);
        }
    });
    $('.addressUl').on("tap",'.addressDel',function(){
        var id = $(this).parent().data('id');
        var li = $(this).parents('li')[0];
        mui.confirm('确认要删除吗','提示',['确认','取消'],function(mes){
            if(!mes.index){
                $.ajax({
                    url:" /address/deleteAddress",
                    type:"post",
                    data:{id:id},
                    success:function(res){
                        console.log(res);
                        if(res.success){
                            location.reload();
                        }else{
                            mui.toast(res.message);
                        }
                    }
                })
            }else{
                mui.swipeoutClose(li);
            }
        },'div')
    })
});