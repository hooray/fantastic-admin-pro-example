
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,f as l,h as a,w as t,bG as o,L as d,c5 as u,b as s,c4 as i}from"./index.9bf5deda.js";import{E as m}from"./el-switch.a479cedc.js";import c from"./alert.d8cd1f70.js";import"./validator2.7d32b2c9.js";import"./event2.c09267d7.js";import"./el-alert.c9229103.js";import"./el-link.5c5fb5df.js";const n={components:{Alert:c},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};"function"==typeof o&&o(n);var r=e(n,[["render",function(e,o,c,n,r,v){const f=d("Alert"),p=i,V=m,b=u;return s(),l("div",null,[a(f),a(p,{title:"开关"}),a(b,{title:"基础用法",class:"demo"},{default:t((()=>[a(V,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=e=>r.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),a(b,{title:"文字描述",class:"demo"},{default:t((()=>[a(V,{modelValue:r.value1,"onUpdate:modelValue":o[1]||(o[1]=e=>r.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),a(b,{title:"禁用状态",class:"demo"},{default:t((()=>[a(V,{modelValue:r.value2,"onUpdate:modelValue":o[2]||(o[2]=e=>r.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),a(V,{modelValue:r.value3,"onUpdate:modelValue":o[3]||(o[3]=e=>r.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])}]]);export{r as default};
