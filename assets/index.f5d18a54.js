
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(o,t,l)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l;import{c as i,b as d,f as n,e as p,w as m,h as u,af as f,i as c,b8 as y,m as b,a1 as j,a5 as g,H as v}from"./index.5043a866.js";import{E as V}from"./el-drawer.99160fcf.js";import"./el-overlay.98ff6c7a.js";import{E as w}from"./el-dialog.7e5f8960.js";import O from"./index.0b5a81ee.js";import"./use-dialog.fec8b844.js";import"./event.a088884a.js";import"./index.72f397d2.js";import"./el-loading.884e109c.js";import"./el-form.90522072.js";import"./isEqual.4c229d6b.js";import"./el-form-item.3d23d1d6.js";import"./el-input.47be8b34.js";const k=j("取 消"),x=j("确 定"),_=j("取 消"),z=j("确 定"),P={__name:"index",props:(C=((e,o)=>{for(var t in o||(o={}))a.call(o,t)&&s(e,t,o[t]);if(l)for(var t of l(o))r.call(o,t)&&s(e,t,o[t]);return e})({},O.props),E={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(C,t(E))),emits:["update:modelValue","success"],setup(e,{emit:o}){const t=e,{proxy:l}=v();let a=i({get:function(){return t.modelValue},set:function(e){o("update:modelValue",e)}});const r=i((()=>""==t.id?"新增":"编辑"));function s(){l.$refs.form.submit((()=>{o("success"),j()}))}function j(){a.value=!1}return(e,o)=>{const l=g,i=w,v=V;return d(),n("div",null,["dialog"===t.mode?(d(),p(i,{key:0,modelValue:c(a),"onUpdate:modelValue":o[0]||(o[0]=e=>y(a)?a.value=e:a=e),title:c(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:m((()=>[u(l,{size:"large",onClick:j},{default:m((()=>[k])),_:1}),u(l,{type:"primary",size:"large",onClick:s},{default:m((()=>[x])),_:1})])),default:m((()=>[u(O,f({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===t.mode?(d(),p(v,{key:1,modelValue:c(a),"onUpdate:modelValue":o[1]||(o[1]=e=>y(a)?a.value=e:a=e),title:c(r),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{footer:m((()=>[u(l,{size:"large",onClick:j},{default:m((()=>[_])),_:1}),u(l,{type:"primary",size:"large",onClick:s},{default:m((()=>[z])),_:1})])),default:m((()=>[u(O,f({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):b("v-if",!0)])}}};var C,E;export{P as default};