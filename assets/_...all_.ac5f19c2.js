
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,v as e,aK as s,r as n,bO as t,o as l,a7 as o,f as c,h as u,G as r,w as v,bP as d,B as i,ag as f,b as p,Y as m,M as b,O as w,P as _,L as h}from"./index.503ec71c.js";const I=a=>(w("data-v-902a7146"),a=a(),_(),a),y={class:"notfound"},P={class:"content"},x=I((()=>r("h1",null,"404",-1))),M=I((()=>r("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),O={__name:"[...all]",setup(a){const d=i(),w=f(),_=e(),I=s(),O=n({inter:null,countdown:5});function g(){w.push("/")}return t((()=>{clearInterval(O.value.inter)})),l((()=>{_.tabbar.enable&&I.remove(d.meta.activeMenu||d.fullPath),O.value.inter=setInterval((()=>{O.value.countdown--,0==O.value.countdown&&(clearInterval(O.value.inter),g())}),1e3)})),(a,e)=>{const s=h,n=o;return p(),c("div",y,[u(s,{name:"404",class:"icon"}),r("div",P,[x,M,u(n,{type:"primary",onClick:g},{default:v((()=>[m(b(O.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof d&&d(O);const g=a(O,[["__scopeId","data-v-902a7146"]]);export{g as default};
