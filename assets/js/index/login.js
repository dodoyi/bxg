define(['jquery'],function($){
    var $sub = $('#sub');
    $sub.on('click',clickHandler);
    function clickHandler(e){
        e.preventDefault();
        // 获取用户名和密码
        var username = $('#name').val();
        var password = $('#pass').val();
        // 表单校验
        if(!username.trim()||!password.trim()){
            return;
        }
        // 发送请求
        var options = {
            url:'/api/login',
            type:'post',
            data:{
                tc_name:username,
                tc_pass:password
            },
            success: function(data){
                console.log(data);
                if (data.code === 200 ){
                    window.alert('登录成功');
                }
            }
        }
        $.ajax(options);
    }

})