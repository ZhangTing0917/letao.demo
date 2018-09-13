$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    $.ajax({
    	url:' /category/queryTopCategory',
    	type:'get',
    	success:function(res){
            var html = template('category-left',res);
            //console.log(html);
            $('.cate-left ul').html(html);
            $('.cate-left ul').children().eq(0).children().addClass('active');
            var id = 1;
            getCateRight(id);
        }
    })
    $('.cate-left ul').on('click','a',function(){
        $(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
        var  id = $(this).data('id');
        getCateRight(id);
    })
     function getCateRight(id){
        $.ajax({
            url:' /category/querySecondCategory',
            type:'get',
            data:{id:id},
            success:function(res){
                var html;
                if(res.rows.length){
                    html = template('category-right',res);
                }else{
                    html='暂无数据'
                }
                $('.cate-right ul').html(html);
            }
        })
    }
})