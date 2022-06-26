
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{bo as e,cj as o}from"./index.7b80eec3.js";var t={beforeMount(t,a){let n,l=null;const r=()=>a.value&&a.value(),u=()=>{Date.now()-n<100&&r(),clearInterval(l),l=null};e(t,"mousedown",(e=>{0===e.button&&(n=Date.now(),o(document,"mouseup",u),clearInterval(l),l=setInterval(r,100))}))}};export{t as v};
