
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,f as l,h as a,w as m,bI as t,M as o,c7 as n,b as u,c6 as d}from"./index.a9c2df36.js";import{E as s}from"./el-input-number.b3ef1fe2.js";import"./el-input.c05163b3.js";import i from"./alert.c495661a.js";import"./event.a088884a.js";import"./index.670dbc91.js";import"./el-alert.3a93e434.js";import"./el-link.dc1c61d1.js";const r={components:{Alert:i},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};"function"==typeof t&&t(r);var p=e(r,[["render",function(e,t,i,r,p,c){const f=o("Alert"),V=d,b=s,j=n;return u(),l("div",null,[a(f),a(V,{title:"数字输入框"}),a(j,{title:"基础用法",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num,"onUpdate:modelValue":t[0]||(t[0]=e=>p.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),a(j,{title:"禁用状态",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num2,"onUpdate:modelValue":t[1]||(t[1]=e=>p.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),a(j,{title:"步数",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num3,"onUpdate:modelValue":t[2]||(t[2]=e=>p.num3=e),step:2},null,8,["modelValue"])])),_:1}),a(j,{title:"精度",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num4,"onUpdate:modelValue":t[3]||(t[3]=e=>p.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),a(j,{title:"按钮位置",class:"demo"},{default:m((()=>[a(b,{modelValue:p.num5,"onUpdate:modelValue":t[4]||(t[4]=e=>p.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{p as default};
