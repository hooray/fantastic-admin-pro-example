
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{c as e,b as o,f as l,e as a,w as t,h as s,af as d,i,b8 as r,m,a2 as u,a8 as n,O as p}from"./index.252503d3.js";import{E as f}from"./el-drawer.c0d48fcd.js";import"./el-overlay.4ed61f02.js";import{E as c}from"./el-dialog.32934006.js";import j from"./index.4df451ca.js";import"./use-dialog.2b262b8e.js";import"./event.d298a7ab.js";import"./index.c0a7b230.js";import"./el-loading.15847d8e.js";import"./el-form.0205599e.js";import"./isEqual.30ea9237.js";import"./el-form-item.2e22de35.js";import"./el-input.dc2b6950.js";const y=u("取 消"),g=u("确 定"),V=u("取 消"),b=u("确 定"),k={__name:"index",props:{...j.props,modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},emits:["update:modelValue","success"],setup(u,{emit:k}){const v=u,{proxy:x}=p();let _=e({get:function(){return v.modelValue},set:function(e){k("update:modelValue",e)}});const w=e((()=>""==v.id?"新增":"编辑"));function z(){x.$refs.form.submit((()=>{k("success"),C()}))}function C(){_.value=!1}return(e,u)=>{const p=n,k=c,x=f;return o(),l("div",null,["dialog"===v.mode?(o(),a(k,{key:0,modelValue:i(_),"onUpdate:modelValue":u[0]||(u[0]=e=>r(_)?_.value=e:_=e),title:i(w),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:t((()=>[s(p,{size:"large",onClick:C},{default:t((()=>[y])),_:1}),s(p,{type:"primary",size:"large",onClick:z},{default:t((()=>[g])),_:1})])),default:t((()=>[s(j,d({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===v.mode?(o(),a(x,{key:1,modelValue:i(_),"onUpdate:modelValue":u[1]||(u[1]=e=>r(_)?_.value=e:_=e),title:i(w),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{footer:t((()=>[s(p,{size:"large",onClick:C},{default:t((()=>[V])),_:1}),s(p,{type:"primary",size:"large",onClick:z},{default:t((()=>[b])),_:1})])),default:t((()=>[s(j,d({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):m("v-if",!0)])}}};export{k as default};
