(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0edbcb90"],{"47c6":function(e,t,n){},"4b65":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{attrs:{"label-width":80},nativeOn:{submit:function(e){e.preventDefault()}}},[n("FormItem",{attrs:{label:"协议名称："}},[n("Input",{model:{value:e.agreement.title,callback:function(t){e.$set(e.agreement,"title",t)},expression:"agreement.title"}})],1),n("FormItem",{attrs:{label:"协议内容："}},[n("vue-ueditor-wrap",{attrs:{config:e.ueConfig},model:{value:e.agreement.content,callback:function(t){e.$set(e.agreement,"content",t)},expression:"agreement.content"}})],1),n("FormItem",{attrs:{label:"开启状态："}},[n("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:e.agreement.status,callback:function(t){e.$set(e.agreement,"status",t)},expression:"agreement.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v("开启")]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v("关闭")])])],1),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:e.memberAgreementSave}},[e._v("保存")])],1)],1),e.spinShow?n("Spin",{attrs:{fix:""}}):e._e()],1)],1)},s=[],i=n("6872"),r=n.n(i),o=n("c24f"),c={components:{VueUeditorWrap:r.a},data:function(){return{ueConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},id:0,agreement:{title:"",content:"",status:1},spinShow:!1}},created:function(){this.memberAgreement()},methods:{memberAgreement:function(){var e=this;this.spinShow=!0,Object(o["m"])().then((function(t){e.spinShow=!1;var n=t.data,a=n.title,s=n.content,i=n.status,r=n.id;e.agreement.title=a,e.agreement.content=s,e.agreement.status=i,e.id=r})).catch((function(t){e.$Message.error(t),e.spinShow=!1}))},memberAgreementSave:function(){var e=this;this.$Spin.show(),Object(o["n"])(this.id,this.agreement).then((function(t){e.$Spin.hide(),e.$Message.success("保存成功"),e.memberAgreement()})).catch((function(t){e.$Spin.hide(),e.$Message.error(t)}))}}},l=c,u=(n("b1b5"),n("5d22")),m=Object(u["a"])(l,a,s,!1,null,"1edcdee2",null);t["default"]=m.exports},b1b5:function(e,t,n){"use strict";n("47c6")}}]);