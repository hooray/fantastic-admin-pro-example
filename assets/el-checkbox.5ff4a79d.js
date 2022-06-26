
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,s=(e,a)=>{for(var l in a||(a={}))n.call(a,l)&&i(e,l,a[l]);if(o)for(var l of o(a))t.call(a,l)&&i(e,l,a[l]);return e},u=(e,o)=>a(e,l(o));import{aL as r,V as d,bP as c,bR as b,c as m,aQ as v,ad as p,aK as h,b5 as k,bO as x,r as f,aR as g,bU as y,aA as C,y as L,aY as I,H as F,d as S,aN as B,u as G,b as O,e as w,w as z,D as V,F as E,bV as D,i as j,f as _,bh as A,n as N,g as R,R as P,a1 as U,Q as $,m as K,M,_ as Q,k as q,K as H,aI as Y,q as J,aD as T}from"./index.7b80eec3.js";import{U as W}from"./event2.c09267d7.js";const X={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:r,id:{type:String,default:void 0},label:{type:String,default:void 0},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"}},Z={modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:r,tabindex:[String,Number]},ee=()=>{const e=d(c,{}),a=d(b,{}),l=d("CheckboxGroup",{}),o=m((()=>l&&"ElCheckboxGroup"===(null==l?void 0:l.name))),n=m((()=>a.size));return{isGroup:o,checkboxGroup:l,elForm:e,elFormItemSize:n,elFormItem:a}},ae=(e,{model:a,isLimitExceeded:l,hasOwnLabel:o,isDisabled:n,isLabeledByFormItem:t})=>{const{elFormItem:i}=ee(),{emit:s}=F();function u(a){var l,o;return a===e.trueLabel||!0===a?null==(l=e.trueLabel)||l:null!=(o=e.falseLabel)&&o}return L((()=>e.modelValue),(()=>{var e;null==(e=null==i?void 0:i.validate)||e.call(i,"change").catch((e=>I()))})),{handleChange:function(e){if(l.value)return;const a=e.target;s("change",u(a.checked),e)},onClickRoot:async function(i){l.value||o.value||n.value||!t.value||(a.value=u([!1,e.falseLabel].includes(a.value)),await C(),function(e,a){s("change",u(e),a)}(a.value,i))}}},le={[W]:e=>p(e)||h(e)||k(e),change:e=>p(e)||h(e)||k(e)},oe={[W]:e=>x(e),change:e=>x(e)},ne=(e,a)=>{const{model:l,isGroup:o,isLimitExceeded:n,elFormItem:t}=(e=>{const a=f(!1),{emit:l}=F(),{isGroup:o,checkboxGroup:n,elFormItem:t}=ee(),i=f(!1);return{model:m({get(){var l,t;return o.value?null==(l=n.modelValue)?void 0:l.value:null!=(t=e.modelValue)?t:a.value},set(e){var t;o.value&&Array.isArray(e)?(i.value=void 0!==n.max&&e.length>n.max.value,!1===i.value&&(null==(t=null==n?void 0:n.changeEvent)||t.call(n,e))):(l(W,e),a.value=e)}}),isGroup:o,isLimitExceeded:i,elFormItem:t}})(e),{focus:i,size:s,isChecked:u,checkboxSize:r,hasOwnLabel:d}=((e,a,{model:l})=>{const{isGroup:o,checkboxGroup:n}=ee(),t=f(!1),i=g(null==n?void 0:n.checkboxGroupSize,{prop:!0});return{isChecked:m((()=>{const a=l.value;return"[object Boolean]"===y(a)?a:Array.isArray(a)?a.includes(e.label):null!=a?a===e.trueLabel:!!a})),focus:t,size:i,checkboxSize:g(m((()=>{var e;return o.value?null==(e=null==n?void 0:n.checkboxGroupSize)?void 0:e.value:void 0}))),hasOwnLabel:m((()=>!(!a.default&&!e.label)))}})(e,a,{model:l}),{isDisabled:c}=((e,{model:a,isChecked:l})=>{const{elForm:o,isGroup:n,checkboxGroup:t}=ee(),i=m((()=>{var e,o;const n=null==(e=t.max)?void 0:e.value,i=null==(o=t.min)?void 0:o.value;return!(!n&&!i)&&a.value.length>=n&&!l.value||a.value.length<=i&&l.value}));return{isDisabled:m((()=>{var a,l;const s=e.disabled||(null==o?void 0:o.disabled);return null!=(l=n.value?(null==(a=t.disabled)?void 0:a.value)||s||i.value:s)&&l})),isLimitDisabled:i}})(e,{model:l,isChecked:u}),{inputId:b,isLabeledByFormItem:p}=v(e,{formItemContext:t,disableIdGeneration:d,disableIdManagement:o}),{handleChange:h,onClickRoot:k}=ae(e,{model:l,isLimitExceeded:n,hasOwnLabel:d,isDisabled:c,isLabeledByFormItem:p});return((e,{model:a})=>{e.checked&&(Array.isArray(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0)})(e,{model:l}),{elFormItem:t,inputId:b,isLabeledByFormItem:p,isChecked:u,isDisabled:c,isGroup:o,checkboxSize:r,hasOwnLabel:d,model:l,handleChange:h,onClickRoot:k,focus:i,size:s}},te=["tabindex","role","aria-checked"],ie=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],se=["id","aria-hidden","disabled","value","name","tabindex"];var ue=Q(S(u(s({},{name:"ElCheckbox"}),{props:Z,emits:le,setup(e){const a=e,l=B(),{inputId:o,isLabeledByFormItem:n,isChecked:t,isDisabled:i,checkboxSize:s,hasOwnLabel:u,model:r,handleChange:d,onClickRoot:c,focus:b}=ne(a,l),m=G("checkbox");return(e,a)=>(O(),w(M(!j(u)&&j(n)?"span":"label"),{class:N([j(m).b(),j(m).m(j(s)),j(m).is("disabled",j(i)),j(m).is("bordered",e.border),j(m).is("checked",j(t))]),"aria-controls":e.indeterminate?e.controls:null,onClick:j(c)},{default:z((()=>[V("span",{class:N([j(m).e("input"),j(m).is("disabled",j(i)),j(m).is("checked",j(t)),j(m).is("indeterminate",e.indeterminate),j(m).is("focus",j(b))]),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[e.trueLabel||e.falseLabel?E((O(),_("input",{key:0,id:j(o),"onUpdate:modelValue":a[0]||(a[0]=e=>A(r)?r.value=e:null),class:N(j(m).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:j(i),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>j(d)&&j(d)(...e)),onFocus:a[2]||(a[2]=e=>b.value=!0),onBlur:a[3]||(a[3]=e=>b.value=!1)},null,42,ie)),[[D,j(r)]]):E((O(),_("input",{key:1,id:j(o),"onUpdate:modelValue":a[4]||(a[4]=e=>A(r)?r.value=e:null),class:N(j(m).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:j(i),value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...e)=>j(d)&&j(d)(...e)),onFocus:a[6]||(a[6]=e=>b.value=!0),onBlur:a[7]||(a[7]=e=>b.value=!1)},null,42,se)),[[D,j(r)]]),V("span",{class:N(j(m).e("inner"))},null,2)],10,te),j(u)?(O(),_("span",{key:0,class:N(j(m).e("label"))},[R(e.$slots,"default"),e.$slots.default?K("v-if",!0):(O(),_(P,{key:0},[U($(e.label),1)],64))],2)):K("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const re=["name","tabindex","disabled","true-value","false-value"],de=["name","tabindex","disabled","value"];var ce=Q(S(u(s({},{name:"ElCheckboxButton"}),{props:Z,emits:le,setup(e){const a=e,l=B(),{focus:o,isChecked:n,isDisabled:t,size:i,model:s,handleChange:u}=ne(a,l),{checkboxGroup:r}=ee(),d=G("checkbox"),c=m((()=>{var e,a,l,o;const n=null!=(a=null==(e=null==r?void 0:r.fill)?void 0:e.value)?a:"";return{backgroundColor:n,borderColor:n,color:null!=(o=null==(l=null==r?void 0:r.textColor)?void 0:l.value)?o:"",boxShadow:n?`-1px 0 0 0 ${n}`:void 0}}));return(e,a)=>(O(),_("label",{class:N([j(d).b("button"),j(d).bm("button",j(i)),j(d).is("disabled",j(t)),j(d).is("checked",j(n)),j(d).is("focus",j(o))])},[e.trueLabel||e.falseLabel?E((O(),_("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>A(s)?s.value=e:null),class:N(j(d).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:j(t),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>j(u)&&j(u)(...e)),onFocus:a[2]||(a[2]=e=>o.value=!0),onBlur:a[3]||(a[3]=e=>o.value=!1)},null,42,re)),[[D,j(s)]]):E((O(),_("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=e=>A(s)?s.value=e:null),class:N(j(d).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:j(t),value:e.label,onChange:a[5]||(a[5]=(...e)=>j(u)&&j(u)(...e)),onFocus:a[6]||(a[6]=e=>o.value=!0),onBlur:a[7]||(a[7]=e=>o.value=!1)},null,42,de)),[[D,j(s)]]),e.$slots.default||e.label?(O(),_("span",{key:2,class:N(j(d).be("button","inner")),style:q(j(n)?j(c):void 0)},[R(e.$slots,"default",{},(()=>[U($(e.label),1)]))],6)):K("v-if",!0)],2))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);var be=Q(S(u(s({},{name:"ElCheckboxGroup"}),{props:X,emits:oe,setup(e,{emit:a}){const l=e,{elFormItem:o}=ee(),{groupId:n,isLabeledByFormItem:t}=((e,{elFormItem:a})=>{const{inputId:l,isLabeledByFormItem:o}=v(e,{formItemContext:a});return{isLabeledByFormItem:o,groupId:l}})(l,{elFormItem:o}),i=g(),r=G("checkbox"),d=e=>{a(W,e),C((()=>{a("change",e)}))},c=m({get:()=>l.modelValue,set(e){d(e)}});return H("CheckboxGroup",u(s({name:"ElCheckboxGroup",modelValue:c},Y(l)),{checkboxGroupSize:i,changeEvent:d})),L((()=>l.modelValue),(()=>{var e;null==(e=o.validate)||e.call(o,"change").catch((e=>I()))})),(e,a)=>(O(),w(M(e.tag),{id:j(n),class:N(j(r).b("group")),role:"group","aria-label":j(t)?void 0:e.label||"checkbox-group","aria-labelledby":j(t)?j(o).labelId:void 0},{default:z((()=>[R(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const me=J(ue,{CheckboxButton:ce,CheckboxGroup:be}),ve=T(ce),pe=T(be);export{me as E,pe as a,ve as b};