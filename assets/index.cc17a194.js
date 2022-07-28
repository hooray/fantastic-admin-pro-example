
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{an as n,bm as e}from"./index.a82b8a9a.js";const t=new Map;let a;function o(n,t){let a=[];return Array.isArray(t.arg)?a=t.arg:e(t.arg)&&a.push(t.arg),function(e,o){const s=t.instance.popperRef,d=e.target,u=null==o?void 0:o.target,i=!t||!t.instance,r=!d||!u,c=n.contains(d)||n.contains(u),l=n===d,g=a.length&&a.some((n=>null==n?void 0:n.contains(d)))||a.length&&a.includes(u),m=s&&(s.contains(d)||s.contains(u));i||r||c||l||g||m||t.value(e,o)}}n&&(document.addEventListener("mousedown",(n=>a=n)),document.addEventListener("mouseup",(n=>{for(const e of t.values())for(const{documentHandler:t}of e)t(n,a)})));const s={beforeMount(n,e){t.has(n)||t.set(n,[]),t.get(n).push({documentHandler:o(n,e),bindingFn:e.value})},updated(n,e){t.has(n)||t.set(n,[]);const a=t.get(n),s=a.findIndex((n=>n.bindingFn===e.oldValue)),d={documentHandler:o(n,e),bindingFn:e.value};s>=0?a.splice(s,1,d):a.push(d)},unmounted(n){t.delete(n)}};export{s as C};
