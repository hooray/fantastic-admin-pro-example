
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;import{c as s,b as d,f as n,e as p,w as c,h as m,ae as u,i as f,bh as b,D as j,m as y,a1 as v,a5 as g,H as x}from"./index.7b80eec3.js";import{E as V}from"./el-drawer.c102ed77.js";import"./el-overlay.cbc75477.js";import{E as w}from"./el-dialog.bc515c53.js";import O from"./index.813fe3f4.js";import"./index2.d2d9a6ac.js";import"./event2.c09267d7.js";import"./index2.b0bd790b.js";/* empty css                   */import"./el-form.31a22a6c.js";import"./isEqual.085c2344.js";import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.58f47f0e.js";import"./directive2.c8b0c8aa.js";const k=v("取 消"),_=v("确 定"),z={class:"buttons"},P=v("取 消"),h=v("确 定"),C={__name:"index",props:(E=((e,o)=>{for(var t in o||(o={}))r.call(o,t)&&i(e,t,o[t]);if(a)for(var t of a(o))l.call(o,t)&&i(e,t,o[t]);return e})({},O.props),$={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(E,t($))),emits:["update:modelValue","success"],setup(e,{emit:o}){const t=e,{proxy:a}=x();let r=s({get:function(){return t.modelValue},set:function(e){o("update:modelValue",e)}});const l=s((()=>""==t.id?"新增职位":"编辑职位"));function i(){a.$refs.form.submit((()=>{o("success"),v()}))}function v(){r.value=!1}return(e,o)=>{const a=g,s=w,x=V;return d(),n("div",null,["dialog"===t.mode?(d(),p(s,{key:0,modelValue:f(r),"onUpdate:modelValue":o[0]||(o[0]=e=>b(r)?r.value=e:r=e),title:f(l),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:c((()=>[m(a,{size:"large",onClick:v},{default:c((()=>[k])),_:1}),m(a,{type:"primary",size:"large",onClick:i},{default:c((()=>[_])),_:1})])),default:c((()=>[m(O,u({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===t.mode?(d(),p(x,{key:1,modelValue:f(r),"onUpdate:modelValue":o[1]||(o[1]=e=>b(r)?r.value=e:r=e),title:f(l),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{default:c((()=>[m(O,u({ref:"form"},e.$props),null,16),j("div",z,[m(a,{size:"large",onClick:v},{default:c((()=>[P])),_:1}),m(a,{type:"primary",size:"large",onClick:i},{default:c((()=>[h])),_:1})])])),_:1},8,["modelValue","title"])):y("v-if",!0)])}}};var E,$;export{C as default};
