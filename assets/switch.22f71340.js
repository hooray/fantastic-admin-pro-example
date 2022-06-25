
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,f as l,h as a,w as t,bG as o,L as d,c5 as u,b as s,c4 as i}from"./index.21d85186.js";import{E as m}from"./el-switch.dd197975.js";import n from"./alert.5a43e0ee.js";import"./validator2.2b4b312f.js";import"./event2.c09267d7.js";import"./el-alert.16568e62.js";import"./el-link.00ee6a59.js";const r={components:{Alert:n},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};"function"==typeof o&&o(r);var v=e(r,[["render",function(e,o,n,r,v,c){const p=d("Alert"),f=i,V=m,j=u;return s(),l("div",null,[a(p),a(f,{title:"开关"}),a(j,{title:"基础用法",class:"demo"},{default:t((()=>[a(V,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),a(j,{title:"文字描述",class:"demo"},{default:t((()=>[a(V,{modelValue:v.value1,"onUpdate:modelValue":o[1]||(o[1]=e=>v.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),a(j,{title:"禁用状态",class:"demo"},{default:t((()=>[a(V,{modelValue:v.value2,"onUpdate:modelValue":o[2]||(o[2]=e=>v.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),a(V,{modelValue:v.value3,"onUpdate:modelValue":o[3]||(o[3]=e=>v.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])}]]);export{v as default};
