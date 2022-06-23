
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(a,r,s)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s;import{a9 as o,bm as l,aK as i,aH as p,aw as u,d as f,u as b,r as v,c as y,ad as m,bb as d,y as g,b as S,f as O,k as j,i as h,e as k,w,M as E,E as P,g as z,n as _,_ as q,q as x}from"./index.9bf5deda.js";const A=o({size:{type:[Number,String],values:l,default:"",validator:e=>i(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:p},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:u(String),default:"cover"}}),B={error:e=>e instanceof Event},D=["src","alt","srcset"],F=f((H=((e,a)=>{for(var r in a||(a={}))t.call(a,r)&&c(e,r,a[r]);if(s)for(var r of s(a))n.call(a,r)&&c(e,r,a[r]);return e})({},{name:"ElAvatar"}),a(H,r({props:A,emits:B,setup(e,{emit:a}){const r=e,s=b("avatar"),t=v(!1),n=y((()=>{const{size:e,icon:a,shape:t}=r,n=[s.b()];return m(e)&&n.push(s.m(e)),a&&n.push(s.m("icon")),t&&n.push(s.m(t)),n})),c=y((()=>{const{size:e}=r;return i(e)?s.cssVarBlock({size:d(e)||""}):void 0})),o=y((()=>({objectFit:r.fit})));function l(e){t.value=!0,a("error",e)}return g((()=>r.src),(()=>t.value=!1)),(e,a)=>(S(),O("span",{class:_(h(n)),style:j(h(c))},[!e.src&&!e.srcSet||t.value?e.icon?(S(),k(h(P),{key:1},{default:w((()=>[(S(),k(E(e.icon)))])),_:1})):z(e.$slots,"default",{key:2}):(S(),O("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:j(h(o)),onError:l},null,44,D))],6))}}))));var H;const I=x(q(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]));export{I as E};
