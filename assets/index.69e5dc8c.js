
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;import{c as s,a5 as d,f as p,e as m,w as c,i as n,b5 as f,m as u,b as j,h as b,ae as y,D as g,a1 as v,H as x}from"./index.859d1f2f.js";import{E as k}from"./el-drawer.cd1e2736.js";import"./el-overlay.da4fbcc2.js";import{E as V}from"./el-dialog.23481dab.js";import w from"./index.67289fea.js";import"./use-dialog2.af2c177c.js";import"./event2.c09267d7.js";import"./index2.d3244d9c.js";import"./el-loading.264180f4.js";import"./el-form.014673af.js";import"./isEqual.16f09498.js";import"./el-card.25c4a6fe.js";/* empty css                       *//* empty css                        */import"./index.df0ddf80.js";import"./el-input.ef35f9c7.js";/* empty css               */import"./el-checkbox.5bf5b5dd.js";/* empty css                 *//* empty css                     */import"./index2.060e065c.js";import"./aria2.dceaa135.js";import"./arrays2.9d0dd0a1.js";import"./_baseFlatten.512346a7.js";import"./index2.3ef639c9.js";import"./index2.2160865d.js";import"./validator2.7bff8561.js";import"./el-form-item.3d23d1d6.js";import"./index.ea70da50.js";/* empty css                          */import"./el-table-column.df001ccf.js";import"./el-tooltip.0ca4bad9.js";const O=v("取 消"),_=v("确 定"),h={class:"buttons"},z=v("取 消"),P=v("确 定"),C={__name:"index",props:(E=((e,o)=>{for(var t in o||(o={}))a.call(o,t)&&i(e,t,o[t]);if(r)for(var t of r(o))l.call(o,t)&&i(e,t,o[t]);return e})({},w.props),D={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(E,t(D))),emits:["update:modelValue","success"],setup(e,{emit:o}){const t=e,{proxy:r}=x();let a=s({get:function(){return t.modelValue},set:function(e){o("update:modelValue",e)}});const l=s((()=>""==t.id?"新增运费模板":"编辑运费模板"));function i(){r.$refs.form.submit((()=>{o("success"),v()}))}function v(){a.value=!1}return(e,o)=>{const r=d,s=V,x=k;return j(),p("div",null,["dialog"===t.mode?(j(),m(s,{key:0,modelValue:n(a),"onUpdate:modelValue":o[0]||(o[0]=e=>f(a)?a.value=e:a=e),title:n(l),width:"800px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:c((()=>[b(r,{size:"large",onClick:v},{default:c((()=>[O])),_:1}),b(r,{type:"primary",size:"large",onClick:i},{default:c((()=>[_])),_:1})])),default:c((()=>[b(w,y({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===t.mode?(j(),m(x,{key:1,modelValue:n(a),"onUpdate:modelValue":o[1]||(o[1]=e=>f(a)?a.value=e:a=e),title:n(l),size:"800px","close-on-click-modal":!1,"destroy-on-close":""},{default:c((()=>[b(w,y({ref:"form"},w.props),null,16),g("div",h,[b(r,{size:"large",onClick:v},{default:c((()=>[z])),_:1}),b(r,{type:"primary",size:"large",onClick:i},{default:c((()=>[P])),_:1})])])),_:1},8,["modelValue","title"])):u("v-if",!0)])}}};var E,D;export{C as default};
