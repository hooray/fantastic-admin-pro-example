
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,f as a,h as l,w as t,bI as d,M as o,c7 as r,b as s,F as i,c6 as m}from"./index.d45ed42d.js";import{E as n}from"./el-date-picker.74b69cb3.js";import"./el-input.f0fe7b13.js";/* empty css                     */import u from"./alert.d8e1a1d6.js";import"./panel-time-pick.2a551fb0.js";import"./isEqual.02b698d2.js";import"./index.deb3bfb6.js";import"./arrays.65a60b1b.js";import"./index.ad76f6b9.js";import"./event.6c7ea317.js";import"./el-alert.24a2fcb4.js";import"./el-link.3ffa9be7.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof d&&d(p);var f=e(p,[["render",function(e,d,i,u,p,f){const b=o("Alert"),j=m,v=n,V=r;return s(),a("div",null,[l(b),l(j,{title:"日期时间选择器"}),l(V,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(v,{modelValue:p.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(V,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(v,{modelValue:p.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(V,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(v,{modelValue:p.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
