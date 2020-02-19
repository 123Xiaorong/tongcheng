
//活动数据
var activity_data=[
    {activityID:1,activityLink:"https://mp.weixin.qq.com/s/BJV3Xrc31Dlq7Ypz6T-VwA",activityName:"国庆节满500减100",activityState:"已结束",StartTime:"2019-10-1",EndTime:"2019-10-7",setTime:"2019-9-30",whoSet:"张三"},
    {activityID:2,activityLink:"https://mp.weixin.qq.com/s/BJV3Xrc31Dlq7Ypz6T-VwA",activityName:"春节大礼包",activityState:"已结束",StartTime:"2019-2-1",EndTime:"2019-2-8",setTime:"2019-1-30",whoSet:"李四"},
    {activityID:3,activityLink:"https://mp.weixin.qq.com/s/BJV3Xrc31Dlq7Ypz6T-VwA",activityName:"中秋节送好礼",activityState:"已结束",StartTime:"2019-9-13",EndTime:"2019-9-15",setTime:"2019-9-10",whoSet:"小明"},
    {activityID:4,activityLink:"https://mp.weixin.qq.com/s/BJV3Xrc31Dlq7Ypz6T-VwA",activityName:"双11半价",activityState:"未开始",StartTime:"2019-11-11",EndTime:"2019-11-11",setTime:"2019-11-1",whoSet:"大黄"},
    {activityID:5,activityLink:"https://mp.weixin.qq.com/s/BJV3Xrc31Dlq7Ypz6T-VwA",activityName:"周年庆",activityState:"进行中",StartTime:"2019-10-10",EndTime:"2019-10-20",setTime:"2019-10-10",whoSet:"二哈"}
];
//优惠券数据
var coupon_data = [
    {couponId:"1",couponName:"满200减20",couponType: "满减券",whoSet:"张三",couponDate: "7天"},
    {couponId:"2",couponName:"3元抵价券",couponType: "立减券",whoSet:"李四",couponDate: "30天"},
    {couponId:"3",couponName:"20元抵价券",couponType: "立减券",whoSet:"小明",couponDate: "15天"},
    {couponId:"4",couponName:"9折折扣券",couponType: "折扣券",whoSet:"大黄",couponDate: "7天"},
    {couponId:"5",couponName:"满500减50",couponType: "立减券",whoSet:"二哈",couponDate: "3天"}
];


//修改删除按钮
var xiugaiAcButton="<button class='btn btn-primary' data-toggle=\"modal\" data-target=\"#myModal\" id=\"submitButtonA\" onclick='xiugaihuodong(this)'>修改</button>";
var xiugaiCpButton="<button class='btn btn-primary' data-toggle=\"modal\" data-target=\"#myModal1\" id=\"submitButtonC\" onclick='xiugaiCoupon(this)'>修改</button>";
var shanchuButtonA="<button class='btn btn-primary' onclick='DeleA(this)'>删除</button>";
var shanchuButtonC="<button class='btn btn-primary' onclick='DeleC(this)'>删除</button>";


//获取系统时间
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() + 1;
var date = myDate.getDate();
var Now = year + '-' + month + "-" + date;
console.log(Now);

//动态创建活动表格
$(function () {
    var html="";
    for(var i=0;i<activity_data.length;i++){
        html += "<tr>";
        html += "<td>"+activity_data[i].activityID+"</td>";
        html += "<td>"+activity_data[i].activityLink+"</td>";
        html += "<td>"+activity_data[i].activityName+"</td>";
        html += "<td>"+activity_data[i].activityState+"</td>";
        html += "<td>"+activity_data[i].StartTime+"</td>";
        html += "<td>"+activity_data[i].EndTime+"</td>";
        html += "<td>"+activity_data[i].setTime+"</td>";
        html += "<td>"+activity_data[i].whoSet+"</td>";
        html += "<td>"+xiugaiAcButton+shanchuButtonA+"</td>";
        html += "<tr>";
    }
    $('#activityTable').html(html);
});

//动态创建优惠券表格
$(function () {
    var html="";
    for(var i=0;i<coupon_data.length;i++){
        html += "<tr>";
        html += "<td>"+coupon_data[i].couponId+"</td>";
        html += "<td>"+coupon_data[i].couponName+"</td>";
        html += "<td>"+coupon_data[i].couponType+"</td>";
        html += "<td>"+coupon_data[i].whoSet+"</td>";
        html += "<td>"+coupon_data[i].couponDate+"</td>";
        html += "<td>"+xiugaiCpButton+shanchuButtonC+"</td>";
        html += "<tr>";
    }
    $('#couponTable').html(html);
});



//查询活动

$('#SearchActiv').click(function () {
    $('#activityResult').empty();
    var html="";
    for(var i=0;i<activity_data.length;i++){
        if($('#activityName').val()==activity_data[i].activityName||
            $('#activityID').val()==activity_data[i].activityID||
            $('#activityState').find("option:selected").text()==activity_data[i].activityState||
            $('#whoSet').val()==activity_data[i].whoSet){
            html += "<tr>";
            html += "<td>"+activity_data[i].activityID+"</td>";
            html += "<td>"+activity_data[i].activityLink+"</td>";
            html += "<td>"+activity_data[i].activityName+"</td>";
            html += "<td>"+activity_data[i].activityState+"</td>";
            html += "<td>"+activity_data[i].StartTime+"</td>";
            html += "<td>"+activity_data[i].EndTime+"</td>";
            html += "<td>"+activity_data[i].setTime+"</td>";
            html += "<td>"+activity_data[i].whoSet+"</td>";
            html += "<td>"+xiugaiAcButton+shanchuButtonA+"</td>";
            html += "<tr>";
        }
        console.log($('tr').eq());
    }
    if(html==""){
        html+="<div class='text-center'>搜索结果不存在</div>";
    }
    $('#activityResult').html(html);
});


//查询优惠券
$('#SearchCoupon').click(function () {
    $('#couponResult').empty();
    console.log($('#couponType').find("option:selected").text());
    var html="";
    for(var i=0;i<coupon_data.length;i++){
        if($('#couponName').val()==coupon_data[i].couponName||
            $('#couponID').val()==coupon_data[i].couponId||
            $('#couponType').find("option:selected").text()==coupon_data[i].couponType||
            $('#whoSetCoupon').val()==coupon_data[i].whoSet){
            html += "<tr>";
            html += "<td>"+coupon_data[i].couponId+"</td>";
            html += "<td>"+coupon_data[i].couponName+"</td>";
            html += "<td>"+coupon_data[i].couponType+"</td>";
            html += "<td>"+coupon_data[i].whoSet+"</td>";
            html += "<td>"+coupon_data[i].couponDate+"</td>";
            html += "<td>"+xiugaiCpButton+shanchuButtonC+"</td>";
            html += "<tr>";
        }
    }
    if(html==""){
        html+="<div class='text-center'>搜索结果不存在</div>";
    }
    $('#couponResult').html(html);
});



//删除活动&优惠券

function DeleA(e) {
    console.log($(e).parent().parent());
    if(confirm("确认删除？")){
        $(e).parent().parent().remove();
        iNum2 = parseInt($(e).parent().siblings().eq(0).text());
        activity_data.splice(iNum2-1);
    }
}
function DeleC(e) {
    if(confirm("确认删除？")){
        $(e).parent().parent().remove();
        iNum3 = parseInt($(e).parent().siblings().eq(0).text());
        coupon_data.splice(iNum3-1);
    }
}

//修改活动

var iNum;
function xiugaihuodong(e) {
    //console.log($(e).parent().siblings().eq(0).text());
    $('#ModalAID').text($(e).parent().siblings().eq(0).text());
    $('#ModalAlink').val($(e).parent().siblings().eq(1).text());
    $('#ModalAName').val($(e).parent().siblings().eq(2).text());
    $('#ModalAState').val($(e).parent().siblings().eq(3).text());
    $('#ModalASTime').val($(e).parent().siblings().eq(4).text());
    $('#ModalAEtime').val($(e).parent().siblings().eq(5).text());
    $('#ModalASetTime').val(Now);
    $('#ModalWhoSetA').text($(e).parent().siblings().eq(7).text());
    iNum = parseInt($(e).parent().siblings().eq(0).text());
    $('#submitEstablished').click(function () {
        // console.log(1111);
        activity_data[iNum-1].activityLink=$('#ModalAlink').val();
        activity_data[iNum-1].activityName=$('#ModalAName').val();
        activity_data[iNum-1].activityState=$('#ModalAState').find('option:selected').text();
        activity_data[iNum-1].StartTime=$('#ModalASTime').val();
        activity_data[iNum-1].EndTime=$('#ModalAEtime').val();
        activity_data[iNum-1].setTime=Now;
        console.log($('#ModalASTime').val());
        console.log( $(e).parent().siblings().eq(4).html());
        $(e).parent().siblings().eq(1).html($('#ModalAlink').val());
        $(e).parent().siblings().eq(2).html($('#ModalAName').val());
        $(e).parent().siblings().eq(3).html($('#ModalAState').find('option:selected').text());
        $(e).parent().siblings().eq(4).html($('#ModalASTime').val());
        $(e).parent().siblings().eq(5).html($('#ModalAEtime').val());
        $(e).parent().siblings().eq(6).html(Now);

    });
};


//修改优惠券

function xiugaiCoupon(e) {
    $('#ModalCouponID').text($(e).parent().siblings().eq(0).text());
    $('#ModalCouponName').val($(e).parent().siblings().eq(1).text());
    $('#ModalCouponType').val($(e).parent().siblings().eq(2).text());
    $('#ModalWhoSetC').text($(e).parent().siblings().eq(3).text());
    $('#ModalTime').val($(e).parent().siblings().eq(4).text());
    iNum1 = parseInt($(e).parent().siblings().eq(0).text());
    $('#submitEstablished1').click(function () {
        coupon_data[iNum1-1].couponName=$('#ModalCouponName').val();
        coupon_data[iNum1-1].couponType=$('#ModalCouponType').find('option:selected').text();
        coupon_data[iNum1-1].StartTime=$('#ModalTime').find('option:selected').text();
        $(e).parent().siblings().eq(1).html($('#ModalCouponName').val());
        $(e).parent().siblings().eq(2).html($('#ModalCouponType').find('option:selected').text());
        $(e).parent().siblings().eq(4).html($('#ModalTime').find('option:selected').text());
    })
}

//新建活动
var myAdministrator=JSON.parse(localStorage.getItem('myAdministrator'));
$('#SetsubmitEstablished').click(function () {
        var NewActiv={activityID:parseInt(activity_data.length)+1,
            activityLink:$('#SetModalAlink').val(),
            activityName:$('#SetModalAName').val(),
            activityState:$('#SetModalAState').find('option:selected').text(),
            StartTime:$('#SetModalASTime').val(),
            EndTime:$('#SetModalAEtime').val(),
            setTime:Now,
            whoSet:myAdministrator.adName};
        activity_data.push(NewActiv);
    var html="";
    for(var i=0;i<activity_data.length;i++){
        html += "<tr>";
        html += "<td>"+activity_data[i].activityID+"</td>";
        html += "<td>"+activity_data[i].activityLink+"</td>";
        html += "<td>"+activity_data[i].activityName+"</td>";
        html += "<td>"+activity_data[i].activityState+"</td>";
        html += "<td>"+activity_data[i].StartTime+"</td>";
        html += "<td>"+activity_data[i].EndTime+"</td>";
        html += "<td>"+activity_data[i].setTime+"</td>";
        html += "<td>"+activity_data[i].whoSet+"</td>";
        html += "<td>"+xiugaiAcButton+shanchuButtonA+"</td>";
        html += "<tr>";
    }
    $('#activityTable').html(html);
    }
);

//新建优惠券
$('#SetsubmitEstablished1').click(function () {
    var NewCoupon = {
        couponId: parseInt(coupon_data.length) + 1,
        couponName: $('#SetModalCouponName').val(),
        couponType: $('#SetModalCouponType').find('option:selected').text(),
        whoSet: myAdministrator.adName,
        couponDate:$('#SetModalTime').find('option:selected').text()
    };
    coupon_data.push(NewCoupon);
    var html="";
    for(var i=0;i<coupon_data.length;i++){
        html += "<tr>";
        html += "<td>"+coupon_data[i].couponId+"</td>";
        html += "<td>"+coupon_data[i].couponName+"</td>";
        html += "<td>"+coupon_data[i].couponType+"</td>";
        html += "<td>"+coupon_data[i].whoSet+"</td>";
        html += "<td>"+coupon_data[i].couponDate+"</td>";
        html += "<td>"+xiugaiCpButton+shanchuButtonC+"</td>";
        html += "<tr>";
    }
    $('#couponTable').html(html);
})
