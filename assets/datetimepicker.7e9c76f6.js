
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,f as a,h as l,w as t,bI as o,M as r,c7 as d,b as s,F as i,c6 as m}from"./index.8029e3e3.js";import{E as n}from"./el-date-picker.2c9413a7.js";import"./el-input.636fea0c.js";/* empty css                     */import u from"./alert.1bf7a5bd.js";import"./panel-time-pick.d2271e39.js";import"./isEqual.7dc35c5c.js";import"./index.7fe682c4.js";import"./arrays.0b773881.js";import"./index.e7b6630f.js";import"./event.a088884a.js";import"./el-alert.cc15163a.js";import"./el-link.76aaed86.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof o&&o(p);var f=e(p,[["render",function(e,o,i,u,p,f){const j=r("Alert"),v=m,V=n,b=d;return s(),a("div",null,[l(j),l(v,{title:"日期时间选择器"}),l(b,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(V,{modelValue:p.value1,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(b,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(V,{modelValue:p.value2,"onUpdate:modelValue":o[1]||(o[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(b,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(V,{modelValue:p.value3,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
