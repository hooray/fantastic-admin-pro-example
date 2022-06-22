
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,r=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&o(e,t,a[t]);return e},s=(e,l)=>a(e,t(l));import{E as u}from"./el-input-number.2beefb45.js";import{a9 as d,aw as m,aL as v,aK as p,bO as c,r as g,o as f,a as b,aA as y,c as h,aP as V,s as w,V as x,y as S,cb as k,al as B,t as C,aY as P,d as E,u as L,as as T,aI as z,b as D,f as M,h as N,w as I,D as F,Q as Y,i as O,n as X,bh as j,a4 as _,k as A,_ as U,ad as W,au as K,b3 as R,aQ as $,aR as Q,K as q,e as H,m as G,R as J,W as Z,q as ee}from"./index.f897cb43.js";import{U as ae,I as te,C as le}from"./event2.c09267d7.js";const ie=Symbol("sliderContextKey"),ne=d({modelValue:{type:m([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:v,inputSize:v,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:m(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,debounce:{type:Number,default:300},label:{type:String,default:void 0},rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:m(Function),default:void 0},tooltipClass:{type:String,default:void 0},marks:{type:m(Object)}}),oe=e=>p(e)||c(e)&&e.every(p),re={[ae]:oe,[te]:oe,[le]:oe},se=(e,a,t)=>{const{form:l,formItem:i}=V(),n=w(),o=g(),r=g(),s={firstButton:o,secondButton:r},u=h((()=>e.disabled||(null==l?void 0:l.disabled)||!1)),d=h((()=>Math.min(a.firstValue,a.secondValue))),m=h((()=>Math.max(a.firstValue,a.secondValue))),v=h((()=>e.range?100*(m.value-d.value)/(e.max-e.min)+"%":100*(a.firstValue-e.min)/(e.max-e.min)+"%")),p=h((()=>e.range?100*(d.value-e.min)/(e.max-e.min)+"%":"0%")),c=h((()=>e.vertical?{height:e.height}:{})),f=h((()=>e.vertical?{height:v.value,bottom:p.value}:{width:v.value,left:p.value})),b=()=>{n.value&&(a.sliderSize=n.value["client"+(e.vertical?"Height":"Width")])},x=t=>{const l=(t=>{const l=e.min+t*(e.max-e.min)/100;if(!e.range)return o;let i;return i=Math.abs(d.value-l)<Math.abs(m.value-l)?a.firstValue<a.secondValue?"firstButton":"secondButton":a.firstValue>a.secondValue?"firstButton":"secondButton",s[i]})(t);return l.value.setPosition(t),l},S=e=>{t(ae,e),t(te,e)},k=async()=>{await y(),t(le,e.range?[d.value,m.value]:e.modelValue)},B=t=>{var l,i,o,r,s,d;if(u.value||a.dragging)return;b();let m=0;if(e.vertical){const e=null!=(o=null==(i=null==(l=t.touches)?void 0:l.item(0))?void 0:i.clientY)?o:t.clientY;m=(n.value.getBoundingClientRect().bottom-e)/a.sliderSize*100}else{m=((null!=(d=null==(s=null==(r=t.touches)?void 0:r.item(0))?void 0:s.clientX)?d:t.clientX)-n.value.getBoundingClientRect().left)/a.sliderSize*100}return m<0||m>100?void 0:x(m)};return{elFormItem:i,slider:n,firstButton:o,secondButton:r,sliderDisabled:u,minValue:d,maxValue:m,runwayStyle:c,barStyle:f,resetSize:b,setPosition:x,emitChange:k,onSliderWrapperPrevent:e=>{var a,t;((null==(a=s.firstButton.value)?void 0:a.dragging)||(null==(t=s.secondButton.value)?void 0:t.dragging))&&e.preventDefault()},onSliderClick:e=>{B(e)&&k()},onSliderDown:async e=>{const a=B(e);a&&(await y(),a.value.onButtonDown(e))},setFirstValue:t=>{a.firstValue=t,S(e.range?[d.value,m.value]:t)},setSecondValue:t=>{a.secondValue=t,e.range&&S([d.value,m.value])}}},{left:ue,down:de,right:me,up:ve,home:pe,end:ce,pageUp:ge,pageDown:fe}=B,be=(e,a,t)=>{const{disabled:l,min:i,max:n,step:o,showTooltip:r,precision:s,sliderSize:u,formatTooltip:d,emitChange:m,resetSize:v,updateDragging:p}=x(ie),{tooltip:c,tooltipVisible:f,formatValue:b,displayTooltip:V,hideTooltip:w}=((e,a,t)=>{const l=g(),i=g(!1),n=h((()=>a.value instanceof Function)),o=h((()=>n.value&&a.value(e.modelValue)||e.modelValue)),r=k((()=>{t.value&&(i.value=!0)}),50),s=k((()=>{t.value&&(i.value=!1)}),50);return{tooltip:l,tooltipVisible:i,formatValue:o,displayTooltip:r,hideTooltip:s}})(e,d,r),B=g(),C=h((()=>(e.modelValue-i.value)/(n.value-i.value)*100+"%")),P=h((()=>e.vertical?{bottom:C.value}:{left:C.value})),E=e=>{l.value||(a.newPosition=Number.parseFloat(C.value)+e/(n.value-i.value)*100,M(a.newPosition),m())},L=e=>{let a,t;return e.type.startsWith("touch")?(t=e.touches[0].clientY,a=e.touches[0].clientX):(t=e.clientY,a=e.clientX),{clientX:a,clientY:t}},T=t=>{a.dragging=!0,a.isClick=!0;const{clientX:l,clientY:i}=L(t);e.vertical?a.startY=i:a.startX=l,a.startPosition=Number.parseFloat(C.value),a.newPosition=a.startPosition},z=t=>{if(a.dragging){let l;a.isClick=!1,V(),v();const{clientX:i,clientY:n}=L(t);e.vertical?(a.currentY=n,l=(a.startY-a.currentY)/u.value*100):(a.currentX=i,l=(a.currentX-a.startX)/u.value*100),a.newPosition=a.startPosition+l,M(a.newPosition)}},D=()=>{a.dragging&&(setTimeout((()=>{a.dragging=!1,a.hovering||w(),a.isClick||(M(a.newPosition),m())}),0),window.removeEventListener("mousemove",z),window.removeEventListener("touchmove",z),window.removeEventListener("mouseup",D),window.removeEventListener("touchend",D),window.removeEventListener("contextmenu",D))},M=async l=>{if(null===l||Number.isNaN(+l))return;l<0?l=0:l>100&&(l=100);const r=100/((n.value-i.value)/o.value);let u=Math.round(l/r)*r*(n.value-i.value)*.01+i.value;u=Number.parseFloat(u.toFixed(s.value)),t(ae,u),a.dragging||e.modelValue===a.oldValue||(a.oldValue=e.modelValue),await y(),a.dragging&&V(),c.value.updatePopper()};return S((()=>a.dragging),(e=>{p(e)})),{button:B,tooltip:c,tooltipVisible:f,showTooltip:r,wrapperStyle:P,formatValue:b,handleMouseEnter:()=>{a.hovering=!0,V()},handleMouseLeave:()=>{a.hovering=!1,a.dragging||w()},onButtonDown:e=>{l.value||(e.preventDefault(),T(e),window.addEventListener("mousemove",z),window.addEventListener("touchmove",z),window.addEventListener("mouseup",D),window.addEventListener("touchend",D),window.addEventListener("contextmenu",D),B.value.focus())},onKeyDown:e=>{let a=!0;[ue,de].includes(e.key)?E(-o.value):[me,ve].includes(e.key)?E(o.value):e.key===pe?l.value||(M(0),m()):e.key===ce?l.value||(M(100),m()):e.key===fe?E(4*-o.value):e.key===ge?E(4*o.value):a=!1,a&&e.preventDefault()},setPosition:M}},ye=d({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String}),he={[ae]:e=>p(e)};var Ve=U(E(s(r({},{name:"ElSliderButton"}),{props:ye,emits:he,setup(e,{expose:a,emit:t}){const l=e,i=L("slider"),n=T({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:l.modelValue}),{button:o,tooltip:r,showTooltip:s,tooltipVisible:u,wrapperStyle:d,formatValue:m,handleMouseEnter:v,handleMouseLeave:p,onButtonDown:c,onKeyDown:g,setPosition:f}=be(l,n,t),{hovering:b,dragging:y}=z(n);return a({onButtonDown:c,onKeyDown:g,setPosition:f,hovering:b,dragging:y}),(e,a)=>(D(),M("div",{ref_key:"button",ref:o,class:X([O(i).e("button-wrapper"),{hover:O(b),dragging:O(y)}]),style:A(O(d)),tabindex:"0",onMouseenter:a[1]||(a[1]=(...e)=>O(v)&&O(v)(...e)),onMouseleave:a[2]||(a[2]=(...e)=>O(p)&&O(p)(...e)),onMousedown:a[3]||(a[3]=(...e)=>O(c)&&O(c)(...e)),onTouchstart:a[4]||(a[4]=(...e)=>O(c)&&O(c)(...e)),onFocus:a[5]||(a[5]=(...e)=>O(v)&&O(v)(...e)),onBlur:a[6]||(a[6]=(...e)=>O(p)&&O(p)(...e)),onKeydown:a[7]||(a[7]=(...e)=>O(g)&&O(g)(...e))},[N(O(_),{ref_key:"tooltip",ref:r,visible:O(u),"onUpdate:visible":a[0]||(a[0]=e=>j(u)?u.value=e:null),placement:"top","stop-popper-mouse-event":!1,"popper-class":e.tooltipClass,disabled:!O(s),persistent:""},{content:I((()=>[F("span",null,Y(O(m)),1)])),default:I((()=>[F("div",{class:X([O(i).e("button"),{hover:O(b),dragging:O(y)}])},null,2)])),_:1},8,["visible","popper-class","disabled"])],38))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);var we=E({name:"ElSliderMarker",props:d({mark:{type:m([String,Object]),default:void 0}}),setup(e){const a=L("slider"),t=h((()=>W(e.mark)?e.mark:e.mark.label)),l=h((()=>W(e.mark)?void 0:e.mark.style));return()=>K("div",{class:a.e("marks-text"),style:l},t.value)}});const xe=["id","role","aria-label","aria-labelledby"],Se={key:1};const ke=ee(U(E(s(r({},{name:"ElSlider"}),{props:ne,emits:re,setup(e,{expose:a,emit:t}){const l=e,i=L("slider"),{t:n}=R(),o=T({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:d,slider:m,firstButton:v,secondButton:p,sliderDisabled:c,minValue:V,maxValue:w,runwayStyle:x,barStyle:k,resetSize:B,emitChange:E,onSliderWrapperPrevent:I,onSliderClick:Y,onSliderDown:j,setFirstValue:_,setSecondValue:U}=se(l,o,t),{stops:W,getStopStyle:K}=((e,a,t,l)=>({stops:h((()=>{if(!e.showStops||e.min>e.max)return[];if(0===e.step)return[];const i=(e.max-e.min)/e.step,n=100*e.step/(e.max-e.min),o=Array.from({length:i-1}).map(((e,a)=>(a+1)*n));return e.range?o.filter((a=>a<100*(t.value-e.min)/(e.max-e.min)||a>100*(l.value-e.min)/(e.max-e.min))):o.filter((t=>t>100*(a.firstValue-e.min)/(e.max-e.min)))})),getStopStyle:a=>e.vertical?{bottom:`${a}%`}:{left:`${a}%`}}))(l,o,V,w),{inputId:ee,isLabeledByFormItem:le}=$(l,{formItemContext:d}),ne=Q(),oe=h((()=>l.inputSize||ne.value)),re=h((()=>l.label||n("el.slider.defaultLabel",{min:l.min,max:l.max}))),ue=h((()=>l.range?l.rangeStartLabel||n("el.slider.defaultRangeStartLabel"):re.value)),de=h((()=>l.formatValueText?l.formatValueText(be.value):`${be.value}`)),me=h((()=>l.rangeEndLabel||n("el.slider.defaultRangeEndLabel"))),ve=h((()=>l.formatValueText?l.formatValueText(ye.value):`${ye.value}`)),pe=h((()=>[i.b(),i.m(ne.value),i.is("vertical",l.vertical),{[i.m("with-input")]:l.showInput}])),ce=(e=>h((()=>e.marks?Object.keys(e.marks).map(parseFloat).sort(((e,a)=>e-a)).filter((a=>a<=e.max&&a>=e.min)).map((a=>({point:a,position:100*(a-e.min)/(e.max-e.min),mark:e.marks[a]}))):[])))(l);((e,a,t,l,i,n)=>{const o=e=>{i(ae,e),i(te,e)},r=()=>e.range?![t.value,l.value].every(((e,t)=>e===a.oldValue[t])):e.modelValue!==a.oldValue,s=()=>{var t,l;if(e.min>e.max)return void C("Slider","min should not be greater than max.");const i=e.modelValue;e.range&&Array.isArray(i)?i[1]<e.min?o([e.min,e.min]):i[0]>e.max?o([e.max,e.max]):i[0]<e.min?o([e.min,i[1]]):i[1]>e.max?o([i[0],e.max]):(a.firstValue=i[0],a.secondValue=i[1],r()&&(null==(t=null==n?void 0:n.validate)||t.call(n,"change").catch((e=>P())),a.oldValue=i.slice())):e.range||"number"!=typeof i||Number.isNaN(i)||(i<e.min?o(e.min):i>e.max?o(e.max):(a.firstValue=i,r()&&(null==(l=null==n?void 0:n.validate)||l.call(n,"change").catch((e=>P())),a.oldValue=i)))};s(),S((()=>a.dragging),(e=>{e||s()})),S((()=>e.modelValue),((e,t)=>{a.dragging||Array.isArray(e)&&Array.isArray(t)&&e.every(((e,a)=>e===t[a]))&&a.firstValue===e[0]&&a.secondValue===e[1]||s()}),{deep:!0}),S((()=>[e.min,e.max]),(()=>{s()}))})(l,o,V,w,t,d);const ge=h((()=>{const e=[l.min,l.max,l.step].map((e=>{const a=`${e}`.split(".")[1];return a?a.length:0}));return Math.max.apply(null,e)})),{sliderWrapper:fe}=((e,a,t)=>{const l=g();return f((async()=>{e.range?(Array.isArray(e.modelValue)?(a.firstValue=Math.max(e.min,e.modelValue[0]),a.secondValue=Math.min(e.max,e.modelValue[1])):(a.firstValue=e.min,a.secondValue=e.max),a.oldValue=[a.firstValue,a.secondValue]):("number"!=typeof e.modelValue||Number.isNaN(e.modelValue)?a.firstValue=e.min:a.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),a.oldValue=a.firstValue),b(window,"resize",t),await y(),t()})),{sliderWrapper:l}})(l,o,B),{firstValue:be,secondValue:ye,sliderSize:he}=z(o);return q(ie,s(r({},z(l)),{sliderSize:he,disabled:c,precision:ge,emitChange:E,resetSize:B,updateDragging:e=>{o.dragging=e}})),a({onSliderClick:Y}),(e,a)=>{var t,l;return D(),M("div",{id:e.range?O(ee):void 0,ref_key:"sliderWrapper",ref:fe,class:X(O(pe)),role:e.range?"group":void 0,"aria-label":e.range&&!O(le)?O(re):void 0,"aria-labelledby":e.range&&O(le)?null==(t=O(d))?void 0:t.labelId:void 0,onTouchstart:a[2]||(a[2]=(...e)=>O(I)&&O(I)(...e)),onTouchmove:a[3]||(a[3]=(...e)=>O(I)&&O(I)(...e))},[F("div",{ref_key:"slider",ref:m,class:X([O(i).e("runway"),{"show-input":e.showInput&&!e.range},O(i).is("disabled",O(c))]),style:A(O(x)),onMousedown:a[0]||(a[0]=(...e)=>O(j)&&O(j)(...e)),onTouchstart:a[1]||(a[1]=(...e)=>O(j)&&O(j)(...e))},[F("div",{class:X(O(i).e("bar")),style:A(O(k))},null,6),N(Ve,{id:e.range?void 0:O(ee),ref_key:"firstButton",ref:v,"model-value":O(be),vertical:e.vertical,"tooltip-class":e.tooltipClass,role:"slider","aria-label":e.range||!O(le)?O(ue):void 0,"aria-labelledby":!e.range&&O(le)?null==(l=O(d))?void 0:l.labelId:void 0,"aria-valuemin":e.min,"aria-valuemax":e.range?O(ye):e.max,"aria-valuenow":O(be),"aria-valuetext":O(de),"aria-orientation":e.vertical?"vertical":"horizontal","aria-disabled":O(c),"onUpdate:modelValue":O(_)},null,8,["id","model-value","vertical","tooltip-class","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),e.range?(D(),H(Ve,{key:0,ref_key:"secondButton",ref:p,"model-value":O(ye),vertical:e.vertical,"tooltip-class":e.tooltipClass,role:"slider","aria-label":O(me),"aria-valuemin":O(be),"aria-valuemax":e.max,"aria-valuenow":O(ye),"aria-valuetext":O(ve),"aria-orientation":e.vertical?"vertical":"horizontal","aria-disabled":O(c),"onUpdate:modelValue":O(U)},null,8,["model-value","vertical","tooltip-class","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):G("v-if",!0),e.showStops?(D(),M("div",Se,[(D(!0),M(J,null,Z(O(W),((e,a)=>(D(),M("div",{key:a,class:X(O(i).e("stop")),style:A(O(K)(e))},null,6)))),128))])):G("v-if",!0),O(ce).length>0?(D(),M(J,{key:2},[F("div",null,[(D(!0),M(J,null,Z(O(ce),((e,a)=>(D(),M("div",{key:a,style:A(O(K)(e.position)),class:X([O(i).e("stop"),O(i).e("marks-stop")])},null,6)))),128))]),F("div",{class:X(O(i).e("marks"))},[(D(!0),M(J,null,Z(O(ce),((e,a)=>(D(),H(O(we),{key:a,mark:e.mark,style:A(O(K)(e.position))},null,8,["mark","style"])))),128))],2)],64)):G("v-if",!0)],38),e.showInput&&!e.range?(D(),H(O(u),{key:0,ref:"input","model-value":O(be),class:X(O(i).e("input")),step:e.step,disabled:O(c),controls:e.showInputControls,min:e.min,max:e.max,debounce:e.debounce,size:O(oe),"onUpdate:modelValue":O(_),onChange:O(E)},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):G("v-if",!0)],42,xe)}}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue"]]));export{ke as E};
