!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("FrameSelection",[],t):"object"==typeof exports?exports.FrameSelection=t():e.FrameSelection=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var s=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(n[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){"use strict";function n(e,t,r,n){x=r,m=n||{};var s=Object(c.a)(e,t);return o(s),function(t){for(var r=[],n=0;n<s.length;n++){var i=s[n],l=u[i.id];l.refs--,r.push(l)}t?(s=Object(c.a)(e,t),o(s)):s=[];for(var n=0;n<r.length;n++){var l=r[n];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete u[l.id]}}}}function o(e){for(var t=0;t<e.length;t++){var r=e[t],n=u[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(i(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(i(r.parts[o]));u[r.id]={id:r.id,refs:1,parts:s}}}}function s(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,r,n=document.querySelector("style["+b+'~="'+e.id+'"]');if(n){if(x)return v;n.parentNode.removeChild(n)}if(g){var o=h++;n=p||(p=s()),t=l.bind(null,n,o,!1),r=l.bind(null,n,o,!0)}else n=s(),t=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function l(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=B(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),m.ssrId&&e.setAttribute(b,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var c=r(7),d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u={},f=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,x=!1,v=function(){},m=null,b="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),B=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){"use strict";t.a={name:"FrameSelection",props:{AxisX:{type:Array,default:function(){return[]}},AxisY:{type:Array,default:function(){return[]}},defaultSelectCellBox:{type:Array},usableBox:{type:null,default:"all"},cellWidth:{type:Number,default:17},cellHeight:{type:Number,default:17},maxWidth:{type:Number,default:200},maxHeight:{type:Number,default:200},title:{type:String,default:""},clearBtn:{type:Boolean,default:!1}},data:function(){return{resArr:[]}},methods:{addCell:function(){for(var e=this.AxisX,t=this.AxisY,r=this.usableBox,n=this.cellWidth,o=this.cellHeight,s=this.$refs.cellBox,i=this.$refs.heightList,l=this.$refs.prescriptionList,a=0;a<t.length;a++)for(var c=0;c<e.length;c++){var d=document.createElement("li");d.setAttribute("data",e[c]+","+t[a]),d.setAttribute("title",e[c]+","+t[a]),d.classList.add("cellItemBox"),"all"!==r&&d.classList.add("disable"),d.style.cssText="height:"+o+"px;width:"+n+"px;",s.appendChild(d)}for(var u=0;u<e.length;u++){var f=document.createElement("span");f.innerText=e[u],f.style.cssText="height:"+o+"px;width:"+n+"px;display:inline-block;text-align:center;",l.appendChild(f)}for(var p=0;p<t.length;p++){var h=document.createElement("span");h.innerText=t[p],h.style.cssText="height:"+o+"px;line-height:"+o+"px;",i.appendChild(h)}this.addBoxSelect(),this.setBoxSize()},setBoxSize:function(){var e=this.$refs.cellBox,t=this.$refs.prescriptionList,r=this.$refs.bigBox,n=this.cellWidth,o=this.cellHeight,s=this.maxWidth,i=this.maxHeight,l=this.AxisX.length*n+2+"px",a=this.AxisY.length*o+"px",c=i-20+"px";r.style.cssText="height:"+c+";width:"+s+"px;",e.style.cssText="height:"+a+";width:"+l+";",t.style.cssText="width:"+l+";height:"+o+";"},addBoxSelect:function(){var e=this,t=this;this.$nextTick(function(){function r(e){var t=e.layerX,r=e.layerY;o.endX=t,o.endY=r;var s=0,i=0,l=Math.abs(o.startX-o.endX),a=Math.abs(o.startY-o.endY);s=o.startX>o.endX?o.endX:o.startX,i=o.startY>o.endY?o.endY:o.startY;for(var c=n.querySelectorAll(".cellItemBox"),d=0;d<c.length;d++){var u=c[d].getBoundingClientRect().height,f=c[d].getBoundingClientRect().width,p=c[d].offsetLeft,h=c[d].offsetTop,x=u+h,v=f+p;if(h<i&&p<s&&h+u>i+a&&p+f>s+l)return;var m=x>i&&v>s&&x<i+a&&v<s+l,b=h>i&&p>s&&h<i+a&&p<s+l,g=h>i&&p+f>s&&h<i+a&&p+f<s+l,B=h+u>i&&p>s&&h+u<i+a&&p<s+l,y=i<h&&i+a>x&&s>p&&s+l<v,C=s<p&&s+l>v&&i>h&&i+a<x,L=i+a>h&&i+a<x&&p<s&&v>s+l,_=i>h&&s>p&&i<x&&s+l<v,w=i>h&&i+a<x&&s+l>p&&s+l<v,A=i>h&&i+a<x&&s>p&&s<v;if(m||b||g||B||y||C||L||_||w||A){if(c[d].classList.contains("disable"))return;c[d].classList.add("selectedBox")}else c[d].classList.remove("selectedBox")}}var n=e.$refs.cellBox,o={startX:0,startY:0,endX:0,endY:0},s=void 0,i=void 0,l=!1;n.style.position="relative",n.addEventListener("mousedown",function(e){o.startX=e.layerX,o.startY=e.layerY,l=!0,t.$emit("mousedownMethods",e),s=(new Date).getTime(),n.addEventListener("mousemove",r)}),n.addEventListener("mouseup",function(e){i=(new Date).getTime(),l=!1,t.$emit("mouseupMethods",e),i-s<200?(n.removeEventListener("mousemove",r),t.selectBox(e)):(t.handleSelect(),n.removeEventListener("mousemove",r))}),n.addEventListener("mouseleave",function(e){t.$emit("mouseleaveMethods",e),l&&(t.handleSelect(),n.removeEventListener("mousemove",r)),l=!1})})},handleSelect:function(){this.resArr=[];for(var e=[],t=this.$refs.cellBox.childNodes,r=0;r<t.length;r++)t[r].classList.contains("selectedBox")&&(t[r].classList.remove("selectedBox"),t[r].classList.add("active")),t[r].classList.contains("active")&&e.push(t[r].getAttribute("data").split(","));this.resArr=e,this.$emit("selectCell",e)},selectBox:function(e){if("DIV"!==e.target.nodeName){var t=!0,r=JSON.parse(JSON.stringify(this.resArr)),n=e.target;if(n.getAttribute("data")){var o=n.getAttribute("data").split(",");if(!n.classList.contains("disable")){if(0!==r.length)for(var s=0;s<r.length;s++)if(r[s].join()==o.join()){r.splice(s,1),n.classList.remove("selectedBox"),n.classList.remove("active"),t=!1;break}t&&(r.push(o),n.classList.add("active")),this.resArr=r,this.$emit("selectCell",r)}}}},defaultBox:function(e){var t=this,r=e;this.$nextTick(function(){for(var e=t.$refs.cellBox.childNodes,n=0;n<e.length;n++)if("#text"!=e[n].nodeName)if("all"!==r)if(0!=r.length)for(var o=0;o<r.length;o++)e[n].attributes.data.nodeValue==r[o]&&e[n].classList.remove("disable");else e[n].classList.contains("active")||e[n].classList.add("disable");else e[n].classList.remove("disable")})},defaultActive:function(e){var t=this,r=e;this.$nextTick(function(){for(var e=t.$refs.cellBox.childNodes,n=0;n<e.length;n++)if("#text"!=e[n].nodeName){e[n].classList.remove("active");for(var o=0;o<r.length;o++)e[n].attributes.data.nodeValue==r[o].join()&&(e[n].classList.remove("disable"),e[n].classList.add("active"))}}),this.resArr=r}},mounted:function(){this.addCell()},watch:{defaultSelectCellBox:function(e){this.defaultActive(e)},usableBox:function(e){this.defaultBox(e)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4);n.a.install=function(e){return e.component(n.a.name,n.a)},t.default=n.a},function(e,t,r){"use strict";function n(e){r(5),r(8)}var o=r(2),s=r(11),i=r(10),l=n,a=i(o.a,s.a,!1,l,"data-v-97b2cf56",null);t.a=a.exports},function(e,t,r){var n=r(6);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r(1).default;o("2a599278",n,!0,{})},function(e,t,r){t=e.exports=r(0)(!1),t.push([e.i,".cellBox[data-v-97b2cf56]{display:inline-block;flex-wrap:wrap;flex-direction:column;font-size:12px}.cellBox .cellBoxTop[data-v-97b2cf56]{display:flex}.cellBox .cellBoxTop .cellBoxTitle[data-v-97b2cf56]{height:20px;flex:1;font-size:14px;text-align:left;padding-left:15px}.cellBox .cellBoxTop .clearBtn[data-v-97b2cf56]{width:35px;cursor:pointer;border:1px solid #ccc;border-radius:5px;color:#606266}.cellBox .cellBoxTop .clearBtn[data-v-97b2cf56]:hover{color:#3a8ee6;border-color:#3a8ee6}.cellBox .cellBoxContetnAuto[data-v-97b2cf56]{position:relative;overflow:scroll}.cellBox .cellBoxContetnAuto .cellBoxContetnLeft[data-v-97b2cf56]{position:absolute;top:0;left:0;width:50px;display:flex;flex-wrap:wrap;flex-direction:column}.cellBox .cellBoxContetnAuto .cellBoxContetnLeft>span[data-v-97b2cf56]{width:100%}.cellBox .cellBoxContetnAuto .cellBoxContetnItem[data-v-97b2cf56]{width:189px;display:flex;flex-wrap:wrap;top:0;left:50px;border:1px solid #000;border-bottom:none;border-right:none}.cellBox .cellBoxContetnAuto .prescriptionList[data-v-97b2cf56]{margin-left:50px}",""])},function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var s=t[o],i=s[0],l=s[1],a=s[2],c=s[3],d={id:e+":"+o,css:l,media:a,sourceMap:c};n[i]?n[i].parts.push(d):r.push(n[i]={id:i,parts:[d]})}return r}t.a=n},function(e,t,r){var n=r(9);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r(1).default;o("5038377c",n,!0,{})},function(e,t,r){t=e.exports=r(0)(!1),t.push([e.i,".cellItemBox{border-right:1px solid #000;border-bottom:1px solid #000;box-sizing:border-box;cursor:pointer}.active{background-color:#588dc8;border:1px solid #fff;cursor:pointer}.disable{background-color:hsla(0,0%,80%,.5);cursor:no-drop}.selectedBox{background-color:#409eff;border:1px solid #fff;cursor:pointer}.scroll::-webkit-scrollbar{width:6px;height:6px}.scroll::-webkit-scrollbar,.scroll::-webkit-scrollbar-corner{background-color:transparent}.scroll::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}.scroll::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#ccc}.cellBox{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-khtml-user-select:none;user-select:none}.cellBox div,.cellBox li,.cellBox p,.cellBox span,.cellBox ul{box-sizing:border-box}.cellBox li,.cellBox ul{padding:0;margin:0;list-style:none}",""])},function(e,t){e.exports=function(e,t,r,n,o,s){var i,l=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,l=e.default);var c="function"==typeof l?l.options:l;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o);var d;if(s?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=d):n&&(d=n),d){var u=c.functional,f=u?c.render:c.beforeCreate;u?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:i,exports:l,options:c}}},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cellBox"},[r("div",{staticClass:"cellBoxTop"},[r("div",{staticClass:"cellBoxTitle"},[e._v(e._s(e.title))]),e._v(" "),e.clearBtn?r("div",{staticClass:"clearBtn",on:{click:function(t){e.$emit("clearAll"),e.defaultActive([])}}},[e._v("清空")]):e._e()]),e._v(" "),r("div",{ref:"bigBox",staticClass:"cellBoxContetnAuto scroll"},[r("div",{ref:"heightList",staticClass:"cellBoxContetnLeft"}),e._v(" "),r("ul",{ref:"cellBox",staticClass:"cellBoxContetnItem"}),e._v(" "),r("div",{ref:"prescriptionList",staticClass:"prescriptionList"})])])},o=[],s={render:n,staticRenderFns:o};t.a=s}])});
//# sourceMappingURL=FrameSelection.js.map