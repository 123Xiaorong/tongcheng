var myadministrator=[];
myadministrator=administrator;
var index;
// ---------------------------账号登录---------------------------
var flag=false;
for (var j=0;j<myadministrator.length;j++){
    if(j==localStorage.getItem("index")){
        myadministrator[j].adPassword=JSON.parse(localStorage.getItem("myAdministrator")).adPassword;
        myadministrator[j].adName=JSON.parse(localStorage.getItem("myAdministrator")).adName;
        myadministrator[j].adPhone=JSON.parse(localStorage.getItem("myAdministrator")).adPhone;
        myadministrator[j].adEmail=JSON.parse(localStorage.getItem("myAdministrator")).adEmail;
        myadministrator[j].adAddress=JSON.parse(localStorage.getItem("myAdministrator")).adAddress;
    }
}
function myLogin(){
    var name=$("#username").val();
    var pass=$("#password").val();
    var len=myadministrator.length;
    for(var t=0;t<len;t++){
        if((name==myadministrator[t].adID||name==myadministrator[t].adPhone)&&
            (pass==myadministrator[t].adPassword||hex_md5(pass)==myadministrator[t].adPassword)&&
            flag==true){
                alert("登录成功");
                // 两个页面之间传值
                localStorage.setItem("index",t);
                localStorage.setItem('myAdministrator',JSON.stringify(myadministrator[t]));
                window.location.href="../index.html";
                break;
            }else {
                if(flag==false){
                    alert("滑动验证失败!");
                    return;
                }
                if(t==(len-1)){
                    alert("用户名或密码错误!");
                }
            }
    }
}

// 滑块变化
jigsaw.init(document.getElementById('captcha'), function () {
    flag=true;
    document.getElementById('msg').innerHTML = '匹配成功！'
});
// 重置按钮
function myClear() {
    $("#username").val("");
    $("#password").val("");
    $("#myPhone").val("");
    $("#myCode").val("");
}

// ---------------------------验证码登录---------------------------
//手机号正则表达式
var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
//间隔函数，1秒执行
var count = 60;
//timer变量，控制时间
var InterValObj1;
var curCount1;//当前剩余秒数
// 发送短信
function sendMessage() {
    curCount1 = count;
    var phone = $.trim($("#myPhone").val());
    if (!phoneReg.test(phone)) {
        alert(" 请输入有效的手机号码");
        return false;
    }
    //设置button效果，开始计时
    $("#btnSendCode").attr("disabled", "true");
    $("#btnSendCode").val( + curCount1 + "秒再获取");
    //启动计时器，1秒执行一次
    InterValObj1 = window.setInterval(SetRemainTime, 1000);
}
function SetRemainTime() {
    if (curCount1 == 1) {
        window.clearInterval(InterValObj1);//停止计时器
        $("#btnSendCode").removeAttr("disabled");//启用按钮
        $("#btnSendCode").val("重新发送");
    }
    else {
        curCount1--;
        $("#btnSendCode").val( + curCount1 + "秒再获取");
    }
}



