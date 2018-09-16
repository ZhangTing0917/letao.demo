/**
 * Created by Administrator on 2018/9/16.
 */
$(function(){
    $('body').on('tap','a',function(){
        mui.openWindow({
            url:$(this).attr('href')
        })
    });
});
function getKeyWord(name,href){
    var index = href.indexOf('?');
    var hrefMessage = href.substr(index+1);
    var keyArr =  hrefMessage.split('&');
    var keyObj = {};
    for (var i = 0; i < keyArr.length; i++) {
        keyObj[keyArr[i].split('=')[0]] =  keyArr[i].split('=')[1];
    }
    return keyObj[name];
};