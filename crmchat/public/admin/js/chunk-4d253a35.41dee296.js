(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d253a35"],{"23cc":function(s,t,e){"use strict";e("3766")},"23fe":function(s,t,e){"use strict";e("4e66")},3766:function(s,t,e){},"46cf":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return s.activeUserInfo?e("div",{staticClass:"userBox"},[e("div",{staticClass:"user-header acea-row row-middle"},[e("div",{staticClass:"user-header-img mr20"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.activeUserInfo.avatar,expression:"activeUserInfo.avatar"}]})]),e("div",{staticClass:"user-header-name"},[e("span",{staticClass:"sp1 mr10",domProps:{textContent:s._s(s.activeUserInfo.nickname)}}),e("span",{staticClass:"sp2"},[s._v(s._s(s._f("sourceType")(s.$route.params.type)))])])]),e("div",{staticClass:"user-list"},[e("div",{staticClass:"acea-row item bgt"},[e("span",{staticClass:"sp1"},[s._v("用户标签")]),s.activeUserInfo.labelNames.length?e("div",{staticClass:"labelBox"},s._l(s.activeUserInfo.labelNames,(function(t,a){return e("span",{key:a,staticClass:"label"},[s._v(s._s(t))])})),0):e("span",{staticClass:"labelBox"},[s._v("无")]),e("span",{staticClass:"iconfontYI icon-up",on:{click:s.onShowLabel}})]),e("div",{staticClass:"acea-row item bgt"},[e("span",{staticClass:"sp1"},[s._v("手机号")]),e("span",{staticClass:"sp2",domProps:{textContent:s._s(s.activeUserInfo.phone||"无")}})]),e("div",{staticClass:"acea-row item"},[e("span",{staticClass:"sp1"},[s._v("分组")]),s.activeUserInfo.group_name?e("span",{staticClass:"checkName",domProps:{textContent:s._s(s.activeUserInfo.group_name)},on:{click:s.showName}}):e("span",{on:{click:s.showName}},[s._v("无")]),s.groupList.length?e("vue-pickers",{attrs:{data:s.groupList,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:s.pickerVisible},on:{confirm:s.confirm,"update:visible":function(t){s.pickerVisible=t}}}):s._e()],1)]),e("div",{staticClass:"user-list"},[e("div",{staticClass:"acea-row item bgt"},[e("span",{staticClass:"sp1"},[s._v("用户等级")]),e("span",{staticClass:"sp2",domProps:{textContent:s._s(s.activeUserInfo.level_name?s.activeUserInfo.level_name:"无")}})]),e("div",{staticClass:"acea-row item bgt"},[e("span",{staticClass:"sp1"},[s._v("用户类型")]),e("span",{staticClass:"sp2"},[s._v(s._s(s._f("userType")(s.activeUserInfo.user_type)))])]),e("div",{staticClass:"acea-row item bgt"},[e("span",{staticClass:"sp1"},[s._v("余额")]),e("span",{staticClass:"sp2",domProps:{textContent:s._s(s.activeUserInfo.now_money||"无")}})]),e("div",{staticClass:"acea-row item bgt"},[e("span",{staticClass:"sp1"},[s._v("推广员")]),e("span",{staticClass:"sp2",domProps:{textContent:s._s(1===s.activeUserInfo.is_promoter?"是":"否")}})]),e("div",{staticClass:"acea-row item"},[e("span",{staticClass:"sp1"},[s._v("生日")]),e("span",{staticClass:"sp2",domProps:{textContent:s._s(s.activeUserInfo.birthday||"无")}})])]),s.change?e("user-labels",{attrs:{change:s.change,labelList:s.labelList,uid:Number(s.$route.params.uid)},on:{cancel:s.cancel,editLabel:s.editLabel,closeChange:s.closeChange}}):s._e()],1):s._e()},i=[],n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"labelChange",class:!0===s.change?"on":""},[e("div",{staticClass:"priceTitle cor32"},[s._v("\n            用户标签\n            "),e("span",{staticClass:"iconfontYI icon-guanbi",on:{click:s.close}})]),e("div",{staticClass:"label-wrapper"},s._l(s.labelList,(function(t,a){return e("div",{key:a,staticClass:"label-box"},[e("div",{staticClass:"title"},[s._v(s._s(t.name))]),e("div",{staticClass:"list"},s._l(t.label,(function(t,a){return e("div",{key:a,staticClass:"label-item",class:{on:t.disabled},on:{click:function(e){return s.selectLabel(t)}}},[s._v(s._s(t.label_name))])})),0)])})),0),e("div",{staticClass:"footer"},[e("Button",{staticClass:"btn",attrs:{type:"primary"},on:{click:s.subBtn}},[s._v("确定")])],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:!0===s.change,expression:"change === true"}],staticClass:"maskModel",on:{touchmove:function(s){s.preventDefault()}}})])},c=[],o=(e("e680"),e("42e3")),l={name:"userLaber",props:{change:Boolean,uid:Number,labelList:{type:Array,default:function(){return[]}}},data:function(){return{activeIds:[]}},watch:{labelList:function(s){var t=this;s.map((function(s){s.label.map((function(s){s.disabled&&t.activeIds.push(s.id)}))}))}},methods:{selectLabel:function(s){if(s.disabled){var t=this.activeIds.indexOf(s.id);this.activeIds.splice(t,1),s.disabled=!1}else this.activeIds.push(s.id),s.disabled=!0},subBtn:function(){var s=this,t=[];this.labelList.map((function(s){s.label.map((function(s){0==s.disabled&&t.push(s.id)}))})),Object(o["X"])(this.uid,{label_ids:this.activeIds,un_label_ids:t}).then((function(t){s.$Message.success(t.msg),s.$emit("editLabel",!1)})).catch((function(t){s.$Message.error(t.msg)}))},close:function(){this.$emit("closeChange",!1)}}},r=l,u=(e("23fe"),e("d519"),e("5d22")),d=Object(u["a"])(r,n,c,!1,null,"4898f5ed",null),p=d.exports,v=e("c48b"),f=e.n(v),h={name:"index",components:{userLabels:p,vuePickers:f.a},data:function(){return{change:!1,activeUserInfo:"",pickerVisible:!1,groupList:[],labelList:[]}},mounted:function(){this.getGroup(),this.getUserInfo()},methods:{getList:function(){var s=this;Object(o["W"])(this.$route.params.uid).then((function(t){s.labelList=t.data||[],s.labelList.length?s.change=!0:s.$dialog.error("暂无标签")})).catch((function(t){s.$dialog.error(t.msg)}))},getUserInfo:function(){var s=this;Object(o["V"])(this.$route.params.uid).then((function(t){s.activeUserInfo=t.data})).catch((function(t){s.$dialog.error(t.msg)}))},getGroup:function(){var s=this,t={id:0,group_name:"无"};Object(o["U"])().then((function(e){e.data.unshift(t);var a=[];e.data.map((function(s){a.push({label:s.group_name,value:s.id})})),s.groupList=[a]})).catch((function(t){s.$dialog.error(t.msg)}))},editLabel:function(){this.change=!1,this.getUserInfo()},onShowLabel:function(){this.getList()},showName:function(){this.pickerVisible=!0},cancel:function(){},confirm:function(s){var t=this;Object(o["H"])(this.$route.params.uid,s[0].value).then((function(s){t.$Message.success(s.msg),t.getUserInfo()})).catch((function(s){t.$dialog.error(s.msg)}))},closeChange:function(s){this.change=s}}},m=h,b=(e("23cc"),Object(u["a"])(m,a,i,!1,null,"f852ea84",null));t["default"]=b.exports},"4e66":function(s,t,e){},d519:function(s,t,e){"use strict";e("e69d")},e69d:function(s,t,e){}}]);