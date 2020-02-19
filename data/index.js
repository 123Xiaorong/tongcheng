function indexFn() {
  require(['jquery', 'echarts'], function($, echarts) {
    // console.log(echarts)
      $(function() {
          buildData();
      });

      function buildData() {
          //定义数据结构
          var datas = {
              'colors': ['#006699', '#4cabce', '#e5323e'],
              'xAxis': ['一月', '二月', '三月', '四月', '五月', '六月'],
              'legend':['纪梵希','阿玛尼','LAMER'],
              'list': [
                  {
                      'title': '一二季度销售量',
                      'series': [[9, 30, 45, 40, 20, 38],[60, 50, 48, 30, 45, 5],[58, 8, 20, 53, 22, 52]],
                      'elid': 'three'
                  },
              ]
          };
          for (var i = 0; i < datas['list'].length; i++) {
              canvasEcharts(datas, i);
          }
      }

      function canvasEcharts(json, index) {
          var obj = json['list'][index];
          var myChats = echarts.init(document.getElementById(obj['elid']));
          var option = {
              title: { //标题
                  text: obj['title']
              },
              color: ['#006699', '#4cabce', '#e5323e'],
              tooltip: {  //提示框
                  trigger: 'axis', //触发类型
                  axisPointer: { //指示样式
                      type: 'shadow'   //line/shadow/cross
                  }
              },
              legend: { //图例
				
                  left: "30%",
                  data: ['纪梵希', '阿玛尼', 'LAMER']
              },
              grid: {
				  show: false, //是否显示直角坐标系网格
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true, //是否显示(包含)坐标轴的刻度标签
				  width: "500px"
              },
              xAxis: [{
                  min: 0,
				  name: '月份',
				  nameRotate: 20,
                  //坐标轴类型，横轴默认为类目型'category'
                  type: 'category',
                  data: json['xAxis']
              }],
              yAxis: [{
                  min: 0,
                  max: 80,
				  name:'销量',
				  nameRotate: -10, //坐标轴名字旋转
                  //坐标轴类型，纵轴默认为数值型'value'
                  type: 'value'
              }],
              series: (function(){
                  var arr=[];
                  for (var i = 0; i < obj['series'].length; i++) {
                      var thisobj={
                          name: json['legend'][i],
                          type: 'bar',
						  barWidth: '20%',
                      };
                      thisobj.data=obj['series'][i];
                      arr.push(thisobj)
                  }
                  return arr
              })()
          };
          //为echarts对象加载数据
          myChats.setOption(option, true);
      }

  });
}

require(['config'], indexFn);