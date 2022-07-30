
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{a8 as s,bA as a,aP as e,aM as t,ay as r,d as c,u as n,r as i,c as l,aD as o,ad as u,y as p,b as m,f as v,k as f,i as y,e as d,w as g,J as S,E as k,g as h,n as b,_ as E,q as z}from"./index.503ec71c.js";const _=s({size:{type:[Number,String],values:a,default:"",validator:s=>e(s)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:t},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:r(String),default:"cover"}}),j=["src","alt","srcset"];const q=z(E(c({name:"ElAvatar",props:_,emits:{error:s=>s instanceof Event},setup(s,{emit:a}){const t=s,r=n("avatar"),c=i(!1),E=l((()=>{const{size:s,icon:a,shape:e}=t,c=[r.b()];return o(s)&&c.push(r.m(s)),a&&c.push(r.m("icon")),e&&c.push(r.m(e)),c})),z=l((()=>{const{size:s}=t;return e(s)?r.cssVarBlock({size:u(s)||""}):void 0})),_=l((()=>({objectFit:t.fit})));function q(s){c.value=!0,a("error",s)}return p((()=>t.src),(()=>c.value=!1)),(s,a)=>(m(),v("span",{class:b(y(E)),style:f(y(z))},[!s.src&&!s.srcSet||c.value?s.icon?(m(),d(y(k),{key:1},{default:g((()=>[(m(),d(S(s.icon)))])),_:1})):h(s.$slots,"default",{key:2}):(m(),v("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:f(y(_)),onError:q},null,44,j))],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]));export{q as E};
