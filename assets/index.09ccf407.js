
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{o as e,aA as t,au as n,ad as o}from"./index.45a1a0f2.js";const a=(a,s,m)=>{let u={offsetX:0,offsetY:0};const i=e=>{const t=e.clientX,n=e.clientY,{offsetX:s,offsetY:m}=u,i=a.value.getBoundingClientRect(),l=i.left,d=i.top,v=i.width,c=i.height,f=document.documentElement.clientWidth,r=document.documentElement.clientHeight,h=-l+s,E=-d+m,L=f-l-v+s,p=r-d-c+m,X=e=>{const i=Math.min(Math.max(s+e.clientX-t,h),L),l=Math.min(Math.max(m+e.clientY-n,E),p);u={offsetX:i,offsetY:l},a.value.style.transform=`translate(${o(i)}, ${o(l)})`},Y=()=>{document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",Y)};document.addEventListener("mousemove",X),document.addEventListener("mouseup",Y)},l=()=>{s.value&&a.value&&s.value.removeEventListener("mousedown",i)};e((()=>{t((()=>{m.value?s.value&&a.value&&s.value.addEventListener("mousedown",i):l()}))})),n((()=>{l()}))};export{a as u};
