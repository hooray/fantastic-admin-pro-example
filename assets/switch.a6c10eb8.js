
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,f as l,h as a,w as t,bH as o,L as u,c6 as d,b as s,c5 as i}from"./index.61feeb3e.js";import{E as m}from"./el-switch.415d06bc.js";import n from"./alert.e6893b37.js";import"./validator.39d2a3bb.js";import"./event.fa25aaef.js";import"./el-alert.48779db2.js";import"./el-link.af702373.js";const r={components:{Alert:n},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};"function"==typeof o&&o(r);var v=e(r,[["render",function(e,o,n,r,v,c){const f=u("Alert"),p=i,V=m,b=d;return s(),l("div",null,[a(f),a(p,{title:"开关"}),a(b,{title:"基础用法",class:"demo"},{default:t((()=>[a(V,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),a(b,{title:"文字描述",class:"demo"},{default:t((()=>[a(V,{modelValue:v.value1,"onUpdate:modelValue":o[1]||(o[1]=e=>v.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),a(b,{title:"禁用状态",class:"demo"},{default:t((()=>[a(V,{modelValue:v.value2,"onUpdate:modelValue":o[2]||(o[2]=e=>v.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),a(V,{modelValue:v.value3,"onUpdate:modelValue":o[3]||(o[3]=e=>v.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])}]]);export{v as default};
