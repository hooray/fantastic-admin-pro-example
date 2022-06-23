
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{bo as e,cj as a}from"./index.9bf5deda.js";var o={beforeMount(o,t){let n,l=null;const r=()=>t.value&&t.value(),u=()=>{Date.now()-n<100&&r(),clearInterval(l),l=null};e(o,"mousedown",(e=>{0===e.button&&(n=Date.now(),a(document,"mouseup",u),clearInterval(l),l=setInterval(r,100))}))}};export{o as v};
