(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87b80cc0"],{"3dda":function(t,e){},"433f":function(t,e,r){t.exports=r.p+"img/sw.0608272d.jpg"},a979:function(t,e,r){"use strict";r("b3a7")},b3a7:function(t,e,r){},c8ca:function(t,e,r){},ced5:function(t,e,r){"use strict";r("c8ca")},d044:function(t,e,r){var i;(function(e,r){t.exports=r()})(0,(function(){function t(t){this.mode=r.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,i=this.data.length;e<i;e++){var n=[],o=this.data.charCodeAt(e);o>65536?(n[0]=240|(1835008&o)>>>18,n[1]=128|(258048&o)>>>12,n[2]=128|(4032&o)>>>6,n[3]=128|63&o):o>2048?(n[0]=224|(61440&o)>>>12,n[1]=128|(4032&o)>>>6,n[2]=128|63&o):o>128?(n[0]=192|(1984&o)>>>6,n[1]=128|63&o):n[0]=o,this.parsedData.push(n)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++){this.modules[i]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[i][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+r][e+i]=0<=r&&r<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=i&&i<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var i=a.getLostPoint(this);(0==r||t>i)&&(t=i,e=r)}return e},createMovieClip:function(t,e,r){var i=t.createEmptyMovieClip(e,r),n=1;this.make();for(var o=0;o<this.modules.length;o++)for(var a=o*n,s=0;s<this.modules[o].length;s++){var l=s*n,u=this.modules[o][s];u&&(i.beginFill(0,100),i.moveTo(l,a),i.lineTo(l+n,a),i.lineTo(l+n,a+n),i.lineTo(l,a+n),i.endFill())}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var i=t[e],n=t[r];if(null==this.modules[i][n])for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.modules[i+o][n+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},setupTypeNumber:function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var i=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=i}for(r=0;r<18;r++){i=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=i}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,i=a.getBCHTypeInfo(r),n=0;n<15;n++){var o=!t&&1==(i>>n&1);n<6?this.modules[n][8]=o:n<8?this.modules[n+1][8]=o:this.modules[this.moduleCount-15+n][8]=o}for(n=0;n<15;n++){o=!t&&1==(i>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=o:n<9?this.modules[8][15-n-1+1]=o:this.modules[8][15-n-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,i=this.moduleCount-1,n=7,o=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var l=0;l<2;l++)if(null==this.modules[i][s-l]){var u=!1;o<t.length&&(u=1==(t[o]>>>n&1));var h=a.getMask(e,i,s-l);h&&(u=!u),this.modules[i][s-l]=u,n--,-1==n&&(o++,n=7)}if(i+=r,i<0||this.moduleCount<=i){i-=r,r=-r;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,i){for(var n=h.getRSBlocks(t,r),o=new c,s=0;s<i.length;s++){var l=i[s];o.put(l.mode,4),o.put(l.getLength(),a.getLengthInBits(l.mode,t)),l.write(o)}var u=0;for(s=0;s<n.length;s++)u+=n[s].dataCount;if(o.getLengthInBits()>8*u)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*u+")");o.getLengthInBits()+4<=8*u&&o.put(0,4);while(o.getLengthInBits()%8!=0)o.putBit(!1);while(1){if(o.getLengthInBits()>=8*u)break;if(o.put(e.PAD0,8),o.getLengthInBits()>=8*u)break;o.put(e.PAD1,8)}return e.createBytes(o,n)},e.createBytes=function(t,e){for(var r=0,i=0,n=0,o=new Array(e.length),s=new Array(e.length),l=0;l<e.length;l++){var h=e[l].dataCount,c=e[l].totalCount-h;i=Math.max(i,h),n=Math.max(n,c),o[l]=new Array(h);for(var d=0;d<o[l].length;d++)o[l][d]=255&t.buffer[d+r];r+=h;var f=a.getErrorCorrectPolynomial(c),g=new u(o[l],f.getLength()-1),p=g.mod(f);s[l]=new Array(f.getLength()-1);for(d=0;d<s[l].length;d++){var m=d+p.getLength()-s[l].length;s[l][d]=m>=0?p.get(m):0}}var v=0;for(d=0;d<e.length;d++)v+=e[d].totalCount;var _=new Array(v),w=0;for(d=0;d<i;d++)for(l=0;l<e.length;l++)d<o[l].length&&(_[w++]=o[l][d]);for(d=0;d<n;d++)for(l=0;l<e.length;l++)d<s[l].length&&(_[w++]=s[l][d]);return _};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(a.getBCHDigit(e)-a.getBCHDigit(a.G15)>=0)e^=a.G15<<a.getBCHDigit(e)-a.getBCHDigit(a.G15);return(t<<10|e)^a.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(a.getBCHDigit(e)-a.getBCHDigit(a.G18)>=0)e^=a.G18<<a.getBCHDigit(e)-a.getBCHDigit(a.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return a.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case o.PATTERN000:return(e+r)%2==0;case o.PATTERN001:return e%2==0;case o.PATTERN010:return r%3==0;case o.PATTERN011:return(e+r)%3==0;case o.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case o.PATTERN101:return e*r%2+e*r%3==0;case o.PATTERN110:return(e*r%2+e*r%3)%2==0;case o.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new u([1],0),r=0;r<t;r++)e=e.multiply(new u([1,s.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,i=0;i<e;i++)for(var n=0;n<e;n++){for(var o=0,a=t.isDark(i,n),s=-1;s<=1;s++)if(!(i+s<0||e<=i+s))for(var l=-1;l<=1;l++)n+l<0||e<=n+l||0==s&&0==l||a==t.isDark(i+s,n+l)&&o++;o>5&&(r+=3+o-5)}for(i=0;i<e-1;i++)for(n=0;n<e-1;n++){var u=0;t.isDark(i,n)&&u++,t.isDark(i+1,n)&&u++,t.isDark(i,n+1)&&u++,t.isDark(i+1,n+1)&&u++,0!=u&&4!=u||(r+=3)}for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(i,n)&&!t.isDark(i,n+1)&&t.isDark(i,n+2)&&t.isDark(i,n+3)&&t.isDark(i,n+4)&&!t.isDark(i,n+5)&&t.isDark(i,n+6)&&(r+=40);for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(i,n)&&!t.isDark(i+1,n)&&t.isDark(i+2,n)&&t.isDark(i+3,n)&&t.isDark(i+4,n)&&!t.isDark(i+5,n)&&t.isDark(i+6,n)&&(r+=40);var h=0;for(n=0;n<e;n++)for(i=0;i<e;i++)t.isDark(i,n)&&h++;var c=Math.abs(100*h/e/e-50)/5;return r+=10*c,r}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)s.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)s.EXP_TABLE[l]=s.EXP_TABLE[l-4]^s.EXP_TABLE[l-5]^s.EXP_TABLE[l-6]^s.EXP_TABLE[l-8];for(l=0;l<255;l++)s.LOG_TABLE[s.EXP_TABLE[l]]=l;function u(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&0==t[r])r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}function h(t,e){this.totalCount=t,this.dataCount=e}function c(){this.buffer=[],this.length=0}u.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=s.gexp(s.glog(this.get(r))+s.glog(t.get(i)));return new u(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=s.glog(this.get(0))-s.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=s.gexp(s.glog(t.get(i))+e);return new u(r,0).mod(t)}},h.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h.getRSBlocks=function(t,e){var r=h.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=r.length/3,n=[],o=0;o<i;o++)for(var a=r[3*o+0],s=r[3*o+1],l=r[3*o+2],u=0;u<a;u++)n.push(new h(s,l));return n},h.getRsBlockTable=function(t,e){switch(e){case n.L:return h.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return h.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return h.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return h.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},c.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var d=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function f(){return"undefined"!=typeof CanvasRenderingContext2D}function g(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var p=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,r=this._el,i=t.getModuleCount();Math.floor(e.width/i),Math.floor(e.height/i);function n(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var i in e)e.hasOwnProperty(i)&&r.setAttribute(i,e[i]);return r}this.clear();var o=n("svg",{viewBox:"0 0 "+String(i)+" "+String(i),width:"100%",height:"100%",fill:e.colorLight});o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(o),o.appendChild(n("rect",{fill:e.colorLight,width:"100%",height:"100%"})),o.appendChild(n("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<i;a++)for(var s=0;s<i;s++)if(t.isDark(a,s)){var l=n("use",{x:String(s),y:String(a)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),o.appendChild(l)}},t.prototype.clear=function(){while(this._el.hasChildNodes())this._el.removeChild(this._el.lastChild)},t}(),m="svg"===document.documentElement.tagName.toLowerCase(),v=m?p:f()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,i,n,o,a,s,l,u,h){if("nodeName"in t&&/img/i.test(t.nodeName))for(var c=arguments.length-1;c>=1;c--)arguments[c]=arguments[c]*e;else"undefined"==typeof u&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);r.apply(this,arguments)}}function i(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var i=document.createElement("img"),n=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)},o=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)};return i.onabort=n,i.onerror=n,i.onload=o,void(i.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}var n=function(t,e){this._bIsPainted=!1,this._android=g(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return n.prototype.draw=function(t){var e=this._elImage,r=this._oContext,i=this._htOption,n=t.getModuleCount(),o=i.width/n,a=i.height/n,s=Math.round(o),l=Math.round(a);e.style.display="none",this.clear();for(var u=0;u<n;u++)for(var h=0;h<n;h++){var c=t.isDark(u,h),d=h*o,f=u*a;r.strokeStyle=c?i.colorDark:i.colorLight,r.lineWidth=1,r.fillStyle=c?i.colorDark:i.colorLight,r.fillRect(d,f,o,a),r.strokeRect(Math.floor(d)+.5,Math.floor(f)+.5,s,l),r.strokeRect(Math.ceil(d)-.5,Math.ceil(f)-.5,s,l)}this._bIsPainted=!0},n.prototype.makeImage=function(){this._bIsPainted&&i.call(this,t)},n.prototype.isPainted=function(){return this._bIsPainted},n.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},n.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},n}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,i=t.getModuleCount(),n=Math.floor(e.width/i),o=Math.floor(e.height/i),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<i;s++){a.push("<tr>");for(var l=0;l<i;l++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+o+"px;background-color:"+(t.isDark(s,l)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var u=r.childNodes[0],h=(e.width-u.offsetWidth)/2,c=(e.height-u.offsetHeight)/2;h>0&&c>0&&(u.style.margin=c+"px "+h+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();function _(t,e){for(var r=1,i=w(t),o=0,a=d.length;o<=a;o++){var s=0;switch(e){case n.L:s=d[o][0];break;case n.M:s=d[o][1];break;case n.Q:s=d[o][2];break;case n.H:s=d[o][3];break}if(i<=s)break;r++}if(r>d.length)throw new Error("Too long data");return r}function w(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}return i=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:n.H},"string"===typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(v=p),this._android=g(),this._el=t,this._oQRCode=null,this._oDrawing=new v(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},i.prototype.makeCode=function(t){this._oQRCode=new e(_(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},i.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},i.prototype.clear=function(){this._oDrawing.clear()},i.CorrectLevel=n,i}))},d666:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-box"},[r("div",{staticClass:"page-account kf"},[r("div",{staticClass:"container",class:[t.fullWidth>768?"containerSamll":"containerBig"]},[r("div",{staticClass:"index_from page-account-container"},[r("div",{style:{display:t.loginType?"none":"block"}},[t._m(0),r("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit("formInline")}}},[r("FormItem",{attrs:{prop:"username"}},[r("Input",{attrs:{type:"text",placeholder:"请输入用户名",size:"large"},model:{value:t.formInline.username,callback:function(e){t.$set(t.formInline,"username",e)},expression:"formInline.username"}})],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入密码",size:"large"},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}})],1),r("FormItem",[r("Button",{staticClass:"btn",attrs:{type:"primary",long:"",size:"large"},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("登录\n              ")])],1)],1),t.isMobile?t._e():r("div",{staticClass:"qh_box",on:{click:t.bindScan}},[r("span",{staticClass:"iconfont iconerweima2"})])],1),r("div",{style:{display:t.loginType?"block":"none"}},[t._m(1),r("div",{staticClass:"code-box"},[r("div",{ref:"qrCodeUrl",staticClass:"qrcode"}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.rxpired,expression:"rxpired"}],staticClass:"rxpired-box"},[r("p",[t._v("已过期")]),r("Button",{attrs:{type:"primary"},on:{click:t.bindRefresh}},[t._v("点击刷新")])],1)]),r("div",{staticClass:"qh_box",on:{click:function(e){t.loginType=0}}},[r("span",{staticClass:"iconfont iconzhanghaomima"})])])])])]),r("div",{staticClass:"foot-box"},[t._v("\n    Copyright © 2020 西安众邦网络科技有限公司 | "+t._s(t.version)+" 客服系统\n  ")])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-account-top"},[r("div",{staticClass:"page-account-top-logo"},[t._v("客服登录")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-account-top"},[r("div",{staticClass:"page-account-top-logo"},[t._v("APP扫码登录")])])}],o=(r("96cf"),r("3b8d")),a=(r("a481"),r("7f7f"),r("42e3")),s=r("3dda"),l=r.n(s),u=r("d708"),h=r("c276"),c=r("d044"),d=r.n(c),f={mixins:[l.a],data:function(){return{fullWidth:document.documentElement.clientWidth,swiperOption:{pagination:".swiper-pagination",autoplay:!0},modals:!1,autoLogin:!0,imgcode:"",formInline:{username:"",password:"",code:""},ruleInline:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},errorNum:0,jigsaw:null,login_logo:"",swiperList:[],defaultSwiperList:r("433f"),loginType:0,codeKey:"",scanTime:"",rxpired:!1,isMobile:!1,version:"",isScan:!1,timeNum:0}},created:function(){var t=this;Object(a["r"])().then((function(e){t.version=e.data.version,e.data.site_name&&(document.title=e.data.site_name)})),this.isMobile=this.$store.state.media.isMobile;var e=this;top!=window&&(top.location.href=location.href),document.onkeydown=function(t){if("login"===e.$route.name){var r=window.event.keyCode;13===r&&e.handleSubmit("formInline")}},window.addEventListener("resize",this.handleResize)},watch:{fullWidth:function(t){if(!this.timer){this.screenWidth=t,this.timer=!0;var e=this;setTimeout((function(){e.timer=!1}),400)}},$route:function(t){console.log(t),this.captchas()}},mounted:function(){this.$nextTick((function(){})),this.captchas()},methods:{bindScan:function(){this.isScan||(this.isScan=!0,this.getSanCodeKey()),this.loginType=1},creatQrCode:function(){var t="".concat(window.location.protocol,"//").concat(window.location.host,"/pages/users/scan_login/index?key=").concat(this.codeKey);new d.a(this.$refs.qrCodeUrl,{text:t,width:160,height:160,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.a.CorrectLevel.H})},closeModel:function(){var t=this,e=this.$Message.loading({content:"登录中...",duration:0});Object(a["a"])({account:this.formInline.username,password:this.formInline.password,imgcode:this.formInline.code}).then((function(r){e();var i=t.getExpiresTime(r.data.exp_time);return Object(h["r"])("kefu_uuid",r.data.kefuInfo.uid,i),Object(h["r"])("kefu_token",r.data.token,i),Object(h["r"])("kefu_expires_time",r.data.exp_time,i),Object(h["r"])("kefuInfo",r.data.kefuInfo,i),console.log(r),t.$store.commit("kefu/setInfo",r.data.kefuInfo),t.$store.state.media.isMobile?t.$router.replace({path:t.$route.query.redirect||"/kefu/mobile_list"}):t.$router.replace({path:t.$route.query.redirect||"/kefu/pc_list"})})).catch((function(r){e();var i=void 0===r?{}:r;t.errorNum++,t.captchas(),t.$Message.error(i.msg||"登录失败"),t.jigsaw&&t.jigsaw.reset()}))},getExpiresTime:function(t){var e=Math.round(new Date/1e3),r=t-e;return parseFloat(parseFloat(parseFloat(r/60)/60)/24)},closefail:function(){this.jigsaw&&this.jigsaw.reset(),this.$Message.error("校验错误")},handleResize:function(t){this.fullWidth=document.documentElement.clientWidth},captchas:function(){this.imgcode=u["a"].apiBaseURL+"/captcha_pro?"+Date.parse(new Date)},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t&&e.closeModel()}))},getSanCodeKey:function(){var t=this;Object(a["o"])().then((function(e){t.codeKey=e.data.key,t.creatQrCode(),t.scanTime=setInterval((function(){t.timeNum++,t.timeNum>=60?(t.timeNum=0,window.clearInterval(t.scanTime),t.rxpired=!0):t.getScanStatus()}),1e3)})).catch((function(e){t.timeNum=0,window.clearInterval(t.scanTime),t.rxpired=!0,t.$Message.error(e.msg)}))},getScanStatus:function(){var t=this;Object(a["G"])(this.codeKey).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0==r.data.status&&(t.timeNum=0,window.clearInterval(t.scanTime),t.rxpired=!0),r.data.status,3!=r.data.status){e.next=15;break}if(window.clearInterval(t.scanTime),i=t.getExpiresTime(r.data.exp_time),Object(h["r"])("kefu_uuid",r.data.kefuInfo.uid,i),Object(h["r"])("kefu_token",r.data.token,i),Object(h["r"])("kefu_expires_time",r.data.exp_time,i),Object(h["r"])("kefuInfo",r.data.kefuInfo,i),t.$store.commit("kefu/setInfo",r.data.kefuInfo),!t.$store.state.media.isMobile){e.next=14;break}return e.abrupt("return",t.$router.replace({path:t.$route.query.redirect||"/kefu/mobile_list"}));case 14:return e.abrupt("return",t.$router.replace({path:t.$route.query.redirect||"/kefu/pc_list"}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Modal.error({title:"提示",content:e.msg}),t.timeNum=0,window.clearInterval(t.scanTime),t.rxpired=!0}))},bindRefresh:function(){this.$refs.qrCodeUrl.innerHTML="",this.rxpired=!1,this.getSanCodeKey()}},beforeCreate:function(){},beforeDestroy:function(){this.timeNum=0,this.$refs.qrCodeUrl.innerHTML="",window.clearInterval(this.scanTime),window.removeEventListener("resize",this.handleResize)}},g=f,p=(r("ced5"),r("a979"),r("2877")),m=Object(p["a"])(g,i,n,!1,null,"a550a9f2",null);e["default"]=m.exports}}]);