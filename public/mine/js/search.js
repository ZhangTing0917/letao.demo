/**
 * Created by Administrator on 2018/9/13.
 */
$(function(){
    var keyWord='';
    var markArr = [];
   $('.search>input[type=button]').on('tap',function(){
       keyWord = $(this).siblings().val();
       for(var i = 0;i<markArr.length;i++){
           if(keyWord==markArr[i]){
               markArr.splice(i,1);
           }
       }
       //markArr.forEach(function(index,value){
       //    console.log(keyWord,value);
       //    if(keyWord==value){
       //        markArr.splice(index,1);
       //        console.log(markArr);
       //    }
       //})
       if(keyWord.trim()){
           markArr.unshift(keyWord);
           localStorage.setItem('keyWord',JSON.stringify(markArr));
           location.href='http://localhost:3000/mine/search-result.html?a=1&b=3&keyword='+keyWord;
       }
   });
    markArr = JSON.parse(localStorage.getItem('keyWord'))||[];
    if(markArr){
        console.log(markArr);
      var html = template('history-content',{markArr:markArr});
    }
    $('.history>ul').html(html);
    $('.search-history>span').eq(1).click(function(){
        localStorage.removeItem('keyWord');
        markArr = [];
        $('.history>ul').html('');
    })
})