
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(o,a,t)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t;import{c as i,b as d,f as n,e as p,w as m,h as u,ag as f,i as c,b9 as y,F as b,m as j,a2 as g,a6 as v,I as V}from"./index.6746a3d3.js";import{E as w}from"./el-drawer.342dac5f.js";import"./el-overlay.efabaf9a.js";import{E as O}from"./el-dialog.fa6edf36.js";import k from"./index.055febcf.js";import"./use-dialog.7ad3a367.js";import"./event.a088884a.js";import"./index.59d17107.js";import"./el-loading.56024bc3.js";import"./el-form.65d9f06e.js";import"./isEqual.09ccf48c.js";import"./el-form-item.3d23d1d6.js";import"./el-input.a13ee31e.js";const x=g("取 消"),_=g("确 定"),z={class:"buttons"},P=g("取 消"),C=g("确 定"),E={__name:"index",props:(h=((e,o)=>{for(var a in o||(o={}))l.call(o,a)&&s(e,a,o[a]);if(t)for(var a of t(o))r.call(o,a)&&s(e,a,o[a]);return e})({},k.props),$={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(h,a($))),emits:["update:modelValue","success"],setup(e,{emit:o}){const a=e,{proxy:t}=V();let l=i({get:function(){return a.modelValue},set:function(e){o("update:modelValue",e)}});const r=i((()=>""==a.id?"新增部门":"编辑部门"));function s(){t.$refs.form.submit((()=>{o("success"),g()}))}function g(){l.value=!1}return(e,o)=>{const t=v,i=O,V=w;return d(),n("div",null,["dialog"===a.mode?(d(),p(i,{key:0,modelValue:c(l),"onUpdate:modelValue":o[0]||(o[0]=e=>y(l)?l.value=e:l=e),title:c(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:m((()=>[u(t,{size:"large",onClick:g},{default:m((()=>[x])),_:1}),u(t,{type:"primary",size:"large",onClick:s},{default:m((()=>[_])),_:1})])),default:m((()=>[u(k,f({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===a.mode?(d(),p(V,{key:1,modelValue:c(l),"onUpdate:modelValue":o[1]||(o[1]=e=>y(l)?l.value=e:l=e),title:c(r),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{default:m((()=>[u(k,f({ref:"form"},e.$props),null,16),b("div",z,[u(t,{size:"large",onClick:g},{default:m((()=>[P])),_:1}),u(t,{type:"primary",size:"large",onClick:s},{default:m((()=>[C])),_:1})])])),_:1},8,["modelValue","title"])):j("v-if",!0)])}}};var h,$;export{E as default};