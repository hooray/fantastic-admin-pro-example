
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,f as a,h as l,w as t,bI as o,M as d,c7 as r,b as s,F as i,c6 as m}from"./index.1be4fcb7.js";import{E as n}from"./el-date-picker.399174bd.js";import"./el-input.94aad898.js";/* empty css                     */import u from"./alert.5d5e58a7.js";import"./panel-time-pick.d9c29f7d.js";import"./isEqual.25fe4591.js";import"./index.94468401.js";import"./arrays.65a60b1b.js";import"./index.e49a9783.js";import"./event.6c7ea317.js";import"./el-alert.f4fd6f63.js";import"./el-link.59e0f21a.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof o&&o(p);var f=e(p,[["render",function(e,o,i,u,p,f){const j=d("Alert"),v=m,V=n,b=r;return s(),a("div",null,[l(j),l(v,{title:"日期时间选择器"}),l(b,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(V,{modelValue:p.value1,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(b,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(V,{modelValue:p.value2,"onUpdate:modelValue":o[1]||(o[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(b,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(V,{modelValue:p.value3,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
