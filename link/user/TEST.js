//表头数据
var headDatas = ["消费者ID","消费者名字","联系方式","邮箱地址","密码","等级","操作"];
// 1.创建table元素
var table = document.createElement("table");
table.setAttribute("id","tablesum");
var supplier = document.getElementById("sumserach");
// 插入头文件
var thead=document.createElement("p");
// thead.style.marginLeft="70px";
thead.style.paddingTop="20px";
supplier.appendChild(thead);
var tr123 = document.createElement('tr');
thead.appendChild(tr123);
// 插入表格
supplier.appendChild(table);
var fenyebiaodan=document.createElement("div");
fenyebiaodan.setAttribute("id","barcon");
fenyebiaodan.style.width="400px";
fenyebiaodan.style.marginLeft="350px";
supplier.appendChild(fenyebiaodan);
// table.border = '1px';
table.width = '1000px';
// table.style.marginLeft="20px";
//2.创建表头
// var thead = document.createElement('thead');
// var thead=document.createElement("p");
// supplier.appendChild(thead);
// var tr123 = document.createElement('tr');
// thead.appendChild(tr123);
var tr = document.createElement('tr');
tr.style.height = '40px';
// tr.style.marginLeft="-500";
tr.style.backgroundColor = 'lightgray';
//遍历头部数据 创建th
for(var i=0;i<headDatas.length;i++) {
    var th = document.createElement('th');
    tr123.appendChild(th);
    setInnerText(th, headDatas[i]);
}
//3.创建数据行

var tbody = document.createElement('tbody');
// tbody.style.marginLeft="-100px";
tbody.setAttribute("id","tbodysum111");
table.appendChild(tbody);
tbody.style.textAlign = 'center';
for(var i=0;i<customer.length;i++) {
    //一个供应商的信息
    var data = customer[i];
    tr = document.createElement('tr');
    tbody.appendChild(tr);

    //遍历对象
    for(var key in data) {
        var td = document.createElement('td');
        tr.appendChild(td);
        setInnerText(td,data[key]);
    }
    //生成删除对应的列
    td = document.createElement('td');
    tr.appendChild(td);
    var link = document.createElement('a');
    var link1=document.createElement("a");
    td.appendChild(link1);
    td.appendChild(link);
    setInnerText(link1,"修改");
    setInnerText(link, " 删除");
    link.href = 'javascript:void(0)';
    link.onclick = linkDelete;
    link1.onclick=linkinsert;
//生成修改
}



// 中级隔开

var sss=[];
sss=customer;
var chaxun=0;
// 修改部分
var ccc;
var ccc1;
var suppmax=document.getElementById("insertfragement");
var dangqianID;
var dangqianName;
var dangqianlianxi;
var dangqianyouxiang;
var dangqianmima;
var dangqiandengji;
// 名字修改文本框
var textbox1;
var textbox2;
var textbox3;
var textbox4;
var textbox5;
function linkinsert() {
    var tr1 = this.parentNode.parentNode;
    trsum = this.parentNode.parentNode;
    dangqianID=tr1.getElementsByTagName("td")[0].innerText;
    dangqianName=tr1.getElementsByTagName("td")[1].innerText;
    dangqianlianxi=tr1.getElementsByTagName("td")[2].innerText;
    dangqianyouxiang=tr1.getElementsByTagName("td")[3].innerText;
    dangqianmima=tr1.getElementsByTagName("td")[4].innerText;
    dangqiandengji=tr1.getElementsByTagName("td")[5].innerText;
    console.log(dangqianID);



   ccc=document.createElement("tr");
   supplier.appendChild(ccc);
   ccc.style.width="500px";
   ccc.style.position="absolute";
   ccc.style.height="500px";
   ccc.style.top="20px";
   ccc.style.left="30%";
   ccc.style.backgroundColor="black";
   ccc.style.opacity="0.8";
   suppmax.appendChild(ccc);

   // 第二个DIV
    ccc1=document.createElement("p");
    ccc1.innerText="用户信息修改";
    ccc1.style.fontSize="30px";
    ccc1.style.color="white";
    ccc1.style.textAlign="center";
    ccc.appendChild(ccc1);

    // 实时数据DIV
    cccdongtai=document.createElement("p");
    cccdongtai.innerText="当前用户ID: "+" "+" "+dangqianID;
    cccdongtai.style.fontSize="30px";
    cccdongtai.style.color="white";
    ccc.appendChild(cccdongtai);

    // 第三个DIV
    var ccc2=document.createElement("p");
    ccc2.innerText="用户名字修改:";
    ccc2.style.fontSize="30px";
    ccc2.style.color="white";
    ccc.appendChild(ccc2);

    textbox1=document.createElement("input");
    textbox1.type="text";
    textbox1.style.fontSize="15px";
    textbox1.value=dangqianName;
    textbox1.style.position="absolute";
    textbox1.style.left="250px";
    textbox1.style.top="110px";
    textbox1.style.color="black";
    textbox1.style.width="150px";
    textbox1.style.height="30px";
    // textbox1.style.marginLeft="80px";
    ccc2.appendChild(textbox1);

    // 第四个DIV
    var ccc3=document.createElement("p");
    ccc3.innerText="用户联系方式修改:";
    ccc3.style.fontSize="30px";
    ccc3.style.color="white";
    ccc.appendChild(ccc3);

    textbox2=document.createElement("input");
    textbox2.type="text";
    textbox2.style.fontSize="15px";
    textbox2.value=dangqianlianxi;
    textbox2.style.position="absolute";
    textbox2.style.left="250px";
    textbox2.style.top="165px";
    textbox2.style.color="black";
    textbox2.style.width="150px";
    textbox2.style.height="30px";
    ccc3.appendChild(textbox2);

    // 第五个DIV
    var ccc4=document.createElement("p");
    ccc4.innerText="用户邮箱地址修改:";
    ccc4.style.fontSize="30px";
    ccc4.style.color="white";
    ccc.appendChild(ccc4);

    textbox3=document.createElement("input");
    textbox3.type="text";
    textbox3.style.fontSize="15px";
    textbox3.value=dangqianyouxiang;
    textbox3.style.position="absolute";
    textbox3.style.left="250px";
    textbox3.style.top="210px";
    textbox3.style.color="black";
    textbox3.style.width="150px";
    textbox3.style.height="30px";
    ccc4.appendChild(textbox3);

    // 第六个DIV
    var ccc5=document.createElement("p");
    ccc5.innerText="用户密码修改:";
    ccc5.style.fontSize="30px";
    ccc5.style.color="white";
    ccc.appendChild(ccc5);

    textbox4=document.createElement("input");
    textbox4.type="text";
    textbox4.style.fontSize="15px";
    textbox4.value=dangqianmima;
    textbox4.style.position="absolute";
    textbox4.style.left="250px";
    textbox4.style.top="265px";
    textbox4.style.color="black";
    textbox4.style.width="150px";
    textbox4.style.height="30px";
    ccc5.appendChild(textbox4);

    // 第七个DIV
    var ccc6=document.createElement("p");
    ccc6.innerText="用户等级修改:";
    ccc6.style.fontSize="30px";
    ccc6.style.color="white";
    ccc.appendChild(ccc6);


// <select id="AreaId" name="dfaf" size="1" class="sel">
//         <option>-请选择地区-</option>
//         <option value="1">游客登陆</option>
//         <option value="2">普通会员</option>
//         <option value="3">青铜会员</option>
//         <option value="4">白银会员</option>
//         <option value="5">铂金会员</option>
//         <option value="6">钻石会员</option>
//         <option value="7">星耀会员</option>
//         <option value="8">至尊会员</option>
//         </select>
    textbox5=document.createElement("select");
    textbox5.setAttribute("id","AreaId");
    textbox5.size=1;
    textbox5.style.fontSize="20px";
    var xuanzhekuang0=document.createElement("option");
    xuanzhekuang0.innerText="游客登陆";
    xuanzhekuang0.setAttribute("value","1");
    var xuanzhekuang1=document.createElement("option");
    xuanzhekuang1.innerText="普通会员";
    xuanzhekuang1.setAttribute("value","2");
    var xuanzhekuang2=document.createElement("option");
    xuanzhekuang2.innerText="青铜会员";
    xuanzhekuang2.setAttribute("value","3");
    var xuanzhekuang3=document.createElement("option");
    xuanzhekuang3.innerText="白银会员";
    xuanzhekuang3.setAttribute("value","4");
    var xuanzhekuang4=document.createElement("option");
    xuanzhekuang4.innerText="铂金会员";
    xuanzhekuang4.setAttribute("value","5");
    var xuanzhekuang5=document.createElement("option");
    xuanzhekuang5.innerText="钻石会员";
    xuanzhekuang5.setAttribute("value","6");
    var xuanzhekuang6=document.createElement("option");
    xuanzhekuang6.innerText="星耀会员";
    xuanzhekuang6.setAttribute("value","7");
    var xuanzhekuang7=document.createElement("option");
    xuanzhekuang7.innerText="至尊会员";
    xuanzhekuang7.setAttribute("value","8");
    textbox5.appendChild(xuanzhekuang0);
    textbox5.appendChild(xuanzhekuang1);
    textbox5.appendChild(xuanzhekuang2);
    textbox5.appendChild(xuanzhekuang3);
    textbox5.appendChild(xuanzhekuang4);
    textbox5.appendChild(xuanzhekuang5);
    textbox5.appendChild(xuanzhekuang6);
    textbox5.appendChild(xuanzhekuang7);
    // textbox5.type="text";
    // for(var fff=0;fff<document.getElementById("AreaId").options.length;fff++)
    // textbox5.style.fontSize="15px";
    // textbox5.value=dangqiandengji;
    textbox5.style.position="absolute";
    textbox5.style.left="250px";
    textbox5.style.top="320px";
    textbox5.style.color="black";
    // textbox5.style.width="150px";
    // textbox5.style.height="30px";
    ccc6.appendChild(textbox5);

    var huoquxialachangdu=document.getElementById("AreaId");
    var xialachangdu=huoquxialachangdu.options.length;
    for(var fff=0;fff<xialachangdu;fff++){
        if(huoquxialachangdu.options[fff].innerText==dangqiandengji){
            var huoquvalue=huoquxialachangdu.options[fff].value;
            console.log(huoquxialachangdu.options[fff].value);
            textbox5.value=huoquvalue;
            break;
        }
    }
    // var huodezhi;
    // $("#AreaId").change(function () {
    //     huodezhi=$("#AreaId").val();
    //     console.log(huodezhi);
    // })



    // textbox5=document.createElement("input");
    // textbox5.type="text";
    // textbox5.style.fontSize="15px";
    // textbox5.value=dangqiandengji;
    // textbox5.style.position="absolute";
    // textbox5.style.left="250px";
    // textbox5.style.top="320px";
    // textbox5.style.color="black";
    // textbox5.style.width="150px";
    // textbox5.style.height="30px";
    // ccc5.appendChild(textbox5);

    // 第八个DIV
    var textbox6=document.createElement("input");
    textbox6.type="button";
    textbox6.value="提交";
    textbox6.style.position="absolute";
    textbox6.style.left="100px";
    textbox6.style.top="400px";
    textbox6.style.color="black";
    textbox6.style.width="80px";
    textbox6.style.height="30px";
    ccc.appendChild(textbox6);

    // 第九个DIV
    var textbox7=document.createElement("input");
    textbox7.type="button";
    textbox7.value="返回";
    textbox7.style.position="absolute";
    textbox7.style.left="260px";
    textbox7.style.top="400px";
    textbox7.style.color="black";
    textbox7.style.width="80px";
    textbox7.style.height="30px";
    ccc.appendChild(textbox7);

// 返回
    textbox7.onclick=fanhui;
// 提交
    textbox6.onclick=tijiao;
}


// 提交
// 返回
function fanhui() {
    ccc.style.opacity="0";
    ccc.style.zIndex=-10;
}
function linkDelete() {
    //removeChild()
    //获取父元素
    //获取要删除的行
    var tr = this.parentNode.parentNode;
    chaxun=tr.getElementsByTagName("td")[0].innerText;
    console.log(chaxun);
    if(kkk=="") {

    }
    else {
        var shanchuchaxun=oTrchaxun.getElementsByTagName("td")[0].innerText;
        if(shanchuchaxun==chaxun){
            k=0;
            jiemian.removeChild(oTrchaxun);
        }
    }
    for(var t=0;t<customer.length;t++){
        if(customer[t].cuID==chaxun){
            // alert("已删除");
            var cs=customer.splice(t,1);
            break;
        }
    }
    tbody.removeChild(tr);
    console.log(cs);
    sss=customer;
    console.log(sss);
    // 隔开
    // 隔开
    // 隔开
    num = itable.rows.length;//表格所有行数(所有记录数)
    console.log(num);
    //总共分几页
    if(num/pageSize > parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
    }else{
        totalPage=parseInt(num/pageSize);
    }
    startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31
    endRow = currentPage * pageSize;//结束显示的行   40
    endRow = (endRow > num)? num : endRow;    40
    //遍历显示数据实现分页
    for(var i=1;i<(num+1);i++){
        var irow = itable.rows[i-1];
        if(i>=startRow && i<=endRow){
            irow.style.display = "block";
        }else{
            irow.style.display = "none";
        }
    }
    tempStr = "共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页" ;
    if(currentPage>1){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+pageSize+")\">首页</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+pageSize+")\"> <上一页</a>"
    }else{
        tempStr += " 首页";
        tempStr += " <上一页";
    }

    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+pageSize+")\"> 下一页></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+pageSize+")\"> 尾页</a>";
    }else{
        tempStr += " 下一页>";
        tempStr += " 尾页";
    }
    //遍历显示数据实现分页
    document.getElementById("barcon").innerHTML = tempStr;
    // 隔开
    // console.log(num);
}
console.log(customer);




// 提交
var olistTable;
console.log(sss);
function tijiao() {
    trsum.getElementsByTagName("td")[1].innerText=textbox1.value;
    trsum.getElementsByTagName("td")[2].innerText=textbox2.value;
    trsum.getElementsByTagName("td")[3].innerText=textbox3.value;
    trsum.getElementsByTagName("td")[4].innerText=textbox4.value;
    if(textbox5.value==1){
        trsum.getElementsByTagName("td")[5].innerText="游客登陆";
    }
    if(textbox5.value==2){
        trsum.getElementsByTagName("td")[5].innerText="普通会员";
    }
    if(textbox5.value==3){
        trsum.getElementsByTagName("td")[5].innerText="青铜会员";
    }
    if(textbox5.value==4){
        trsum.getElementsByTagName("td")[5].innerText="白银会员";
    }
    if(textbox5.value==5){
        trsum.getElementsByTagName("td")[5].innerText="黄金会员";
    }
    if(textbox5.value==6){
        trsum.getElementsByTagName("td")[5].innerText="铂金会员";
    }
    if(textbox5.value==7){
        trsum.getElementsByTagName("td")[5].innerText="星耀会员";
    }
    if(textbox5.value==8){
        trsum.getElementsByTagName("td")[5].innerText="至尊会员";
    }
    // trsum.getElementsByTagName("td")[5].innerText=textbox5.value;

    var linshiId=trsum.getElementsByTagName("td")[0].innerText;
    var linshiName=trsum.getElementsByTagName("td")[1].innerText;
    var linshilianxifangshi=trsum.getElementsByTagName("td")[2].innerText;
    var linshiaddress= trsum.getElementsByTagName("td")[3].innerText;
    var linshimima=trsum.getElementsByTagName("td")[4].innerText;
    var linshidengji=trsum.getElementsByTagName("td")[5].innerText;

    for(var i=0;i<sss.length;i++){
        if(sss[i].cuID==linshiId){
            if(sss[i].cuName!=linshiName){
                sss[i].cuName=linshiName;
            }
            if(sss[i].cuPhone!=linshilianxifangshi){
                sss[i].cuPhone=linshilianxifangshi;
            }
            if(sss[i].cuEmail!=linshiaddress){
                sss[i].cuEmail=linshiaddress;
            }
            if(sss[i].cuPassword!=linshimima){
                sss[i].cuPassword=linshimima;
            }
            if(sss[i].cuClass!=linshidengji){
                sss[i].cuClass=linshidengji;
            }
        }
    }

    if(kkk==""){

    }
    else {
        oTrchaxun.getElementsByTagName("td")[1].innerText=textbox1.value;
        oTd3.innerHTML=textbox2.value;
        oTd4.innerHTML=textbox3.value;
        oTd5.innerHTML=textbox4.value;
        oTd6.innerHTML=textbox5.value;
    }
    ccc.style.opacity = "0";
    ccc.style.zIndex = -11;
}


// 求你了


// 隔开
function detele2() {
    var tr123=this.parentNode.parentNode;
    var shuju=tr123.getElementsByTagName("td")[0].innerText;
    console.log(shuju);
    tr123.style.opacity=0;
    tr123.style.zIndex=-10;
    tr123.style.position="absolute";
    console.log(tr123);
    for (var f = 0; f < table.rows.length; f++) {
        if (table.rows[f].getElementsByTagName("td")[0].innerText == shuju) {
            table.deleteRow(f);
        }
    }
    for(var i=0;i<sss.length;i++){
        if(sss[i].cuID==shuju){
            sss.splice(i,1);
            break;
        }
    }



    // table.removeChild(tbody);
    // tbody=document.createElement("tbody");
    // tbody.setAttribute("id","tbodysum111");
    // table.appendChild(tbody);
    // for (var i = 0; i < sss.length; i++) {
    //     //一个供应商的信息
    //     var data = sss[i];
    //     var tr = document.createElement('tr');
    //     tbody.appendChild(tr);
    //
    //     //遍历对象
    //     for (var key in data) {
    //         var td = document.createElement('td');
    //         tr.appendChild(td);
    //         setInnerText(td, data[key]);
    //     }
    //     //生成删除对应的列
    //     td = document.createElement('td');
    //     tr.appendChild(td);
    //     var link = document.createElement('a');
    //     var link1 = document.createElement("a");
    //     td.appendChild(link1);
    //     td.appendChild(link);
    //     setInnerText(link1, "修改");
    //     setInnerText(link, " 删除");
    //     link.href = 'javascript:void(0)';
    //     link.onclick = linkDelete;
    //     link1.onclick = linkinsert；




    // 隔开
    num = itable.rows.length;//表格所有行数(所有记录数)
    //总共分几页
    if(num/pageSize > parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
    }else{
        totalPage=parseInt(num/pageSize);
    }
    startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31
    endRow = currentPage * pageSize;//结束显示的行   40
    endRow = (endRow > num)? num : endRow;    40
    //遍历显示数据实现分页
    for(var i=1;i<(num+1);i++){
        var irow = itable.rows[i-1];
        if(i>=startRow && i<=endRow){
            irow.style.display = "block";
        }else{
            irow.style.display = "none";
        }
    }
    tempStr = "共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页" ;
    if(currentPage>1){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+pageSize+")\">首页</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+pageSize+")\"> <上一页</a>"
    }else{
        tempStr += " 首页";
        tempStr += " <上一页";
    }

    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+pageSize+")\"> 下一页></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+pageSize+")\"> 尾页</a>";
    }else{
        tempStr += " 下一页>";
        tempStr += " 尾页";
    }
    //遍历显示数据实现分页
    document.getElementById("barcon").innerHTML = tempStr;
    }