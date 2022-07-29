
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{c as e,b as o,f as a,e as l,w as t,h as s,af as i,i as r,b8 as d,m,a2 as u,a8 as n,O as p}from"./index.9587bc3d.js";import{E as f}from"./el-drawer.f87ebc7f.js";import"./el-overlay.3a21a8d0.js";import{E as c}from"./el-dialog.56efe94f.js";import b from"./index.a69b484e.js";import"./use-dialog.50a4d896.js";import"./event.d298a7ab.js";import"./index.7b171845.js";import"./el-loading.7b1b970a.js";import"./el-form.569642f0.js";import"./isEqual.f9b5563e.js";import"./el-form-item.2e22de35.js";import"./el-input.54ba849c.js";const j=u("取 消"),y=u("确 定"),g=u("取 消"),V=u("确 定"),k={__name:"index",props:{...b.props,modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},emits:["update:modelValue","success"],setup(u,{emit:k}){const v=u,{proxy:x}=p();let _=e({get:function(){return v.modelValue},set:function(e){k("update:modelValue",e)}});const w=e((()=>""==v.id?"新增":"编辑"));function z(){x.$refs.form.submit((()=>{k("success"),C()}))}function C(){_.value=!1}return(e,u)=>{const p=n,k=c,x=f;return o(),a("div",null,["dialog"===v.mode?(o(),l(k,{key:0,modelValue:r(_),"onUpdate:modelValue":u[0]||(u[0]=e=>d(_)?_.value=e:_=e),title:r(w),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:t((()=>[s(p,{size:"large",onClick:C},{default:t((()=>[j])),_:1}),s(p,{type:"primary",size:"large",onClick:z},{default:t((()=>[y])),_:1})])),default:t((()=>[s(b,i({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===v.mode?(o(),l(x,{key:1,modelValue:r(_),"onUpdate:modelValue":u[1]||(u[1]=e=>d(_)?_.value=e:_=e),title:r(w),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{footer:t((()=>[s(p,{size:"large",onClick:C},{default:t((()=>[g])),_:1}),s(p,{type:"primary",size:"large",onClick:z},{default:t((()=>[V])),_:1})])),default:t((()=>[s(b,i({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):m("v-if",!0)])}}};export{k as default};
