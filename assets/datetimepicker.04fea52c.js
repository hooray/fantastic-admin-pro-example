
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,f as a,h as l,w as t,bN as d,I as o,bP as r,b as s,J as i,bO as n}from"./index.9587bc3d.js";import{E as m}from"./el-date-picker.090ad436.js";import"./el-input.54ba849c.js";import u from"./alert.3569ba32.js";import"./panel-time-pick.88156a19.js";import"./isEqual.f9b5563e.js";import"./index.358b0b8c.js";import"./arrays.21a21ad5.js";import"./index.fe6bda03.js";import"./event.d298a7ab.js";import"./el-alert.0e33fa9a.js";import"./el-link.1412d166.js";const p={components:{Alert:u},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},c=i("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof d&&d(p);const f=e(p,[["render",function(e,d,i,u,p,f){const b=o("Alert"),j=n,v=m,V=r;return s(),a("div",null,[l(b),l(j,{title:"日期时间选择器"}),l(V,{title:"日期和时间点",class:"demo"},{default:t((()=>[l(v,{modelValue:p.value1,"onUpdate:modelValue":d[0]||(d[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),l(V,{title:"日期和时间范围",class:"demo"},{default:t((()=>[l(v,{modelValue:p.value2,"onUpdate:modelValue":d[1]||(d[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),l(V,{title:"默认的起始与结束时刻",class:"demo"},{default:t((()=>[c,l(v,{modelValue:p.value3,"onUpdate:modelValue":d[2]||(d[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
