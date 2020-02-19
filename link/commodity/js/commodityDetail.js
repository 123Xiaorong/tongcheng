afterCombineData=sessionStorage.getItem("afterCombineData");//获取别的页面传的值
var operateChoose=sessionStorage.getItem("operate");
var thisNo=sessionStorage.getItem("thisNo");
function readOrChange() {
    if(operateChoose=="read"){
        $.each($(".operate"),function (i,n) {
            // console.log($(n.parentNode));
            $(n).attr("disabled",true);
            $(n).css("cursor","not-allowed");
            $("body").css({"background-color":"#EBEBE4","cursor":"not-allowed"});
            $("button[class='operate']").css("display","none");
        })
    }else {
        $("#operateBack").text("退出编辑");
    }
}//判断是读取还是改写
readOrChange();


var goodsArray=[];
// /**
//  * @param {string} Name
//  * @param {string} ID
//  * @param {string} Type
//  * @param {string} Brand
//  * @param {string} PrimeCost
//  * @param {string} Stock
//  * @param {string} Pic
//  * @param {string} Coupon
//  * @param {string} Status
//  * @param {string} SupplierNum
//  * @param {string} Specifications
//  * @param {string} Descript
//  * @constructor*/
// function goods(ID,Name,Type,Brand,PrimeCost,Stock,Pic,Coupon,Status,SupplierNum,Specifications,Descript) {
//     this.goodsID=ID;
//     this.goodsName=Name;
//     this.goodsType=Type;
//     this.goodsBrand=Brand;
//     this.goodsPrimeCost=PrimeCost;
//     this.goodsStock=Stock;
//     this.goodsPic=Pic;
//     this.goodsCoupon=Coupon;
//     this.goodsStatus=Status;
//     this.goodsSupplierNum=SupplierNum;
//     this.goodsSpecifications=Specifications;
//     this.goodsDescript=Descript;
// }//商品构造函数

// function splitData(obj){
//     var pastArray= obj.split("|");
//     for(let i=0;i<pastArray.length;i++){
//         var pastArray2=pastArray[i].split("~");
//         // console.log(pastArray[i].split("~"));
//         // goods(pastArray2[0],pastArray2[1],pastArray2[2],pastArray2[3],pastArray2[4],pastArray2[5],pastArray2[6],pastArray2[7],pastArray2[8]);
//         goodsArray.push(new goods(pastArray2[0],pastArray2[1],pastArray2[2],pastArray2[3],pastArray2[4],pastArray2[5],pastArray2[6],pastArray2[7],pastArray2[8],pastArray2[9],pastArray2[10],pastArray2[11]));
//     }
//     // console.log(goodsArray);
// }//定义分解整合的字符串为数组的函数,得到goodsArray
splitData(afterCombineData);


goodsTypeCount();//调用商品种类统计函数,得到goodsTypeArray
function detailInitial() {
    $.each(goodsTypeArray, function (i, n) {
        $("#commodityType").append("<option>" + goodsTypeArray[i] + "</option>");
    });
    $("table:nth-of-type(1) tr:nth-of-type(2)>td:nth-of-type(2)>input").val(thisNo);//填入商品ID
    $.each(goodsArray, function (i, n) {
        // console.log(n.goodsType);
        if (n.goodsID == thisNo) {
            $("table:nth-of-type(1) tr:nth-of-type(3)>td:nth-of-type(2)>input").val(n.goodsName);
            // $("table:nth-of-type(1) tr:nth-of-type(4)>td:nth-of-type(2)>textarea").text(n.goodsDescript);
            $("table:nth-of-type(1) tr:nth-of-type(4)>td:nth-of-type(2)>textarea").text(n.goodsDescript);

            // console.log($("#commodityStatus").children("option"));
            $.each($("#commodityStatus").children("option"),function (x,y) {
                // console.log(b.innerText);
                // console.log(n.goodsStatus);
                if(y.innerText==n.goodsStatus){
                    // console.log($(b));
                    $(y).attr("selected", "selected");
                }
            });
            // $("table:nth-of-type(1) tr:nth-of-type(5)>td:nth-of-type(2)>select").val(n.goodsStatus);

            $("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(1)>input").val(n.goodsSpecifications);
            $("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(2)>input").val(n.goodsPrimeCost*1.5);
            $("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(3)>input").val(n.goodsPrimeCost*1.2);
            $("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(4)>input").val(n.goodsPrimeCost);
            $("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(5)>input").val(10);
            $("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(6)>input").val(n.goodsStock);
            let rank=Math.floor(Math.random()*50)+1;
            $("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(7)>input").val(rank);
            // console.log(n.goodsSupplierNum);

            $("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(8)>input").val(n.goodsSupplierNum);

            $.each($("#commodityType").children("option"), function (x, y) {
                // console.log(y);
                // console.log(y.text==n.goodsType);
                if (y.text == n.goodsType) {
                    // console.log("xxxx");
                    // console.log(y);
                    $("#commodityType").prepend(y);
                    $("#commodityType option:nth-of-type(1)").attr("selected", "selected");
                }
            })
        }
    });
}//商品详情初始化
detailInitial();

$("#backChange").click(function () {
    detailInitial();
});//还原修改

function changeDataSave() {
    $.each(goodsArray,function (i,n) {
        // console.log($("table:nth-of-type(1) tr:nth-of-type(2)>td:nth-of-type(2)>input").val());
        if(n.goodsID==$("table:nth-of-type(1) tr:nth-of-type(2)>td:nth-of-type(2)>input").val()) {
            n.goodsName=$("table:nth-of-type(1) tr:nth-of-type(3)>td:nth-of-type(2)>input").val();
            // console.log($("table:nth-of-type(1) tr:nth-of-type(3)>td:nth-of-type(2)>input").val());
            n.goodsDescript=$("table:nth-of-type(1) tr:nth-of-type(4)>td:nth-of-type(2)>textarea").text();
            // console.log($("table:nth-of-type(1) tr:nth-of-type(4)>td:nth-of-type(2)>textarea").text());
            n.goodsStatus=$("#commodityStatus option:selected").text();
            // console.log($("#commodityStatus option:selected").text());
            n.goodsSpecifications=$("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(1)>input").val();
            // console.log($("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(1)>input").val());
            n.goodsPrimeCost=$("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(4)>input").val();
            // console.log($("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(4)>input").val());
            n.goodsStock=$("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(6)>input").val();
            // console.log($("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(6)>input").val());
            n.goodsSupplierNum=$("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(8)>input").val();
            // console.log($("table:nth-of-type(2) tr:nth-of-type(3)>td:nth-of-type(8)>input").val());
        }
    });
    // console.log(goodsArray);
    passDataFromDetail();
}//保存修改数据

