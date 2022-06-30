
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,v as e,aF as s,r as n,bF as t,o as l,a5 as o,f as u,h as r,D as c,w as d,bG as v,S as i,U as f,I as b,J as p,b as m,a1 as w,Q as I,P as _}from"./index.859d1f2f.js";const h=a=>(i("data-v-94b07d52"),a=a(),f(),a),y={class:"notfound"},x={class:"content"},F=h((()=>c("h1",null,"404",-1))),P=h((()=>c("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),j={__name:"[...all]",setup(a){const v=b(),i=p(),f=e(),h=s(),j=n({inter:null,countdown:5});function k(){i.push("/")}return t((()=>{clearInterval(j.value.inter)})),l((()=>{f.tabbar.enable&&h.remove(v.meta.activeMenu||v.fullPath),j.value.inter=setInterval((()=>{j.value.countdown--,0==j.value.countdown&&(clearInterval(j.value.inter),k())}),1e3)})),(a,e)=>{const s=_,n=o;return m(),u("div",y,[r(s,{name:"404",class:"icon"}),c("div",x,[F,P,r(n,{type:"primary",onClick:k},{default:d((()=>[w(I(j.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof v&&v(j);var k=a(j,[["__scopeId","data-v-94b07d52"]]);export{k as default};
