
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,f as l,h as a,w as t,bG as o,L as u,c5 as d,b as s,c4 as i}from"./index.ec00d83b.js";import{E as m}from"./el-switch.5a599ee3.js";import n from"./alert.5fe0b947.js";import"./validator2.20071a9a.js";import"./event2.c09267d7.js";import"./el-alert.f51e3555.js";import"./el-link.b6ba3410.js";const r={components:{Alert:n},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};"function"==typeof o&&o(r);var c=e(r,[["render",function(e,o,n,r,c,v){const f=u("Alert"),p=i,V=m,b=d;return s(),l("div",null,[a(f),a(p,{title:"开关"}),a(b,{title:"基础用法",class:"demo"},{default:t((()=>[a(V,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=e=>c.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),a(b,{title:"文字描述",class:"demo"},{default:t((()=>[a(V,{modelValue:c.value1,"onUpdate:modelValue":o[1]||(o[1]=e=>c.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),a(b,{title:"禁用状态",class:"demo"},{default:t((()=>[a(V,{modelValue:c.value2,"onUpdate:modelValue":o[2]||(o[2]=e=>c.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),a(V,{modelValue:c.value3,"onUpdate:modelValue":o[3]||(o[3]=e=>c.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])}]]);export{c as default};
