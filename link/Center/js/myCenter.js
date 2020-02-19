//获取数据
var myAdministrator=JSON.parse(localStorage.getItem('myAdministrator'));
//得到当前用户的个人信息，并显示
$("#myId").text(myAdministrator.adID);
$("#myName").text(myAdministrator.adName);
$("#mySex").text(myAdministrator.adSex);
$("#myPhone").text(myAdministrator.adPhone);
$("#myNum").text(myAdministrator.adNum);
$("#myEmail").text(myAdministrator.adEmail);
$("#myPower").text(myAdministrator.adPower);
$("#myAddress").text(myAdministrator.adAddress);
$("#myPasswordI").text(myAdministrator.adPassword);

//点击修改个人信息按钮
$("#myBtnTwo").click(function () {
    $("#myInfo").css({
        "display":"table",
    })
    $("#myCenter").css({
        "display":"none",
    })
    $("h3").text("个人中心/修改个人信息");
    //修改个人信息页面中获取当前用户信息
    $("#myInfoName").val(myAdministrator.adName);
    $("#myInfoPhone").val(myAdministrator.adPhone);
    $("#myInfoEmail").val(myAdministrator.adEmail);
});

// 点击修改个人信息中的保存按钮
$("#saveBtn").click(function () {
    // $.trim() 函数用于去除字符串两端的空白字符
    // 用户名正则表达式,只能输入汉字
    var userReg=/^[\u4e00-\u9fa5]{0,}$/;
    var user = $.trim($("#myInfoName").val());
    if (!userReg.test(user)) {
        alert("用户名使用汉字！");
        return false;
    }
    //手机号正则表达式
    // var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
    var phoneReg = /^1(3[0-9]|5[0-35-9]|8[0235-9])\d{8}$/;
    var phone = $.trim($("#myInfoPhone").val());
    if (!phoneReg.test(phone)) {
        alert(" 请输入有效的手机号码");
        return false;
    }
    //邮箱验证
    var EmailReg = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;
    var email = $.trim($("#myInfoEmail").val());
    if (!EmailReg.test(email)) {
        alert(" 请输入有效的邮箱！");
        return false;
    }
    // 判断是否为空
    if($("#myInfoName").val()!=""&&$("#myInfoPhone").val()!=""&&$("#myInfoEmail").val()!=""){
        var Name=$("#myInfoName").val();
        var Phone=$("#myInfoPhone").val();
        var Email=$("#myInfoEmail").val();
        if($("#provinces").text()!="请选择省份"&&$("#city").text()!="请选择城市"&&$("#area").text()!="请选择地区"){
            var Address=$("#provinces").text()+$("#city").text()+$("#area").text();
        }else{
            var Address=myAdministrator.adAddress;
        }
        myAdministrator.adName=Name;
        myAdministrator.adPhone=Phone;
        myAdministrator.adEmail=Email;
        myAdministrator.adAddress=Address;
        //重新给myAdministrator赋值
        localStorage.setItem('myAdministrator',JSON.stringify(myAdministrator));
        alert("保存成功！");
        $("#myInfo").css({
            "display":"none",
        })
        $("#myCenter").css({
            "display":"table",
        })
        $("h3").text("个人中心");
        $("#myName").text(myAdministrator.adName);
        $("#myPhone").text(myAdministrator.adPhone);
        $("#myEmail").text(myAdministrator.adEmail);
        $("#myAddress").text(myAdministrator.adAddress);
    }else {
        alert("输入的信息不能为空！")
    }
})

//点击修改个人信息中的取消按钮
$("#cancelBtn").click(function () {
    $("#myInfo").css({
        "display":"none",
    })
    $("#myCenter").css({
        "display":"table",
    })
    $("h3").text("个人中心");
    $("#myName").text(myAdministrator.adName);
    $("#myPhone").text(myAdministrator.adPhone);
    $("#myEmail").text(myAdministrator.adEmail);
    $("#myAddress").text(myAdministrator.adAddress);
})

// 修改密码
$("#myBtnOne").click(function () {
    $("h3").text("个人中心/修改密码");
    $("#secret").val("");
    $("#secretAgain").val("");
    $("#secretOld").val("");
    $("#myCenter").css({
        "display":"none",
    })
    $("#myPassword").css({
        "display":"table",
    })
})

// 密码强度
//显示颜色
function pwStrength(pwd) {
    O_color = "#eeeeee";
    L_color = "#ffd8b4";
    M_color = "#ffaf56";
    H_color = "#e85959";
    if (pwd == null || pwd == '') {
        Lcolor = Mcolor = Hcolor = O_color;
    } else {
        S_level = checkStrong(pwd);
        switch (S_level) {
            case 0:
                Lcolor = Mcolor = Hcolor = O_color;
            case 1:
                Lcolor = L_color;
                Mcolor = Hcolor = O_color;
                break;
            case 2:
                Lcolor = L_color;
                Mcolor = M_color;
                Hcolor = O_color;
                break;
            default:
                Lcolor = L_color;
                Mcolor = M_color;
                Hcolor = H_color;
        }
    }
    $("#strength_L").css('background-color', Lcolor);
    $("#strength_M").css('background-color', Mcolor);
    $("#strength_H").css('background-color', Hcolor);
    return;
}
//判断输入密码的类型
function CharMode(iN) {
    if (iN >= 48 && iN <= 57) //数字
        return 1;
    if (iN >= 65 && iN <= 90) //大写
        return 2;
    if (iN >= 97 && iN <= 122) //小写
        return 4;
    else return 8;
}
//bitTotal函数
//计算密码模式
function bitTotal(num) {
    modes = 0;
    for (i = 0; i < 4; i++) {
        if (num & 1) modes++;
        num >>>= 1;
    }
    return modes;
}
//返回强度级别
function checkStrong(sPW) {
    if (sPW.length <= 4) return 0; //密码太短
    Modes = 0;
    for (i = 0; i < sPW.length; i++) {
        //密码模式
        Modes |= CharMode(sPW.charCodeAt(i));
    }
    return bitTotal(Modes);
}
// 密码强度
// 修改密码中的提交按钮
count=0;
$("#mySumbit").click(function () {
    console.log(localStorage.getItem("count"));
    // 利用正则表达式判断密码
    if($("#secret").val()!==""&&$("#secretAgain").val()!==""&&$("#secretOld").val()!=""){
        // var myPassReg=/^(?![^A-z]+$)(?!\D+$)[A-z\d]{5,10}$/;
        if(localStorage.getItem("count")==null){
            if(($("#secretOld").val())!=myAdministrator.adPassword){
                alert("输入的原密码错误！");
                return false;
            }
        }else {
            if(hex_md5($("#secretOld").val())!=myAdministrator.adPassword){
                alert("输入的原密码错误！");
                return false;
            }
        }
        // if(hex_md5($("#secretOld").val())!=myAdministrator.adPassword||($("#secretOld").val())!=myAdministrator.adPassword){
        //     alert("输入的原密码错误！");
        //     return false;
        // }
            var myPassReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,10}$/;
            var myPass = $.trim($("#secret").val());
            if (!myPassReg.test(myPass)) {
                alert(" 请输入符合要求的密码！");
                return false;
            }
            if(($.trim($("#secret").val())===$.trim($("#secretAgain").val()))){
                myAdministrator.adPassword=hex_md5($("#secret").val());
                //重新给myAdministrator赋值
                localStorage.setItem('myAdministrator',JSON.stringify(myAdministrator));
                alert("修改成功！");
                count++;
                console.log(count);
                localStorage.setItem("count",count);
                $("#myPassword").css({
                    "display":"none",
                })
                $("#myCenter").css({
                    "display":"table",
                })
                $("h3").text("个人中心");
                $("#myPasswordI").text(myAdministrator.adPassword);
            }else{
                alert("两次密码不一致！");
            }
    }else{
        alert("输入的密码为空")
    }
})
// 修改密码中的取消按钮
$("#cancel").click(function () {
    $("#myCenter").css({
        "display":"table",
    })
    $("#myPassword").css({
        "display":"none",
    })
    $("h3").text("个人中心");
    $("#secret").val("");
    $("#secretAgain").val("");
})
