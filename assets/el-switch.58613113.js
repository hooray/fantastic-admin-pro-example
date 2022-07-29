
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a9 as e,aK as a,aw as i,ad as t,aB as l,aN as n,d as s,aS as o,aU as c,u as r,b5 as v,c as d,aT as u,aV as f,r as p,ae as m,y as h,a_ as y,o as b,b as k,f as g,J as x,i as I,n as w,a1 as S,e as V,w as C,M as T,E as _,m as B,R as N,S as E,h as P,bd as j,k as K,l as U,_ as q,O as z,aD as A,be as D,t as F,q as J}from"./index.9587bc3d.js";import{i as M}from"./validator.85d9abfc.js";import{U as O,C as R,I as G}from"./event.d298a7ab.js";const H=e({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:a,default:""},inactiveIcon:{type:a,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:i(Function)},size:{type:String,validator:M},tabindex:{type:[String,Number]}}),L=["onClick"],Q=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],W=["aria-hidden"],X=["aria-hidden"],Y=["aria-hidden"],Z=["aria-hidden"];const $=J(q(s({name:"ElSwitch",props:H,emits:{[O]:e=>t(e)||l(e)||n(e),[R]:e=>t(e)||l(e)||n(e),[G]:e=>t(e)||l(e)||n(e)},setup(e,{expose:a,emit:i}){const l=e,n="ElSwitch",s=z(),{formItem:q}=o(),J=c(),M=r("switch");v({from:'"value"',replacement:'"model-value" or "v-model"',scope:n,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},d((()=>{var e;return!!(null==(e=s.vnode.props)?void 0:e.value)})));const{inputId:H}=u(l,{formItemContext:q}),$=f(d((()=>l.loading))),ee=p(!1!==l.modelValue),ae=p(),ie=p(),te=d((()=>[M.b(),M.m(J.value),M.is("disabled",$.value),M.is("checked",se.value)])),le=d((()=>({width:m(l.width)})));h((()=>l.modelValue),(()=>{ee.value=!0})),h((()=>l.value),(()=>{ee.value=!1}));const ne=d((()=>ee.value?l.modelValue:l.value)),se=d((()=>ne.value===l.activeValue));[l.activeValue,l.inactiveValue].includes(ne.value)||(i(O,l.inactiveValue),i(R,l.inactiveValue),i(G,l.inactiveValue)),h(se,(e=>{var a;ae.value.checked=e,l.validateEvent&&(null==(a=null==q?void 0:q.validate)||a.call(q,"change").catch((e=>y())))}));const oe=()=>{const e=se.value?l.inactiveValue:l.activeValue;i(O,e),i(R,e),i(G,e),A((()=>{ae.value.checked=se.value}))},ce=()=>{if($.value)return;const{beforeChange:e}=l;if(!e)return void oe();const a=e();[D(a),t(a)].includes(!0)||F(n,"beforeChange must return type `Promise<boolean>` or `boolean`"),D(a)?a.then((e=>{e&&oe()})).catch((e=>{})):a&&oe()},re=d((()=>M.cssVarBlock({...l.activeColor?{"on-color":l.activeColor}:null,...l.inactiveColor?{"off-color":l.inactiveColor}:null,...l.borderColor?{"border-color":l.borderColor}:null})));return b((()=>{ae.value.checked=se.value})),a({focus:()=>{var e,a;null==(a=null==(e=ae.value)?void 0:e.focus)||a.call(e)}}),(e,a)=>(k(),g("div",{class:w(I(te)),style:K(I(re)),onClick:U(ce,["prevent"])},[x("input",{id:I(H),ref_key:"input",ref:ae,class:w(I(M).e("input")),type:"checkbox",role:"switch","aria-checked":I(se),"aria-disabled":I($),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:I($),tabindex:e.tabindex,onChange:oe,onKeydown:S(ce,["enter"])},null,42,Q),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?B("v-if",!0):(k(),g("span",{key:0,class:w([I(M).e("label"),I(M).em("label","left"),I(M).is("active",!I(se))])},[e.inactiveIcon?(k(),V(I(_),{key:0},{default:C((()=>[(k(),V(T(e.inactiveIcon)))])),_:1})):B("v-if",!0),!e.inactiveIcon&&e.inactiveText?(k(),g("span",{key:1,"aria-hidden":I(se)},N(e.inactiveText),9,W)):B("v-if",!0)],2)),x("span",{ref_key:"core",ref:ie,class:w(I(M).e("core")),style:K(I(le))},[e.inlinePrompt?(k(),g("div",{key:0,class:w(I(M).e("inner"))},[e.activeIcon||e.inactiveIcon?(k(),g(E,{key:0},[e.activeIcon?(k(),V(I(_),{key:0,class:w([I(M).is("icon"),I(se)?I(M).is("show"):I(M).is("hide")])},{default:C((()=>[(k(),V(T(e.activeIcon)))])),_:1},8,["class"])):B("v-if",!0),e.inactiveIcon?(k(),V(I(_),{key:1,class:w([I(M).is("icon"),I(se)?I(M).is("hide"):I(M).is("show")])},{default:C((()=>[(k(),V(T(e.inactiveIcon)))])),_:1},8,["class"])):B("v-if",!0)],64)):e.activeText||e.inactiveIcon?(k(),g(E,{key:1},[e.activeText?(k(),g("span",{key:0,class:w([I(M).is("text"),I(se)?I(M).is("show"):I(M).is("hide")]),"aria-hidden":!I(se)},N(e.activeText.substring(0,3)),11,X)):B("v-if",!0),e.inactiveText?(k(),g("span",{key:1,class:w([I(M).is("text"),I(se)?I(M).is("hide"):I(M).is("show")]),"aria-hidden":I(se)},N(e.inactiveText.substring(0,3)),11,Y)):B("v-if",!0)],64)):B("v-if",!0)],2)):B("v-if",!0),x("div",{class:w(I(M).e("action"))},[e.loading?(k(),V(I(_),{key:0,class:w(I(M).is("loading"))},{default:C((()=>[P(I(j))])),_:1},8,["class"])):B("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?B("v-if",!0):(k(),g("span",{key:1,class:w([I(M).e("label"),I(M).em("label","right"),I(M).is("active",I(se))])},[e.activeIcon?(k(),V(I(_),{key:0},{default:C((()=>[(k(),V(T(e.activeIcon)))])),_:1})):B("v-if",!0),!e.activeIcon&&e.activeText?(k(),g("span",{key:1,"aria-hidden":!I(se)},N(e.activeText),9,Z)):B("v-if",!0)],2))],14,L))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]));export{$ as E};