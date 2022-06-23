
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(a,i,t)=>i in a?e(a,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[i]=t,l=(e,l)=>{for(var s in l||(l={}))i.call(l,s)&&n(e,s,l[s]);if(a)for(var s of a(l))t.call(l,s)&&n(e,s,l[s]);return e};import{a9 as s,aH as c,aw as o,b5 as r,ad as d,aK as u,d as v,E as h,ba as f,aP as p,aS as b,c as y,u as m,aQ as k,aR as g,r as w,bb as I,y as x,aY as V,o as S,_ as C,aA as T,bc as B,t as P,L as E,b as _,f as j,D as N,n as O,a0 as D,e as K,w as L,M as Q,m as R,Q as q,R as z,h as A,k as F,l as H,q as M}from"./index.8f9b9927.js";import{i as U}from"./validator2.aba95f91.js";import{U as Y,C as G,I as J}from"./event2.c09267d7.js";const W=s({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:c,default:""},inactiveIcon:{type:c,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:o(Function)},size:{type:String,validator:U},tabindex:{type:[String,Number]}}),X=v({name:"ElSwitch",components:{ElIcon:h,Loading:f},props:W,emits:{[Y]:e=>r(e)||d(e)||u(e),[G]:e=>r(e)||d(e)||u(e),[J]:e=>r(e)||d(e)||u(e)},setup(e,{emit:a}){const{formItem:i}=p(),t=b(y((()=>e.loading))),n=m("switch"),{inputId:s}=k(e,{formItemContext:i}),c=g(),o=w(!1!==e.modelValue),d=w(),u=w(),v=y((()=>[n.b(),n.m(c.value),n.is("disabled",t.value),n.is("checked",C.value)])),h=y((()=>({width:I(e.width)})));x((()=>e.modelValue),(()=>{o.value=!0})),x((()=>e.value),(()=>{o.value=!1}));const f=y((()=>o.value?e.modelValue:e.value)),C=y((()=>f.value===e.activeValue));[e.activeValue,e.inactiveValue].includes(f.value)||(a(Y,e.inactiveValue),a(G,e.inactiveValue),a(J,e.inactiveValue)),x(C,(()=>{var a;d.value.checked=C.value,e.validateEvent&&(null==(a=null==i?void 0:i.validate)||a.call(i,"change").catch((e=>V())))}));const E=()=>{const i=C.value?e.inactiveValue:e.activeValue;a(Y,i),a(G,i),a(J,i),T((()=>{d.value.checked=C.value}))},_=y((()=>n.cssVarBlock(l(l(l({},e.activeColor?{"on-color":e.activeColor}:null),e.inactiveColor?{"off-color":e.inactiveColor}:null),e.borderColor?{"border-color":e.borderColor}:null))));return S((()=>{d.value.checked=C.value})),{ns:n,input:d,inputId:s,core:u,switchDisabled:t,checked:C,switchKls:v,coreStyle:h,handleChange:E,switchValue:()=>{if(t.value)return;const{beforeChange:a}=e;if(!a)return void E();const i=a();[B(i),r(i)].some((e=>e))||P("ElSwitch","beforeChange must return type `Promise<boolean>` or `boolean`"),B(i)?i.then((e=>{e&&E()})).catch((e=>{})):i&&E()},focus:()=>{var e,a;null==(a=null==(e=d.value)?void 0:e.focus)||a.call(e)},styles:_}}}),Z=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex"],$=["aria-hidden"],ee=["aria-hidden"],ae=["aria-hidden"],ie=["aria-hidden"];const te=M(C(X,[["render",function(e,a,i,t,n,l){const s=E("el-icon"),c=E("loading");return _(),j("div",{class:O(e.switchKls),style:F(e.styles),onClick:a[2]||(a[2]=H(((...a)=>e.switchValue&&e.switchValue(...a)),["prevent"]))},[N("input",{id:e.inputId,ref:"input",class:O(e.ns.e("input")),type:"checkbox",role:"switch","aria-checked":e.checked,"aria-disabled":e.switchDisabled,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:e.switchDisabled,tabindex:e.tabindex,onChange:a[0]||(a[0]=(...a)=>e.handleChange&&e.handleChange(...a)),onKeydown:a[1]||(a[1]=D(((...a)=>e.switchValue&&e.switchValue(...a)),["enter"]))},null,42,Z),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?R("v-if",!0):(_(),j("span",{key:0,class:O([e.ns.e("label"),e.ns.em("label","left"),e.ns.is("active",!e.checked)])},[e.inactiveIcon?(_(),K(s,{key:0},{default:L((()=>[(_(),K(Q(e.inactiveIcon)))])),_:1})):R("v-if",!0),!e.inactiveIcon&&e.inactiveText?(_(),j("span",{key:1,"aria-hidden":e.checked},q(e.inactiveText),9,$)):R("v-if",!0)],2)),N("span",{ref:"core",class:O(e.ns.e("core")),style:F(e.coreStyle)},[e.inlinePrompt?(_(),j("div",{key:0,class:O(e.ns.e("inner"))},[e.activeIcon||e.inactiveIcon?(_(),j(z,{key:0},[e.activeIcon?(_(),K(s,{key:0,class:O([e.ns.is("icon"),e.checked?e.ns.is("show"):e.ns.is("hide")])},{default:L((()=>[(_(),K(Q(e.activeIcon)))])),_:1},8,["class"])):R("v-if",!0),e.inactiveIcon?(_(),K(s,{key:1,class:O([e.ns.is("icon"),e.checked?e.ns.is("hide"):e.ns.is("show")])},{default:L((()=>[(_(),K(Q(e.inactiveIcon)))])),_:1},8,["class"])):R("v-if",!0)],64)):e.activeText||e.inactiveIcon?(_(),j(z,{key:1},[e.activeText?(_(),j("span",{key:0,class:O([e.ns.is("text"),e.checked?e.ns.is("show"):e.ns.is("hide")]),"aria-hidden":!e.checked},q(e.activeText.substring(0,3)),11,ee)):R("v-if",!0),e.inactiveText?(_(),j("span",{key:1,class:O([e.ns.is("text"),e.checked?e.ns.is("hide"):e.ns.is("show")]),"aria-hidden":e.checked},q(e.inactiveText.substring(0,3)),11,ae)):R("v-if",!0)],64)):R("v-if",!0)],2)):R("v-if",!0),N("div",{class:O(e.ns.e("action"))},[e.loading?(_(),K(s,{key:0,class:O(e.ns.is("loading"))},{default:L((()=>[A(c)])),_:1},8,["class"])):R("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?R("v-if",!0):(_(),j("span",{key:1,class:O([e.ns.e("label"),e.ns.em("label","right"),e.ns.is("active",e.checked)])},[e.activeIcon?(_(),K(s,{key:0},{default:L((()=>[(_(),K(Q(e.activeIcon)))])),_:1})):R("v-if",!0),!e.activeIcon&&e.activeText?(_(),j("span",{key:1,"aria-hidden":!e.checked},q(e.activeText),9,ie)):R("v-if",!0)],2))],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]));export{te as E};