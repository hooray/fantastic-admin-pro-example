
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,z as a,r as s,y as t,b as o,f as l,g as n,h as r,w as u,a1 as i,Q as d,m as c,P as f,E as m,a5 as p}from"./index.61feeb3e.js";const v={class:"search-container"},g={key:0,class:"more"},h=e({name:"SearchBar"});var _=a(Object.assign(h,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:a}){const h=e,_=s(!h.unfold);function b(){_.value=!_.value,a("toggle",_.value)}return t((()=>h.unfold),(()=>b()),{immediate:!0}),(a,s)=>{const t=f,h=m,y=p;return o(),l("div",v,[n(a.$slots,"default",{},void 0,!0),e.showMore?(o(),l("div",g,[r(y,{text:"",size:"small",onClick:b},{icon:u((()=>[r(h,null,{default:u((()=>[r(t,{name:_.value?"i-ep:caret-top":"i-ep:caret-bottom"},null,8,["name"])])),_:1})])),default:u((()=>[i(" "+d(_.value?"收起":"展开"),1)])),_:1})])):c("v-if",!0)])}}}),[["__scopeId","data-v-02e1e354"]]);export{_};
