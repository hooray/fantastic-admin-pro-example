
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,f as l,h as a,w as m,bI as t,M as o,c7 as n,b as u,c6 as d}from"./index.6746a3d3.js";import{E as s}from"./el-input-number.8fa26574.js";import"./el-input.a13ee31e.js";import i from"./alert.11721400.js";import"./event.a088884a.js";import"./index.115b07a2.js";import"./el-alert.29862583.js";import"./el-link.66987f82.js";const r={components:{Alert:i},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})};"function"==typeof t&&t(r);var p=e(r,[["render",function(e,t,i,r,p,f){const V=o("Alert"),c=d,j=s,b=n;return u(),l("div",null,[a(V),a(c,{title:"数字输入框"}),a(b,{title:"基础用法",class:"demo"},{default:m((()=>[a(j,{modelValue:p.num,"onUpdate:modelValue":t[0]||(t[0]=e=>p.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),a(b,{title:"禁用状态",class:"demo"},{default:m((()=>[a(j,{modelValue:p.num2,"onUpdate:modelValue":t[1]||(t[1]=e=>p.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),a(b,{title:"步数",class:"demo"},{default:m((()=>[a(j,{modelValue:p.num3,"onUpdate:modelValue":t[2]||(t[2]=e=>p.num3=e),step:2},null,8,["modelValue"])])),_:1}),a(b,{title:"精度",class:"demo"},{default:m((()=>[a(j,{modelValue:p.num4,"onUpdate:modelValue":t[3]||(t[3]=e=>p.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),a(b,{title:"按钮位置",class:"demo"},{default:m((()=>[a(j,{modelValue:p.num5,"onUpdate:modelValue":t[4]||(t[4]=e=>p.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{p as default};
