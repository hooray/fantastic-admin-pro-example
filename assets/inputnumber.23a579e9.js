
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,f as l,h as m,w as t,bG as a,L as o,c5 as n,b as u,c4 as d}from"./index.95bdb5c1.js";import{E as s}from"./el-input-number.24469d1f.js";/* empty css                 */import i from"./alert.f23b0fe8.js";import"./index2.3c86b1b9.js";import"./event2.c09267d7.js";import"./index2.5e1b32d6.js";import"./el-alert.2c6b9515.js";import"./el-link.21155e6b.js";const r={components:{Alert:i},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};"function"==typeof a&&a(r);var p=e(r,[["render",function(e,a,i,r,p,c){const f=o("Alert"),V=d,b=s,j=n;return u(),l("div",null,[m(f),m(V,{title:"数字输入框"}),m(j,{title:"基础用法",class:"demo"},{default:t((()=>[m(b,{modelValue:p.num,"onUpdate:modelValue":a[0]||(a[0]=e=>p.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),m(j,{title:"禁用状态",class:"demo"},{default:t((()=>[m(b,{modelValue:p.num2,"onUpdate:modelValue":a[1]||(a[1]=e=>p.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),m(j,{title:"步数",class:"demo"},{default:t((()=>[m(b,{modelValue:p.num3,"onUpdate:modelValue":a[2]||(a[2]=e=>p.num3=e),step:2},null,8,["modelValue"])])),_:1}),m(j,{title:"精度",class:"demo"},{default:t((()=>[m(b,{modelValue:p.num4,"onUpdate:modelValue":a[3]||(a[3]=e=>p.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),m(j,{title:"按钮位置",class:"demo"},{default:t((()=>[m(b,{modelValue:p.num5,"onUpdate:modelValue":a[4]||(a[4]=e=>p.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{p as default};
