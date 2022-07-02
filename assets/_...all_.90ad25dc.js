
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,v as e,aI as s,r as n,bG as t,o as l,a5 as o,f as u,h as r,D as c,w as v,bH as d,S as i,U as f,I as b,J as p,b as m,a1 as I,Q as w,P as _}from"./index.5043a866.js";const h=a=>(i("data-v-94b07d52"),a=a(),f(),a),y={class:"notfound"},x={class:"content"},P=h((()=>c("h1",null,"404",-1))),j=h((()=>c("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),k={__name:"[...all]",setup(a){const d=b(),i=p(),f=e(),h=s(),k=n({inter:null,countdown:5});function z(){i.push("/")}return t((()=>{clearInterval(k.value.inter)})),l((()=>{f.tabbar.enable&&h.remove(d.meta.activeMenu||d.fullPath),k.value.inter=setInterval((()=>{k.value.countdown--,0==k.value.countdown&&(clearInterval(k.value.inter),z())}),1e3)})),(a,e)=>{const s=_,n=o;return m(),u("div",y,[r(s,{name:"404",class:"icon"}),c("div",x,[P,j,r(n,{type:"primary",onClick:z},{default:v((()=>[I(w(k.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof d&&d(k);var z=a(k,[["__scopeId","data-v-94b07d52"]]);export{z as default};
