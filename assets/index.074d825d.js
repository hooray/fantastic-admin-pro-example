
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;import{c as i,b as d,f as n,e as p,w as m,h as u,ag as c,i as f,b9 as b,m as y,a2 as j,a6 as g,I as v}from"./index.1be4fcb7.js";import{E as V}from"./el-drawer.d0c0584c.js";import"./el-overlay.117f78cc.js";import{E as w}from"./el-dialog.1955d5bc.js";import O from"./index.620085ca.js";import"./use-dialog.d524bc87.js";import"./event.6c7ea317.js";import"./index.6a7205e4.js";import"./el-loading.a484b884.js";import"./el-form.1b6a5574.js";import"./isEqual.25fe4591.js";import"./el-form-item.e866842d.js";import"./el-input.94aad898.js";const k=j("取 消"),x=j("确 定"),_=j("取 消"),z=j("确 定"),P={__name:"index",props:(C=((e,o)=>{for(var t in o||(o={}))l.call(o,t)&&s(e,t,o[t]);if(a)for(var t of a(o))r.call(o,t)&&s(e,t,o[t]);return e})({},O.props),E={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(C,t(E))),emits:["update:modelValue","success"],setup(e,{emit:o}){const t=e,{proxy:a}=v();let l=i({get:function(){return t.modelValue},set:function(e){o("update:modelValue",e)}});const r=i((()=>""==t.id?"新增":"编辑"));function s(){a.$refs.form.submit((()=>{o("success"),j()}))}function j(){l.value=!1}return(e,o)=>{const a=g,i=w,v=V;return d(),n("div",null,["dialog"===t.mode?(d(),p(i,{key:0,modelValue:f(l),"onUpdate:modelValue":o[0]||(o[0]=e=>b(l)?l.value=e:l=e),title:f(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:m((()=>[u(a,{size:"large",onClick:j},{default:m((()=>[k])),_:1}),u(a,{type:"primary",size:"large",onClick:s},{default:m((()=>[x])),_:1})])),default:m((()=>[u(O,c({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===t.mode?(d(),p(v,{key:1,modelValue:f(l),"onUpdate:modelValue":o[1]||(o[1]=e=>b(l)?l.value=e:l=e),title:f(r),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{footer:m((()=>[u(a,{size:"large",onClick:j},{default:m((()=>[_])),_:1}),u(a,{type:"primary",size:"large",onClick:s},{default:m((()=>[z])),_:1})])),default:m((()=>[u(O,c({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):y("v-if",!0)])}}};var C,E;export{P as default};
