
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,f as a,h as l,w as t,bG as o,L as d,c5 as r,b as s,D as i,c4 as m}from"./index.8f9b9927.js";import{E as n}from"./el-date-picker.1c10167a.js";/* empty css                 *//* empty css                     */import u from"./alert.2c2eb3fa.js";import"./panel-time-pick2.aa2e7777.js";import"./index2.55f6ed3f.js";import"./event2.c09267d7.js";import"./isEqual.8a77112b.js";import"./index2.c2b00f39.js";import"./arrays2.9d0dd0a1.js";import"./index2.563cac1c.js";import"./el-alert.a7306c15.js";import"./el-link.e4e61258.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof o&&o(p);var f=e(p,[["render",function(e,o,i,u,p,f){const j=d("Alert"),v=m,b=n,V=r;return s(),a("div",null,[l(j),l(v,{title:"日期时间选择器"}),l(V,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(b,{modelValue:p.value1,"onUpdate:modelValue":o[0]||(o[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(V,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(b,{modelValue:p.value2,"onUpdate:modelValue":o[1]||(o[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(V,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(b,{modelValue:p.value3,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
