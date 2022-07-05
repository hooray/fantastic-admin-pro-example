
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(a,r,s)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s;import{aa as o,br as l,aO as i,aL as p,az as u,d as f,u as v,r as y,c as m,aC as b,af as d,y as g,b as O,f as S,k as j,i as h,e as k,w,N as E,E as z,g as P,n as _,_ as q,q as x}from"./index.8029e3e3.js";const N=o({size:{type:[Number,String],values:l,default:"",validator:e=>i(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:p},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:u(String),default:"cover"}}),A={error:e=>e instanceof Event},B=["src","alt","srcset"],C=f((D=((e,a)=>{for(var r in a||(a={}))t.call(a,r)&&c(e,r,a[r]);if(s)for(var r of s(a))n.call(a,r)&&c(e,r,a[r]);return e})({},{name:"ElAvatar"}),a(D,r({props:N,emits:A,setup(e,{emit:a}){const r=e,s=v("avatar"),t=y(!1),n=m((()=>{const{size:e,icon:a,shape:t}=r,n=[s.b()];return b(e)&&n.push(s.m(e)),a&&n.push(s.m("icon")),t&&n.push(s.m(t)),n})),c=m((()=>{const{size:e}=r;return i(e)?s.cssVarBlock({size:d(e)||""}):void 0})),o=m((()=>({objectFit:r.fit})));function l(e){t.value=!0,a("error",e)}return g((()=>r.src),(()=>t.value=!1)),(e,a)=>(O(),S("span",{class:_(h(n)),style:j(h(c))},[!e.src&&!e.srcSet||t.value?e.icon?(O(),k(h(z),{key:1},{default:w((()=>[(O(),k(E(e.icon)))])),_:1})):P(e.$slots,"default",{key:2}):(O(),S("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:j(h(o)),onError:l},null,44,B))],6))}}))));var D;const F=x(q(C,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]));export{F as E};
