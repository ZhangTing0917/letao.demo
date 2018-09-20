$(function(){
    var picker = new mui.PopPicker({layer:3});

    // 为picker选择器添加数据
    picker.setData(cityData);

    // 当用户敲击文本框的时候
    $('#selectCity').on('tap', function(){

        // 显示picker选择器
        picker.show(function(selectItems){

            // 将用户选择的内容显示在文本框中
            $('#selectCity').val(selectItems[0].text + selectItems[1].text + selectItems[2].text);
        });

    });
    $('[type = button]').on('tap',function(){
        var recipients = $('.recipients').val().trim();
        var postcode = $('.postcode').val().trim();
        var address = $('.address').val().trim();
        var addressDetail = $('.addressDetail').val().trim();
        if(!recipients){
            mui.toast("请填写姓名");
            return;
        }
        if(!postcode){
            mui.toast("请填写正确编码");
            return;
        }
        if(!address){
            mui.toast("请填写地址");
            return;
        }
        if(!addressDetail){
            mui.toast("请填写详细地址");
            return;
        }
        $.ajax({
            url:"/address/addAddress",
            type:"post",
            data:{recipients:recipients,postcode:postcode,address:address,addressDetail:addressDetail},
            success:function(res){
                console.log(res);
                if(res.success){
                    mui.toast("添加成功");
                    setTimeout(function(){
                        location.href = "address.html";
                    },2000)
                }else{
                    mui.toast(res.message);
                }
            }
        })


    })
})