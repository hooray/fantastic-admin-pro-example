
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{o as e,bE as t,at as n,bb as o}from"./index.9bf5deda.js";const s=(s,a,m)=>{let u={offsetX:0,offsetY:0};const d=e=>{const t=e.clientX,n=e.clientY,{offsetX:a,offsetY:m}=u,d=s.value.getBoundingClientRect(),i=d.left,l=d.top,v=d.width,c=d.height,f=document.documentElement.clientWidth,r=document.documentElement.clientHeight,h=-i+a,E=-l+m,L=f-i-v+a,p=r-l-c+m,X=e=>{const d=Math.min(Math.max(a+e.clientX-t,h),L),i=Math.min(Math.max(m+e.clientY-n,E),p);u={offsetX:d,offsetY:i},s.value.style.transform=`translate(${o(d)}, ${o(i)})`},Y=()=>{document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",Y)};document.addEventListener("mousemove",X),document.addEventListener("mouseup",Y)},i=()=>{a.value&&s.value&&a.value.removeEventListener("mousedown",d)};e((()=>{t((()=>{m.value?a.value&&s.value&&a.value.addEventListener("mousedown",d):i()}))})),n((()=>{i()}))};export{s as u};
