
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;import{c as s,b as d,f as p,e as n,w as m,h as u,ae as c,i as f,bh as b,D as j,m as y,a1 as g,a5 as v,H as x}from"./index.95bdb5c1.js";import{E as V}from"./el-drawer.0dafb42b.js";import"./el-overlay.1a85e82b.js";import{E as w}from"./el-dialog.12fd928f.js";import O from"./index.03b2bbdf.js";import"./index2.a7a37a93.js";import"./event2.c09267d7.js";import"./index2.c52876cb.js";/* empty css                   */import"./el-form.93ee5587.js";import"./isEqual.b26dc892.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";/* empty css                 */import"./index2.3c86b1b9.js";import"./index2.372ef9d6.js";import"./directive2.ffeec753.js";const k=g("取 消"),_=g("确 定"),z={class:"buttons"},P=g("取 消"),h=g("确 定"),C={__name:"index",props:(E=((e,o)=>{for(var t in o||(o={}))a.call(o,t)&&i(e,t,o[t]);if(r)for(var t of r(o))l.call(o,t)&&i(e,t,o[t]);return e})({},O.props),$={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(E,t($))),emits:["update:modelValue","success"],setup(e,{emit:o}){const t=e,{proxy:r}=x();let a=s({get:function(){return t.modelValue},set:function(e){o("update:modelValue",e)}});const l=s((()=>""==t.id?"新增管理员":"编辑管理员"));function i(){r.$refs.form.submit((()=>{o("success"),g()}))}function g(){a.value=!1}return(e,o)=>{const r=v,s=w,x=V;return d(),p("div",null,["dialog"===t.mode?(d(),n(s,{key:0,modelValue:f(a),"onUpdate:modelValue":o[0]||(o[0]=e=>b(a)?a.value=e:a=e),title:f(l),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:m((()=>[u(r,{size:"large",onClick:g},{default:m((()=>[k])),_:1}),u(r,{type:"primary",size:"large",onClick:i},{default:m((()=>[_])),_:1})])),default:m((()=>[u(O,c({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===t.mode?(d(),n(x,{key:1,modelValue:f(a),"onUpdate:modelValue":o[1]||(o[1]=e=>b(a)?a.value=e:a=e),title:f(l),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{default:m((()=>[u(O,c({ref:"form"},e.$props),null,16),j("div",z,[u(r,{size:"large",onClick:g},{default:m((()=>[P])),_:1}),u(r,{type:"primary",size:"large",onClick:i},{default:m((()=>[h])),_:1})])])),_:1},8,["modelValue","title"])):y("v-if",!0)])}}};var E,$;export{C as default};
