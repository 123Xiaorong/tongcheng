var dataShowNum = 5;
var commodityListContainer = document.getElementById("commodityListContainer");//获取表格容器
var table = document.getElementsByTagName("table")[0];//获取初始表格
createGoodsArray();

afterCombineData=sessionStorage.getItem("afterCombineData");//获取别的页面传的值
// console.log(afterCombineDataFromDetail!=null);
if(afterCombineData!=null){
    goodsArray=[];
    splitData(afterCombineData);
    // console.log(goodsArray);
}

function createCommodityList(obj) {
    var tableCopyCount = parseInt(obj.length / dataShowNum);//判断需要拷贝的表格数量
    if (obj.length % dataShowNum == 0) {
        tableCopyCount--;
    }

    function commodityListCopyTable() {
        var newTable = table.cloneNode(true);
        commodityListContainer.appendChild(newTable);
    }//定义拷贝表格的函数
    for (var i = 0; i < tableCopyCount; i++) {
        commodityListCopyTable();
    }//调用拷贝函数拷贝表格至需要的数量


    var tableShowNo = 0;//展示的表格索引
    var tableCount = commodityListContainer.getElementsByTagName("table");//获取所有表格
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
        var commodityChoose = document.createElement("td");
        commodityListTr.appendChild(commodityChoose);
        var commodityID = document.createElement("td");
        commodityListTr.appendChild(commodityID);
        var commodityName = document.createElement("td");
        commodityListTr.appendChild(commodityName);
        var commodityImg = document.createElement("td");
        commodityListTr.appendChild(commodityImg);
        var commodityType = document.createElement("td");
        commodityListTr.appendChild(commodityType);
        var commodityBrand = document.createElement("td");
        commodityListTr.appendChild(commodityBrand);
        var commodityPrice = document.createElement("td");
        commodityListTr.appendChild(commodityPrice);
        var commodityCost = document.createElement("td");
        commodityListTr.appendChild(commodityCost);
        var commodityInventory = document.createElement("td");
        commodityListTr.appendChild(commodityInventory);
        var commodityVisited = document.createElement("td");
        commodityListTr.appendChild(commodityVisited);
        var commodityCondition = document.createElement("td");
        commodityCondition.setAttribute("class", "condition");
        commodityListTr.appendChild(commodityCondition);


        var commodityOperate = document.createElement("td");
        commodityOperate.setAttribute("class", "operate");

        var operateOne = document.createElement("button");
        var operateOneText = document.createTextNode("上架");
        operateOne.appendChild(operateOneText);
        operateOne.setAttribute("type", "button");
        operateOne.setAttribute("class", "status");
        operateOne.style.display="none";
        var operateOneA = document.createElement("a");
        operateOneA.appendChild(operateOne);
        commodityOperate.appendChild(operateOneA);

        var operateTwo = document.createElement("button");
        var operateTwoText = document.createTextNode("详情");
        operateTwo.appendChild(operateTwoText);
        operateTwo.setAttribute("type", "button");
        operateTwo.setAttribute("class", "detail");
        var operateTwoA = document.createElement("a");
        operateTwoA.setAttribute("href", "commodityDetail.html");
        operateTwoA.appendChild(operateTwo);
        commodityOperate.appendChild(operateTwoA);

        var operateThree = document.createElement("button");
        var operateThreeText = document.createTextNode("编辑");
        operateThree.appendChild(operateThreeText);
        operateThree.setAttribute("type", "button");
        operateThree.setAttribute("class", "change");
        var operateThreeA = document.createElement("a");
        operateThreeA.setAttribute("href", "commodityDetail.html");
        operateThreeA.appendChild(operateThree);
        commodityOperate.appendChild(operateThreeA);

        var operateFour = document.createElement("button");
        var operateFourText = document.createTextNode("补货");
        operateFour.appendChild(operateFourText);
        operateFour.setAttribute("type", "button");
        operateFour.setAttribute("class", "commodityAdd");
        operateFour.setAttribute("onclick", "commodityAdd(this)");
        operateFour.style.display="none";
        var operateFourA = document.createElement("a");
        // operateFourA.setAttribute("href", "commodityDetail.html");
        operateFourA.appendChild(operateFour);
        commodityOperate.appendChild(operateFourA);

        commodityListTr.appendChild(commodityOperate);
        tbody.appendChild(commodityListTr);
    }//创建tr函数
    for (let i = 0; i < tableCount.length; i++) {
        var tbody = tableCount[i].childNodes[1];
        for (var j = 0; j < dataShowNum; j++) {
            commodityListCreate();
            nullTr();
            // if (j % 7 == 0 && j > 0) {
            //     break;
            // }
        }
    }//调用tr创建函数，并控制创建的tr数量
    function nullTr() {
        var lastTable = commodityListContainer.getElementsByTagName("table")[tableCount.length - 1];
        // console.log(lastTable.getElementsByTagName("tr"));
        var nullNo = obj.length % dataShowNum;
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
            // console.log(tbody.getElementsByTagName("tr")[i]);
            // console.log(i);
            var tbody = tableCount[y].childNodes[1];
            // console.log(tbody.getElementsByTagName("tr")[8]);
            // console.log(obj[i].goodsID);
            // for(var j=1;j<tbody.getElementsByTagName("tr").length;j++) {
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[0].innerHTML = "<input type='checkbox' class='goodsCheck' disabled>";
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[1].innerText = obj[i].goodsID;
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[2].innerText = obj[i].goodsName;
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[3].innerHTML = obj[i].goodsPic;
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[4].innerHTML = obj[i].goodsType;
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[5].innerHTML = obj[i].goodsBrand;
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[6].innerText = obj[i].goodsPrimeCost*1.5;
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[7].innerText = obj[i].goodsPrimeCost;
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[8].innerText = obj[i].goodsStock;
            tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[9].innerText = 100;
            // goodsStatus();
            // tbody.getElementsByTagName("tr")[i % dataShowNum + 1].getElementsByTagName("td")[9].innerText = goodsStatusText;
            // tbody.getElementsByTagName("tr")[i%8+1].getElementsByTagName("td")[10].innerHTML = "<button type='button'>操作1</button><button type='button'>操作2</button><button type='button'>操作3</button>";
            // }
            if ((i + 1) % dataShowNum == 0 && i > 0) {
                break;
            }
        }
    }//创建添加数据的函数
    for (var i = 0; i < tableCount.length; i++) {
        addData(startNo, tableNo);
        startNo += dataShowNum;
        tableNo++;
    }//调用添加数据的函数


    function pageNumber() {
        var pageNo = document.createElement("div");
        pageNo.setAttribute("id", "pageNo");
        var pageLeft = document.createElement("span");
        var pageLeftText = document.createTextNode("<");
        pageLeft.appendChild(pageLeftText);
        pageNo.appendChild(pageLeft);
        for (var i = 0; i < tableCount.length; i++) {
            var pageNum = document.createElement("span");
            var pageNumText = document.createTextNode(i + 1);
            pageNum.appendChild(pageNumText);
            pageNo.appendChild(pageNum);
        }
        var pageRight = document.createElement("span");
        var pageRightText = document.createTextNode(">");
        pageRight.appendChild(pageRightText);
        pageNo.appendChild(pageRight);
        commodityListContainer.appendChild(pageNo);
    }//创建添加页码的函数
    pageNumber();
    var pageBox = document.getElementById("pageNo");
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

    var buttonStatus = document.getElementsByClassName("status");
    for (var i = 0; i < buttonStatus.length; i++) {
        // console.log(buttonStatus[i]);
        buttonStatus[i].setAttribute("onclick", "operateChangeText(this)");
    }//为状态按钮添加点击事件
    var buttonDetail = document.getElementsByClassName("detail");//获取详情按钮
    for (var i = 0; i < buttonStatus.length; i++) {
        // console.log(buttonStatus[i]);
        buttonDetail[i].setAttribute("onclick", "passData(this)");
    }//为详情按钮绑定传递数据的函数
    var buttonChange = document.getElementsByClassName("change");
    for (var i = 0; i < buttonStatus.length; i++) {
        // console.log(buttonStatus[i]);
        buttonChange[i].setAttribute("onclick", "passData(this)");
    }//为编辑按钮绑定传递函数的参数
    document.getElementById("controlButton").getElementsByTagName("button")[0].innerText="批量操作";
}//创建表格
createCommodityList(goodsArray);//列表初始化

var goodsStatusText;
function setGoodsStatus() {
    // var statusNo = Math.floor(Math.random() * 2) + 1;
    // if (statusNo == 1) {
    //     goodsStatusText = "上架";
    // } else {
    //     goodsStatusText = "下架";
    // }
    var tableCount = document.getElementsByTagName("table");
    // console.log(tableCount.length);
    for (var i = 0; i < tableCount.length; i++) {
        var tableTr = tableCount[i].getElementsByTagName("tr");
        for (var j = 1; j < tableTr.length; j++) {
            var statusNo = Math.floor(Math.random() * 2) + 1;
            if (statusNo == 1) {
                goodsStatusText = "上架";
            } else {
                goodsStatusText = "下架";
            }
            // console.log(tableTr[j].getElementsByTagName("td")[0]);
            if (tableTr[j].getElementsByTagName("td")[1].innerText != "") {
                var trParent = tableTr[j].getElementsByTagName("td")[0].parentNode;
                // console.log(tableTr[j].getElementsByTagName("td")[0].parentNode);
                // console.log(trParent.getElementsByClassName("condition")[0]);
                trParent.getElementsByClassName("condition")[0].innerText = goodsStatusText;
            }
        }
    }
}//定义随机定义商品状态的函数
setGoodsStatus();

function recordGoodsStatus() {
    var tableCount = document.getElementsByTagName("table");
    for (var i = 0; i < tableCount.length; i++) {
        var tableTr = tableCount[i].getElementsByTagName("tr");
        for (var j = 1; j < tableTr.length; j++) {
            if (tableTr[j].getElementsByClassName("condition")[0].innerText != "") {
                // console.log(tableTr[j].getElementsByClassName("condition")[0]);
                var goodsStatusParent = tableTr[j].getElementsByClassName("condition")[0].parentNode;
                // console.log(goodsStatusParent.getElementsByTagName("td")[0]);
                for (var k = 0; k < goodsArray.length; k++) {
                    if (goodsArray[k].goodsID == goodsStatusParent.getElementsByTagName("td")[1].innerText) {
                        goodsArray[k].goodsStatus = tableTr[j].getElementsByClassName("condition")[0].innerText;
                        // console.log(goodsArray[k].goodsStatus);
                    }
                }
            }
        }
    }
}//将商品状态写入数据数组的函数
recordGoodsStatus();

function readGoodsStatus() {
    var tableCount = document.getElementsByTagName("table");
    for (var i = 0; i < tableCount.length; i++) {
        var tableTr = tableCount[i].getElementsByTagName("tr");
        for (var j = 1; j < tableTr.length; j++) {
            if (tableTr[j].getElementsByTagName("td")[1].innerText != "") {
                for (var k = 0; k < goodsArray.length; k++) {
                    if (goodsArray[k].goodsID == tableTr[j].getElementsByTagName("td")[1].innerText) {
                        var trParent = tableTr[j].getElementsByTagName("td")[1].parentNode;
                        trParent.getElementsByClassName("condition")[0].innerText = goodsArray[k].goodsStatus;
                    }
                }
            }
        }
    }
}//将商品状态由数组读出写入列表

function operateButtonText() {
    var tableCount = commodityListContainer.getElementsByTagName("table");
    for (var i = 0; i < tableCount.length; i++) {
        var tableTr = tableCount[i].getElementsByTagName("tr");
        for (var j = 1; j < tableTr.length; j++) {
            // console.log(tableTr[j].getElementsByClassName("condition")[0].innerText);
            if (tableTr[j].getElementsByClassName("condition")[0].innerText == "上架") {
                tableTr[j].getElementsByTagName("button")[0].innerText = "下架";
            } else {
                tableTr[j].getElementsByTagName("button")[0].innerText = "上架";
            }
        }
    }
}//定义由商品状态文本决定上下架按钮文本函数//更新上下架按钮
operateButtonText();

// function passData(obj) {
//     sessionStorage.setItem("detailGoodsNo", obj.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerText);
//     if (obj.getAttribute("class") == "detail") {
//         sessionStorage.setItem("operate", "read");
//     } else {
//         sessionStorage.setItem("operate", "change");
//     }
// }//创建传递数据的函数

function clearTable() {
    var tableCount = commodityListContainer.getElementsByTagName("table");
    // console.log(tableCount);
    for (var i = 0; i < tableCount.length; i++) {
        // console.log(tableCount[i].getElementsByTagName("tr").length);
        for (var j = 1; j < tableCount[i].getElementsByTagName("tr").length; j++) {
            tableCount[i].getElementsByTagName("tbody")[0].removeChild(tableCount[i].getElementsByTagName("tr")[j]);
            j--;
            // console.log(j);
        }
        if (i > 0) {
            commodityListContainer.removeChild(tableCount[i]);
            i--;
        }
    }
    var pageNo = document.getElementById("pageNo");
    commodityListContainer.removeChild(pageNo);
}//清空表格函数

goodsTypeCount();
function searchSelect() {
    var selectType = document.getElementById("selectType");
    var nullOption = document.createElement("option");
    selectType.appendChild(nullOption);
    for (var i = 0; i < goodsTypeArray.length; i++) {
        var createOption = document.createElement("option");
        var goodsType = goodsTypeArray[i];
        // console.log(goodsType);
        createOption.innerText = goodsType;
        // console.log(createOption);
        selectType.appendChild(createOption);
    }
}//定义搜索下拉列表的函数
searchSelect();

var commoditySearch = document.getElementById("commoditySearch");
var commodityId = document.getElementById("commodityId");
var commodityName = document.getElementById("commodityName");
var commodityType = document.getElementById("selectType");
var commodityStatus = document.getElementById("commodityStatus");
var goodsArrayNew = new Array();
function searchStatus() {
    if (commodityId.value != "") {
        commodityName.disabled = "disabled";
        commodityName.parentNode.style.backgroundColor = "#EBEBE4";
        commodityName.style.cursor = "not-allowed";
        commodityType.disabled = "disabled";
        commodityType.parentNode.style.backgroundColor = "#EBEBE4";
        commodityType.style.cursor = "not-allowed";
        commodityType.getElementsByTagName("option")[0].selected=true;
        commodityStatus.disabled = "disabled";
        commodityStatus.parentNode.style.backgroundColor = "#EBEBE4";
        commodityStatus.style.cursor = "not-allowed";
        commodityStatus.getElementsByTagName("option")[0].selected=true;
    } else {
        commodityName.disabled = "";
        commodityName.parentNode.style.backgroundColor = "transparent";
        commodityName.style.cursor = "text";
        commodityType.disabled = "";
        commodityType.parentNode.style.backgroundColor = "transparent";
        commodityType.style.cursor = "auto";
        commodityStatus.disabled = "";
        commodityStatus.parentNode.style.backgroundColor = "transparent";
        commodityStatus.style.cursor = "auto";
    }
}//控制ID输入时其他输入为禁用状态
setInterval(searchStatus, 0);

var turnStatusIdGroup = new Array();
function statusTurn(text) {
    turnStatusIdGroup = [];
    // var tdCount = document.getElementsByClassName("condition");
    // for (var i = 0; i < tdCount.length; i++) {
    //     if (tdCount[i].innerText == text) {
    //         var tdId = tdCount[i].parentNode.firstChild.nextSibling;
    //         console.log(tdId.innerText);
    //         for (var j = 0; j < goodsArray.length; j++) {
    //             if (goodsArray[j].goodsID == tdId.innerText) {
    //                 var newGoods = goodsArray[j];
    //                 turnStatusIdGroup.push(newGoods);
    //             }
    //         }
    //     }
    // }
    for(var i=0;i<goodsArray.length;i++){
        if(goodsArray[i].goodsStatus==text){
            var newGoods = goodsArray[i];
            turnStatusIdGroup.push(newGoods);
        }
    }
}//定义商品状态转化为商品ID的函数

commoditySearch.onclick = function () {
    // console.log("x");
    if (commodityId.value != "") {
        for (var i = 0; i < goodsArray.length; i++) {
            if (commodityId.value == goodsArray[i].goodsID) {
                // var choseGoods=goodsArray[i];
                // goodsArrayNew.push(choseGoods);
                goodsArrayNew = [];
                goodsArrayNew.push(goodsArray[i]);
                clearTable();
                createCommodityList(goodsArrayNew);
                readGoodsStatus();
                break;
            }
            // else {
            if (i == goodsArray.length - 1) {
                alert("请核对商品ID");
            }
            // break;
            // }
        }
    } else {
        statusTurn(commodityStatus.value);
        // console.log(turnStatusIdGroup[0]==undefined);
        if (turnStatusIdGroup[0] == undefined) {
            // console.log("x");
            chooseGoods(goodsArray);
        } else {
            // console.log("y");
            chooseGoods(turnStatusIdGroup)
        }

        function chooseGoods(obj) {
            // console.log(commodityName.value);
            // console.log(commodityType.value);
            goodsArrayNew = [];
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].goodsName.indexOf(commodityName.value) != -1 || commodityName.value == "") {
                    if (obj[i].goodsType == commodityType.value || commodityType.value == "") {
                        // console.log(commodityStatus.value);
                        // console.log(obj == goodsArray);
                        if (commodityType.value == "" && commodityName.value == "" && obj == goodsArray) {
                            if(commodityListContainer.getElementsByTagName("table").length==parseInt(goodsArray.length/dataShowNum)+1){
                                alert("请输入查询条件!!!");
                            }else {
                                clearTable();
                                createCommodityList(goodsArray);
                                readGoodsStatus();
                                operateButtonText();
                            }
                            break;
                        } else if (commodityType.value == "" && commodityName.value == "" && obj == turnStatusIdGroup) {
                            // console.log(turnStatusIdGroup);
                            clearTable();
                            createCommodityList(turnStatusIdGroup);
                            readGoodsStatus();
                            operateButtonText();
                            break;
                        } else {
                            // console.log(obj[i]);
                            goodsArrayNew.push(obj[i]);
                            // console.log(obj[i]);
                        }

                    }
                }
                if (i == obj.length - 1) {
                    if (goodsArrayNew.length == 0) {
                        alert("查询商品不存在,请尝试其他搜索信息!!!")
                    } else {
                        clearTable();
                        createCommodityList(goodsArrayNew);
                        readGoodsStatus();
                        operateButtonText();
                    }
                }
            }
        }
    }
};//搜索框函数

function controlButtonTurn(obj) {
    // console.log(obj.innerText);
    if(obj.innerText=="批量操作"){
        obj.innerText="浏览商品";
        var goodsCheck=document.getElementsByClassName("goodsCheck");
        for(var i=0;i<goodsCheck.length;i++){
            goodsCheck[i].disabled="";
        }
        var status=document.getElementsByClassName("status");
        for(var i=0;i<status.length;i++){
            // console.log(status[i]);
            status[i].style.display="";
        }
        var detail=document.getElementsByClassName("detail");
        for(var i=0;i<detail.length;i++){
            // console.log(detail[i]);
            detail[i].style.display="none";
        }
        var change=document.getElementsByClassName("change");
        for(var i=0;i<change.length;i++){
            // console.log(change[i]);
            change[i].style.display="none";
        }
        var add=document.getElementsByClassName("commodityAdd");
        for(var i=0;i<add.length;i++){
            // console.log(add[i]);
            add[i].style.display="";
        }
    }else {
        obj.innerText="批量操作";
        var goodsCheck=document.getElementsByClassName("goodsCheck");
        for(var i=0;i<goodsCheck.length;i++){
            goodsCheck[i].disabled="disabled";
            goodsCheck[i].checked=false;
        }
        var status2=document.getElementsByClassName("status");
        for(var i=0;i<status2.length;i++){
            // console.log(status2[i]);
            status2[i].style.display="none";
        }
        var detail2=document.getElementsByClassName("detail");
        for(var i=0;i<detail2.length;i++){
            // console.log(detail2[i]);
            detail2[i].style.display="";
        }
        var change2=document.getElementsByClassName("change");
        for(var i=0;i<change2.length;i++){
            // console.log(change2[i]);
            change2[i].style.display="";
        }
        var add2=document.getElementsByClassName("commodityAdd");
        for(var i=0;i<add2.length;i++){
            // console.log(add2[i]);
            add2[i].style.display="none";
        }
    }
}//切换操作按钮改变全选框状态

function upgradeCommodityData() {
    var tableCount=commodityListContainer.getElementsByTagName("table");
    for(let i=0;i<tableCount.length;i++){
        let tableTr=tableCount[i].getElementsByTagName("tr");
        for(let j=1;j<tableTr.length;j++){
            if(tableTr[j].style.display!="none") {
                // console.log(tableTr[j].getElementsByTagName("td")[1].innerText);
                for(let k=0;k<goodsArray.length;k++){
                    if(tableTr[j].getElementsByTagName("td")[1].innerText==goodsArray[k].goodsID){
                        tableTr[j].getElementsByTagName("td")[8].innerText=goodsArray[k].goodsStock;
                    }
                }
            }
        }
    }
}//定义更新库存信息函数

function goodsShowNum() {

}




