
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{b4 as n,bv as e}from"./index.503ec71c.js";const t=new Map;let o;function s(n,t){let o=[];return Array.isArray(t.arg)?o=t.arg:e(t.arg)&&o.push(t.arg),function(e,s){const a=t.instance.popperRef,d=e.target,u=null==s?void 0:s.target,i=!t||!t.instance,c=!d||!u,r=n.contains(d)||n.contains(u),l=n===d,g=o.length&&o.some((n=>null==n?void 0:n.contains(d)))||o.length&&o.includes(u),p=a&&(a.contains(d)||a.contains(u));i||c||r||l||g||p||t.value(e,s)}}n&&(document.addEventListener("mousedown",(n=>o=n)),document.addEventListener("mouseup",(n=>{for(const e of t.values())for(const{documentHandler:t}of e)t(n,o)})));const a={beforeMount(n,e){t.has(n)||t.set(n,[]),t.get(n).push({documentHandler:s(n,e),bindingFn:e.value})},updated(n,e){t.has(n)||t.set(n,[]);const o=t.get(n),a=o.findIndex((n=>n.bindingFn===e.oldValue)),d={documentHandler:s(n,e),bindingFn:e.value};a>=0?o.splice(a,1,d):o.push(d)},unmounted(n){t.delete(n)}};export{a as C};
