(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aa673da"],{"0c6e":function(t,e,n){},3441:function(t,e,n){"use strict";var a=n("e99b"),i=n("3250"),s=n("8078"),r=n("0926"),o=[].sort,u=[1,2,3];a(a.P+a.F*(r((function(){u.sort(void 0)}))||!r((function(){u.sort(null)}))||!n("95b6")(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),i(t))}})},"37c8":function(t,e,n){"use strict";n("cbd4")},"3c09":function(t,e,n){"use strict";n("0c6e")},"4a88":function(t,e,n){"use strict";n("bcfd")},"95b6":function(t,e,n){"use strict";var a=n("0926");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"9e2e":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,n){var a=n(4)(n(1),n(5),null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,a.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,a.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,a.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,a.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,a.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),n=e[0],a=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(n);)n=n.replace(i,"$1"+this.separator+"$2");return this.prefix+n+a+this.suffix}},destroyed:function(){(0,a.cancelAnimationFrame)(this.rAF)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=0,i="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,u=0;u<i.length&&(!s||!r);u++)o=i[u],e.requestAnimationFrame=s=s||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-a)),i=window.setTimeout((function(){t(e+n)}),n);return a=e+n,i},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,n,a){var i,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),a){var u=Object.create(o.computed||null);Object.keys(a).forEach((function(t){var e=a[t];u[t]=function(){return e}})),o.computed=u}return{esModule:i,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},bbe4:function(t,e,n){"use strict";n("facc")},bcfd:function(t,e,n){},c182:function(t,e,n){},cbd4:function(t,e,n){},e217:function(t,e,n){"use strict";n("c182")},f75a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("statistics"),n("statisticsCharts")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics"},[n("ul",{staticClass:"statistics-ul"},[n("li",[n("div",{staticClass:"text"},[t._v("全部客户")]),n("div",{staticClass:"number-li"},[n("countTo",{attrs:{startVal:0,endVal:t.statisticsList.all,duration:t.durations}}),n("span",[t._v("人")])],1)]),n("li",[n("div",{staticClass:"text"},[t._v("今日新增客户")]),n("div",{staticClass:"number-li"},[n("countTo",{attrs:{startVal:0,endVal:t.statisticsList.toDayKefu,duration:t.durations}}),n("span",[t._v("人")])],1)]),n("li",[n("div",{staticClass:"text"},[t._v("本月新增客户")]),n("div",{staticClass:"number-li"},[n("countTo",{attrs:{startVal:0,endVal:t.statisticsList.month,duration:t.durations}}),n("span",[t._v("人")])],1)]),n("li",[n("div",{staticClass:"text"},[t._v("今日游客")]),n("div",{staticClass:"number-li"},[n("countTo",{attrs:{startVal:0,endVal:t.statisticsList.toDayTourist,duration:t.durations}}),n("span",[t._v("人")])],1)])])])},r=[],o=(n("6a61"),n("dc45")),u=n("6b6c");function c(){return Object(u["a"])({url:"chart/sum",method:"get"})}function l(t){return Object(u["a"])({url:"chart",method:"get",params:t})}var d=n("9e2e"),h=n.n(d),f={name:"statistics",components:{countTo:h.a},data:function(){return{durations:3e3,statisticsList:{}}},methods:{getStatistics:function(){var t=this;c().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=n.data,t.statisticsList=a,console.log(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))}},mounted:function(){this.getStatistics()}},m=f,p=(n("3c09"),n("5d22")),y=Object(p["a"])(m,s,r,!1,null,null,null),g=y.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart-content"},[n("div",{staticClass:"chart-title"},[n("p",{staticClass:"chart-left"},[t._v("趋势图")]),n("p",{staticClass:"chart-right"},[n("RadioGroup",{staticClass:"ivu-mr-8",attrs:{type:"button"},on:{"on-change":t.handleChangeVisitType},model:{value:t.visitDate,callback:function(e){t.visitDate=e},expression:"visitDate"}},[n("Radio",{attrs:{label:"1"}},[t._v("年")]),n("Radio",{attrs:{label:"0"}},[t._v("月")])],1)],1)]),t._m(0)])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"echarts1"}})])}],x=(n("1bc7"),n("4d28")),b=n.n(x),C={name:"statisticsCharts",data:function(){return{option:{},year:"2021",month:"07",visitDate:"0"}},methods:{getChart:function(){var t=this;this.option={tooltip:{trigger:"axis"},legend:{data:["客户","游客"],icon:"rect",right:20,top:20},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,nameTextStyle:{color:"#CCCCCC"},axisLine:{lineStyle:{color:"#CCCCCC"}},axisLabel:{color:"#666666"},data:[]},yAxis:{type:"value",name:"每日新增(人)",nameTextStyle:{color:"#CCCCCC"},axisLine:{lineStyle:{color:"#CCCCCC"}},axisLabel:{color:"#666666"},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"客户",type:"line",itemStyle:{normal:{color:"#1890FF"}},lineStyle:{width:3},data:[]},{name:"游客",type:"line",itemStyle:{normal:{color:"#10CCA3"}},lineStyle:{width:3},data:[]}]};var e={year:this.year,month:this.month};l(e).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var a,i,s,r,o,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=n.data,i=a.list,s=a.tourist,r=[],o=[],u=[],i.forEach((function(t,e){u.push(t.month),o.push(s[e].number),r.push(t.number)})),t.option.xAxis.data=u,t.option.series[0].data=r,t.option.series[1].data=o,c=b.a.init(document.getElementById("echarts1")),c.setOption(t.option,!0),window.onresize=c.resize();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},handleChangeVisitType:function(){var t=this;l({type:this.visitDate}).then((function(e){var n=e.data,a=n.list,i=n.tourist,s=[],r=[],o=[];a.forEach((function(t,e){o.push(t.month),r.push(i[e].number),s.push(t.number)})),t.option.xAxis.data=o,t.option.series[0].data=s,t.option.series[1].data=r;var u=b.a.init(document.getElementById("echarts1"));u.setOption(t.option,!0),window.onresize=u.resize()})).catch((function(e){t.$Message.error(e.msg)}))}},mounted:function(){this.getChart()}},k=C,V=(n("4a88"),Object(p["a"])(k,v,w,!1,null,"7599f93e",null)),_=V.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",{attrs:{gutter:24}},[n("Col",{attrs:{span:"12"}},[n("NumberInfo",{attrs:{total:"23,378","sub-total":"16.8",status:"up"}},[n("span",{attrs:{slot:"subTitle"},slot:"subTitle"},[t._v("\n                    搜索用户数\n                    "),n("Tooltip",{attrs:{content:"指标说明",placement:"top"}},[n("Icon",{attrs:{type:"ios-information-circle-outline"}})],1)],1)]),n("div",{ref:"searchUserChart",staticStyle:{height:"50px"}})],1),n("Col",{attrs:{span:"12"}},[n("NumberInfo",{attrs:{total:"3.1","sub-total":"8.5",status:"down"}},[n("span",{attrs:{slot:"subTitle"},slot:"subTitle"},[t._v("\n                    人均搜索次数\n                    "),n("Tooltip",{attrs:{content:"指标说明",placement:"top"}},[n("Icon",{attrs:{type:"ios-information-circle-outline"}})],1)],1)]),n("div",{ref:"searchCountChart",staticStyle:{height:"50px"}})],1)],1),n("div",{staticClass:"ivu-mt"},[n("search-table")],1)],1)},F=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"i-table-no-border"},[n("Table",{attrs:{columns:t.column,data:t.dataWithPage,loading:t.loading,size:"small"},on:{"on-sort-change":t.handleSortChange},scopedSlots:t._u([{key:"keyword",fn:function(e){var a=e.row;return[n("a",{attrs:{href:"/",target:"_blank"}},[t._v(t._s(a.keyword))])]}},{key:"range",fn:function(e){var a=e.row;return[t._v("\n            "+t._s(a.range)+"%\n            "),n("Trend",{attrs:{flag:a.status?"up":"down"}})]}}])}),n("div",{staticClass:"ivu-text-right ivu-mt-8"},[n("Page",{attrs:{size:"small","page-size":5,total:t.limitData.length,current:t.current},on:{"update:current":function(e){t.current=e},"on-change":t.getData}})],1)],1)},T=[],D=(n("3441"),n("332f")),O={data:function(){return{current:1,size:5,loading:!1,sortType:"normal",sortKey:"",column:[{title:"排名",key:"index",width:80},{title:"搜索关键词",key:"keyword",slot:"keyword",minWidth:120},{title:"用户数",key:"count",sortable:"custom",minWidth:100},{title:"周涨幅",key:"range",slot:"range",width:100,align:"right",sortable:"custom"}],data:[]}},computed:{limitData:function(){var t=this,e=Object(D["a"])(this.data);return"asc"===this.sortType&&(e=e.sort((function(e,n){return e[t.sortKey]>n[t.sortKey]?1:-1}))),"desc"===this.sortType&&(e=e.sort((function(e,n){return e[t.sortKey]<n[t.sortKey]?1:-1}))),e},dataWithPage:function(){var t=this.limitData,e=this.current*this.size-this.size,n=e+this.size;return Object(D["a"])(t).slice(e,n)}},methods:{handleSortChange:function(t){var e=t.key,n=t.order;this.sortKey=e,this.sortType=n,this.current=1},getData:function(){var t=[{index:1,keyword:"搜索关键词-0",count:257,range:69,status:0},{index:2,keyword:"搜索关键词-1",count:711,range:57,status:0},{index:3,keyword:"搜索关键词-2",count:766,range:24,status:1},{index:4,keyword:"搜索关键词-3",count:597,range:31,status:1},{index:5,keyword:"搜索关键词-4",count:133,range:30,status:0},{index:6,keyword:"搜索关键词-5",count:845,range:16,status:0},{index:7,keyword:"搜索关键词-6",count:454,range:35,status:1},{index:8,keyword:"搜索关键词-7",count:884,range:96,status:1},{index:9,keyword:"搜索关键词-8",count:725,range:30,status:1},{index:10,keyword:"搜索关键词-9",count:778,range:46,status:0},{index:11,keyword:"搜索关键词-10",count:414,range:69,status:1},{index:12,keyword:"搜索关键词-11",count:927,range:41,status:0},{index:13,keyword:"搜索关键词-12",count:128,range:54,status:0},{index:14,keyword:"搜索关键词-13",count:169,range:77,status:0},{index:15,keyword:"搜索关键词-14",count:764,range:8,status:0},{index:16,keyword:"搜索关键词-15",count:178,range:23,status:1},{index:17,keyword:"搜索关键词-16",count:32,range:94,status:0},{index:18,keyword:"搜索关键词-17",count:183,range:34,status:1},{index:19,keyword:"搜索关键词-18",count:988,range:5,status:0},{index:20,keyword:"搜索关键词-19",count:324,range:15,status:0},{index:21,keyword:"搜索关键词-20",count:832,range:42,status:0},{index:22,keyword:"搜索关键词-21",count:336,range:99,status:0},{index:23,keyword:"搜索关键词-22",count:23,range:1,status:1},{index:24,keyword:"搜索关键词-23",count:557,range:84,status:0},{index:25,keyword:"搜索关键词-24",count:894,range:62,status:1},{index:26,keyword:"搜索关键词-25",count:610,range:73,status:1},{index:27,keyword:"搜索关键词-26",count:810,range:1,status:1},{index:28,keyword:"搜索关键词-27",count:83,range:13,status:1},{index:29,keyword:"搜索关键词-28",count:734,range:11,status:1},{index:30,keyword:"搜索关键词-29",count:6,range:97,status:0},{index:31,keyword:"搜索关键词-30",count:112,range:88,status:0},{index:32,keyword:"搜索关键词-31",count:978,range:92,status:0},{index:33,keyword:"搜索关键词-32",count:674,range:86,status:0},{index:34,keyword:"搜索关键词-33",count:632,range:42,status:1},{index:35,keyword:"搜索关键词-34",count:0,range:23,status:1},{index:36,keyword:"搜索关键词-35",count:965,range:94,status:0},{index:37,keyword:"搜索关键词-36",count:758,range:86,status:0},{index:38,keyword:"搜索关键词-37",count:857,range:34,status:0},{index:39,keyword:"搜索关键词-38",count:72,range:95,status:0},{index:40,keyword:"搜索关键词-39",count:69,range:74,status:1},{index:41,keyword:"搜索关键词-40",count:553,range:21,status:1},{index:42,keyword:"搜索关键词-41",count:430,range:2,status:1},{index:43,keyword:"搜索关键词-42",count:86,range:23,status:1},{index:44,keyword:"搜索关键词-43",count:626,range:2,status:1},{index:45,keyword:"搜索关键词-44",count:266,range:8,status:1},{index:46,keyword:"搜索关键词-45",count:943,range:61,status:0},{index:47,keyword:"搜索关键词-46",count:417,range:17,status:1},{index:48,keyword:"搜索关键词-47",count:151,range:92,status:1},{index:49,keyword:"搜索关键词-48",count:197,range:63,status:0},{index:50,keyword:"搜索关键词-49",count:578,range:18,status:1}];this.total=t.length,this.data=t}},mounted:function(){this.getData()}},j=O,q=Object(p["a"])(j,A,T,!1,null,null,null),$=q.exports,z={components:{searchTable:$},data:function(){return{}},methods:{handleSetSearchChart:function(){this.searchUserChart=b.a.init(this.$refs.searchUserChart),this.searchCountChart=b.a.init(this.$refs.searchCountChart);var t={xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],type:"category",show:!1},yAxis:{show:!1,type:"value"},series:[{data:[120,300,150,350,70,210,130],type:"line",tooltip:!0,smooth:!0,symbol:"none",areaStyle:{normal:{opacity:.2}}}],color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:-60,right:-20,bottom:-20,top:0,containLabel:!0},tooltip:{trigger:"axis"}};this.searchUserChart.setOption(t),this.searchCountChart.setOption(t)},handleResize:function(){this.searchUserChart&&this.searchUserChart.resize(),this.searchCountChart&&this.searchCountChart.resize()}},mounted:function(){this.handleSetSearchChart()},beforeDestroy:function(){this.searchUserChart&&(this.searchUserChart.dispose(),this.searchUserChart=null),this.searchCountChart&&(this.searchCountChart.dispose(),this.searchCountChart=null)}},E=z,R=Object(p["a"])(E,S,F,!1,null,null,null),N=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{height:"200px"}},[n("user-gender")],1),t._m(0)])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"200px"}},[n("div",{staticClass:"dashboard-console-user-preference"})])}],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-console-user-gender"},[n("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("Col",{staticClass:"ivu-text-center",staticStyle:{color:"#3399ff"},attrs:{span:"8"}},[n("Avatar",{staticStyle:{"background-color":"#d6f0ff",color:"#3399ff"},attrs:{icon:"ios-man",size:"large"}}),n("div",{staticClass:"ivu-mt-8"},[t._v("男性 65%")])],1),n("Col",{staticClass:"ivu-text-center",staticStyle:{color:"#be6be0"},attrs:{span:"8"}},[n("Avatar",{staticStyle:{color:"#be6be0","background-color":"#fdf0ff"},attrs:{icon:"ios-woman",size:"large"}}),n("div",{staticClass:"ivu-mt-8"},[t._v("女性 25%")])],1),n("Col",{staticClass:"ivu-text-center",staticStyle:{color:"#babdc3"},attrs:{span:"8"}},[n("Avatar",{staticStyle:{color:"#babdc3","background-color":"#e6edf5"},attrs:{icon:"md-man",size:"large"}}),n("div",{staticClass:"ivu-mt-8"},[t._v("未知 10%")])],1)],1),n("div",{staticClass:"dashboard-console-user-gender-grid ivu-mt-8"},[n("Grid",{attrs:{center:"",square:"",col:25,padding:"2px",border:!1}},t._l(100,(function(t){return n("GridItem",{key:t},[n("span",t<=65?{staticStyle:{"background-color":"#3399ff"}}:t<=90?{staticStyle:{"background-color":"#be6be0"}}:{staticStyle:{"background-color":"#babdc3"}})])})),1)],1)],1)},U=[],I={data:function(){return{}}},K=I,B=(n("e217"),Object(p["a"])(K,P,U,!1,null,null,null)),G=B.exports,W={components:{userGender:G}},J=W,H=(n("37c8"),Object(p["a"])(J,L,M,!1,null,null,null)),Q=H.exports,X=(n("c276"),{name:"index",components:{statistics:g,statisticsCharts:_,hotSearch:N,userPreference:Q},data:function(){return{visitType:"day",visitDate:[new Date,new Date]}},mounted:function(){},methods:{}}),Y=X,Z=(n("bbe4"),Object(p["a"])(Y,a,i,!1,null,null,null));e["default"]=Z.exports},facc:function(t,e,n){}}]);