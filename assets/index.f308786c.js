
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,r as s,y as t,b as o,f as l,g as n,h as d,w as r,a2 as u,R as i,m as c,Q as m,E as f,a6 as p}from"./index.d45ed42d.js";const v={class:"search-container"},g={key:0,class:"more"},h=a({name:"SearchBar"});var _=e(Object.assign(h,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:e}){const h=a,_=s(!h.unfold);function y(){_.value=!_.value,e("toggle",_.value)}return t((()=>h.unfold),(()=>y()),{immediate:!0}),(e,s)=>{const t=m,h=f,b=p;return o(),l("div",v,[n(e.$slots,"default",{},void 0,!0),a.showMore?(o(),l("div",g,[d(b,{text:"",size:"small",onClick:y},{icon:r((()=>[d(h,null,{default:r((()=>[d(t,{name:_.value?"i-ep:caret-top":"i-ep:caret-bottom"},null,8,["name"])])),_:1})])),default:r((()=>[u(" "+i(_.value?"收起":"展开"),1)])),_:1})])):c("v-if",!0)])}}}),[["__scopeId","data-v-02e1e354"]]);export{_};
