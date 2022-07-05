
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{bt as e,cl as t}from"./index.a9c2df36.js";var a={beforeMount(a,l){let n,o=null;const r=()=>l.value&&l.value(),u=()=>{Date.now()-n<100&&r(),clearInterval(o),o=null};e(a,"mousedown",(e=>{0===e.button&&(n=Date.now(),t(document,"mouseup",u),clearInterval(o),o=setInterval(r,100))}))}};export{a as v};
