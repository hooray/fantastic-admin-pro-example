
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,v as e,aJ as s,r as n,bH as t,o as l,a6 as o,f as u,h as r,F as c,w as v,bI as d,U as i,V as b,J as f,K as p,b as m,a2 as w,R as I,Q as _}from"./index.a82b8a9a.js";const h=a=>(i("data-v-94b07d52"),a=a(),b(),a),y={class:"notfound"},x={class:"content"},J=h((()=>c("h1",null,"404",-1))),j=h((()=>c("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),k={__name:"[...all]",setup(a){const d=f(),i=p(),b=e(),h=s(),k=n({inter:null,countdown:5});function A(){i.push("/")}return t((()=>{clearInterval(k.value.inter)})),l((()=>{b.tabbar.enable&&h.remove(d.meta.activeMenu||d.fullPath),k.value.inter=setInterval((()=>{k.value.countdown--,0==k.value.countdown&&(clearInterval(k.value.inter),A())}),1e3)})),(a,e)=>{const s=_,n=o;return m(),u("div",y,[r(s,{name:"404",class:"icon"}),c("div",x,[J,j,r(n,{type:"primary",onClick:A},{default:v((()=>[w(I(k.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof d&&d(k);var A=a(k,[["__scopeId","data-v-94b07d52"]]);export{A as default};
