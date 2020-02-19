var myOrder = [
    {
        cuID:"C111",
        orderNo: "LQD001",
        commodity: "阿玛尼黑钥匙至臻奂颜赋活精华液",
        goodsOriginalCost:"1280",
        supplierCall: "-",
        customName: "小王",
        customMobile: "13540821678",
        orderCompany: "-",
        orderTime: "-",
        sendTime:"-",
        sendNo:"-",
        orderState: "待支付",
        operate: "确认支付"
    },
    {
        cuID:"C112",
        orderNo: "LQD002",
        commodity: "阿玛尼蕴能奂颜净彻滋润洁面乳",
        goodsOriginalCost:"1080",
        supplierCall: "-",
        customName: "小李",
        customMobile: "13540815790",
        orderCompany: "-",
        orderTime: "2018-04-09 18:19:30",
        orderState: "待发货",
        operate: "发货",
        sendTime:"-",
        sendNo:"-",
    },
    {
        cuID:"C113",
        orderNo: "LQD003",
        commodity: "阿玛尼蕴能奂颜均衡洁颜凝露",
        goodsOriginalCost:"1180",
        supplierCall: "13999999999",
        customName: "小张",
        customMobile: "13540834268",
        orderCompany: "顺丰",
        orderTime: "2018-04-08 18:19:30",
        sendTime: "2018-04-09 18:19:30",
        orderState: "已发货",
        operate: "确认收货",
        sendNo:"10003",
    },
    {
        cuID:"C114",
        orderNo: "LQD004",
        commodity: "青柠罗勒与柑橘香水",
        goodsOriginalCost:"560",
        supplierCall: "13666666666",
        customName: "小帆",
        customMobile: "13540891634",
        orderCompany: "圆通",
        orderTime: "2018-04-05 18:19:30",
        sendTime: "2018-04-09 18:19:30",
        orderState: "已收货",
        operate: "完成",
        sendNo:"100004",
    },
    {
        cuID:"C115",
        orderNo: "LQD005",
        commodity: "忍冬与印蒿香水",
        goodsOriginalCost:"1500",
        supplierCall: "13666666666",
        customName: "小龙",
        customMobile: "13540873021",
        orderCompany: "中通",
        orderTime: "2018-04-04 18:19:30",
        sendTime: "2018-04-09 18:19:30",
        orderState: "退款请求",
        operate: "退款详情",
        sendNo:"10005",
    },
    {
        cuID:"C116",
        orderNo: "LQD006",
        commodity: "英国橡树与红醋栗香水",
        goodsOriginalCost:"800",
        supplierCall: "13666666666",
        customName: "小周",
        customMobile: "13540815278",
        orderCompany: "顺丰",
        orderTime: "2018-04-03 18:19:30",
        sendTime: "2018-04-09 18:19:30",
        orderState: "待退款",
        sendNo:"10006",
        operate: "退款"
    },
    {
        cuID:"C117",
        orderNo: "LQD007",
        commodity: "花漾曜白柔肤水",
        goodsOriginalCost:"760",
        supplierCall: "13666666666",
        customName: "小何",
        customMobile: "13540819182",
        orderCompany: "圆通",
        orderTime: "2018-04-02 18:19:30",
        sendTime: "2018-04-09 18:19:30",
        sendNo:"10007",
        orderState: "已取消",
        operate: "点击订单ID查看详情"
    },
    {
        cuID:"C118",
        orderNo: "LQD008",
        commodity: "阿玛尼黑钥匙至臻奂颜赋活精华液",
        goodsOriginalCost:"1280",
        supplierCall: "13999999999",
        customName: "小王",
        customMobile: "13540821678",
        orderCompany: "中通",
        orderTime: "2018-04-01 18:19:30",
        sendTime: "2018-04-09 18:19:30",
        sendNo:"10008",
        orderState: "已完成",
        operate: "点击订单ID查看详情"
    },
];
var table = document.getElementById("List");
var tbody = table.childNodes[1];
var bg = document.getElementsByClassName("bg")[0];
var send = document.getElementsByClassName("send")[0];
var b = 0;
var c = 0;
var First ="-";
var Second= "-";
var FirstTime="-";
var SecondTime="-";


function myList() {
    var myListTr = document.createElement("tr");
    var orderID = document.createElement("td");
    orderID.setAttribute("class", "OrderId");
    myListTr.appendChild(orderID);
    var commodityName = document.createElement("td");
    myListTr.appendChild(commodityName);
    var CustName = document.createElement("td");
    myListTr.appendChild(CustName);
    var CustNu = document.createElement("td");
    myListTr.appendChild(CustNu);
    var OrderComp = document.createElement("td");
    OrderComp.setAttribute("class", "com");
    myListTr.appendChild(OrderComp);
    var OrderTime = document.createElement("td");
    OrderTime.setAttribute("class", "time");
    myListTr.appendChild(OrderTime);
    var OrderState = document.createElement("td");
    OrderState.setAttribute("class", "State");
    myListTr.appendChild(OrderState);
    var Operate = document.createElement("td");
    OrderState.setAttribute("class", "MyOperate");
    myListTr.appendChild(Operate);
    tbody.appendChild(myListTr);
}

for (var i = 0; i < myOrder.length; i++) {
    myList();
}

function all() {
    for (var i = 1; i < tbody.getElementsByTagName("tr").length; i++) {
        tbody.getElementsByTagName("tr")[i].getElementsByTagName("td")[0].innerHTML = "<button class='ID' onclick='Id()'>111</button>";
        tbody.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText = myOrder[i - 1].commodity;
        tbody.getElementsByTagName("tr")[i].getElementsByTagName("td")[2].innerText = myOrder[i - 1].customName;
        tbody.getElementsByTagName("tr")[i].getElementsByTagName("td")[3].innerText = myOrder[i - 1].customMobile;
        tbody.getElementsByTagName("tr")[i].getElementsByTagName("td")[4].innerText = myOrder[i - 1].orderCompany;
        tbody.getElementsByTagName("tr")[i].getElementsByTagName("td")[5].innerText = myOrder[i - 1].orderTime;
        tbody.getElementsByTagName("tr")[i].getElementsByTagName("td")[6].innerText = myOrder[i - 1].orderState;
        tbody.getElementsByTagName("tr")[i].getElementsByTagName("td")[7].innerHTML = "<button class='btn' onclick='Btn()'>111</button>";
        if (i>5){
            var tr=table.getElementsByTagName("tr");
            tr[i].style.display="none"
        }
    }
}
function page_1(){
    var tr=table.getElementsByTagName("tr");
    for (var j = 1; j <6; j++) {
        tr[j].style.display=""
    }
    for (var i = 6; i < 9; i++) {
        tr[i].style.display="none"
    }
}
function page_2(){
    var tr=table.getElementsByTagName("tr");
    for (var j = 1; j <6; j++) {
        tr[j].style.display="none"
    }
    for (var i = 6; i < 9; i++) {
        tr[i].style.display=""
    }
}

window.onload = all();
window.onload = content();
window.onload = Btn();

function Btn() {
    var oOperate = document.getElementsByClassName("MyOperate");
    var btn = document.getElementsByClassName("btn");
    //
    var com = document.getElementsByClassName("com");
    var time = document.getElementsByClassName("time");
    //
    var Year = new Date();
    var hou = new Date();
    var min = new Date();
    var ss = new Date();
    hou = hou.getHours();
    min = min.getMinutes();
    ss = ss.getSeconds();

    myDate = Year.toLocaleDateString().split('/').join('-');
    //
    for (var j = 0; j < btn.length; j++) {
        btn[j].No = j;
        btn[j].style.border = "none";
        btn[j].style.outline = "none";
        btn[j].onclick = function () {
            for (var i = 0; i < oOperate.length; i++) {
                if (this.No == i) {
                    var oOperateValue = oOperate[i].innerText;
                    if (oOperateValue == "待支付") {
                        oOperate[i].innerText = "待发货";
                        this.innerText = "发货";
                        time[i].innerText = myDate + hou + ":" + min + ":" + ss;
                    }
                    if (oOperateValue == "待发货") {
                        var a = prompt("输入快递公司" + "\n" + "1.中通,2.顺丰,3.圆通");
                        b = prompt("输入快递单号");
                        var h = new Date();
                        var m = new Date();
                        var s = new Date();
                        h = h.getHours();
                        m = m.getMinutes();
                        s = s.getSeconds();
                        if (i==0){
                            First=b;
                            FirstTime= myDate + '   ' + h+ ":" + m + ":" + s;
                        }
                        if (i==1){
                            Second=b;
                            SecondTime= myDate + '   ' + h + ":" + m + ":" + s;
                        }
                        if (a == 1) {
                            oOperate[i].innerText = "已发货";
                            this.innerText = "确认收货";
                            com[i].innerText = "中通";
                        }
                        if (a == 2) {
                            oOperate[i].innerText = "已发货";
                            this.innerText = "确认收货";
                            com[i].innerText = "顺丰";
                        }
                        if (a == 3) {
                            oOperate[i].innerText = "已发货";
                            this.innerText = "确认收货";
                            com[i].innerText = "圆通";
                        }
                    }
                    if (oOperateValue == "已发货") {
                        oOperate[i].innerText = "已收货";
                        this.innerText = "完成";
                    }
                    if (oOperateValue == "已收货") {
                        oOperate[i].innerText = "已完成";
                        this.innerText = "点击ID查看详情";
                    }
                    if (oOperateValue == "退款请求") {
                        send.style.display = "block";
                        bg.style.display = "block";
                        b = i;
                    }
                    if (oOperateValue == "待退款") {
                        oOperate[i].innerText = "已完成";
                        this.innerText = "点击ID查看详情";
                    }
                }
            }
        }
    }
}

function content() {
    var btn = document.getElementsByClassName("btn");
    var ID = document.getElementsByClassName("ID");
    for (var j = 0; j < btn.length; j++) {
        btn[j].innerHTML = myOrder[j].operate;
        ID[j].innerHTML = myOrder[j].orderNo;
    }
}

function Close() {
    send.style.display = "none";
    bg.style.display = "none";
}

function Cancel() {
    send.style.display = "none";
    bg.style.display = "none";
}

function Sure() {
    var oOperate = document.getElementsByClassName("MyOperate");
    var btn = document.getElementsByClassName("btn");
    console.log(b);
    oOperate[4].innerText = "待退款";
    btn[4].innerText = "退款";
    send.style.display = "none";
    bg.style.display = "none";
}

function Id() {
    var OrderId = document.getElementsByClassName("OrderId");
    var more=document.getElementsByClassName("more")[0];
    var bg=document.getElementsByClassName("bg")[0];
   //
    var more_orderNo=document.getElementsByClassName("more_orderNo")[0];
    var more_cusNo=document.getElementsByClassName("more_cusNo")[0];
    var more_cusNa=document.getElementsByClassName("more_cusNa")[0];
    var more_cusPh=document.getElementsByClassName("more_cusPh")[0];
    var more_ord=document.getElementsByClassName("more_ord")[0];
    var more_pri=document.getElementsByClassName("more_pri")[0];
    var more_ordNa=document.getElementsByClassName("more_ordNa")[0];
    var more_CusNu=document.getElementsByClassName("more_CusNu")[0];
    var more_Cus=document.getElementsByClassName("more_Cus")[0];
    var more_CusNo=document.getElementsByClassName("more_CusNo")[0];
    var more_SendTime=document.getElementsByClassName("more_SendTime")[0];
    var more_PayTime=document.getElementsByClassName("more_PayTime")[0];
    for (var i = 0; i < OrderId.length; i++) {
        OrderId[i].onclick=function () {
            for (var j=0;j<myOrder.length;j++) {
                var OrderIdValue = this.innerText;
                var oOperate = document.getElementsByClassName("MyOperate")[j];
                var com = document.getElementsByClassName("com")[j];
                var time = document.getElementsByClassName("time")[j];

                var oOperateValue = oOperate.innerText;
                var oCumValue = com.innerText;
                var oTimeValue =time.innerText;
                if (OrderIdValue== myOrder[j].orderNo) {
                    more_orderNo.innerText=myOrder[j].orderNo;
                    more_cusNo.innerText=myOrder[j].cuID;
                    more_cusNa.innerText=myOrder[j].customName;
                    more_cusPh.innerText=myOrder[j].customMobile;
                    more_pri.innerText=myOrder[j].goodsOriginalCost;
                    more_ordNa.innerText=myOrder[j].commodity;
                    //..........

                    more_ord.innerText=oOperateValue;
                    more_Cus.innerText=oCumValue;
                    more_PayTime.innerText=oTimeValue;
                    if (more_Cus.innerText == "圆通") {
                        more_CusNo.innerText="13888888888"
                    }
                    if (more_Cus.innerText == "中通") {
                        more_CusNo.innerText="13666666666"
                    }
                    if (more_Cus.innerText == "顺丰") {
                        more_CusNo.innerText="13999999999"
                    }
                    if (j>=2){
                        more_CusNu.innerText=myOrder[j].sendNo;
                        more_SendTime.innerText=myOrder[j].sendTime;
                    }
                    if (j==0){
                        more_CusNu.innerText=First;
                        more_SendTime.innerText=FirstTime;
                    }
                    if (j==1){
                        more_CusNu.innerText=Second;
                        more_SendTime.innerText=SecondTime;
                    }

                    more.style.display = "block";
                    bg.style.display = "block";
                }
            }
        }

    }
}

//查询
function more_Sure() {
    var more=document.getElementsByClassName("more")[0];
    var bg=document.getElementsByClassName("bg")[0];
    more.style.display = "none";
    bg.style.display = "none";

}
function All() {
    document.getElementsByClassName("list_choose")[0].style['border-bottom'] = '1px solid #00BFFF';
    document.getElementsByClassName("list_choose")[1].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[2].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[3].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[4].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[5].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[6].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[7].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[8].style['border-bottom'] = '1px solid white';
    var tr=table.getElementsByTagName("tr");
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="";
    for (var i = 1; i < 6; i++) {
        tr[i].style.display="";
    }

}
function Pay() {
    document.getElementsByClassName("list_choose")[0].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[1].style['border-bottom'] = '1px solid #00BFFF';
    document.getElementsByClassName("list_choose")[2].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[3].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[4].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[5].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[6].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[7].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[8].style['border-bottom'] = '1px solid white';
    var tr=table.getElementsByTagName("tr");
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="none";
    for (var i = 0; i < tr.length; i++) {
        td =tr[i].getElementsByTagName("td")[6];
        if (td){
            if (td.innerText=="待支付") {
                tr[i].style.display="";
            }else {
                tr[i].style.display="none";
            }
        }
    }
}
function Send() {
    document.getElementsByClassName("list_choose")[0].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[1].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[2].style['border-bottom'] = '1px solid #00BFFF';
    document.getElementsByClassName("list_choose")[3].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[4].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[5].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[6].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[7].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[8].style['border-bottom'] = '1px solid white';
    var tr=table.getElementsByTagName("tr");
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="none";
    for (var i = 0; i < tr.length; i++) {
        td =tr[i].getElementsByTagName("td")[6];
        if (td){
            if (td.innerText=="待发货") {
                tr[i].style.display="";
            }else {
                tr[i].style.display="none";
            }
        }
    }
}
function HadSend() {
    document.getElementsByClassName("list_choose")[0].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[1].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[2].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[3].style['border-bottom'] = '1px solid #00BFFF';
    document.getElementsByClassName("list_choose")[4].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[5].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[6].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[7].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[8].style['border-bottom'] = '1px solid white';
    var tr=table.getElementsByTagName("tr");
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="none";
    for (var i = 0; i < tr.length; i++) {
        td =tr[i].getElementsByTagName("td")[6];
        if (td){
            if (td.innerText=="已发货") {
                tr[i].style.display="";
            }else {
                tr[i].style.display="none";
            }
        }
    }
}
function Down() {
    document.getElementsByClassName("list_choose")[0].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[1].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[2].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[3].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[4].style['border-bottom'] = '1px solid #00BFFF';
    document.getElementsByClassName("list_choose")[5].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[6].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[7].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[8].style['border-bottom'] = '1px solid white';
    var tr=table.getElementsByTagName("tr");
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="none";
    for (var i = 0; i < tr.length; i++) {
        td =tr[i].getElementsByTagName("td")[6];
        if (td){
            if (td.innerText=="已收货") {
                tr[i].style.display="";
            }else {
                tr[i].style.display="none";
            }
        }
    }
}
function DrawBack() {
    document.getElementsByClassName("list_choose")[0].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[1].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[2].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[3].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[4].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[5].style['border-bottom'] = '1px solid #00BFFF';
    document.getElementsByClassName("list_choose")[6].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[7].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[8].style['border-bottom'] = '1px solid white';
    var tr=table.getElementsByTagName("tr");
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="none";
    for (var i = 0; i < tr.length; i++) {
        td =tr[i].getElementsByTagName("td")[6];
        if (td){
            if (td.innerText=="退款请求") {
                tr[i].style.display="";
            }else {
                tr[i].style.display="none";
            }
        }
    }
}
function ForDraw() {
    document.getElementsByClassName("list_choose")[0].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[1].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[2].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[3].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[4].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[5].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[6].style['border-bottom'] = '1px solid #00BFFF';
    document.getElementsByClassName("list_choose")[7].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[8].style['border-bottom'] = '1px solid white';
    var tr=table.getElementsByTagName("tr");
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="none";
    for (var i = 0; i < tr.length; i++) {
        td =tr[i].getElementsByTagName("td")[6];
        if (td){
            if (td.innerText=="待退款") {
                tr[i].style.display="";
            }else {
                tr[i].style.display="none";
            }
        }
    }
}
function CanCel() {
    document.getElementsByClassName("list_choose")[0].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[1].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[2].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[3].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[4].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[5].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[6].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[7].style['border-bottom'] = '1px solid #00BFFF';
    document.getElementsByClassName("list_choose")[8].style['border-bottom'] = '1px solid white';
    var tr=table.getElementsByTagName("tr");
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="none";
    for (var i = 0; i < tr.length; i++) {
        td =tr[i].getElementsByTagName("td")[6];
        if (td){
            if (td.innerText=="已取消") {
                tr[i].style.display="";
            }else {
                tr[i].style.display="none";
            }
        }
    }
}
function Compelet() {
    document.getElementsByClassName("list_choose")[0].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[1].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[2].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[3].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[4].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[5].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[6].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[7].style['border-bottom'] = '1px solid white';
    document.getElementsByClassName("list_choose")[8].style['border-bottom'] = '1px solid #00BFFF';
    var tr=table.getElementsByTagName("tr");
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="none";
    for (var i = 0; i < tr.length; i++) {
        td =tr[i].getElementsByTagName("td")[6];
        if (td){
            if (td.innerText=="已完成") {
                tr[i].style.display="";
            }else {
                tr[i].style.display="none";
            }
        }
    }
}

function FIND() {
    var Text_ID = document.getElementsByClassName("Text_ID")[0].value;
    var Text_name = document.getElementsByClassName("Text_name")[0].value;
    var Text_com = document.getElementsByClassName("Text_com")[0].value;
    var Text_cus = document.getElementsByClassName("Text_cusName")[0].value;
    var tr = table.getElementsByTagName("tr");
    var id;
    var name;
    var com;
    var cus;
    var next_box=document.getElementsByClassName("next_box")[0];
    next_box.style.display="none";
    if (Text_ID == "") {
        id = 0
    } else {
        id = 1
    }
    if (Text_name == "") {
        name = 0
    } else {
        name = 1
    }
    if (Text_com == "") {
        com = 0
    } else {
        com = 1
    }
    if (Text_cus == "") {
        cus = 0
    } else {
        cus = 1
    }
    if (id==1&&name==0&&com==0&&cus==0){
        for (var i = 0; i < tr.length; i++) {
            td =tr[i].getElementsByTagName("td")[0];
            if (td){
                if (td.innerText==Text_ID) {
                    tr[i].style.display="";
                    }else {
                    tr[i].style.display="none";
                    }
            }
        }
    }
    if (id==1&&name==1&&com==0&&cus==0){
        for (var i = 0; i < tr.length; i++) {
            td =tr[i].getElementsByTagName("td")[0];
            td1 =tr[i].getElementsByTagName("td")[1];
            if (td){
                if (td.innerText==Text_ID&&td1.innerText==Text_name) {
                    tr[i].style.display="";
                    }else {
                    tr[i].style.display="none";
                    }
            }
        }
    }
    if (id==1&&name==1&&com==1&&cus==0){
        for (var i = 0; i < tr.length; i++) {
            td =tr[i].getElementsByTagName("td")[0];
            td1 =tr[i].getElementsByTagName("td")[1];
            td2 =tr[i].getElementsByTagName("td")[4];
            if (td){
                if (td.innerText==Text_ID&&td1.innerText==Text_name&&td2.innerText==Text_com) {
                    tr[i].style.display="";
                    }else {
                    tr[i].style.display="none";
                    }
            }
        }
    }
    if (id==1&&name==1&&com==1&&cus==1){
        for (var i = 0; i < tr.length; i++) {
            td =tr[i].getElementsByTagName("td")[0];
            td1 =tr[i].getElementsByTagName("td")[1];
            td2 =tr[i].getElementsByTagName("td")[4];
            td3 =tr[i].getElementsByTagName("td")[2];
            if (td){
                if (td.innerText==Text_ID&&td1.innerText==Text_name&&td2.innerText==Text_com&&td3.innerText==Text_cus) {
                    tr[i].style.display="";
                    }else {
                    tr[i].style.display="none";
                    }
            }
        }
    }
    if (id==0&&name==1&&com==0&&cus==0){
        for (var i = 0; i < tr.length; i++) {
            td1 =tr[i].getElementsByTagName("td")[1];
            if (td1){
                if (td1.innerText==Text_name) {
                    tr[i].style.display="";
                    }else {
                    tr[i].style.display="none";
                    }
            }
        }
    }
    if (id==0&&name==1&&com==1&&cus==0){
        for (var i = 0; i < tr.length; i++) {
            td1 =tr[i].getElementsByTagName("td")[1];
            td2 =tr[i].getElementsByTagName("td")[4];
            if (td1){
                if (td1.innerText==Text_name&&td2.innerText==Text_com) {
                    tr[i].style.display="";
                    }else {
                    tr[i].style.display="none";
                    }
            }
        }
    }
    if (id==0&&name==1&&com==0&&cus==1){
        for (var i = 0; i < tr.length; i++) {
            td1 =tr[i].getElementsByTagName("td")[1];
            td3 =tr[i].getElementsByTagName("td")[2];
            if (td1){
                if (td1.innerText==Text_name&&td3.innerText==Text_cus) {
                    tr[i].style.display="";
                    }else {
                    tr[i].style.display="none";
                    }
            }
        }
    }
    if (id==0&&name==1&&com==1&&cus==1){
        for (var i = 0; i < tr.length; i++) {
            td1 =tr[i].getElementsByTagName("td")[1];
            td2 =tr[i].getElementsByTagName("td")[4];
            td3 =tr[i].getElementsByTagName("td")[2];
            if (td1){
                if (td1.innerText==Text_name&&td2.innerText==Text_com&&td3.innerText==Text_cus) {
                    tr[i].style.display="";
                    }else {
                    tr[i].style.display="none";
                    }
            }
        }
    }
    if (id==0&&name==0&&com==1&&cus==0){
        for (var i = 0; i < tr.length; i++) {
            td2 =tr[i].getElementsByTagName("td")[4];
            if (td2){
                if (td2.innerText==Text_com) {
                    tr[i].style.display="";
                }else {
                    tr[i].style.display="none";
                }
            }
        }
    }
    if (id==0&&name==0&&com==1&&cus==1){
        for (var i = 0; i < tr.length; i++) {
            td2 =tr[i].getElementsByTagName("td")[4];
            td3 =tr[i].getElementsByTagName("td")[2];
            if (td2){
                if (td2.innerText==Text_com&&td3.innerText==Text_cus) {
                    tr[i].style.display="";
                    }else {
                    tr[i].style.display="none";
                    }
            }
        }
    }
    if (id==0&&name==0&&com==0&&cus==1){
        for (var i = 0; i < tr.length; i++) {
            td3 =tr[i].getElementsByTagName("td")[2];
            if (td3){
                if (td3.innerText==Text_cus) {
                    tr[i].style.display="";
                }else {
                    tr[i].style.display="none";
                }
            }
        }
    }

}

