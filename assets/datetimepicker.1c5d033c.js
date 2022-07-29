
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,f as a,h as l,w as t,bP as d,F as o,bQ as r,b as s,G as i,bT as n}from"./index.45a1a0f2.js";import{E as m}from"./el-date-picker.eae3ed68.js";import"./el-input.ec9522af.js";import u from"./alert.7af44d20.js";import"./panel-time-pick.2db2b32f.js";import"./isEqual.e37d1fd8.js";import"./index.358b0b8c.js";import"./arrays.21a21ad5.js";import"./index.d877313e.js";import"./event.d298a7ab.js";import"./el-alert.cdb57e09.js";import"./el-link.8b940f1e.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof d&&d(p);const f=e(p,[["render",function(e,d,i,u,p,f){const j=o("Alert"),v=n,b=m,V=r;return s(),a("div",null,[l(j),l(v,{title:"日期时间选择器"}),l(V,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(b,{modelValue:p.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(V,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(b,{modelValue:p.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(V,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(b,{modelValue:p.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
