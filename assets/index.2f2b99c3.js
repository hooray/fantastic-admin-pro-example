
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(o,a,t)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t;import{c as i,b as d,f as p,e as n,w as m,h as u,ag as c,i as f,b9 as b,F as j,m as y,a2 as g,a6 as v,I as V}from"./index.6746a3d3.js";import{E as w}from"./el-drawer.342dac5f.js";import"./el-overlay.efabaf9a.js";import{E as x}from"./el-dialog.fa6edf36.js";import O from"./index.351083c4.js";import"./use-dialog.7ad3a367.js";import"./event.a088884a.js";import"./index.59d17107.js";import"./el-loading.56024bc3.js";import"./el-form.65d9f06e.js";import"./isEqual.09ccf48c.js";/* empty css                       *//* empty css                        */import"./el-form-item.3d23d1d6.js";import"./el-input.a13ee31e.js";import"./index.3a869ca6.js";const k=g("取 消"),_=g("确 定"),z={class:"buttons"},P=g("取 消"),C=g("确 定"),E={__name:"index",props:(h=((e,o)=>{for(var a in o||(o={}))r.call(o,a)&&s(e,a,o[a]);if(t)for(var a of t(o))l.call(o,a)&&s(e,a,o[a]);return e})({},O.props),$={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(h,a($))),emits:["update:modelValue","success"],setup(e,{emit:o}){const a=e,{proxy:t}=V();let r=i({get:function(){return a.modelValue},set:function(e){o("update:modelValue",e)}});const l=i((()=>""==a.id?"新增管理员":"编辑管理员"));function s(){t.$refs.form.submit((()=>{o("success"),g()}))}function g(){r.value=!1}return(e,o)=>{const t=v,i=x,V=w;return d(),p("div",null,["dialog"===a.mode?(d(),n(i,{key:0,modelValue:f(r),"onUpdate:modelValue":o[0]||(o[0]=e=>b(r)?r.value=e:r=e),title:f(l),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:m((()=>[u(t,{size:"large",onClick:g},{default:m((()=>[k])),_:1}),u(t,{type:"primary",size:"large",onClick:s},{default:m((()=>[_])),_:1})])),default:m((()=>[u(O,c({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===a.mode?(d(),n(V,{key:1,modelValue:f(r),"onUpdate:modelValue":o[1]||(o[1]=e=>b(r)?r.value=e:r=e),title:f(l),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{default:m((()=>[u(O,c({ref:"form"},e.$props),null,16),j("div",z,[u(t,{size:"large",onClick:g},{default:m((()=>[P])),_:1}),u(t,{type:"primary",size:"large",onClick:s},{default:m((()=>[C])),_:1})])])),_:1},8,["modelValue","title"])):y("v-if",!0)])}}};var h,$;export{E as default};