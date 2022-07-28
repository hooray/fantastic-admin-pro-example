
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,r as s,y as t,b as o,f as l,g as n,h as u,w as i,a2 as r,R as c,m as d,Q as f,E as m,a8 as p}from"./index.14f3ec2e.js";const v={class:"search-container"},g={key:0,class:"more"},h=a({name:"SearchBar"}),_=e(Object.assign(h,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:e}){const h=a,_=s(!h.unfold);function y(){_.value=!_.value,e("toggle",_.value)}return t((()=>h.unfold),(()=>y()),{immediate:!0}),(e,s)=>{const t=f,h=m,b=p;return o(),l("div",v,[n(e.$slots,"default",{},void 0,!0),a.showMore?(o(),l("div",g,[u(b,{text:"",size:"small",onClick:y},{icon:i((()=>[u(h,null,{default:i((()=>[u(t,{name:_.value?"i-ep:caret-top":"i-ep:caret-bottom"},null,8,["name"])])),_:1})])),default:i((()=>[r(" "+c(_.value?"收起":"展开"),1)])),_:1})])):d("v-if",!0)])}}}),[["__scopeId","data-v-32ef2dc1"]]);export{_};
