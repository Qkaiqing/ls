(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acf03c1e"],{"246d":function(t,e,s){"use strict";s("6221")},3346:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("ul",t._l(t.list,(function(e,a){return s("li",{key:a,staticClass:"list-item ",attrs:{"data-type":"0"}},[s("div",{staticClass:"list-box",on:{"!touchstart":function(e){return t.touchStart.apply(null,arguments)},"!touchend":function(e){return t.touchEnd.apply(null,arguments)},click:t.skip}},[s("div",{staticClass:"list-content"},[t._t("default",null,{row:e})],2)]),s("div",{staticClass:"delete",attrs:{"data-index":a},on:{click:t.deleteItem}},[t._v("删除")])])})),0)])},n=[],i={props:{list:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{startX:0,endX:0}},methods:{skip:function(){},touchStart:function(t){this.startX=t.touches[0].clientX},touchEnd:function(t){var e=t.currentTarget.parentElement;this.endX=t.changedTouches[0].clientX,0==e.dataset.type&&this.startX-this.endX>30&&(this.restSlide(),e.dataset.type=1),1==e.dataset.type&&this.startX-this.endX<-30&&(this.restSlide(),e.dataset.type=0),this.startX=0,this.endX=0},checkSlide:function(){for(var t=document.querySelectorAll(".list-item"),e=0;e<t.length;e++)if(1==t[e].dataset.type)return!0;return!1},restSlide:function(){for(var t=document.querySelectorAll(".list-item"),e=0;e<t.length;e++)t[e].dataset.type=0},deleteItem:function(t){var e=t.currentTarget.dataset.index;this.restSlide(),this.list.splice(e,1)}}},c=i,r=(s("246d"),s("2877")),l=Object(r["a"])(c,a,n,!1,null,"2a48d7cd",null);e["a"]=l.exports},3959:function(t,e,s){},4795:function(t,e,s){t.exports=s.p+"img/head.cfd4b538.gif"},6221:function(t,e,s){},"77b6":function(t,e,s){"use strict";s("3959")},d6bc:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"addTag_container"},[t._m(0),s("div",{staticClass:"tag_title"},[t._v("\n    标签名称\n  ")]),t._m(1),s("div",{staticClass:"tag_title"},[t._v("\n    标签成员\n  ")]),t._m(2),s("div",{staticClass:"addTag_container_user"},t._l(t.orderByList,(function(e,a){return s("div",{key:a,staticClass:"addTag_container_user_view"},[s("div",{staticClass:"addTag_container_user_view_orderby"},[t._v(t._s(e.byIndex))]),s("tag-content",{attrs:{list:e.classFly},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"user_message"},[s("div",{staticClass:"user_message_area"},[s("img",{attrs:{src:e.row.image,alt:""}})]),s("div",{staticClass:"user_message_niceName"},[t._v("\n              "+t._s(e.row.nickName)+"\n            ")])])]}}],null,!0)})],1)})),0)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"addTag_container_header"},[s("div",{staticClass:"header_cancel"},[t._v("取消")]),s("div",{staticClass:"header_title"},[t._v("新建标签")]),s("div",{staticClass:"header_finish"},[t._v("完成")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag_name_content"},[s("div",{staticClass:"input_box"},[s("input",{attrs:{type:"text"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag_name_content add_user"},[s("div",{staticClass:"iconfont"},[t._v("icon")]),s("div",{staticClass:"tag_name_content_message"},[t._v("添加成员")])])}],i=s("3346"),c={components:{tagContent:i["a"]},data:function(){return{orderByList:[{byIndex:"A",classFly:[{image:s("4795"),nickName:"剃头小公举"}]},{byIndex:"B",classFly:[{image:s("4795"),nickName:"剃头小公举"}]}]}}},r=c,l=(s("77b6"),s("2877")),d=Object(l["a"])(r,a,n,!1,null,"07e7beaf",null);e["default"]=d.exports}}]);