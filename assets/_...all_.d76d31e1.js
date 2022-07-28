
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,v as e,aI as s,r as n,bL as t,o as l,a8 as o,f as c,h as u,J as r,w as v,bM as d,B as i,C as f,b as p,a2 as m,R as b,U as w,V as I,Q as _}from"./index.14f3ec2e.js";const h=a=>(w("data-v-902a7146"),a=a(),I(),a),y={class:"notfound"},x={class:"content"},C=h((()=>r("h1",null,"404",-1))),M=h((()=>r("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),j={__name:"[...all]",setup(a){const d=i(),w=f(),I=e(),h=s(),j=n({inter:null,countdown:5});function k(){w.push("/")}return t((()=>{clearInterval(j.value.inter)})),l((()=>{I.tabbar.enable&&h.remove(d.meta.activeMenu||d.fullPath),j.value.inter=setInterval((()=>{j.value.countdown--,0==j.value.countdown&&(clearInterval(j.value.inter),k())}),1e3)})),(a,e)=>{const s=_,n=o;return p(),c("div",y,[u(s,{name:"404",class:"icon"}),r("div",x,[C,M,u(n,{type:"primary",onClick:k},{default:v((()=>[m(b(j.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof d&&d(j);const k=a(j,[["__scopeId","data-v-902a7146"]]);export{k as default};
