
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(o,a,t)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t;import{c as s,a6 as d,f as p,e as m,w as n,i as c,b9 as u,m as f,b as j,h as b,ag as y,F as g,a2 as v,I as x}from"./index.6746a3d3.js";import{E as k}from"./el-drawer.342dac5f.js";import"./el-overlay.efabaf9a.js";import{E as V}from"./el-dialog.fa6edf36.js";import w from"./index.4197f96e.js";import"./use-dialog.7ad3a367.js";import"./event.a088884a.js";import"./index.59d17107.js";import"./el-loading.56024bc3.js";import"./el-form.65d9f06e.js";import"./isEqual.09ccf48c.js";import"./el-card.698085cd.js";/* empty css                       *//* empty css                        */import"./index.064d0f17.js";import"./el-input.a13ee31e.js";/* empty css               */import"./el-checkbox.023fa200.js";/* empty css                 *//* empty css                     */import"./index.3a869ca6.js";import"./aria.7c550f1b.js";import"./arrays.0b773881.js";import"./_baseFlatten.2f22bd4a.js";import"./index.56b6a42b.js";import"./index.66af64ac.js";import"./validator.2566d1ef.js";import"./el-form-item.3d23d1d6.js";import"./index.6e5f26c3.js";/* empty css                          */import"./el-table-column.e07b1484.js";import"./el-tooltip.0ca4bad9.js";const O=v("取 消"),_=v("确 定"),h={class:"buttons"},z=v("取 消"),P=v("确 定"),C={__name:"index",props:(E=((e,o)=>{for(var a in o||(o={}))r.call(o,a)&&i(e,a,o[a]);if(t)for(var a of t(o))l.call(o,a)&&i(e,a,o[a]);return e})({},w.props),F={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(E,a(F))),emits:["update:modelValue","success"],setup(e,{emit:o}){const a=e,{proxy:t}=x();let r=s({get:function(){return a.modelValue},set:function(e){o("update:modelValue",e)}});const l=s((()=>""==a.id?"新增运费模板":"编辑运费模板"));function i(){t.$refs.form.submit((()=>{o("success"),v()}))}function v(){r.value=!1}return(e,o)=>{const t=d,s=V,x=k;return j(),p("div",null,["dialog"===a.mode?(j(),m(s,{key:0,modelValue:c(r),"onUpdate:modelValue":o[0]||(o[0]=e=>u(r)?r.value=e:r=e),title:c(l),width:"800px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:n((()=>[b(t,{size:"large",onClick:v},{default:n((()=>[O])),_:1}),b(t,{type:"primary",size:"large",onClick:i},{default:n((()=>[_])),_:1})])),default:n((()=>[b(w,y({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===a.mode?(j(),m(x,{key:1,modelValue:c(r),"onUpdate:modelValue":o[1]||(o[1]=e=>u(r)?r.value=e:r=e),title:c(l),size:"800px","close-on-click-modal":!1,"destroy-on-close":""},{default:n((()=>[b(w,y({ref:"form"},w.props),null,16),g("div",h,[b(t,{size:"large",onClick:v},{default:n((()=>[z])),_:1}),b(t,{type:"primary",size:"large",onClick:i},{default:n((()=>[P])),_:1})])])),_:1},8,["modelValue","title"])):f("v-if",!0)])}}};var E,F;export{C as default};