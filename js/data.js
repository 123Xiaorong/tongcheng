// 拼团
var groupTicket=[
    {ticketName:"2人团劵",ticketValue:"100",ticketCondition:"满300",ticketTime:"15天",ticketTarget:"LAMER产品"},
    {ticketName:"2人团劵",ticketValue:"70",ticketCondition:"满200",ticketTime:"10天",ticketTarget:"阿尼玛产品"},
    {ticketName:"3人团劵",ticketValue:"150",ticketCondition:"满200",ticketTime:"1天",ticketTarget:"纪梵希产品"},
    {ticketName:"3人团劵",ticketValue:"100",ticketCondition:"满200",ticketTime:"15天",ticketTarget:"口红商品"},
    {ticketName:"4人团劵",ticketValue:"300",ticketCondition:"满600",ticketTime:"50天",ticketTarget:"粉底液商品"},
    {ticketName:"4人团劵",ticketValue:"70",ticketCondition:"满200",ticketTime:"10天",ticketTarget:"眼影商品"},
    {ticketName:"5人团劵",ticketValue:"70",ticketCondition:"满200",ticketTime:"10天",ticketTarget:"睫毛膏"},
    {ticketName:"5人团劵",ticketValue:"70",ticketCondition:"满200",ticketTime:"30天",ticketTarget:"阿尼玛产品"},
    {ticketName:"大团劵",ticketValue:"70",ticketCondition:"满200",ticketTime:"30天",ticketTarget:"阿尼玛产品"},
    {ticketName:"大团劵",ticketValue:"70",ticketCondition:"满200",ticketTime:"30天",ticketTarget:"阿尼玛产品"}]
// 消费者
var customer=[
    {cuID:"C111",cuName:"小王",cuPhone:"13540821678",cuEmail:"c111@163.com",cuPassword:"w123456",cuClass:"游客登录"},
    {cuID:"C112",cuName:"小李",cuPhone:"13540815790",cuEmail:"c112@163.com",cuPassword:"l123456",cuClass:"普通会员"},
    {cuID:"C113",cuName:"小张",cuPhone:"13540834268",cuEmail:"c113@163.com",cuPassword:"z123456",cuClass:"青铜会员"},
    {cuID:"C114",cuName:"小帆",cuPhone:"13540891634",cuEmail:"c114@163.com",cuPassword:"f123456",cuClass:"白银会员"},
    {cuID:"C115",cuName:"小龙",cuPhone:"13540873021",cuEmail:"c115@163.com",cuPassword:"l123456",cuClass:"黄金会员"},
    {cuID:"C116",cuName:"小周",cuPhone:"13540815278",cuEmail:"c116@163.com",cuPassword:"z123456",cuClass:"铂金会员"},
    {cuID:"C117",cuName:"小何",cuPhone:"13540819182",cuEmail:"c117@163.com",cuPassword:"h123456",cuClass:"钻石会员"},
    {cuID:"C118",cuName:"小倩",cuPhone:"13540818254",cuEmail:"c118@163.com",cuPassword:"q123456",cuClass:"星耀会员"},
    {cuID:"C119",cuName:"小赵",cuPhone:"13540810212",cuEmail:"c119@163.com",cuPassword:"z123456",cuClass:"至尊会员"},
    {cuID:"C120",cuName:"小周",cuPhone:"13540815278",cuEmail:"c116@163.com",cuPassword:"z123456",cuClass:"铂金会员"},
    {cuID:"C121",cuName:"小何",cuPhone:"13540819182",cuEmail:"c117@163.com",cuPassword:"h123456",cuClass:"钻石会员"},
    {cuID:"C122",cuName:"小倩",cuPhone:"13540818254",cuEmail:"c118@163.com",cuPassword:"q123456",cuClass:"星耀会员"},
    {cuID:"C123",cuName:"小赵",cuPhone:"13540810212",cuEmail:"c119@163.com",cuPassword:"z123456",cuClass:"至尊会员"},
    {cuID:"C110",cuName:"小苏",cuPhone:"13540891214",cuEmail:"c110@163.com",cuPassword:"s123456",cuClass:"贵族会员"}];
// 管理员
 administrator=[
    {adID:"A111",adName:"李思思",adPhone:"13666237555",adNum:"51101119990909090909",adEmail:"123456@163.com",adSex:"男",adPassword:"12345",adPower:"增删查改",adAddress:"四川成都"},
    {adID:"A112",adName:"李四",adPhone:"13257213211",adNum:"51101119990909090901",adEmail:"221345@163.com",adSex:"女",adPassword:"45678",adPower:"增改",adAddress:"四川乐山"},
    {adID:"A113",adName:"小张",adPhone:"13257215680",adNum:"51101119990909090902",adEmail:"qwerty@163.com",adSex:"男",adPassword:"12345",adPower:"增删",adAddress:"四川达州"},
    {adID:"A114",adName:"赵六",adPhone:"13257213645",adNum:"51101119990909090903",adEmail:"zxcvbn@163.com",adSex:"女",adPassword:"67890",adPower:"删查",adAddress:"四川峨眉山"},
    {adID:"A115",adName:"徐七",adPhone:"13257217764",adNum:"51101119990909090905",adEmail:"asdfgh@163.com",adSex:"男",adPassword:"78901",adPower:"查改",adAddress:"四川崇州"}],
	
    // supplier
supplier_data = [
				{
                    supplierId: 100,
					supplierName: "纪梵希",
					supplierCall: 13888888888,
					supplierAddress: "四川省成都市高新区天府三街地铁站",
					contact_person: "张三",

				},
				{
                    supplierId: 101,
					supplierName: "迪奥",
					supplierCall: 13666666666,
					supplierAddress: "四川省成都市高新区天府五街地铁站",
					contact_person: "李四"
				},
				{
                    supplierId: 102,
					supplierName: "阿玛尼",
					supplierCall: 13999999999,
					supplierAddress: "四川省成都市高新区高新地铁站",
					contact_person: "王五"
				}
				
			];
		//优惠卷
coupon_data = [
				{couponId:"1",couponType: "满减券",couponDate: "7天"},
				{couponId:"2",couponType: "3元抵价券",couponDate: "30天"},
				{couponId:"3",couponType: "20元抵价券",couponDate: "15天"},
				{couponId:"4",couponType: "50元抵价券",couponDate: "7天"},
				{couponId:"5",couponType: "100元抵价券",couponDate: "3天"}
			]
			
	// console.log(coupon_data.length);
// 商品信息
goods_data=[
    {
        goodsName:"阿玛尼黑钥匙至臻奂颜赋活精华液",
        goodsID:"1000001",
        goodsType:"护肤品",
        goodsBrand:"阿玛尼",
        goodsDescript:"甄选灵感来自潘泰莱里亚的火山黑曜岩矿物能量，凝萃珍稀南非凤凰草复苏精华，阿玛尼十年大师匠心，臻献全新黑钥匙至臻奂颜赋活精华水，解锁肌肤奂颜新生般的密钥。",
        goodsSpecifications:"150ml",
        goodsPrimeCost:980, // 成本价
        goodsOriginalCost:1280,  // 销售原价
        goodsFinalCost:1080, //促销价
        goodsStock:"30",   //库存
        goodsNumberLimit:"3",  //购买限制
        goodsPic:"<img src='img/阿玛尼黑钥匙至臻奂颜赋活精华液.webp' width='75' height='75'>",
        goodsVisits:100,   //访问量
        goodsCoupon:true, //是否存在优惠卷
    },
    {
        goodsName:"阿玛尼蕴能奂颜净彻滋润洁面乳",
        goodsID:"1000002",
        goodsType:"护肤品",
        goodsBrand:"阿玛尼",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"150ml",
        goodsPrimeCost:780,
        goodsOriginalCost:1080,
        goodsFinalCost:980,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/阿玛尼蕴能奂颜净彻滋润洁面乳.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"阿玛尼蕴能奂颜均衡洁颜凝露",
        goodsID:"1000003",
        goodsType:"护肤品",
        goodsBrand:"阿玛尼",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"150ml",
        goodsPrimeCost:880,
        goodsOriginalCost:1180,
        goodsFinalCost:1080,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/阿玛尼蕴能奂颜均衡洁颜凝露.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"阿玛尼「传奇红管」臻致丝绒哑光唇釉",
        goodsID:"1000011",
        goodsType:"口红",
        goodsBrand:"阿玛尼",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"3.5g",
        goodsPrimeCost:310,
        goodsOriginalCost:530,
        goodsFinalCost:430,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/阿玛尼「传奇红管」%20臻致丝绒哑光唇釉.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"阿玛尼「黑管」 漆光迷情唇釉",
        goodsID:"1000012",
        goodsType:"口红",
        goodsBrand:"阿玛尼",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"3.5g",
        goodsPrimeCost:310,
        goodsOriginalCost:530,
        goodsFinalCost:430,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/阿玛尼「黑管」 漆光迷情唇釉.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"全新. 阿玛尼挚爱哑光唇膏",
        goodsID:"1000013",
        goodsType:"口红",
        goodsBrand:"阿玛尼",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"3.5g",
        goodsPrimeCost:320,
        goodsOriginalCost:530,
        goodsFinalCost:440,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/全新. 阿玛尼挚爱哑光唇膏.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"阿玛尼「红色挚爱」香水",
        goodsID:"1000021",
        goodsType:"香水",
        goodsBrand:"阿玛尼",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"30ml",
        goodsPrimeCost:660,
        goodsOriginalCost:960,
        goodsFinalCost:860,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/阿玛尼「红色挚爱」香水.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"阿玛尼新寄情女士香水",
        goodsID:"1000022",
        goodsType:"香水",
        goodsBrand:"阿玛尼",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"50ml",
        goodsPrimeCost:820,
        goodsOriginalCost:1200,
        goodsFinalCost:960,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/阿玛尼新寄情女士香水.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"阿玛尼印记女士香水",
        goodsID:"1000023",
        goodsType:"香水",
        goodsBrand:"阿玛尼",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"30ml",
        goodsPrimeCost:560,
        goodsOriginalCost:860,
        goodsFinalCost:680,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/阿玛尼印记女士香水.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"海蓝之谜鎏光焕变粉底液",
        goodsID:"1000101",
        goodsType:"彩妆",
        goodsBrand:"海蓝之谜",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"30ml",
        goodsPrimeCost:1000,
        goodsOriginalCost:1500,
        goodsFinalCost:1280,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/海蓝之谜鎏光焕变粉底液.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"海蓝之谜鎏光焕变蜜粉饼",
        goodsID:"1000102",
        goodsType:"彩妆",
        goodsBrand:"海蓝之谜",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"30ml",
        goodsPrimeCost:760,
        goodsOriginalCost:1080,
        goodsFinalCost:960,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/海蓝之谜鎏光焕变蜜粉饼.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"海蓝之谜鎏光焕变气垫粉底液",
        goodsID:"1000103",
        goodsType:"彩妆",
        goodsBrand:"海蓝之谜",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"30ml",
        goodsPrimeCost:1000,
        goodsOriginalCost:1460,
        goodsFinalCost:1350,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/海蓝之谜鎏光焕变气垫粉底液.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"海蓝之谜精华面霜",
        goodsID:"1000111",
        goodsType:"护脸",
        goodsBrand:"海蓝之谜",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"60ml",
        goodsPrimeCost:2550,
        goodsOriginalCost:3050,
        goodsFinalCost:2750,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/海蓝之谜精华面霜.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"海蓝之谜精华乳液",
        goodsID:"1000112",
        goodsType:"护脸",
        goodsBrand:"海蓝之谜",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"50ml",
        goodsPrimeCost:2550,
        goodsOriginalCost:3050,
        goodsFinalCost:2750,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/海蓝之谜精华乳液.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"海蓝之谜浓缩修护眼霜",
        goodsID:"1000113",
        goodsType:"护脸",
        goodsBrand:"海蓝之谜",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"15ml",
        goodsPrimeCost:1700,
        goodsOriginalCost:2200,
        goodsFinalCost:1900,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/海蓝之谜浓缩修护眼霜.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"海蓝之谜密集修护套装",
        goodsID:"1000121",
        goodsType:"套装",
        goodsBrand:"海蓝之谜",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"1套",
        goodsPrimeCost:2600,
        goodsOriginalCost:3200,
        goodsFinalCost:2900,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/海蓝之谜密集修护套装.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"海蓝之谜明星奢宠套装",
        goodsID:"1000122",
        goodsType:"套装",
        goodsBrand:"海蓝之谜",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"1套",
        goodsPrimeCost:5750,
        goodsOriginalCost:6200,
        goodsFinalCost:5950,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/海蓝之谜明星奢宠套装.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"海蓝之谜奢宠修护套装",
        goodsID:"1000123",
        goodsType:"套装",
        goodsBrand:"海蓝之谜",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"精华面霜30ml",
        goodsPrimeCost:2550,
        goodsOriginalCost:3100,
        goodsFinalCost:2850,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/海蓝之谜奢宠修护套装.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"高定恒颜持妆粉底液",
        goodsID:"1000201",
        goodsType:"彩妆",
        goodsBrand:"纪梵希",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"30ml",
        goodsPrimeCost:445,
        goodsOriginalCost:850,
        goodsFinalCost:650,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/高定恒颜持妆粉底液.png' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"绒雾哑光粉饼",
        goodsID:"1000202",
        goodsType:"彩妆",
        goodsBrand:"纪梵希",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"9g",
        goodsPrimeCost:460,
        goodsOriginalCost:760,
        goodsFinalCost:640,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/绒雾哑光粉饼.png' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"绒雾哑光粉底液",
        goodsID:"1000203",
        goodsType:"彩妆",
        goodsBrand:"纪梵希",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"9g",
        goodsPrimeCost:470,
        goodsOriginalCost:780,
        goodsFinalCost:660,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/绒雾哑光粉底液.png' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"花漾曜白",
        goodsID:"1000211",
        goodsType:"护肤",
        goodsBrand:"纪梵希",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"54ml",
        goodsPrimeCost:530,
        goodsOriginalCost:760,
        goodsFinalCost:640,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/花漾曜白.png' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"花漾曜白柔肤水",
        goodsID:"1000212",
        goodsType:"护肤",
        goodsBrand:"纪梵希",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"200ml",
        goodsPrimeCost:445,
        goodsOriginalCost:660,
        goodsFinalCost:540,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/花漾曜白柔肤水.png' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"花漾曜采洁面乳",
        goodsID:"1000213",
        goodsType:"护肤",
        goodsBrand:"纪梵希",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"125ml",
        goodsPrimeCost:365,
        goodsOriginalCost:450,
        goodsFinalCost:398,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/花漾曜采洁面乳.png' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"灿若晨曦淡香水",
        goodsID:"1000221",
        goodsType:"香水",
        goodsBrand:"纪梵希",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"100ml",
        goodsPrimeCost:670,
        goodsOriginalCost:860,
        goodsFinalCost:700,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/灿若晨曦淡香水%20(2).png' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"粉红倾城香水",
        goodsID:"1000222",
        goodsType:"香水",
        goodsBrand:"纪梵希",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"50ml",
        goodsPrimeCost:360,
        goodsOriginalCost:560,
        goodsFinalCost:450,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/粉红倾城香水%20(2).png' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"心无禁忌香水 高定蕾丝限量版",
        goodsID:"1000222",
        goodsType:"香水",
        goodsBrand:"纪梵希",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"50ml",
        goodsPrimeCost:560,
        goodsOriginalCost:850,
        goodsFinalCost:700,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/心无禁忌香水%20高定蕾丝限量版%20(2).png' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"黑琥珀与姜百合菁华润肤油",
        goodsID:"1000301",
        goodsType:"沐浴露",
        goodsBrand:"祖马龙",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"100ml",
        goodsPrimeCost:700,
        goodsOriginalCost:999,
        goodsFinalCost:850,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/黑琥珀与姜百合菁华润肤油.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"青柠罗勒与柑橘沐浴露",
        goodsID:"1000302",
        goodsType:"沐浴露",
        goodsBrand:"祖马龙",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"250ml",
        goodsPrimeCost:360,
        goodsOriginalCost:560,
        goodsFinalCost:460,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/青柠罗勒与柑橘沐浴露.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"杏桃花与蜂蜜沐浴露",
        goodsID:"1000303",
        goodsType:"沐浴露",
        goodsBrand:"祖马龙",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"250ml",
        goodsPrimeCost:360,
        goodsOriginalCost:560,
        goodsFinalCost:460,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/杏桃花与蜂蜜沐浴露.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"橙花香氛蜡烛",
        goodsID:"1000311",
        goodsType:"香氛",
        goodsBrand:"祖马龙",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"200g",
        goodsPrimeCost:500,
        goodsOriginalCost:700,
        goodsFinalCost:600,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/橙花香氛蜡烛.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"蓝风铃香氛蜡烛",
        goodsID:"1000312",
        goodsType:"香氛",
        goodsBrand:"祖马龙",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"200g",
        goodsPrimeCost:500,
        goodsOriginalCost:700,
        goodsFinalCost:600,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/蓝风铃香氛蜡烛.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"青柠罗勒与柑橘满室幽香居家香氛",
        goodsID:"1000313",
        goodsType:"香氛",
        goodsBrand:"祖马龙",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"175ml",
        goodsPrimeCost:500,
        goodsOriginalCost:700,
        goodsFinalCost:600,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/青柠罗勒与柑橘满室幽香居家香氛.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"青柠罗勒与柑橘香水",
        goodsID:"1000321",
        goodsType:"香水",
        goodsBrand:"祖马龙",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"30ml",
        goodsPrimeCost:600,
        goodsOriginalCost:800,
        goodsFinalCost:700,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/青柠罗勒与柑橘香水.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"忍冬与印蒿香水",
        goodsID:"1000322",
        goodsType:"香水",
        goodsBrand:"祖马龙",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"100ml",
        goodsPrimeCost:1200,
        goodsOriginalCost:1500,
        goodsFinalCost:1400,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/忍冬与印蒿香水.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    },
    {
        goodsName:"英国橡树与红醋栗香水",
        goodsID:"1000323",
        goodsType:"香水",
        goodsBrand:"祖马龙",
        goodsDescript:"阿玛尼蕴能奂颜净彻滋润洁面乳，阿玛尼黑钥匙洁面乳拥有净彻清洁力，在洗去杂质的同时能温柔滋润肌肤。采用无皂基配方，PH值和人体肌肤接近，温和亲肤，长效洁净。",
        goodsSpecifications:"30ml",
        goodsPrimeCost:600,
        goodsOriginalCost:800,
        goodsFinalCost:700,
        goodsStock:"30",
        goodsNumberLimit:"30",
        goodsPic:"<img src='img/英国橡树与红醋栗香水.webp' width='75' height='75'>",
        goodsVisits:100,
        goodsCoupon:true,
    }
];

var goodsTypeArray=new Array();
function goodsTypeCount() {
    for(var i=0;i<goods_data.length;i++){
        var goodsType=goods_data[i].goodsType;
        goodsTypeArray.push(goodsType);
    }
// console.log(goodsTypeArray);
    for(var i=0;i<goodsTypeArray.length;i++){//i=0 i<8//取参照数
        for(var j=i+1;j<goodsTypeArray.length;j++){//j=1 j<8//取参照数后一位
            if(goodsTypeArray[i]==goodsTypeArray[j]){//参照数和参照数后一位比较
                goodsTypeArray.splice(j,1);//若等则删除参照数后一位
                j--;//还原j以便再次进行同位比较
            }
            //j++
        }
        //i++
    }
}//定义获取商品种类函数

var goodsArray=new Array();
function createGoodsArray() {
    for(var i=0;i<goods_data.length;i++){
        goodsArray.push(goods_data[i])
    }
}//创建商品数组

function addSupplier() {
    for(let i=0;i<goodsArray.length;i++){
        goodsArray[i].goodsSupplierNum="G123456";
    }
}//添加供应商ID
// addSupplier();

var combineArray=new Array();
var afterCombineData;
function combineData() {
    var pastArray=new Array();
    for(let i=0;i<goodsArray.length;i++){
        pastArray.push(goodsArray[i].goodsID);
        pastArray.push(goodsArray[i].goodsName);
        pastArray.push(goodsArray[i].goodsType);
        pastArray.push(goodsArray[i].goodsBrand);
        pastArray.push(goodsArray[i].goodsPrimeCost);
        pastArray.push(goodsArray[i].goodsStock);
        pastArray.push(goodsArray[i].goodsPic);
        pastArray.push(goodsArray[i].goodsCoupon);
        pastArray.push(goodsArray[i].goodsStatus);
        pastArray.push(goodsArray[i].goodsSupplierNum);
        pastArray.push(goodsArray[i].goodsSpecifications);
        pastArray.push(goodsArray[i].goodsDescript);
        combineArray.push(pastArray.join("~"));
        // console.log(pastArray);
        pastArray=[];
    }
    afterCombineData=combineArray.join("|");
    // console.log(afterCombineData);
}//定义整合数组为字符串的函数

function passData(obj) {
    var thisNo=obj.parentNode.parentNode.parentNode.getElementsByTagName("td")[1].innerText;
    combineData();
    sessionStorage.setItem("thisNo",thisNo);
    sessionStorage.setItem("afterCombineData",afterCombineData);
    if (obj.getAttribute("class") == "detail") {
        sessionStorage.setItem("operate", "read");
    } else {
        sessionStorage.setItem("operate", "change");
    }
}//创建传递数据的函数

function passDataFromDetail() {
    combineData();
    sessionStorage.setItem("afterCombineData",afterCombineData);
    if (obj.getAttribute("class") == "detail") {
        sessionStorage.setItem("operate", "read");
    } else {
        sessionStorage.setItem("operate", "change");
    }
}//由商品详情传出数据


/**
 * @param {string} Name
 * @param {string} ID
 * @param {string} Type
 * @param {string} Brand
 * @param {string} PrimeCost
 * @param {string} Stock
 * @param {string} Pic
 * @param {string} Coupon
 * @param {string} Status
 * @param {string} SupplierNum
 * @param {string} Specifications
 * @param {string} Descript
 * @constructor*/
function goods(ID,Name,Type,Brand,PrimeCost,Stock,Pic,Coupon,Status,SupplierNum,Specifications,Descript) {
    this.goodsID=ID;
    this.goodsName=Name;
    this.goodsType=Type;
    this.goodsBrand=Brand;
    this.goodsPrimeCost=PrimeCost;
    this.goodsStock=Stock;
    this.goodsPic=Pic;
    this.goodsCoupon=Coupon;
    this.goodsStatus=Status;
    this.goodsSupplierNum=SupplierNum;
    this.goodsSpecifications=Specifications;
    this.goodsDescript=Descript;
}//商品构造函数

function splitData(obj){
    var pastArray= obj.split("|");
    for(let i=0;i<pastArray.length;i++){
        var pastArray2=pastArray[i].split("~");
        // console.log(pastArray[i].split("~"));
        // goods(pastArray2[0],pastArray2[1],pastArray2[2],pastArray2[3],pastArray2[4],pastArray2[5],pastArray2[6],pastArray2[7],pastArray2[8]);
        goodsArray.push(new goods(pastArray2[0],pastArray2[1],pastArray2[2],pastArray2[3],pastArray2[4],pastArray2[5],pastArray2[6],pastArray2[7],pastArray2[8],pastArray2[9],pastArray2[10],pastArray2[11]));
    }
    // console.log(goodsArray);
}//定义分解整合的字符串为数组的函数,得到goodsArray

var newGoods=[];

