
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;import{c as i,b as d,f as p,e as n,w as m,h as u,ag as c,i as f,b9 as b,F as j,m as y,a2 as g,a6 as v,I as V}from"./index.a82b8a9a.js";import{E as w}from"./el-drawer.92947e05.js";import"./el-overlay.7c347c0a.js";import{E as x}from"./el-dialog.874ae4ab.js";import O from"./index.e2ddc9e4.js";import"./use-dialog.042b04d8.js";import"./event.6c7ea317.js";import"./index.cd397b58.js";import"./el-loading.57736668.js";import"./el-form.da8f4f40.js";import"./isEqual.8b04b388.js";/* empty css                       *//* empty css                        */import"./el-form-item.e866842d.js";import"./el-input.20be2c8d.js";import"./index.75cd03b0.js";const k=g("取 消"),_=g("确 定"),z={class:"buttons"},P=g("取 消"),C=g("确 定"),E={__name:"index",props:(h=((e,o)=>{for(var t in o||(o={}))r.call(o,t)&&s(e,t,o[t]);if(a)for(var t of a(o))l.call(o,t)&&s(e,t,o[t]);return e})({},O.props),$={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(h,t($))),emits:["update:modelValue","success"],setup(e,{emit:o}){const t=e,{proxy:a}=V();let r=i({get:function(){return t.modelValue},set:function(e){o("update:modelValue",e)}});const l=i((()=>""==t.id?"新增管理员":"编辑管理员"));function s(){a.$refs.form.submit((()=>{o("success"),g()}))}function g(){r.value=!1}return(e,o)=>{const a=v,i=x,V=w;return d(),p("div",null,["dialog"===t.mode?(d(),n(i,{key:0,modelValue:f(r),"onUpdate:modelValue":o[0]||(o[0]=e=>b(r)?r.value=e:r=e),title:f(l),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:m((()=>[u(a,{size:"large",onClick:g},{default:m((()=>[k])),_:1}),u(a,{type:"primary",size:"large",onClick:s},{default:m((()=>[_])),_:1})])),default:m((()=>[u(O,c({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===t.mode?(d(),n(V,{key:1,modelValue:f(r),"onUpdate:modelValue":o[1]||(o[1]=e=>b(r)?r.value=e:r=e),title:f(l),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{default:m((()=>[u(O,c({ref:"form"},e.$props),null,16),j("div",z,[u(a,{size:"large",onClick:g},{default:m((()=>[P])),_:1}),u(a,{type:"primary",size:"large",onClick:s},{default:m((()=>[C])),_:1})])])),_:1},8,["modelValue","title"])):y("v-if",!0)])}}};var h,$;export{E as default};
