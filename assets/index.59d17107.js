
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{o as e,bG as t,aw as n,af as o}from"./index.6746a3d3.js";const s=(s,a,m)=>{let u={offsetX:0,offsetY:0};const i=e=>{const t=e.clientX,n=e.clientY,{offsetX:a,offsetY:m}=u,i=s.value.getBoundingClientRect(),l=i.left,d=i.top,v=i.width,c=i.height,f=document.documentElement.clientWidth,r=document.documentElement.clientHeight,h=-l+a,E=-d+m,L=f-l-v+a,p=r-d-c+m,X=e=>{const i=Math.min(Math.max(a+e.clientX-t,h),L),l=Math.min(Math.max(m+e.clientY-n,E),p);u={offsetX:i,offsetY:l},s.value.style.transform=`translate(${o(i)}, ${o(l)})`},Y=()=>{document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",Y)};document.addEventListener("mousemove",X),document.addEventListener("mouseup",Y)},l=()=>{a.value&&s.value&&a.value.removeEventListener("mousedown",i)};e((()=>{t((()=>{m.value?a.value&&s.value&&a.value.addEventListener("mousedown",i):l()}))})),n((()=>{l()}))};export{s as u};
