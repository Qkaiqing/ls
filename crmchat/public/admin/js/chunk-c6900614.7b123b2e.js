(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6900614"],{"277f":function(t,n,i){"use strict";i.d(n,"c",(function(){return e}));var a=i("6b6c");function e(t){return Object(a["a"])({url:"setting/notification/save",method:"post",data:t})}},aa0a:function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"message"},[i("div",{staticClass:"i-layout-page-header"},[i("div",{staticClass:"i-layout-page-header"},[i("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))]),i("div",[i("Tabs",{on:{"on-click":t.changeTab},model:{value:t.currentTab,callback:function(n){t.currentTab=n},expression:"currentTab"}},t._l(t.headerList,(function(t,n){return i("TabPane",{key:n,attrs:{label:t.label,name:t.value.toString()}})})),1)],1)]),i("div",{staticClass:"table-box"},[i("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.levelLists,border:""},scopedSlots:t._u([{key:"name",fn:function(n){var a=n.row;n.index;return[i("span",{staticClass:"table"},[t._v("\n            "+t._s(a.name)+"\n          ")])]}},{key:"title",fn:function(n){var a=n.row;n.index;return[i("span",{staticClass:"table"},[t._v(t._s(a.title))])]}},t._l(["is_system","is_sms","is_wechat","is_routine","ent_wechat_id"],(function(n,a){return{key:n,fn:function(a){var e=a.row;a.index;return[e[n]>0?i("div",{staticClass:"is-table btn"},[i("div",{staticClass:"is-switch-close btn",class:{"is-switch":1==e[n]},on:{click:function(i){return t.changeStatus(n)}}},[t._v("\n              "+t._s(1==e[n]?"开启":"关闭")+"\n            ")]),i("div",{staticClass:"notice-list btn",on:{click:function(i){return t.notice(n)}}},[t._v("通知记录")]),i("div",{staticClass:"setting btn",on:{click:function(i){return t.setting(n,e)}}},[t._v("设置")])]):i("div",[t._v("--")])]}}})),{key:"setting",fn:function(n){var a=n.row;n.index;return[i("span",{staticClass:"setting btn",on:{click:function(n){return t.setting(t.item,a)}}},[t._v("设置")])]}}],null,!0)})],1)])])},e=[],s=i("277f"),c={data:function(){return{modalTitle:"",notificationModal:!1,headerList:[{label:"通知会员",value:"1"},{label:"通知平台",value:"2"}],columns:[{title:"ID",key:"id",align:"center",width:80},{title:"通知类型",slot:"name",align:"left",width:300},{title:"通知场景说明",slot:"title",minWidth:100},{title:"设置",slot:"setting",width:150,align:"center"}],levelLists:[],currentTab:"1",loading:!1,formData:{}}},created:function(){this.changeTab(this.currentTab)},methods:{changeTab:function(t){var n=this;Object(s["getNotificationList"])(t).then((function(t){n.levelLists=t.data}))},changeStatus:function(){},notice:function(){},setting:function(t,n){this.$router.push({path:"/admin/setting/notification/notificationEdit?id="+n.id})},getData:function(t,n,i){var a=this;this.formData={},Object(s["getNotificationInfo"])(n.id,i).then((function(n){t.map((function(t,i){a.formData[t]=n.data[t]})),a.formData.type=i,a.notificationModal=!0}))}}},o=c,l=(i("b39d"),i("5d22")),r=Object(l["a"])(o,a,e,!1,null,"e471d4ac",null);n["default"]=r.exports},b39d:function(t,n,i){"use strict";i("c2a1")},c2a1:function(t,n,i){}}]);