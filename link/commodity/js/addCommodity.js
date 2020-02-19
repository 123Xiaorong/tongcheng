var addListDataShowNum = 8;
var addTableContainer = document.getElementById("commodityCoverAddGoods");

function clearAddTable() {
    var tableCount = addTableContainer.getElementsByTagName("table");
    // console.log(tableCount);
    for (var i = 0; i < tableCount.length; i++) {
        // console.log(tableCount[i].getElementsByTagName("tr").length);
        for (var j = 1; j < tableCount[i].getElementsByTagName("tr").length; j++) {
            tableCount[i].getElementsByTagName("tbody")[0].removeChild(tableCount[i].getElementsByTagName("tr")[j]);
            j--;
            // console.log(j);
        }
        if (i > 0) {
            addTableContainer.removeChild(tableCount[i]);
            i--;
        }
    }
    var addListPageNo = document.getElementById("addListPageNo");
    addTableContainer.removeChild(addListPageNo);
}//清空表格函数

function createAddCommodityList(obj) {
    var addTable = addTableContainer.getElementsByTagName("table")[0];
    var tableCopyCount = parseInt(obj.length / addListDataShowNum);//判断需要拷贝的表格数量
    if (obj.length % addListDataShowNum == 0) {
        tableCopyCount--;
    }

    function commodityListCopyTable() {
        var newTable = addTable.cloneNode(true);
        addTableContainer.appendChild(newTable);
    }//定义拷贝表格的函数
    for (var i = 0; i < tableCopyCount; i++) {
        commodityListCopyTable();
    }//调用拷贝函数拷贝表格至需要的数量


    var tableShowNo = 0;//展示的表格索引
    var tableCount = addTableContainer.getElementsByTagName("table");//获取所有表格
    function tableShow() {
        for (var i = 0; i < tableCount.length; i++) {
            if (i == tableShowNo) {
                tableCount[i].style.display = "table";
            } else {
                tableCount[i].style.display = "none";
            }
        }
    }//表格的展示函数
    tableShow();


    function commodityListCreate() {
        var commodityListTr = document.createElement("tr");
        var commodityID = document.createElement("td");
        commodityListTr.appendChild(commodityID);
        var commodityName = document.createElement("td");
        commodityListTr.appendChild(commodityName);
        var commodityType = document.createElement("td");
        commodityListTr.appendChild(commodityType);
        var commodityBrand = document.createElement("td");
        commodityListTr.appendChild(commodityBrand);
        var commodityAddNum = document.createElement("td");
        var commodityAddInput = document.createElement("input");
        commodityAddInput.setAttribute("class", "addInput");
        commodityAddNum.appendChild(commodityAddInput);
        commodityListTr.appendChild(commodityAddNum);
        tbody.appendChild(commodityListTr);
    }//创建tr函数
    for (var i = 0; i < tableCount.length; i++) {
        var tbody = tableCount[i].childNodes[3];
        // console.log(tbody);
        for (var j = 0; j < addListDataShowNum; j++) {
            commodityListCreate();
            nullTr();
            // if (j % 7 == 0 && j > 0) {
            //     break;
            // }
        }
    }//调用tr创建函数，并控制创建的tr数量
    function nullTr() {
        var lastTable = addTableContainer.getElementsByTagName("table")[tableCount.length - 1];
        // console.log(lastTable.getElementsByTagName("tr"));
        var nullNo = obj.length % addListDataShowNum;
        // console.log(nullNo);
        if (nullNo != 0) {
            for (var i = nullNo + 1; i < lastTable.getElementsByTagName("tr").length; i++) {
                lastTable.getElementsByTagName("tr")[i].style.display = "none";
            }
        }
    }//隐藏最后一张表格空白行


    var startNo = 0;
    var tableNo = 0;

    function addData(x, y) {
        for (var i = x; i < obj.length; i++) {
            var tbody = tableCount[y].childNodes[3];
            tbody.getElementsByTagName("tr")[i % addListDataShowNum + 1].getElementsByTagName("td")[0].innerText = obj[i].goodsID;
            tbody.getElementsByTagName("tr")[i % addListDataShowNum + 1].getElementsByTagName("td")[1].innerText = obj[i].goodsName;
            tbody.getElementsByTagName("tr")[i % addListDataShowNum + 1].getElementsByTagName("td")[2].innerText = obj[i].goodsType;
            tbody.getElementsByTagName("tr")[i % addListDataShowNum + 1].getElementsByTagName("td")[3].innerText = obj[i].goodsBrand;
            // tbody.getElementsByTagName("tr")[i % addListDataShowNum + 1].getElementsByTagName("td")[4].innerHTML = "";
            if ((i + 1) % addListDataShowNum == 0 && i > 0) {
                break;
            }
        }
    }//创建添加数据的函数
    for (var i = 0; i < tableCount.length; i++) {
        addData(startNo, tableNo);
        startNo += addListDataShowNum;
        tableNo++;
    }//调用添加数据的函数


    function pageNumber() {
        var addListPageNo = document.createElement("div");
        addListPageNo.setAttribute("id", "addListPageNo");
        var pageLeft = document.createElement("span");
        var pageLeftText = document.createTextNode("<");
        pageLeft.appendChild(pageLeftText);
        addListPageNo.appendChild(pageLeft);
        for (var i = 0; i < tableCount.length; i++) {
            var pageNum = document.createElement("span");
            var pageNumText = document.createTextNode(i + 1);
            pageNum.appendChild(pageNumText);
            addListPageNo.appendChild(pageNum);
        }
        var pageRight = document.createElement("span");
        var pageRightText = document.createTextNode(">");
        pageRight.appendChild(pageRightText);
        addListPageNo.appendChild(pageRight);
        addTableContainer.appendChild(addListPageNo);
    }//创建添加页码的函数
    pageNumber();
    var pageBox = document.getElementById("addListPageNo");
    var pageCount = pageBox.getElementsByTagName("span");
    pageCount[1].setAttribute("class", "pageActive");
    for (var i = 0; i < pageCount.length; i++) {
        pageCount[i].No = i;
        pageCount[i].onclick = function () {
            if (this.No == 0) {
                if (tableShowNo > 0) {
                    tableShowNo--;
                } else {
                    tableShowNo = 0;
                }
                tableShow();
                pageHeightLight();
            } else if (this.No == pageCount.length - 1) {
                if (tableShowNo < tableCount.length - 1) {
                    tableShowNo++;
                } else {
                    tableShowNo = tableCount.length - 1;
                }
                tableShow();
                pageHeightLight();
            } else {
                tableShowNo = this.No - 1;
                tableShow();
                pageHeightLight();
            }
            // console.log(tableShowNo);
        }
    }//循环控制页码点击
    function pageBan() {
        if (tableShowNo == 0) {
            pageCount[0].style.backgroundColor = "red";
            pageCount[0].style.cursor = "not-allowed";
        } else {
            pageCount[0].style.backgroundColor = "transparent";
            pageCount[0].style.cursor = "pointer";
        }
        if (tableShowNo == tableCount.length - 1) {
            pageCount[pageCount.length - 1].style.backgroundColor = "red";
            pageCount[pageCount.length - 1].style.cursor = "not-allowed";
        } else {
            pageCount[pageCount.length - 1].style.backgroundColor = "transparent";
            pageCount[pageCount.length - 1].style.cursor = "pointer";
        }
    }//页码禁用函数
    setInterval(pageBan, 0);//持续调用首尾页码禁用函数监听页码状态
    function pageHeightLight() {
        for (var j = 0; j < pageCount.length; j++) {
            pageCount[j].setAttribute("class", "");
        }
        pageCount[tableShowNo + 1].setAttribute("class", "pageActive");
    }//创建页码状态函数
}//创建表格
createAddCommodityList(goodsArray);//初始化补货表格

function addAllInput() {
    var addAllCheck = $("#addGoodsAll input[type='checkbox']");
    // console.log(addAllCheck.is(":checked"));
    if (addAllCheck.is(":checked") == false) {
        // console.log(addAllCheck.next());
        addAllCheck.next().attr("disabled", true);
        addAllCheck.next().css("cursor", "not-allowed");
    } else {
        addAllCheck.next().attr("disabled", false);
        addAllCheck.next().css("cursor", "auto");
    }
}

setInterval(addAllInput, 0);

// addAllInput();

function commodityChooseAll(obj) {
    var chooseAll = document.getElementsByClassName("commodityChooseAll");
    var tableCount = commodityListContainer.getElementsByTagName("table");
    if (obj.checked == true) {
        for (var k = 0; k < chooseAll.length; k++) {
            chooseAll[k].checked = true;
            for (var i = 0; i < tableCount.length; i++) {
                let tableTr = tableCount[i].getElementsByTagName("tr");
                for (var j = 1; j < tableTr.length; j++) {
                    if (tableTr[j].style.display != "none") {
                        tableTr[j].getElementsByTagName("td")[0].getElementsByTagName("input")[0].checked = true;
                    }
                }

            }
        }
    } else {
        for (var k = 0; k < chooseAll.length; k++) {
            chooseAll[k].checked = false;
            for (var i = 0; i < tableCount.length; i++) {
                let tableTr = tableCount[i].getElementsByTagName("tr");
                for (var j = 1; j < tableTr.length; j++) {
                    if (tableTr[j].style.display != "none") {
                        tableTr[j].getElementsByTagName("td")[0].getElementsByTagName("input")[0].checked = false;
                    }
                }

            }
        }
    }
}//商品全选

var commodityChoseArray = new Array();

function commodityChose() {
    var tableCount = commodityListContainer.getElementsByTagName("table");
    for (var i = 0; i < tableCount.length; i++) {
        var tableTr = tableCount[i].getElementsByTagName("tr");
        for (var j = 1; j < tableTr.length; j++) {
            if (tableTr[j].style.display != "none") {
                if (tableTr[j].getElementsByTagName("td")[0].getElementsByTagName("input")[0].checked == true) {
                    // console.log(tableTr[j].getElementsByTagName("td")[1].innerText);
                    for (var k = 0; k < goodsArray.length; k++) {
                        if (goodsArray[k].goodsID == tableTr[j].getElementsByTagName("td")[1].innerText) {
                            var choseGoods = goodsArray[k];
                            commodityChoseArray.push(choseGoods);
                        }
                    }
                }
            }
        }
    }
}//获取被选中的商品
// setTimeout(commodityChose,5000);

function commodityAdd(obj) {
    clearAddTable();//清空补货列表
    commodityChoseArray = [];//清空补货数组
    commodityChose();//生产被选中的商品的数组
    var choseGoodsHave = 0;
    for (var j = 0; j < commodityChoseArray.length; j++) {
        if (obj.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerText == commodityChoseArray[j].goodsID) {
            choseGoodsHave = 1;
        }
    }
    if (choseGoodsHave == 0) {
        for (var i = 0; i < goodsArray.length; i++) {
            if (goodsArray[i].goodsID == obj.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerText) {
                var goodsChose = goodsArray[i];
                commodityChoseArray.push(goodsChose);
            }
        }
    }
    createAddCommodityList(commodityChoseArray);
    document.getElementById("commodityCover").style.display = "block";
}//补货列表

function commodityAddQuit() {
    document.getElementById("commodityCover").style.display = "none";
}//退出补货

function changeGoodsNumAll(obj) {
    if(obj.checked==true){
        var addInput = document.getElementsByClassName("addInput");
        for(let i=0;i<addInput.length;i++){
            addInput[i].disabled=true;
            addInput[i].style.cursor="not-allowed";
        }
    }else {
        var addInput2 = document.getElementsByClassName("addInput");
        for(let i=0;i<addInput2.length;i++){
            addInput2[i].disabled=false;
            addInput2[i].style.cursor="auto";
        }
    }
}//统一补货输入框设置

function operateChangeText(obj) {
    // if (obj.innerText == "上架") {
    //     obj.innerText = "下架";
    //     obj.parentNode.parentNode.parentNode.getElementsByClassName("condition")[0].innerText = "上架";
    //     var aimGoods=obj.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerText;
    //     // console.log(aimGoods);
    //     for(var i=0;i<goodsArray.length;i++){
    //         if(goodsArray[i].goodsID==aimGoods){
    //             goodsArray[i].goodsStatus="上架";
    //         }
    //     }
    // } else {
    //     obj.innerText = "上架";
    //     obj.parentNode.parentNode.parentNode.getElementsByClassName("condition")[0].innerText = "下架";
    //     var aimGoods2=obj.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerText;
    //     // console.log(aimGoods);
    //     for(var i=0;i<goodsArray.length;i++){
    //         if(goodsArray[i].goodsID==aimGoods2){
    //             goodsArray[i].goodsStatus="下架";
    //         }
    //     }
    // }


    commodityChoseArray = [];//清空补货数组
    commodityChose();//生产被选中的商品的数组
    var choseGoodsHave = 0;
    for (var j = 0; j < commodityChoseArray.length; j++) {
        if (obj.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerText == commodityChoseArray[j].goodsID) {
            choseGoodsHave = 1;
        }
    }//判断选择商品内是否存在点击商品
    if (choseGoodsHave == 0) {
        for (var i = 0; i < goodsArray.length; i++) {
            if (goodsArray[i].goodsID == obj.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerText) {
                var goodsChose = goodsArray[i];
                commodityChoseArray.push(goodsChose);
            }
        }
    }//根据判断条件决定是否将点击商品加入选择商品中
    for (let i = 0; i < commodityChoseArray.length; i++) {
        // console.log(commodityChoseArray[i].goodsStatus);
        // console.log(obj.innerText);
        if (commodityChoseArray[i].goodsStatus != obj.innerText) {
            // console.log(commodityChoseArray[i].goodsStatus);
            for (let j = 0; j < goodsArray.length; j++) {
                if (goodsArray[j].goodsID == commodityChoseArray[i].goodsID) {
                    // console.log(goodsArray[j].goodsID + goodsArray[j].goodsStatus);
                    goodsArray[j].goodsStatus = obj.innerText;
                    // console.log(goodsArray[j].goodsID + goodsArray[j].goodsStatus);
                }
            }
        }
    }//for循环更改商品数组内商品状态信息
    var tableCount=commodityListContainer.getElementsByTagName("table");
    for(let i=0;i<tableCount.length;i++){
        let tableTr=tableCount[i].getElementsByTagName("tr");
        for(let j=1;j<tableTr.length;j++){
            for(let k=0;k<goodsArray.length;k++){
                if(goodsArray[k].goodsID==tableTr[j].getElementsByTagName("td")[1].innerText){
                    tableTr[j].getElementsByTagName("td")[10].innerText=goodsArray[k].goodsStatus;
                }
            }
        }
    }//for循环更新列表内容
    // if(obj.innerText=="上架"){
    //     obj.innerText="下架";
    // }else {
    //     obj.innerText="上架";
    // }//改变按钮内容
    operateButtonText();
}//点击上下架切换文本内容同时更改数组内容

function commodityAddTrue() {
    var addInput=document.getElementsByClassName("addInput");
    // console.log(addInput.length);
    var addGoodsAll=document.getElementById("addGoodsAll").getElementsByTagName("input")[0];
    // console.log(addGoodsAll.checked);
    if(addGoodsAll.checked==false){
        for(let i=0;i<addInput.length;i++){
            if(addInput[i].parentNode.parentNode.style.display!="none") {
                // console.log(addInput[i].value);
                let addInputTr=addInput[i].parentNode.parentNode;
                // console.log(addInputTr.getElementsByTagName("td")[0].innerText);
                for(let j=0;j<goodsArray.length;j++){
                    if(goodsArray[j].goodsID==addInputTr.getElementsByTagName("td")[0].innerText){
                        // console.log(goodsArray[j].goodsStock);
                        goodsArray[j].goodsStock=parseInt(goodsArray[j].goodsStock)+parseInt(addInput[i].value);
                        // console.log(goodsArray[j].goodsStock);
                    }
                }
            }
        }
    }else {
        // console.log(document.getElementById("addGoodsAll").getElementsByTagName("input")[1].value);
        for(let i=0;i<addInput.length;i++){
            if(addInput[i].parentNode.parentNode.style.display!="none") {
                // console.log(addInput[i].value);
                let addInputTr=addInput[i].parentNode.parentNode;
                // console.log(addInputTr.getElementsByTagName("td")[0].innerText);
                for(let j=0;j<goodsArray.length;j++){
                    if(goodsArray[j].goodsID==addInputTr.getElementsByTagName("td")[0].innerText){
                        // console.log(goodsArray[j].goodsStock);
                        goodsArray[j].goodsStock=parseInt(goodsArray[j].goodsStock)+parseInt(document.getElementById("addGoodsAll").getElementsByTagName("input")[1].value);
                        // console.log(goodsArray[j].goodsStock);
                    }
                }
            }
        }
    }
    upgradeCommodityData();
    document.getElementById("commodityCover").style.display="none";
    document.getElementById("controlButton").getElementsByTagName("button")[0].click();
}//补货
// commodityAddTrue();


// function addSupplier() {
//     for(let i=0;i<goodsArray.length;i++){
//         goodsArray[i].goodsSupplierNum="G123456";
//     }
// }//添加供应商ID
// addSupplier();
// // console.log(goodsArray);
// var combineArray=new Array();
// var afterCombineData;
// function combineData() {
//     var pastArray=new Array();
//     for(let i=0;i<goodsArray.length;i++){
//         pastArray.push(goodsArray[i].goodsID);
//         pastArray.push(goodsArray[i].goodsName);
//         pastArray.push(goodsArray[i].goodsType);
//         pastArray.push(goodsArray[i].goodsBrand);
//         pastArray.push(goodsArray[i].goodsPrimeCost);
//         pastArray.push(goodsArray[i].goodsStock);
//         pastArray.push(goodsArray[i].goodsPic);
//         pastArray.push(goodsArray[i].goodsCoupon);
//         pastArray.push(goodsArray[i].goodsStatus);
//         pastArray.push(goodsArray[i].goodsSupplierNum);
//         pastArray.push(goodsArray[i].goodsSpecifications);
//         pastArray.push(goodsArray[i].goodsDescript);
//         combineArray.push(pastArray.join("~"));
//         // console.log(pastArray);
//         pastArray=[];
//     }
//     afterCombineData=combineArray.join("|");
//     console.log(afterCombineData);
// }//定义整合数组为字符串的函数
//
//
// function passData(obj) {
//     var thisNo=obj.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerText;
//     combineData();
//     sessionStorage.setItem("thisNo",thisNo);
//     sessionStorage.setItem("afterCombineData",afterCombineData);
//     if (obj.getAttribute("class") == "detail") {
//         sessionStorage.setItem("operate", "read");
//     } else {
//         sessionStorage.setItem("operate", "change");
//     }
// }//创建传递数据的函数

addSupplier();
// console.log(goodsArray);
