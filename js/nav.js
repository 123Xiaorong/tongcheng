// 个人中心和退出登录的收放
var btnState = 0;
$("#myInfo").click(function () {
    if (btnState == 0) {
        $("#myInfoNav").css({
            "display": "inline-block",
            "position": "relative",
            "top": "45px",
        });
        btnState = 1;
    } else {
        $("#myInfoNav").css({
            "display": "none",
        });
        btnState = 0;
    }
});
// 登录后的页面显示当前用户
function newName(){
    var myAdministrator=JSON.parse(localStorage.getItem('myAdministrator'));
    $("#user>span:nth-child(2)").text(myAdministrator.adName);
}
setInterval(newName,0);
// 获取当前时间
function myCureTime() {
    $("#CureTime>span").text(new Date().toLocaleString());
}
//实时监听页面的时间
setInterval(myCureTime, 0);