
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a9 as e,aw as a,ax as l,cF as o,aK as t,cG as u,aN as s,d as r,W as d,bY as i,b_ as n,aU as v,u as c,aT as m,r as f,c as p,bX as h,aC as y,y as b,b as x,f as V,S as w,X as g,n as S,i as k,h as C,w as T,e as j,M as I,m as _,k as H,E as M,R as A,_ as N,al as B,ao as U,q as O,A as $,bN as D,I as E,bP as F,bO as P}from"./index.252503d3.js";import W from"./alert.2a291741.js";import{i as X}from"./validator.52792d17.js";import{C as q,U as K}from"./event.d298a7ab.js";import"./el-alert.53d97757.js";import"./el-link.037f1cff.js";const R=e({modelValue:{type:Number,default:0},id:{type:String,default:void 0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:a([Array,Object]),default:()=>l(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:a([Array,Object]),default:()=>[o,o,o]},voidIcon:{type:t,default:()=>u},disabledVoidIcon:{type:t,default:()=>o},disabled:{type:Boolean},allowHalf:{type:Boolean},showText:{type:Boolean},showScore:{type:Boolean},textColor:{type:String,default:""},texts:{type:a(Array),default:()=>l(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:{type:String,validator:X},label:{type:String,default:void 0}}),z=["id","aria-label","aria-labelledby","aria-valuenow","aria-valuetext","aria-valuemax"],G=["onMousemove","onClick"];const L=O(N(r({name:"ElRate",props:R,emits:{[q]:e=>s(e),[K]:e=>s(e)},setup(e,{expose:a,emit:l}){const o=e;function t(e,a){const l=e=>y(e),o=Object.keys(a).map((e=>+e)).filter((o=>{const t=a[o];return!!l(t)&&t.excluded?e<o:e<=o})).sort(((e,a)=>e-a)),t=a[o[0]];return l(t)&&t.value||t}const u=d(i,void 0),s=d(n,void 0),r=v(),N=c("rate"),{inputId:O,isLabeledByFormItem:$}=m(o,{formItemContext:s}),D=f(o.modelValue),E=f(-1),F=f(!0),P=p((()=>[N.b(),N.m(r.value)])),W=p((()=>o.disabled||(null==u?void 0:u.disabled))),X=p((()=>N.cssVarBlock({"void-color":o.voidColor,"disabled-void-color":o.disabledVoidColor,"fill-color":Y.value}))),q=p((()=>{let e="";return o.showScore?e=o.scoreTemplate.replace(/\{\s*value\s*\}/,W.value?`${o.modelValue}`:`${D.value}`):o.showText&&(e=o.texts[Math.ceil(D.value)-1]),e})),R=p((()=>100*o.modelValue-100*Math.floor(o.modelValue))),L=p((()=>h(o.colors)?{[o.lowThreshold]:o.colors[0],[o.highThreshold]:{value:o.colors[1],excluded:!0},[o.max]:o.colors[2]}:o.colors)),Y=p((()=>{const e=t(D.value,L.value);return y(e)?"":e})),J=p((()=>{let e="";return W.value?e=`${R.value}%`:o.allowHalf&&(e="50%"),{color:Y.value,width:e}})),Q=p((()=>h(o.icons)?{[o.lowThreshold]:o.icons[0],[o.highThreshold]:{value:o.icons[1],excluded:!0},[o.max]:o.icons[2]}:o.icons)),Z=p((()=>t(o.modelValue,Q.value))),ee=p((()=>W.value?o.disabledVoidIcon:o.voidIcon)),ae=p((()=>t(D.value,Q.value))),le=p((()=>{const e=Array.from({length:o.max}),a=D.value;return e.fill(ae.value,0,a),e.fill(ee.value,a,o.max),e}));function oe(e){const a=W.value&&R.value>0&&e-1<o.modelValue&&e>o.modelValue,l=o.allowHalf&&F.value&&e-.5<=D.value&&e>D.value;return a||l}function te(e){if(W.value)return;let a=D.value;const t=e.code;return t===B.up||t===B.right?(o.allowHalf?a+=.5:a+=1,e.stopPropagation(),e.preventDefault()):t!==B.left&&t!==B.down||(o.allowHalf?a-=.5:a-=1,e.stopPropagation(),e.preventDefault()),a=a<0?0:a,a=a>o.max?o.max:a,l(K,a),l("change",a),a}function ue(e,a){if(!W.value){if(o.allowHalf){let l=a.target;U(l,N.e("item"))&&(l=l.querySelector(`.${N.e("icon")}`)),(0===l.clientWidth||U(l,N.e("decimal")))&&(l=l.parentNode),F.value=2*a.offsetX<=l.clientWidth,D.value=F.value?e-.5:e}else D.value=e;E.value=e}}function se(){W.value||(o.allowHalf&&(F.value=o.modelValue!==Math.floor(o.modelValue)),D.value=o.modelValue,E.value=-1)}return b((()=>o.modelValue),(e=>{D.value=e,F.value=o.modelValue!==Math.floor(o.modelValue)})),o.modelValue||l(K,0),a({setCurrentValue:ue,resetCurrentValue:se}),(e,a)=>{var t;return x(),V("div",{id:k(O),class:S([k(P),k(N).is("disabled",k(W))]),role:"slider","aria-label":k($)?void 0:e.label||"rating","aria-labelledby":k($)?null==(t=k(s))?void 0:t.labelId:void 0,"aria-valuenow":D.value,"aria-valuetext":k(q)||void 0,"aria-valuemin":"0","aria-valuemax":e.max,tabindex:"0",style:H(k(X)),onKeydown:te},[(x(!0),V(w,null,g(e.max,((e,a)=>(x(),V("span",{key:a,class:S(k(N).e("item")),onMousemove:a=>ue(e,a),onMouseleave:se,onClick:a=>{return t=e,void(W.value||(o.allowHalf&&F.value?(l(K,D.value),o.modelValue!==D.value&&l("change",D.value)):(l(K,t),o.modelValue!==t&&l("change",t))));var t}},[C(k(M),{class:S([k(N).e("icon"),{hover:E.value===e},k(N).is("active",e<=D.value)])},{default:T((()=>[oe(e)?_("v-if",!0):(x(),j(I(k(le)[e-1]),{key:0})),oe(e)?(x(),j(k(M),{key:1,style:H(k(J)),class:S([k(N).e("icon"),k(N).e("decimal")])},{default:T((()=>[(x(),j(I(k(Z))))])),_:1},8,["style","class"])):_("v-if",!0)])),_:2},1032,["class"])],42,G)))),128)),e.showText||e.showScore?(x(),V("span",{key:0,class:S(k(N).e("text"))},A(k(q)),3)):_("v-if",!0)],46,z)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]])),Y={components:{Alert:W},data:()=>({value1:null,value2:null,value3:3.7})};"function"==typeof D&&D(Y);const J=$(Y,[["render",function(e,a,l,o,t,u){const s=E("Alert"),r=P,d=L,i=F;return x(),V("div",null,[C(s),C(r,{title:"评分"}),C(i,{title:"基础用法",class:"demo"},{default:T((()=>[C(d,{modelValue:t.value1,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value1=e)},null,8,["modelValue"])])),_:1}),C(i,{title:"辅助文字",class:"demo"},{default:T((()=>[C(d,{modelValue:t.value2,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),C(i,{title:"只读",class:"demo"},{default:T((()=>[C(d,{modelValue:t.value3,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{J as default};