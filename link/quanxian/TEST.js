//表头数据
console.log(quanxian);
var headDatas = ["管理者ID","用户名字","权限管理","操作"];
// 1.创建table元素
var table = document.createElement("table");
table.setAttribute("id","tablesum");
var supplier = document.getElementById("sumserach");
// 插入头文件
var thead=document.createElement("p");
thead.style.marginLeft="70px";
thead.style.paddingTop="20px";
supplier.appendChild(thead);
thead.style.marginLeft="0px";
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
table.style.marginLeft="-100px"
// table.style.marginLeft="20px";
//2.创建表头
// var thead = document.createElement('thead');
// var thead=document.createElement("p");
// supplier.appendChild(thead);
// var tr123 = document.createElement('tr');
// thead.appendChild(tr123);
var tr = document.createElement('tr');
tr.style.height = '40px';
tr.style.backgroundColor = 'lightgray';
//遍历头部数据 创建th
for(var i=0;i<headDatas.length;i++) {
    var th = document.createElement('th');
    tr123.appendChild(th);
    setInnerText(th, headDatas[i]);
}
//3.创建数据行

var tbody = document.createElement('tbody');
tbody.setAttribute("id","tbodysum111");
table.appendChild(tbody);
tbody.style.textAlign = 'center';
for(var i=0;i<quanxian.length;i++) {
    //一个供应商的信息
    var data = quanxian[i];
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
sss=quanxian;
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

var bangdingid1;
var bangdingid2;
var bangdingid3;
var bangdingid4;
var bangdingid5;
var bangdingid6;
var bangdingid7;
function linkinsert() {

   //  var tr = this.parentNode.parentNode;
   //  dangqianID=tr.getElementsByTagName("td")[0].innerText;
   // for(var s=0;s<quanxian.length;s++){
   //     if(quanxian[s].cuID==dangqianID){
   //         quanxian[s]
   //     }
   //  }
   //  var bangdingid=document.getElementById("dianji1");
   // trsum=this.parentNode.parentNode;
   //  var newshuzu=trsum.getElementsByTagName("td")[2].innerText;
   //  var zhennewshuzu=newshuzu.split(",");
   //  var zhennewshuzuchangdu=zhennewshuzu.length;
    // for(var i=0;i<sss.length;i++) {
    //     var zanshishuzu = sss[i].cupower;
    //     for (var a = 0; a < zanshishuzu.length; a++) {
    //         for (var q = 0; q < zhennewshuzuchangdu; q++) {
    //             if (zanshishuzu[a] == zhennewshuzu[q]) {
    //                  bangdingid.checked=true;
    //                  break;
    //             }
    //         }
    //     }
    // }
   // var ssss=trsum.getElementsByTagName("td")[2].innerText;
   // var fffff=ssss[1];
// console.log(fffff);
   ccc=document.createElement("div");
   supplier.appendChild(ccc);
   ccc.style.width="500px";
   ccc.style.position="absolute";
   ccc.style.height="500px";
   ccc.style.top="20px";
   ccc.style.left="500px";
   ccc.style.backgroundColor="black";
   ccc.style.opacity="0.8";
   suppmax.appendChild(ccc);
//
   // 第二个DIV
    ccc1=document.createElement("p");
    // ccc1.type="checkbox";
    ccc1.innerText="用户权限修改";
    ccc1.style.fontSize="30px";
    ccc1.style.color="white";
    ccc1.style.width="500px";
    ccc1.style.height="150px";
    ccc1.style.textAlign="center";
    ccc.appendChild(ccc1);

    // 第四个DIV
    var ccc2=document.createElement("p");
    ccc2.innerText="商品管理:";
    ccc2.style.marginLeft="160px";
    ccc2.style.fontSize="20px";
    ccc2.style.marginTop="-60px";
    ccc2.style.color="white";
    ccc.appendChild(ccc2);

    textbox2=document.createElement("input");
    textbox2.type="checkbox";
    textbox2.setAttribute("id","dianji1");
    textbox2.style.fontSize="15px";
    textbox2.style.position="absolute";
    textbox2.style.left="250px";
    textbox2.style.top="102px";
    textbox2.style.color="black";
    textbox2.style.width="150px";
    textbox2.style.height="20px";
    ccc2.appendChild(textbox2);

   var shangpingbangding=document.getElementById("dianji1");
   shangpingbangding.addEventListener("click",function () {
       shangpingbangding.setAttribute("value","1");
   })

        // 第三个DIV
    var ccc3=document.createElement("p");
    ccc3.innerText="订单管理:";
    ccc3.style.marginLeft="160px";
    ccc3.style.fontSize="20px";
    ccc3.style.color="white";
    ccc.appendChild(ccc3);

    textbox3=document.createElement("input");
    textbox3.type="checkbox";
    textbox3.setAttribute("id","dianji2");
    textbox3.style.fontSize="15px";
    textbox3.style.position="absolute";
    textbox3.style.left="250px";
    textbox3.style.top="140px";
    textbox3.style.color="black";
    textbox3.style.width="150px";
    textbox3.style.height="20px";
    ccc3.appendChild(textbox3);

//
    // 第六个DIV
    var ccc4=document.createElement("p");
    ccc4.innerText="活动管理:";
    ccc4.style.marginLeft="160px";
    ccc4.style.fontSize="20px";
    ccc4.style.color="white";
    ccc.appendChild(ccc4);

    textbox4=document.createElement("input");
    textbox4.type="checkbox";
    textbox4.setAttribute("id","dianji3");
    textbox4.style.fontSize="15px";
    textbox4.style.position="absolute";
    textbox4.style.left="250px";
    textbox4.style.top="176px";
    textbox4.style.color="black";
    textbox4.style.width="150px";
    textbox4.style.height="20px";
    ccc4.appendChild(textbox4);


    // 第六个DIV
    var ccc5=document.createElement("p");
    ccc5.innerText="用户管理:";
    ccc5.style.marginLeft="160px";
    ccc5.style.fontSize="20px";
    ccc5.style.color="white";
    ccc.appendChild(ccc5);

    textbox5=document.createElement("input");
    textbox5.type="checkbox";
    textbox5.setAttribute("id","dianji4");
    textbox5.style.fontSize="15px";
    textbox5.style.position="absolute";
    textbox5.style.left="250px";
    textbox5.style.top="215px";
    textbox5.style.color="black";
    textbox5.style.width="150px";
    textbox5.style.height="20px";
    ccc5.appendChild(textbox5);


    // 第六个DIV
    var ccc6=document.createElement("p");
    ccc6.innerText="供应商管理:";
    ccc6.style.marginLeft="160px";
    ccc6.style.fontSize="20px";
    ccc6.style.color="white";
    ccc.appendChild(ccc6);

    textbox6=document.createElement("input");
    textbox6.type="checkbox";
    textbox6.setAttribute("id","dianji5");
    textbox6.style.fontSize="15px";
    textbox6.style.position="absolute";
    textbox6.style.left="250px";
    textbox6.style.top="253px";
    textbox6.style.color="black";
    textbox6.style.width="150px";
    textbox6.style.height="20px";
    ccc6.appendChild(textbox6);

    // 第六个DIV
    var ccc7=document.createElement("p");
    ccc7.innerText="拼团:";
    ccc7.style.marginLeft="160px";
    ccc7.style.fontSize="20px";
    ccc7.style.color="white";
    ccc.appendChild(ccc7);

    textbox7=document.createElement("input");
    textbox7.type="checkbox";
    textbox7.setAttribute("id","dianji6");
    textbox7.style.fontSize="15px";
    textbox7.style.position="absolute";
    textbox7.style.left="250px";
    textbox7.style.top="289px";
    textbox7.style.color="black";
    textbox7.style.width="150px";
    textbox7.style.height="20px";
    ccc6.appendChild(textbox7);

    // 第六个DIV
    var ccc7=document.createElement("p");
    ccc7.innerText="数据统计:";
    ccc7.style.marginLeft="160px";
    ccc7.style.fontSize="20px";
    ccc7.style.color="white";
    ccc.appendChild(ccc7);

    textbox7=document.createElement("input");
    textbox7.type="checkbox";
    textbox7.setAttribute("id","dianji7");
    textbox7.style.fontSize="15px";
    textbox7.style.position="absolute";
    textbox7.style.left="250px";
    textbox7.style.top="329px";
    textbox7.style.color="black";
    textbox7.style.width="150px";
    textbox7.style.height="20px";
    ccc7.appendChild(textbox7);
    // 第八个DIV
    var textbox8=document.createElement("input");
    textbox8.type="button";
    textbox8.value="提交";
    textbox8.style.position="absolute";
    textbox8.style.left="140px";
    textbox8.style.top="400px";
    textbox8.style.color="black";
    textbox8.style.width="80px";
    textbox8.style.height="30px";
    ccc.appendChild(textbox8);
//
    // 第九个DIV
    var textbox9=document.createElement("input");
    textbox9.type="button";
    textbox9.value="返回";
    textbox9.style.position="absolute";
    textbox9.style.left="280px";
    textbox9.style.top="400px";
    textbox9.style.color="black";
    textbox9.style.width="80px";
    textbox9.style.height="30px";
    ccc.appendChild(textbox9);

    trsum=this.parentNode.parentNode;
    console.log(trsum);
    var newshuzu=trsum.getElementsByTagName("td")[2].innerText;
    var zhennewshuzu=newshuzu.split(",");
    var zhennewshuzuchangdu=zhennewshuzu.length;
    bangdingid1=document.getElementById("dianji1");
    bangdingid2=document.getElementById("dianji2");
    bangdingid3=document.getElementById("dianji3");
    bangdingid4=document.getElementById("dianji4");
    bangdingid5=document.getElementById("dianji5");
    bangdingid6=document.getElementById("dianji6");
    bangdingid7=document.getElementById("dianji7");
    for(var i=0;i<sss.length;i++) {
        var zanshishuzu = sss[i].cupower;
        for (var a = 0; a < zanshishuzu.length; a++) {
            for (var q = 0; q < zhennewshuzuchangdu; q++) {
                if (zanshishuzu[a] == zhennewshuzu[q]) {
                    if(zanshishuzu[a]=="商品管理")
                        bangdingid1.checked=true;
                    if(zanshishuzu[a]=="订单管理"){
                        bangdingid2.checked=true;
                    }
                    if(zanshishuzu[a]=="活动管理"){
                        bangdingid3.checked=true;
                    }
                    if(zanshishuzu[a]=="用户管理"){
                        bangdingid4.checked=true;
                    }
                    if(zanshishuzu[a]=="供应商管理"){
                        bangdingid5.checked=true;
                    }
                    if(zanshishuzu[a]=="拼团"){
                        bangdingid6.checked=true;
                    }
                    if(zanshishuzu[a]=="数据统计"){
                        bangdingid7.checked=true;
                    }
                }
            }
        }
    }
// 返回
    textbox8.onclick=tijiao;
// 提交
    textbox9.onclick=fanhui;
}


// 提交
// 返回
function fanhui() {
        bangdingid1.checked=false;
        bangdingid2.checked=false;
        bangdingid3.checked=false;
        bangdingid4.checked=false;
        bangdingid5.checked=false;
        bangdingid6.checked=false;
        bangdingid7.checked=false;

        suppmax.removeChild(ccc);
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
    var newshuzu=trsum.getElementsByTagName("td")[2].innerText;
    var zhennewshuzu=newshuzu.split(",");
    var zhennewshuzuchangdu=zhennewshuzu.length;
    if(bangdingid1.checked==true){
        for(var ochaxun=0;ochaxun<zhennewshuzuchangdu;ochaxun++){
            if(zhennewshuzu[ochaxun]=="商品管理"){
                break;
            }
            if((ochaxun==zhennewshuzuchangdu-1)&&zhennewshuzu[ochaxun]!="商品管理"){
                zhennewshuzu.splice(i,0,"商品管理");
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;
                //添加数据
               for(var tchaxun=0;tchaxun<sss.length;tchaxun++){
                   if(sss[tchaxun].cuID==trsum.getElementsByTagName("td")[0].innerText){
                       sss[tchaxun].cupower.splice(1,0,"商品管理");
                   }
               }
               // 添加数据
            }
        }
    }
    if(bangdingid2.checked==true){
        for(var ochaxun1=0;ochaxun1<zhennewshuzuchangdu;ochaxun1++){
            if(zhennewshuzu[ochaxun1]=="订单管理"){
                       break;
            }
          if((ochaxun1==zhennewshuzuchangdu-1)&&zhennewshuzu[ochaxun1]!="订单管理"){
                zhennewshuzu.splice(i,0,"订单管理");
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;

              //添加数据
              for(var tchaxun1=0;tchaxun1<sss.length;tchaxun1++){
                  if(sss[tchaxun1].cuID==trsum.getElementsByTagName("td")[0].innerText){
                      sss[tchaxun1].cupower.splice(1,0,"订单管理");
                  }
              }
              // 添加数据
            }
        }
        // zhennewshuzu.splice(i,0,"订单管理");
        // newshuzu=zhennewshuzu.join(",");
        // trsum.getElementsByTagName("td")[2].innerText=newshuzu;
    }

    if(bangdingid3.checked==true){
        for(var ochaxun2=0;ochaxun2<zhennewshuzuchangdu;ochaxun2++){
            if(zhennewshuzu[ochaxun2]=="活动管理"){
                break;
            }
            if((ochaxun2==zhennewshuzuchangdu-1)&&zhennewshuzu[ochaxun2]!="活动管理"){
                zhennewshuzu.splice(i,0,"活动管理");
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;

                //添加数据
                for(var tchaxun2=0;tchaxun2<sss.length;tchaxun2++){
                    if(sss[tchaxun2].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        sss[tchaxun2].cupower.splice(1,0,"活动管理");
                    }
                }
                // 添加数据
            }
        }
    }

    if(bangdingid4.checked==true){
        for(var ochaxun3=0;ochaxun3<zhennewshuzuchangdu;ochaxun3++){
            if(zhennewshuzu[ochaxun3]=="用户管理"){
                break;
            }
            if((ochaxun3==zhennewshuzuchangdu-1)&&zhennewshuzu[ochaxun3]!="用户管理"){
                zhennewshuzu.splice(i,0,"用户管理");
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;

                //添加数据
                for(var tchaxun3=0;tchaxun3<sss.length;tchaxun3++){
                    if(sss[tchaxun3].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        sss[tchaxun3].cupower.splice(1,0,"用户管理");
                    }
                }
                // 添加数据
            }
        }
    }

    if(bangdingid5.checked==true){
        for(var ochaxun4=0;ochaxun4<zhennewshuzuchangdu;ochaxun4++){
            if(zhennewshuzu[ochaxun4]=="供应商管理"){
                break;
            }
            if((ochaxun4==zhennewshuzuchangdu-1)&&zhennewshuzu[ochaxun4]!="供应商管理"){
                zhennewshuzu.splice(i,0,"供应商管理");
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;

                //添加数据
                for(var tchaxun4=0;tchaxun4<sss.length;tchaxun4++){
                    if(sss[tchaxun4].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        sss[tchaxun4].cupower.splice(1,0,"供应商管理");
                    }
                }
                // 添加数据
            }
        }
    }

    if(bangdingid6.checked==true){
        for(var ochaxun5=0;ochaxun5<zhennewshuzuchangdu;ochaxun5++){
            if(zhennewshuzu[ochaxun5]=="拼团"){
                break;
            }
            if((ochaxun5==zhennewshuzuchangdu-1)&&zhennewshuzu[ochaxun5]!="拼团"){
                zhennewshuzu.splice(i,0,"拼团");
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;

                //添加数据
                for(var tchaxun5=0;tchaxun5<sss.length;tchaxun5++){
                    if(sss[tchaxun5].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        sss[tchaxun5].cupower.splice(1,0,"拼团");
                    }
                }
                // 添加数据
            }
        }
    }

    if(bangdingid7.checked==true){
        for(var ochaxun6=0;ochaxun6<zhennewshuzuchangdu;ochaxun6++){
            if(zhennewshuzu[ochaxun6]=="数据统计"){
                break;
            }
            if((ochaxun6==zhennewshuzuchangdu-1)&&zhennewshuzu[ochaxun6]!="数据统计"){
                zhennewshuzu.splice(i,0,"数据统计");
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;

                //添加数据
                for(var tchaxun6=0;tchaxun6<sss.length;tchaxun6++){
                    if(sss[tchaxun6].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        sss[tchaxun6].cupower.splice(1,0,"数据统计");
                    }
                }
                // 添加数据
            }
        }
    }


    if(bangdingid1.checked==false){
        for(var i=0;i<zhennewshuzuchangdu;i++){
           if(zhennewshuzu[i]=="商品管理"){
               // 隔开
               for(var chaxun1=0;chaxun1<sss.length;chaxun1++){
                  if(sss[chaxun1].cuID==trsum.getElementsByTagName("td")[0].innerText){
                      for(var chaxun2=0;chaxun2<sss[chaxun1].cupower.length;chaxun2++){
                               if(sss[chaxun1].cupower[chaxun2]=="商品管理"){
                                   sss[chaxun1].cupower.splice(chaxun2,1);
                               }
                      }
                  }
               }

               zhennewshuzu.splice(i,1);
               newshuzu=zhennewshuzu.join(",");
               trsum.getElementsByTagName("td")[2].innerText=newshuzu;
               // 隔开
           }
        }
    }
    if(bangdingid2.checked==false){
        for(var i=0;i<zhennewshuzuchangdu;i++){
            if(zhennewshuzu[i]=="订单管理"){
                for(var chaxun3=0;chaxun3<sss.length;chaxun3++){
                    if(sss[chaxun3].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        for(var chaxun4=0;chaxun4<sss[chaxun3].cupower.length;chaxun4++){
                            if(sss[chaxun3].cupower[chaxun4]=="订单管理"){
                                sss[chaxun3].cupower.splice(chaxun4,1);
                            }
                        }
                    }
                }

                zhennewshuzu.splice(i,1);
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;
            }
        }
    }

    // 第三
    if(bangdingid3.checked==false){
        for(var i=0;i<zhennewshuzuchangdu;i++){
            if(zhennewshuzu[i]=="活动管理"){
                for(var chaxun5=0;chaxun5<sss.length;chaxun5++){
                    if(sss[chaxun5].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        for(var chaxun6=0;chaxun6<sss[chaxun5].cupower.length;chaxun6++){
                            if(sss[chaxun5].cupower[chaxun6]=="活动管理"){
                                sss[chaxun5].cupower.splice(chaxun6,1);
                            }
                        }
                    }
                }
                zhennewshuzu.splice(i,1);
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;
            }
        }
    }

    // 第四
    if(bangdingid4.checked==false){
        for(var i=0;i<zhennewshuzuchangdu;i++){
            if(zhennewshuzu[i]=="用户管理"){
                for(var chaxun7=0;chaxun7<sss.length;chaxun7++){
                    if(sss[chaxun7].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        for(var chaxun8=0;chaxun8<sss[chaxun7].cupower.length;chaxun8++){
                            if(sss[chaxun7].cupower[chaxun8]=="用户管理"){
                                sss[chaxun7].cupower.splice(chaxun8,1);
                            }
                        }
                    }
                }
                zhennewshuzu.splice(i,1);
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;
            }
        }
    }

    // 第五
    if(bangdingid5.checked==false){
        for(var i=0;i<zhennewshuzuchangdu;i++){
            if(zhennewshuzu[i]=="供应商管理"){
                for(var chaxun9=0;chaxun9<sss.length;chaxun9++){
                    if(sss[chaxun9].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        for(var chaxun10=0;chaxun10<sss[chaxun9].cupower.length;chaxun10++){
                            if(sss[chaxun9].cupower[chaxun10]=="供应商管理"){
                                sss[chaxun9].cupower.splice(chaxun10,1);
                            }
                        }
                    }
                }
                zhennewshuzu.splice(i,1);
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;
            }
        }
    }

    // 第六
    if(bangdingid6.checked==false){
        for(var i=0;i<zhennewshuzuchangdu;i++){
            if(zhennewshuzu[i]=="拼团"){
                for(var chaxun11=0;chaxun11<sss.length;chaxun11++){
                    if(sss[chaxun11].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        for(var chaxun12=0;chaxun12<sss[chaxun11].cupower.length;chaxun12++){
                            if(sss[chaxun11].cupower[chaxun12]=="拼团"){
                                sss[chaxun11].cupower.splice(chaxun12,1);
                            }
                        }
                    }
                }
                zhennewshuzu.splice(i,1);
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;
            }
        }
    }
    // 第七
    if(bangdingid7.checked==false){
        for(var i=0;i<zhennewshuzuchangdu;i++){
            if(zhennewshuzu[i]=="数据统计"){
                for(var chaxun13=0;chaxun13<sss.length;chaxun13++){
                    if(sss[chaxun13].cuID==trsum.getElementsByTagName("td")[0].innerText){
                        for(var chaxun14=0;chaxun14<sss[chaxun13].cupower.length;chaxun14++){
                            if(sss[chaxun13].cupower[chaxun14]=="数据统计"){
                                sss[chaxun13].cupower.splice(chaxun14,1);
                            }
                        }
                    }
                }
                zhennewshuzu.splice(i,1);
                newshuzu=zhennewshuzu.join(",");
                trsum.getElementsByTagName("td")[2].innerText=newshuzu;
            }
        }
    }
    console.log(sss);
   suppmax.removeChild(ccc);
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