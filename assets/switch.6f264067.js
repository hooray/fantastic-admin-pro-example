
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,f as l,h as a,w as t,bP as o,F as d,bQ as u,b as s,bT as i}from"./index.45a1a0f2.js";import{E as m}from"./el-switch.aad8e22a.js";import n from"./alert.7af44d20.js";import"./validator.d7f5f1e8.js";import"./event.d298a7ab.js";import"./el-alert.cdb57e09.js";import"./el-link.8b940f1e.js";const r={components:{Alert:n},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};"function"==typeof o&&o(r);const v=e(r,[["render",function(e,o,n,r,v,c){const f=d("Alert"),p=i,V=m,b=u;return s(),l("div",null,[a(f),a(p,{title:"开关"}),a(b,{title:"基础用法",class:"demo"},{default:t((()=>[a(V,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),a(b,{title:"文字描述",class:"demo"},{default:t((()=>[a(V,{modelValue:v.value1,"onUpdate:modelValue":o[1]||(o[1]=e=>v.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),a(b,{title:"禁用状态",class:"demo"},{default:t((()=>[a(V,{modelValue:v.value2,"onUpdate:modelValue":o[2]||(o[2]=e=>v.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),a(V,{modelValue:v.value3,"onUpdate:modelValue":o[3]||(o[3]=e=>v.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])}]]);export{v as default};
