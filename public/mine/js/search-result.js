/**
 * Created by Administrator on 2018/9/14.
 */
$(function(){
    var href = location.href;
    var index = href.indexOf('?');
    var hrefMessage = href.substr(index+1);
    var keyArr =  hrefMessage.split('&');
    //console.log(keyArr);
    var getData = function(name,keyArr){
        var keyObj = {};
        for (var i = 0; i < keyArr.length; i++) {
           keyObj[keyArr[i].split('=')[0]] =  keyArr[i].split('=')[1];
        }
        return keyObj[name];
    };
    var keyword = getData('keyword',keyArr);
    $.ajax({
        url:'/product/queryProduct',
        type:'get',
        data:{keyword:keyword,page:1,pageSize:6},
        success:function(res){
            console.log(res);
            var html = template('result-tpl',res);
            $('.product-b').html(html);
        }
    })
})
