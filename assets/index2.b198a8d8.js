
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{o as e,bE as t,at as n,bb as o}from"./index.f70e8cdd.js";const s=(s,m,a)=>{let u={offsetX:0,offsetY:0};const d=e=>{const t=e.clientX,n=e.clientY,{offsetX:m,offsetY:a}=u,d=s.value.getBoundingClientRect(),i=d.left,l=d.top,c=d.width,v=d.height,f=document.documentElement.clientWidth,r=document.documentElement.clientHeight,h=-i+m,E=-l+a,L=f-i-c+m,p=r-l-v+a,X=e=>{const d=Math.min(Math.max(m+e.clientX-t,h),L),i=Math.min(Math.max(a+e.clientY-n,E),p);u={offsetX:d,offsetY:i},s.value.style.transform=`translate(${o(d)}, ${o(i)})`},Y=()=>{document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",Y)};document.addEventListener("mousemove",X),document.addEventListener("mouseup",Y)},i=()=>{m.value&&s.value&&m.value.removeEventListener("mousedown",d)};e((()=>{t((()=>{a.value?m.value&&s.value&&m.value.addEventListener("mousedown",d):i()}))})),n((()=>{i()}))};export{s as u};
