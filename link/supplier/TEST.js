//表头数据
var k=0;
var headDatas = ["供应商ID","供应商名字","联系方式","供应商地址","联系人","操作"];
// 1.创建table元素
var table = document.createElement("table");
table.setAttribute("id","tablesum");
var supplier = document.getElementById("sumserach");
// 插入头文件
var thead=document.createElement("p");
// thead.style.marginLeft="130px";
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
//2.创建表头
// var thead = document.createElement('thead');
// var thead=document.createElement("p");
// supplier.appendChild(thead);
// var tr123 = document.createElement('tr');
// thead.appendChild(tr123);
var tr = document.createElement('tr');
tr.style.backgroundColor = 'lightgray';
//遍历头部数据 创建th
for(var i=0;i<headDatas.length;i++) {
    var th = document.createElement('th');
    tr123.appendChild(th);
    setInnerText(th, headDatas[i]);
}
// var toubuid=tr123.getElementsByTagName("th")[0];
// toubuid.style.width="140px";
// var toubulianxi=tr123.getElementsByTagName("th")[2];
// toubulianxi.style.width="230px";
// var toubuname=tr123.getElementsByTagName("th")[1];
// toubuname.style.width="135px";
// var toubudizhi=tr123.getElementsByTagName("th")[3];
// toubudizhi.style.width="280px";
//3.创建数据行

var tbody = document.createElement('tbody');
tbody.setAttribute("id","tbodysum111");
table.appendChild(tbody);
tbody.style.textAlign = 'center';
for(var i=0;i<supplier_data.length;i++) {
    //一个供应商的信息
    var data = supplier_data[i];
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
    td.style.height="40px";
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
    table.style.marginLeft="-50px";
    // tr.style.width="20px";
    var idchangdu=tr.getElementsByTagName("td")[0];
    console.log(idchangdu);
    idchangdu.style.width="337px";
    var dizhichangdu=tr.getElementsByTagName("td")[3];
    dizhichangdu.style.width="850px";
    var namechangdu=tr.getElementsByTagName("td")[1];
    namechangdu.style.width="320px  ";
    var lianxifangshi=tr.getElementsByTagName("td")[2];
    lianxifangshi.style.width="200px";
}



// 中级隔开

var sss=[];
sss=supplier_data;
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
var trsum;

function linkinsert() {
    var tr1 = this.parentNode.parentNode;
    trsum = this.parentNode.parentNode;
    console.log(trsum);
    dangqianID=tr1.getElementsByTagName("td")[0].innerText;
    dangqianName=tr1.getElementsByTagName("td")[1].innerText;
    dangqianlianxi=tr1.getElementsByTagName("td")[2].innerText;
    dangqianyouxiang=tr1.getElementsByTagName("td")[3].innerText;
    dangqianmima=tr1.getElementsByTagName("td")[4].innerText;
    console.log(dangqianID);



   ccc=document.createElement("tr");
   supplier.appendChild(ccc);
   ccc.style.width="500px";
   ccc.style.position="absolute";
   ccc.style.height="500px";
   ccc.style.top="20px";
   ccc.style.left="300px";
   ccc.style.backgroundColor="black";
   ccc.style.opacity="0.8";
   suppmax.appendChild(ccc);

   // 第二个DIV
    ccc1=document.createElement("p");
    ccc1.innerText="供应商信息修改";
    ccc1.style.fontSize="30px";
    ccc1.style.color="white";
    ccc1.style.textAlign="center";
    ccc.appendChild(ccc1);

    // 实时数据DIV
    cccdongtai=document.createElement("p");
    cccdongtai.innerText="当前供应商ID: "+" "+" "+dangqianID;
    cccdongtai.style.fontSize="30px";
    cccdongtai.style.color="white";
    ccc.appendChild(cccdongtai);

    // 第三个DIV
    var ccc2=document.createElement("p");
    ccc2.innerText="名字修改:";
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
    ccc3.innerText="联系方式修改:";
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
    ccc4.innerText="地址修改:";
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
    ccc5.innerText="联系人修改:";
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


    // 第八个DIV
    var textbox6=document.createElement("input");
    textbox6.type="button";
    textbox6.value="提交";
    textbox6.style.position="absolute";
    textbox6.style.left="100px";
    textbox6.style.top="340px";
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
    textbox7.style.top="340px";
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
    tbody.removeChild(tr);
    for(var t=0;t<supplier_data.length;t++){
        if(supplier_data[t].supplierId==chaxun){
            // alert("已删除");
            var cs=supplier_data.splice(t,1);
            break;
        }
    }
    console.log(cs);
    sss=supplier_data;
    // console.log(sss);
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
    // // 隔开
    // console.log(num);
}




// 提交
function tijiao() {
   trsum.getElementsByTagName("td")[1].innerText=textbox1.value;
   trsum.getElementsByTagName("td")[2].innerText=textbox2.value;
   trsum.getElementsByTagName("td")[3].innerText=textbox3.value;
   trsum.getElementsByTagName("td")[4].innerText=textbox4.value;

    var linshiId=trsum.getElementsByTagName("td")[0].innerText;
    var linshiName=trsum.getElementsByTagName("td")[1].innerText;
    var linshilianxifangshi=trsum.getElementsByTagName("td")[2].innerText;
    var linshiaddress= trsum.getElementsByTagName("td")[3].innerText;
    var linshilianxiren=trsum.getElementsByTagName("td")[4].innerText;
   for(var i=0;i<sss.length;i++){
       if(sss[i].supplierId==linshiId){
           if(sss[i].supplierName!=linshiName){
               sss[i].supplierName=linshiName;
           }
           if(sss[i].supplierCall!=linshilianxifangshi){
               sss[i].supplierCall=linshiName;
           }
           if(sss[i].supplierAddress!=linshiaddress){
               sss[i].supplierAddress=linshiaddress;
           }
           if(sss[i].contact_person!=linshilianxiren){
               sss[i].contact_person=linshilianxiren;
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
    }

    console.log(sss);
   ccc.style.opacity = "0";
        ccc.style.zIndex = -11;
    }


// // 隔开
    // num = itable.rows.length;//表格所有行数(所有记录数)
    // console.log(num);
    // //总共分几页
    // if(num/pageSize > parseInt(num/pageSize)){
    //     totalPage=parseInt(num/pageSize)+1;
    // }else{
    //     totalPage=parseInt(num/pageSize);
    // }
    // startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31
    // endRow = currentPage * pageSize;//结束显示的行   40
    // endRow = (endRow > num)? num : endRow;    40
    // //遍历显示数据实现分页
    // for(var i=1;i<(num+1);i++){
    //     var irow = itable.rows[i-1];
    //     if(i>=startRow && i<=endRow){
    //         irow.style.display = "block";
    //     }else{
    //         irow.style.display = "none";
    //     }
    // }
    // tempStr = "共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页" ;
    // if(currentPage>1){
    //     tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+pageSize+")\">首页</a>";
    //     tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+pageSize+")\"> <上一页</a>"
    // }else{
    //     tempStr += " 首页";
    //     tempStr += " <上一页";
    // }
    //
    // if(currentPage<totalPage){
    //     tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+pageSize+")\"> 下一页></a>";
    //     tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+pageSize+")\"> 尾页</a>";
    // }else{
    //     tempStr += " 下一页>";
    //     tempStr += " 尾页";
    // }
    // //遍历显示数据实现分页
    // document.getElementById("barcon").innerHTML = tempStr;
    //

// 求你了


// 隔开
function detele2() {
    table.style.marginLeft = "70px";
    var tr123 = this.parentNode.parentNode;
    var shuju = tr123.getElementsByTagName("td")[0].innerText;
    console.log(shuju);
    tr123.style.opacity = 0;
    tr123.style.zIndex = -10;
    tr123.style.position = "absolute";
    console.log(tr123);
    for (var f = 0; f < table.rows.length; f++) {
        if (table.rows[f].getElementsByTagName("td")[0].innerText == shuju) {
            table.deleteRow(f);
        }
    }

    for (var i = 0; i < sss.length; i++) {
        if (sss[i].supplierId == shuju) {
            sss.splice(i, 1);
            break;
        }
    }


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