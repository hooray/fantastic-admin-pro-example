
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,r as s,y as t,b as o,f as l,g as n,h as u,w as i,Y as r,M as d,m as c,L as f,E as m,a7 as p}from"./index.3b0b287f.js";const v={class:"search-container"},g={key:0,class:"more"},b=a({name:"SearchBar"}),h=e(Object.assign(b,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:e}){const b=a,h=s(!b.unfold);function _(){h.value=!h.value,e("toggle",h.value)}return t((()=>b.unfold),(()=>_()),{immediate:!0}),(e,s)=>{const t=f,b=m,y=p;return o(),l("div",v,[n(e.$slots,"default",{},void 0,!0),a.showMore?(o(),l("div",g,[u(y,{text:"",size:"small",onClick:_},{icon:i((()=>[u(b,null,{default:i((()=>[u(t,{name:h.value?"i-ep:caret-top":"i-ep:caret-bottom"},null,8,["name"])])),_:1})])),default:i((()=>[r(" "+d(h.value?"收起":"展开"),1)])),_:1})])):c("v-if",!0)])}}}),[["__scopeId","data-v-32ef2dc1"]]);export{h as _};
