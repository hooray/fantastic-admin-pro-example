
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{c as e,b as o,f as l,e as a,w as t,h as s,af as i,i as r,b8 as d,m,a2 as u,a8 as n,O as p}from"./index.14f3ec2e.js";import{E as c}from"./el-drawer.a527d67d.js";import"./el-overlay.8fecca6c.js";import{E as f}from"./el-dialog.737a6758.js";import j from"./index.0d873d11.js";import"./use-dialog.07d7abc2.js";import"./event.d298a7ab.js";import"./index.f4151a41.js";import"./el-loading.b73130c8.js";import"./el-form.516181b4.js";import"./isEqual.e7591419.js";import"./el-form-item.2e22de35.js";import"./el-input.36e45e3c.js";const y=u("取 消"),g=u("确 定"),V=u("取 消"),b=u("确 定"),k={__name:"index",props:{...j.props,modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},emits:["update:modelValue","success"],setup(u,{emit:k}){const v=u,{proxy:x}=p();let _=e({get:function(){return v.modelValue},set:function(e){k("update:modelValue",e)}});const w=e((()=>""==v.id?"新增":"编辑"));function z(){x.$refs.form.submit((()=>{k("success"),C()}))}function C(){_.value=!1}return(e,u)=>{const p=n,k=f,x=c;return o(),l("div",null,["dialog"===v.mode?(o(),a(k,{key:0,modelValue:r(_),"onUpdate:modelValue":u[0]||(u[0]=e=>d(_)?_.value=e:_=e),title:r(w),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:t((()=>[s(p,{size:"large",onClick:C},{default:t((()=>[y])),_:1}),s(p,{type:"primary",size:"large",onClick:z},{default:t((()=>[g])),_:1})])),default:t((()=>[s(j,i({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===v.mode?(o(),a(x,{key:1,modelValue:r(_),"onUpdate:modelValue":u[1]||(u[1]=e=>d(_)?_.value=e:_=e),title:r(w),size:"600px","close-on-click-modal":!1,"destroy-on-close":""},{footer:t((()=>[s(p,{size:"large",onClick:C},{default:t((()=>[V])),_:1}),s(p,{type:"primary",size:"large",onClick:z},{default:t((()=>[b])),_:1})])),default:t((()=>[s(j,i({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):m("v-if",!0)])}}};export{k as default};
