(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9c74a8c"],{"14fa":function(e,t,n){!function(e,i){i(t,n("430a"))}(0,(function(e,t){"use strict";function n(e,t,n){document.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,n)}function i(e,t,n){document.addEventListener?e.removeEventListener(t,n):e.detachEvent("on"+t,n)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t={exports:{}},e(t,t.exports),t.exports}function s(){var e={},t=0,n=0,i=0;return{add:function(o,r){r||(r=o,o=0),o>n?n=o:o<i&&(i=o),e[o]||(e[o]=[]),e[o].push(r),t++},process:function(){for(var t=i;t<=n;t++)for(var o=e[t],r=0;r<o.length;r++)(0,o[r])()},size:function(){return t}}}function a(e){return e[D]}function c(e){return Array.isArray(e)||void 0!==e.length}function l(e){if(Array.isArray(e))return e;var t=[];return $(e,(function(e){t.push(e)})),t}function u(e){return e&&1===e.nodeType}function d(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}t=t&&t.hasOwnProperty("default")?t.default:t;var h=function(e){var t=Date.now();return function(n){if(n-t>(e||14))return t=n,!0}},f=function(e,t,n){var i,o,r,s,a,c=function c(){var l=(new Date).getTime()-s;l<t&&l>=0?i=setTimeout(c,t-l):(i=null,n||(a=e.apply(r,o),i||(r=o=null)))};return function(){r=this,o=arguments,s=(new Date).getTime();var l=n&&!i;return i||(i=setTimeout(c,t)),l&&(a=e.apply(r,o),r=o=null),a}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"stripContainer",staticClass:"happy-scroll-strip",class:[e.horizontal?"happy-scroll-strip--horizontal":"happy-scroll-strip--vertical"],style:[e.initLocation],on:{"!wheel":function(t){return t.stopPropagation(),e.handlerWheel(t)}}},[n("div",{ref:"strip",staticClass:"happy-scroll-bar",style:[e.translate,o({},e.config.sizeAttr,e.length+"px"),e.initSize,{background:e.color},{opacity:e.isOpacity}],on:{mousedown:function(t){return t.stopPropagation(),e.handlerMouseDown(t)}}})])},staticRenderFns:[],name:"happy-scroll-strip",props:{horizontal:Boolean,left:Boolean,top:Boolean,move:{type:Number,default:0},size:{type:[Number,String],default:4},minLengthV:{type:Number,default:40},minLengthH:{type:Number,default:40},color:{type:String,default:"rgba(51,51,51,0.2)"},throttle:{type:Number,default:14}},data:function(){return{config:{},startMove:!1,binded:!1,length:0,percentage:0,maxOffset:0,currentOffset:0,moveThrottle:h(this.throttle)}},watch:{currentOffset:function(e){0===e?this.emitLocationEvent("start",0):e===this.maxOffset&&this.emitLocationEvent("end",e/this.percentage)}},computed:{initSize:function(){return o({},this.horizontal?"height":"width",this.size+"px")},isOpacity:function(){return this.percentage<1?1:0},translate:function(){var e=this.move*this.percentage;if(this.$refs.stripContainer)return e<0&&(e=0),e>this.maxOffset&&(e=this.maxOffset),this.currentOffset=e,{transform:this.config.translate+"("+e+"px)"}},initLocation:function(){return this.horizontal?this.top?{top:0,bottom:"auto"}:"":this.left?{left:0,right:"auto"}:""}},methods:{emitLocationEvent:function(e,t){var n=this.horizontal?"horizontal":"vertical";this.$emit(n+"-"+e,t)},computeStrip:function(e,t){var n=this.$refs.stripContainer[this.config.client];this.length=n*(t/e);var i=this.horizontal?this.minLengthH:this.minLengthV;i<1&&(i*=n),this.length=this.length<i?i:this.length;var o=this.maxOffset=n-this.length;this.percentage=o/(e-t)},bindEvents:function(){this.binded||(n(document,"mouseup",this.handlerMouseUp),n(document,"mousemove",this.handlerMove),this.binded=!0)},handlerMouseDown:function(e){if(0===e.button)return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.startMove=!0,this.axis=e[this.config.clientAxis],this.bindEvents(),!1},handlerMouseUp:function(){this.startMove=!1},handlerMove:function(e){if(this.startMove&&this.moveThrottle(Date.now())){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();var t=this.$refs.stripContainer.getBoundingClientRect(),n=this.$refs.strip.getBoundingClientRect()[this.config.direction]-t[this.config.direction],i=e[this.config.clientAxis]-this.axis+n;this.axis=e[this.config.clientAxis],this.changeOffset(i)}},handlerWheel:function(e){var t=this.$refs.stripContainer.getBoundingClientRect(),n=this.$refs.strip.getBoundingClientRect()[this.config.direction]-t[this.config.direction]+e[this.config.wheelDelta];this.changeOffset(n,e)},changeOffset:function(e,t){e<0&&(e=0),e>this.maxOffset&&(e=this.maxOffset),t&&e>0&&e<this.maxOffset&&(t.preventDefault(),t.stopImmediatePropagation()),this.currentOffset=e,this.$refs.strip.style.transform=this.config.translate+"("+e+"px)",this.$emit("change",e/this.percentage)}},created:function(){var e={h:{sizeAttr:"width",client:"clientWidth",clientAxis:"clientX",translate:"translateX",direction:"left",wheelDelta:"deltaX"},v:{sizeAttr:"height",client:"clientHeight",clientAxis:"clientY",translate:"translateY",direction:"top",wheelDelta:"deltaY"}};this.config=this.horizontal?e.h:e.v},destroyed:function(){i(document,"mouseup",this.handlerClickUp),i(document,"mousemove",this.handlerMove)}},m=r((function(e){(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}})),g=function(e){var t=e.stateHandler.getState;return{isDetectable:function(e){var n=t(e);return n&&!!n.isDetectable},markAsDetectable:function(e){t(e).isDetectable=!0},isBusy:function(e){return!!t(e).busy},markBusy:function(e,n){t(e).busy=!!n}}},v=function(e){function t(t){var i=e.get(t);return void 0===i?[]:n[i]||[]}var n={};return{get:t,add:function(t,i){var o=e.get(t);n[o]||(n[o]=[]),n[o].push(i)},removeListener:function(e,n){for(var i=t(e),o=0,r=i.length;o<r;++o)if(i[o]===n){i.splice(o,1);break}},removeAllListeners:function(e){var n=t(e);n&&(n.length=0)}}},y=function(){var e=1;return{generate:function(){return e++}}},b=function(e){var t=e.idGenerator,n=e.stateHandler.getState;return{get:function(e){var t=n(e);return t&&void 0!==t.id?t.id:null},set:function(e){var i=n(e);if(!i)throw new Error("setId required the element to have a resize detection state.");var o=t.generate();return i.id=o,o}}},S=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n},w=r((function(e){var t=e.exports={};t.isIE=function(e){return!!function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}()&&(!e||e===function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}())},t.isLegacyOpera=function(){return!!window.opera}})),_=r((function(e){(e.exports={}).getOption=function(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}})),x=function(e){function t(){for(d=!0;u.size();){var e=u;u=s(),e.process()}d=!1}function n(){l=o(t)}function i(e){return clearTimeout(e)}function o(e){return function(e){return setTimeout(e,0)}(e)}var r=(e=e||{}).reporter,a=_.getOption(e,"async",!0),c=_.getOption(e,"auto",!0);c&&!a&&(r&&r.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),a=!0);var l,u=s(),d=!1;return{add:function(e,t){!d&&c&&a&&0===u.size()&&n(),u.add(e,t)},force:function(e){d||(void 0===e&&(e=a),l&&(i(l),l=null),e?n():t())}}},D="_erd",E={initState:function(e){return e[D]={},a(e)},getState:a,cleanState:function(e){delete e[D]}},z=function(e){function t(e){return o(e).object}var n=(e=e||{}).reporter,i=e.batchProcessor,o=e.stateHandler.getState;if(!n)throw new Error("Missing required dependency: reporter.");return{makeDetectable:function(e,t,r){r||(r=t,t=e,e=null),e=e||{},w.isIE(8)?r(t):function(e,t){function r(){function i(){if("static"===c.position){e.style.position="relative";var t=function(e,t,n,i){var o=n[i];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};t(n,e,c,"top"),t(n,e,c,"right"),t(n,e,c,"bottom"),t(n,e,c,"left")}}""!==c.position&&(i(c),a=!0);var r=document.createElement("object");r.style.cssText=s,r.tabIndex=-1,r.type="text/html",r.onload=function(){function n(e,t){e.contentDocument?t(e.contentDocument):setTimeout((function(){n(e,t)}),100)}a||i(),n(this,(function(n){t(e)}))},w.isIE()||(r.data="about:blank"),e.appendChild(r),o(e).object=r,w.isIE()&&(r.data="about:blank")}var s="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",a=!1,c=window.getComputedStyle(e),l=e.offsetWidth,u=e.offsetHeight;o(e).startSize={width:l,height:u},i?i.add(r):r()}(t,r)},addListener:function(e,n){function i(){n(e)}if(!t(e))throw new Error("Element is not detectable by this strategy.");w.isIE(8)?(o(e).object={proxy:i},e.attachEvent("onresize",i)):t(e).contentDocument.defaultView.addEventListener("resize",i)},uninstall:function(e){w.isIE(8)?e.detachEvent("onresize",o(e).object.proxy):e.removeChild(t(e)),delete o(e).object}}},k=m.forEach,L=function(e){function t(e){e.className+=" "+d+"_animation_active"}function n(e,t,n){if(e.addEventListener)e.addEventListener(t,n);else{if(!e.attachEvent)return s.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+t,n)}}function i(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n);else{if(!e.detachEvent)return s.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+t,n)}}function o(e){return c(e).container.childNodes[0].childNodes[0].childNodes[0]}function r(e){return c(e).container.childNodes[0].childNodes[0].childNodes[1]}var s=(e=e||{}).reporter,a=e.batchProcessor,c=e.stateHandler.getState,l=e.idHandler;if(!a)throw new Error("Missing required dependency: batchProcessor");if(!s)throw new Error("Missing required dependency: reporter.");var u=function(){var e=document.createElement("div");e.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var t=document.createElement("div");t.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,i=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:i}}(),d="erd_scroll_detection_container";return function(e,t){if(!document.getElementById(e)){var n=t+"_animation",i="/* Created by the element-resize-detector library. */\n";i+="."+t+" > div::-webkit-scrollbar { display: none; }\n\n",i+="."+t+"_animation_active { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",i+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",function(t,n){n=n||function(e){document.head.appendChild(e)};var i=document.createElement("style");i.innerHTML=t,i.id=e,n(i)}(i+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}}("erd_scroll_detection_scrollbar_style",d),{makeDetectable:function(e,i,h){function f(){if(e.debug){var t=Array.prototype.slice.call(arguments);if(t.unshift(l.get(i),"Scroll: "),s.log.apply)s.log.apply(null,t);else for(var n=0;n<t.length;n++)s.log(t[n])}}function p(e){var t=c(e).container.childNodes[0],n=getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function m(){var e=getComputedStyle(i),t={};return t.position=e.position,t.width=i.offsetWidth,t.height=i.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function g(){var e=m();c(i).startSize={width:e.width,height:e.height},f("Element start size",c(i).startSize)}function v(){c(i).listeners=[]}function y(){if(f("storeStyle invoked."),c(i)){var e=m();c(i).style=e}else f("Aborting because element has been uninstalled")}function b(e,t,n){c(e).lastWidth=t,c(e).lastHeight=n}function S(e){return o(e).childNodes[0]}function w(){return 2*u.width+1}function _(){return 2*u.height+1}function x(e){return e+10+w()}function D(e){return e+10+_()}function E(e){return 2*e+w()}function z(e){return 2*e+_()}function L(e,t,n){var i=o(e),s=r(e),a=x(t),c=D(n),l=E(t),u=z(n);i.scrollLeft=a,i.scrollTop=c,s.scrollLeft=l,s.scrollTop=u}function $(){var e=c(i).container;if(!e){(e=document.createElement("div")).className=d,e.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",c(i).container=e,t(e),i.appendChild(e);var o=function(){c(i).onRendered&&c(i).onRendered()};n(e,"animationstart",o),c(i).onAnimationStart=o}return e}function M(){function e(){c(i).onExpand&&c(i).onExpand()}function t(){c(i).onShrink&&c(i).onShrink()}if(f("Injecting elements"),c(i)){!function(){var e=c(i).style;if("static"===e.position){i.style.position="relative";var t=function(e,t,n,i){var o=n[i];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};t(s,i,e,"top"),t(s,i,e,"right"),t(s,i,e,"bottom"),t(s,i,e,"left")}}();var o=c(i).container;o||(o=$());var r=u.width,a=u.height,l="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(e,t,n,i){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0","left: "+e+"; top: "+t+"; right: "+i+"; bottom: "+n+";"}(-(1+r),-(1+a),-a,-r),h=document.createElement("div"),p=document.createElement("div"),m=document.createElement("div"),g=document.createElement("div"),v=document.createElement("div"),y=document.createElement("div");h.dir="ltr",h.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",h.className=d,p.className=d,p.style.cssText=l,m.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",g.style.cssText="position: absolute; left: 0; top: 0;",v.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",y.style.cssText="position: absolute; width: 200%; height: 200%;",m.appendChild(g),v.appendChild(y),p.appendChild(m),p.appendChild(v),h.appendChild(p),o.appendChild(h),n(m,"scroll",e),n(v,"scroll",t),c(i).onExpandScroll=e,c(i).onShrinkScroll=t}else f("Aborting because element has been uninstalled")}function T(){function t(e,t,n){var i=S(e),o=x(t),r=D(n);i.style.width=o+"px",i.style.height=r+"px"}function n(n){var o=i.offsetWidth,r=i.offsetHeight;f("Storing current size",o,r),b(i,o,r),a.add(0,(function(){if(c(i))if(u()){if(e.debug){var n=i.offsetWidth,a=i.offsetHeight;n===o&&a===r||s.warn(l.get(i),"Scroll: Size changed before updating detector elements.")}t(i,o,r)}else f("Aborting because element container has not been initialized");else f("Aborting because element has been uninstalled")})),a.add(1,(function(){c(i)?u()?L(i,o,r):f("Aborting because element container has not been initialized"):f("Aborting because element has been uninstalled")})),n&&a.add(2,(function(){c(i)?u()?n():f("Aborting because element container has not been initialized"):f("Aborting because element has been uninstalled")}))}function u(){return!!c(i).container}function d(){f("notifyListenersIfNeeded invoked");var e=c(i);return void 0===c(i).lastNotifiedWidth&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?f("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?f("Not notifying: Size already notified"):(f("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void k(c(i).listeners,(function(e){e(i)})))}function h(){if(f("Scroll detected."),p(i))f("Scroll event fired while unrendered. Ignoring...");else{var e=i.offsetWidth,t=i.offsetHeight;e!==i.lastWidth||t!==i.lastHeight?(f("Element size changed."),n(d)):f("Element size has not changed ("+e+"x"+t+").")}}if(f("registerListenersAndPositionElements invoked."),c(i)){c(i).onRendered=function(){if(f("startanimation triggered."),p(i))f("Ignoring since element is still unrendered...");else{f("Element rendered.");var e=o(i),t=r(i);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(f("Scrollbars out of sync. Updating detector elements..."),n(d))}},c(i).onExpand=h,c(i).onShrink=h;var m=c(i).style;t(i,m.width,m.height)}else f("Aborting because element has been uninstalled")}function C(){if(f("finalizeDomMutation invoked."),c(i)){var e=c(i).style;b(i,e.width,e.height),L(i,e.width,e.height)}else f("Aborting because element has been uninstalled")}function O(){h(i)}function H(){f("Installing..."),v(),g(),a.add(0,y),a.add(1,M),a.add(2,T),a.add(3,C),a.add(4,O)}h||(h=i,i=e,e=null),e=e||{},f("Making detectable..."),function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===getComputedStyle(e)}(i)?(f("Element is detached"),$(),f("Waiting until element is attached..."),c(i).onRendered=function(){f("Element is now attached"),H()}):H()},addListener:function(e,t){if(!c(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");c(e).listeners.push(t)},uninstall:function(e){var t=c(e);t&&(t.onExpandScroll&&i(o(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&i(r(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&i(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}}},$=m.forEach,M=function(e){var t;if((e=e||{}).idHandler)t={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var n=y(),i=b({idGenerator:n,stateHandler:E});t=i}var o=e.reporter;o||(o=S(!1===o));var r=d(e,"batchProcessor",x({reporter:o})),s={};s.callOnAdd=!!d(e,"callOnAdd",!0),s.debug=!!d(e,"debug",!1);var a,h=v(t),f=g({stateHandler:E}),p=d(e,"strategy","object"),m={reporter:o,batchProcessor:r,stateHandler:E,idHandler:t};if("scroll"===p&&(w.isLegacyOpera()?(o.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),p="object"):w.isIE(9)&&(o.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),p="object")),"scroll"===p)a=L(m);else{if("object"!==p)throw new Error("Invalid strategy name: "+p);a=z(m)}var _={};return{listenTo:function(e,n,i){function r(e){var t=h.get(e);$(t,(function(t){t(e)}))}function p(e,t,n){h.add(t,n),e&&n(t)}if(i||(i=n,n=e,e={}),!n)throw new Error("At least one element required.");if(!i)throw new Error("Listener required.");if(u(n))n=[n];else{if(!c(n))return o.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=l(n)}var m=0,g=d(e,"callOnAdd",s.callOnAdd),v=d(e,"onReady",(function(){})),y=d(e,"debug",s.debug);$(n,(function(e){E.getState(e)||(E.initState(e),t.set(e));var s=t.get(e);if(y&&o.log("Attaching listener to element",s,e),!f.isDetectable(e))return y&&o.log(s,"Not detectable."),f.isBusy(e)?(y&&o.log(s,"System busy making it detectable"),p(g,e,i),_[s]=_[s]||[],void _[s].push((function(){++m===n.length&&v()}))):(y&&o.log(s,"Making detectable..."),f.markBusy(e,!0),a.makeDetectable({debug:y},e,(function(e){if(y&&o.log(s,"onElementDetectable"),E.getState(e)){f.markAsDetectable(e),f.markBusy(e,!1),a.addListener(e,r),p(g,e,i);var t=E.getState(e);if(t&&t.startSize){var c=e.offsetWidth,l=e.offsetHeight;t.startSize.width===c&&t.startSize.height===l||r(e)}_[s]&&$(_[s],(function(e){e()}))}else y&&o.log(s,"Element uninstalled before being detectable.");delete _[s],++m===n.length&&v()})));y&&o.log(s,"Already detecable, adding listener."),p(g,e,i),m++})),m===n.length&&v()},removeListener:h.removeListener,removeAllListeners:h.removeAllListeners,uninstall:function(e){if(!e)return o.error("At least one element is required.");if(u(e))e=[e];else{if(!c(e))return o.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=l(e)}$(e,(function(e){h.removeAllListeners(e),a.uninstall(e),E.cleanState(e)}))}}},T=t;"undefined"!=typeof window&&window.Vue&&(T=window.Vue);var C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"happy-scroll",staticClass:"happy-scroll"},[n("div",{ref:"container",staticClass:"happy-scroll-container",style:[e.initSize],on:{scroll:function(t){return t.stopPropagation(),e.onScroll(t)}}},[n("div",{ref:"content",staticClass:"happy-scroll-content",style:[e.contentBorderStyle]},[e._t("default")],2)]),e.hideVertical?e._e():n("happy-scroll-strip",e._g(e._b({ref:"stripY",attrs:{throttle:e.throttle,move:e.moveY},on:{change:e.slideYChange}},"happy-scroll-strip",e.$attrs,!1),e.$listeners)),e.hideHorizontal?e._e():n("happy-scroll-strip",e._g(e._b({ref:"stripX",attrs:{horizontal:"",throttle:e.throttle,move:e.moveX},on:{change:e.slideXChange}},"happy-scroll-strip",e.$attrs,!1),e.$listeners))],1)},staticRenderFns:[],name:"happy-scroll",inheritAttrs:!1,components:{HappyScrollStrip:p},props:{scrollTop:{type:[Number,String],default:0},scrollLeft:{type:[Number,String],default:0},hideVertical:Boolean,hideHorizontal:Boolean,throttle:{type:Number,default:14},resize:Boolean,smallerMoveH:{type:String,default:""},smallerMoveV:{type:String,default:""},biggerMoveH:{type:String,default:""},biggerMoveV:{type:String,default:""}},data:function(){return{initSize:{},moveX:+this.scrollLeft,moveY:+this.scrollTop,scrollThrottle:h(this.throttle),browserHSize:0,browserVSize:0,isScrollNotUseSpace:void 0}},watch:{scrollTop:function(e){this.$refs.container.scrollTop=this.moveY=+e},scrollLeft:function(e){this.$refs.container.scrollLeft=this.moveX=+e},hideVertical:function(e){e||this.$nextTick(this.computeStripY)},hideHorizontal:function(e){e||this.$nextTick(this.computeStripX)}},computed:{contentBorderStyle:function(){return void 0===this.isScrollNotUseSpace?{}:{"border-right":20-this.browserHSize+"px solid transparent","border-bottom":20-this.browserVSize+"px solid transparent"}}},methods:{slideYChange:function(e){this.$refs.container.scrollTop=e,this.$emit("update:scrollTop",this.$refs.container.scrollTop)},slideXChange:function(e){this.$refs.container.scrollLeft=e,this.$emit("update:scrollLeft",this.$refs.container.scrollLeft)},onScroll:function(e){if(!this.scrollThrottle(Date.now()))return!1;this.moveY=e.target.scrollTop,this.moveX=e.target.scrollLeft,this.updateSyncScroll()},initBrowserSize:function(){void 0!==this.isScrollNotUseSpace&&(!0===this.isScrollNotUseSpace?(this.browserHSize=0,this.browserVSize=0):(this.browserHSize=this.$refs.container.offsetWidth-this.$refs.container.clientWidth,this.browserVSize=this.$refs.container.offsetHeight-this.$refs.container.clientHeight))},computeStripX:function(){if(!this.hideHorizontal){var e=this.$refs["happy-scroll"],t=this.$slots.default[0].elm;this.$refs.stripX.computeStrip(t.scrollWidth,e.clientWidth)}},computeStripY:function(){if(!this.hideVertical){var e=this.$refs["happy-scroll"],t=this.$slots.default[0].elm;this.$refs.stripY.computeStrip(t.scrollHeight,e.clientHeight)}},resizeListener:function(){var e=this;if(this.resize){var t=M({strategy:"scroll",callOnAdd:!1}),n=this.$slots.default[0].elm,i=n.clientHeight,o=n.clientWidth;t.listenTo(n,(function(t){e.computeStripX(),e.computeStripY(),e.initBrowserSize();var n=void 0;t.clientHeight<i&&(n=e.smallerMoveH.toLocaleLowerCase()),t.clientHeight>i&&(n=e.biggerMoveH.toLocaleLowerCase()),"start"===n&&(e.moveY=0,e.slideYChange(e.moveY)),"end"===n&&(e.moveY=t.clientHeight,e.slideYChange(e.moveY)),i=t.clientHeight,n="",t.clientWidth<o&&(n=e.smallerMoveV.toLocaleLowerCase()),t.clientWidth>o&&(n=e.biggerMoveV.toLocaleLowerCase()),"start"===n&&(e.moveX=0,e.slideXChange(e.moveX)),"end"===n&&(e.moveX=t.clientWidth,e.slideXChange(e.moveX)),o=t.clientWidth}))}},setContainerSize:function(){this.initSize={width:this.$refs["happy-scroll"].clientWidth+20+"px",height:this.$refs["happy-scroll"].clientHeight+20+"px"}},checkScrollMode:function(){if(void 0===T._happyJS._isScrollNotUseSpace){var e=this.$slots.default[0].elm,t=this.$refs.container;(e.offsetHeight>t.clientHeight||e.offsetWidth>t.clientWidth)&&(t.offsetWidth>t.clientWidth||t.offsetHeight>t.clientHeight?T._happyJS._isScrollNotUseSpace=!1:T._happyJS._isScrollNotUseSpace=!0,this.isScrollNotUseSpace=T._happyJS._isScrollNotUseSpace)}}},beforeCreate:function(){var e=T._happyJS=T._happyJS||{};this.isScrollNotUseSpace=e._isScrollNotUseSpace},created:function(){this.updateSyncScroll=f((function(){this.$emit("update:scrollTop",this.moveY),this.$emit("update:scrollLeft",this.moveX)}),this.throttle)},mounted:function(){var e=this;this.setContainerSize(),this.$nextTick((function(){e.computeStripX(),e.computeStripY(),e.checkScrollMode(),e.initBrowserSize(),e.$nextTick((function(){e.scrollTop&&(e.$refs.container.scrollTop=+e.scrollTop),e.scrollLeft&&(e.$refs.container.scrollLeft=+e.scrollLeft)}))})),this.resizeListener(),this.$watch("browserHSize",this.setContainerSize),this.$watch("browserVSize",this.setContainerSize)}};"undefined"!=typeof window&&window.Vue&&Vue.component("happy-scroll",C);var O={install:function(e){e.component("happy-scroll",C)},version:"2.1.1"};e.default=O,e.HappyScroll=C,e.version="2.1.1",Object.defineProperty(e,"__esModule",{value:!0})}))},"16b0":function(e,t,n){e.exports=n.p+"media/notice.51a07ae7.wav"},7624:function(e,t,n){"use strict";t["a"]=["em-smile","em-laughing","em-blush","em-smiley","em-relaxed","em-smirk","em-heart_eyes","em-kissing_heart","em-kissing_closed_eyes","em-flushed","em-relieved","em-satisfied","em-grin","em-wink","em-stuck_out_tongue_winking_eye","em-stuck_out_tongue_closed_eyes","em-grinning","em-kissing","em-kissing_smiling_eyes","em-stuck_out_tongue","em-sleeping","em-worried","em-frowning","em-anguished","em-open_mouth","em-grimacing","em-confused","em-hushed","em-expressionless","em-unamused","em-sweat_smile","em-sweat","em-disappointed_relieved","em-weary","em-pensive","em-disappointed","em-confounded","em-fearful","em-cold_sweat","em-persevere","em-cry","em-sob","em-joy","em-astonished","em-scream","em-tired_face","em-angry","em-rage","em-triumph","em-sleepy","em-yum","em-mask","em-sunglasses","em-dizzy_face","em-imp","em-smiling_imp","em-neutral_face","em-no_mouth","em-innocent","em-alien"]},c58a:function(e,t,n){"use strict";n("8dee"),n("32ea"),n("1bc7");var i=n("49ea"),o=n("42e3"),r=n("c276"),s=(n("e04f"),n("16b0"));t["a"]={data:function(){return{mp3:new Audio(s),inputConType:1,userMessage:"",chatServerData:{avatar:"",nickname:"",site_name:"",user_id:"",to_user_avatar:"",to_user_id:"",to_user_nickname:"",uid:"",serviceList:[]},upperStrataData:{},upperData:{},unreadMessages:"",userKey:"",productMessage:{},isShowProductModel:!1,copyFile:"",unReadMesage:0,advertisement:""}},directives:{paste:{bind:function(e,t,n){e.addEventListener("paste",(function(e){t.value(e)}))}}},created:function(){var e=this;this.upperData=this.$route.query,this.upperData.token!=Object(r["f"])("mobile_token")&&Object(r["s"])("mobile_token",this.upperData.token),Object.keys(this.upperData).forEach((function(t){e.upperData[t]&&Object(r["s"])(t,e.upperData[t])})),this.getUserRecord(),window.addEventListener("message",(function(t){"getImgOrText"==t.data.type&&(e.userKey=t.data.key,t.data.productInfo&&(e.productMessage=t.data.productInfo)),"openCustomeServer"==t.data.type&&e.bus.pageWs.then((function(t){t.send({type:"to_chat",data:{id:e.chatServerData.to_user_id}}),e.unReadMesage&&e.getUserRecord()})),"closeCustomeServer"==t.data.type&&e.bus.pageWs.then((function(e){e.send({type:"to_chat",data:{id:0}})}))})),this.getServiceAdv()},watch:{productMessage:{handler:function(e,t){JSON.stringify(e)!=JSON.stringify(t)&&(this.isShowProductModel=!0,this.goPageBottom())},deep:!0}},methods:{getServiceAdv:function(){var e=this;Object(o["H"])().then((function(t){200==t.status&&(e.advertisement=t.data.content)}))},getUserRecord:function(){var e=this,t={uid:this.upperData.uid||Object(r["f"])("uid")||0,limit:20,nickname:this.upperData.nickName,phone:this.upperData.phone,sex:this.upperData.sex,avatar:this.upperData.avatar,openid:this.upperData.openid,kefu_id:this.upperData.kefu_id||0,type:"Mobile"==this.upperData.deviceType?"3":"0"};Object(o["Y"])(t).then((function(t){if(200==t.status){e.chatServerData=t.data,console.log(e.chatServerData),e.$nextTick((function(){e.happyScroll=!e.happyScroll})),e.unReadMesage=0,e.goPageBottom();var n={nickname:"",uid:"",avatar:""};1==t.data.is_tourist&&Object.keys(n).forEach((function(e){Object(r["s"])(e,Object(r["f"])(e)?Object(r["f"])(e):t.data[e])})),e.goPageBottom(),document.title=t.data.to_user_nickname?"正在和".concat(t.data.to_user_nickname,"对话中 - ").concat(e.chatServerData.site_name):"正在和游客对话中 - "+e.chatServerData.site_name,e.connentServer()}400==t.status&&e.$router.push({name:"customerOutLine",query:e.$route.query})})).catch((function(t){400==t.status&&e.$router.push({name:"customerOutLine",query:e.$route.query})}))},connentServer:function(){var e=this,t=Object(r["f"])("mobile_token"),n="Mobile"==this.upperData.deviceType?"h5":"pc";this.bus.pageWs=Object(i["b"])(!0,t,n),this.bus.pageWs.then((function(t){t.$on(["reply","chat"],(function(t){e.chatServerData.serviceList.push(t),e.userMessage="",e.goPageBottom()})),t.$on("reply",(function(t){e.mp3.play()})),t.$on("success",(function(t){e.bus.pageWs.then((function(t){t.send({type:"user",data:{to_user_id:e.upperData.isShowTip?0:e.chatServerData.to_user_id,uid:e.chatServerData.uid,nickname:e.chatServerData.nickname,avatar:e.chatServerData.avatar,phone:e.userMessage.phone?e.userMessage.phone:e.chatServerData.phone,openid:e.upperData.openid,type:"Mobile"==e.upperData.deviceType?"3":"0"}})}))})),t.$on("mssage_num",(function(t){t.num>0&&(e.mp3.play(),e.unReadMesage=t.num),parent.postMessage({type:"message_num",num:t.num},"*")}))}))},goPageBottom:function(){var e=this;this.$nextTick((function(){e.scrollTop=document.querySelector("#chat_scroll").offsetHeight}))},sendProduct:function(){var e=this;this.bus.pageWs.then((function(t){t.send({type:"chat",data:{to_user_id:e.chatServerData.to_user_id,uid:e.chatServerData.uid,type:5,other:e.productMessage}})})),this.isShowProductModel=!1,this.goPageBottom()},handleParse:function(e){console.log(e);var t=null;e.clipboardData&&e.clipboardData.items[0]&&e.clipboardData.items[0].type&&e.clipboardData.items[0].type.indexOf("image")>-1?(t=e.clipboardData.items[0].getAsFile(),this.update(t)):this.$message({type:"warning",message:"上传的文件必须为图片且无法复制本地图片且无法同时复制多张图片"})},update:function(e){var t=this,n=e,i=new FormData;i.append("filename","file"),i.append("file",n),Object(o["P"])(i).then((function(e){200==e.status&&(t.sendMsg(e.data.url,3),t.$refs["inputDiv"].innerText="")}))},select:function(e){"Mobile"==this.$route.query.deviceType?this.userMessage+="[".concat(e,"]"):(this.inputConType=1,this.$refs["inputDiv"].innerText+="[".concat(e,"]"))},sendText:function(){var e;e=this.$refs["inputDiv"]?this.$refs["inputDiv"].innerText.replace(/(↵)/g,"\n"):this.userMessage,e?(this.sendMsg(e,1),this.$refs["inputDiv"]?this.$refs["inputDiv"].innerText="":this.userMessage=""):this.$Message.error("请先输入信息，在进行发送")},sendMsg:function(e,t,n){var i={data:{msn:e,type:t,to_user_id:this.chatServerData.to_user_id,is_tourist:0},type:"chat"};this.bus.pageWs.then((function(e){e.send(i)}))},scrollHandler:function(e){var t=this;this.isLoad=!0,Object(o["Y"])({limit:20,uid:this.chatServerData.uid,idTo:this.chatServerData.serviceList?this.chatServerData.serviceList[0].id:"",toUserId:this.chatServerData.to_user_id}).then((function(e){200==e.status&&e.data.serviceList.reverse().forEach((function(e){t.chatServerData.serviceList.unshift(e)})),t.isLoad=!1}))},closeIframe:function(){parent.postMessage({type:"closeWindow"},"*"),this.bus.pageWs.then((function(e){e.send({type:"to_chat",data:{id:0}})}))},textareaInput:function(){this.inputConType=1},selectEmoji:function(){this.inputConType=2,this.goPageBottom()},uploadFile:function(e){var t=this,n={filename:"file",file:e.target.files[0]},i=new FormData;Object.keys(n).forEach((function(e){i.append(e,n[e])})),Object(o["P"])(i).then((function(e){200==e.status&&t.sendMsg(e.data.url,3)})).catch((function(e){console.log(e),t.$Message.error(e.msg)}))},setSession:function(e,t){window.opener&&Object.getOwnPropertyNames(window.opener).length>0?window.opener.sessionStorage.setItem(e,t):sessionStorage.setItem(e,t)},getSession:function(e){return window.opener&&Object.getOwnPropertyNames(window.opener).length>0?window.opener.sessionStorage.getItem(e):sessionStorage.getItem(e)},tolink:function(){window.open("http://github.crmeb.net/u/CRMChat")}}}}}]);