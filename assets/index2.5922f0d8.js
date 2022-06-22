
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{o as e,bE as t,at as n,bb as o}from"./index.f897cb43.js";const s=(s,m,a)=>{let u={offsetX:0,offsetY:0};const i=e=>{const t=e.clientX,n=e.clientY,{offsetX:m,offsetY:a}=u,i=s.value.getBoundingClientRect(),l=i.left,c=i.top,d=i.width,v=i.height,f=document.documentElement.clientWidth,r=document.documentElement.clientHeight,h=-l+m,E=-c+a,L=f-l-d+m,p=r-c-v+a,X=e=>{const i=Math.min(Math.max(m+e.clientX-t,h),L),l=Math.min(Math.max(a+e.clientY-n,E),p);u={offsetX:i,offsetY:l},s.value.style.transform=`translate(${o(i)}, ${o(l)})`},Y=()=>{document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",Y)};document.addEventListener("mousemove",X),document.addEventListener("mouseup",Y)},l=()=>{m.value&&s.value&&m.value.removeEventListener("mousedown",i)};e((()=>{t((()=>{a.value?m.value&&s.value&&m.value.addEventListener("mousedown",i):l()}))})),n((()=>{l()}))};export{s as u};
