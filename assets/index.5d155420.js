
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{bk as e,r as n,bl as l,bm as t,bn as r,y as u,bo as o,bp as s,bq as c}from"./index.3b0b287f.js";function i(e){var n;const l=c(e);return null!=(n=null==l?void 0:l.$el)?n:l}const a=e?window:void 0,f=e?window.document:void 0,d=e?window.navigator:void 0;function b(...e){let n,l,s,c;if(t(e[0])?([l,s,c]=e,n=a):[n,l,s,c]=e,!n)return r;let f=r;const d=u((()=>i(n)),(e=>{f(),e&&(e.addEventListener(l,s,c),f=()=>{e.removeEventListener(l,s,c),f=r})}),{immediate:!0,flush:"post"}),b=()=>{d(),f()};return o(b),b}function w(e,l=!1){const t=n(),r=()=>t.value=Boolean(e());return r(),s(r,l),t}function v(e={}){const{navigator:t=d,read:r=!1,source:u,copiedDuring:o=1500}=e,s=["copy","cut"],i=w((()=>t&&"clipboard"in t)),a=n(""),f=n(!1),v=l((()=>f.value=!1),o);function m(){t.clipboard.readText().then((e=>{a.value=e}))}if(i.value&&r)for(const n of s)b(n,m);return{isSupported:i,text:a,copied:f,copy:async function(e=c(u)){i.value&&null!=e&&(await t.clipboard.writeText(e),a.value=e,f.value=!0,v.start())}}}const m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F="__vueuse_ssr_handlers__";m[F]=m[F]||{},m[F];const p=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function E(e,l={}){const{document:t=f,autoExit:r=!1}=l,u=e||(null==t?void 0:t.querySelector("html")),s=n(!1);let c=p[0];const a=w((()=>{if(!t)return!1;for(const e of p)if(e[1]in t)return c=e,!0;return!1})),[d,v,m,,F]=c;async function E(){a.value&&((null==t?void 0:t[m])&&await t[v](),s.value=!1)}async function g(){if(!a.value)return;await E();const e=i(u);e&&(await e[d](),s.value=!0)}return t&&b(t,F,(()=>{s.value=!!(null==t?void 0:t[m])}),!1),r&&o(E),{isSupported:a,isFullscreen:s,enter:g,exit:E,toggle:async function(){s.value?await E():await g()}}}var g,k;(k=g||(g={})).UP="UP",k.RIGHT="RIGHT",k.DOWN="DOWN",k.LEFT="LEFT",k.NONE="NONE";export{E as a,v as u};
