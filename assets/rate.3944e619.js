
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a8 as e,ay as a,az as l,cr as o,aM as t,cs as u,aP as s,d as r,U as d,bU as i,bV as n,aW as v,u as c,aV as m,r as f,c as p,bW as b,aE as h,y,b as V,f as x,N as w,Z as g,n as S,i as k,h as T,w as C,e as j,J as M,m as H,k as I,E as _,M as A,_ as B,al as N,ao as U,q as E,A as P,bP as W,F as $,bQ as D,bT as F}from"./index.503ec71c.js";import O from"./alert.bcd51943.js";import{i as q}from"./validator.efd22e96.js";import{C as z,U as J}from"./event.d298a7ab.js";import"./el-alert.fcb9a07e.js";import"./el-link.b082fb0a.js";const K=e({modelValue:{type:Number,default:0},id:{type:String,default:void 0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:a([Array,Object]),default:()=>l(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:a([Array,Object]),default:()=>[o,o,o]},voidIcon:{type:t,default:()=>u},disabledVoidIcon:{type:t,default:()=>o},disabled:{type:Boolean},allowHalf:{type:Boolean},showText:{type:Boolean},showScore:{type:Boolean},textColor:{type:String,default:""},texts:{type:a(Array),default:()=>l(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:{type:String,validator:q},label:{type:String,default:void 0}}),L=["id","aria-label","aria-labelledby","aria-valuenow","aria-valuetext","aria-valuemax"],Q=["onMousemove","onClick"];const R=E(B(r({name:"ElRate",props:K,emits:{[z]:e=>s(e),[J]:e=>s(e)},setup(e,{expose:a,emit:l}){const o=e;function t(e,a){const l=e=>h(e),o=Object.keys(a).map((e=>+e)).filter((o=>{const t=a[o];return!!l(t)&&t.excluded?e<o:e<=o})).sort(((e,a)=>e-a)),t=a[o[0]];return l(t)&&t.value||t}const u=d(i,void 0),s=d(n,void 0),r=v(),B=c("rate"),{inputId:E,isLabeledByFormItem:P}=m(o,{formItemContext:s}),W=f(o.modelValue),$=f(-1),D=f(!0),F=p((()=>[B.b(),B.m(r.value)])),O=p((()=>o.disabled||(null==u?void 0:u.disabled))),q=p((()=>B.cssVarBlock({"void-color":o.voidColor,"disabled-void-color":o.disabledVoidColor,"fill-color":X.value}))),z=p((()=>{let e="";return o.showScore?e=o.scoreTemplate.replace(/\{\s*value\s*\}/,O.value?`${o.modelValue}`:`${W.value}`):o.showText&&(e=o.texts[Math.ceil(W.value)-1]),e})),K=p((()=>100*o.modelValue-100*Math.floor(o.modelValue))),R=p((()=>b(o.colors)?{[o.lowThreshold]:o.colors[0],[o.highThreshold]:{value:o.colors[1],excluded:!0},[o.max]:o.colors[2]}:o.colors)),X=p((()=>{const e=t(W.value,R.value);return h(e)?"":e})),Z=p((()=>{let e="";return O.value?e=`${K.value}%`:o.allowHalf&&(e="50%"),{color:X.value,width:e}})),G=p((()=>b(o.icons)?{[o.lowThreshold]:o.icons[0],[o.highThreshold]:{value:o.icons[1],excluded:!0},[o.max]:o.icons[2]}:o.icons)),Y=p((()=>t(o.modelValue,G.value))),ee=p((()=>O.value?o.disabledVoidIcon:o.voidIcon)),ae=p((()=>t(W.value,G.value))),le=p((()=>{const e=Array.from({length:o.max}),a=W.value;return e.fill(ae.value,0,a),e.fill(ee.value,a,o.max),e}));function oe(e){const a=O.value&&K.value>0&&e-1<o.modelValue&&e>o.modelValue,l=o.allowHalf&&D.value&&e-.5<=W.value&&e>W.value;return a||l}function te(e){if(O.value)return;let a=W.value;const t=e.code;return t===N.up||t===N.right?(o.allowHalf?a+=.5:a+=1,e.stopPropagation(),e.preventDefault()):t!==N.left&&t!==N.down||(o.allowHalf?a-=.5:a-=1,e.stopPropagation(),e.preventDefault()),a=a<0?0:a,a=a>o.max?o.max:a,l(J,a),l("change",a),a}function ue(e,a){if(!O.value){if(o.allowHalf){let l=a.target;U(l,B.e("item"))&&(l=l.querySelector(`.${B.e("icon")}`)),(0===l.clientWidth||U(l,B.e("decimal")))&&(l=l.parentNode),D.value=2*a.offsetX<=l.clientWidth,W.value=D.value?e-.5:e}else W.value=e;$.value=e}}function se(){O.value||(o.allowHalf&&(D.value=o.modelValue!==Math.floor(o.modelValue)),W.value=o.modelValue,$.value=-1)}return y((()=>o.modelValue),(e=>{W.value=e,D.value=o.modelValue!==Math.floor(o.modelValue)})),o.modelValue||l(J,0),a({setCurrentValue:ue,resetCurrentValue:se}),(e,a)=>{var t;return V(),x("div",{id:k(E),class:S([k(F),k(B).is("disabled",k(O))]),role:"slider","aria-label":k(P)?void 0:e.label||"rating","aria-labelledby":k(P)?null==(t=k(s))?void 0:t.labelId:void 0,"aria-valuenow":W.value,"aria-valuetext":k(z)||void 0,"aria-valuemin":"0","aria-valuemax":e.max,tabindex:"0",style:I(k(q)),onKeydown:te},[(V(!0),x(w,null,g(e.max,((e,a)=>(V(),x("span",{key:a,class:S(k(B).e("item")),onMousemove:a=>ue(e,a),onMouseleave:se,onClick:a=>{return t=e,void(O.value||(o.allowHalf&&D.value?(l(J,W.value),o.modelValue!==W.value&&l("change",W.value)):(l(J,t),o.modelValue!==t&&l("change",t))));var t}},[T(k(_),{class:S([k(B).e("icon"),{hover:$.value===e},k(B).is("active",e<=W.value)])},{default:C((()=>[oe(e)?H("v-if",!0):(V(),j(M(k(le)[e-1]),{key:0})),oe(e)?(V(),j(k(_),{key:1,style:I(k(Z)),class:S([k(B).e("icon"),k(B).e("decimal")])},{default:C((()=>[(V(),j(M(k(Y))))])),_:1},8,["style","class"])):H("v-if",!0)])),_:2},1032,["class"])],42,Q)))),128)),e.showText||e.showScore?(V(),x("span",{key:0,class:S(k(B).e("text"))},A(k(z)),3)):H("v-if",!0)],46,L)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]])),X={components:{Alert:O},data:()=>({value1:null,value2:null,value3:3.7})};"function"==typeof W&&W(X);const Z=P(X,[["render",function(e,a,l,o,t,u){const s=$("Alert"),r=F,d=R,i=D;return V(),x("div",null,[T(s),T(r,{title:"评分"}),T(i,{title:"基础用法",class:"demo"},{default:C((()=>[T(d,{modelValue:t.value1,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value1=e)},null,8,["modelValue"])])),_:1}),T(i,{title:"辅助文字",class:"demo"},{default:C((()=>[T(d,{modelValue:t.value2,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),T(i,{title:"只读",class:"demo"},{default:C((()=>[T(d,{modelValue:t.value3,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{Z as default};
