
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,r as s,y as t,b as o,f as l,g as n,h as u,w as c,Y as i,M as r,m as d,L as f,E as m,a7 as p}from"./index.503ec71c.js";const v={class:"search-container"},g={key:0,class:"more"},h=a({name:"SearchBar"}),_=e(Object.assign(h,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:e}){const h=a,_=s(!h.unfold);function y(){_.value=!_.value,e("toggle",_.value)}return t((()=>h.unfold),(()=>y()),{immediate:!0}),(e,s)=>{const t=f,h=m,b=p;return o(),l("div",v,[n(e.$slots,"default",{},void 0,!0),a.showMore?(o(),l("div",g,[u(b,{text:"",size:"small",onClick:y},{icon:c((()=>[u(h,null,{default:c((()=>[u(t,{name:_.value?"i-ep:caret-top":"i-ep:caret-bottom"},null,8,["name"])])),_:1})])),default:c((()=>[i(" "+r(_.value?"收起":"展开"),1)])),_:1})])):d("v-if",!0)])}}}),[["__scopeId","data-v-32ef2dc1"]]);export{_};
