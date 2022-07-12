
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,r as s,y as t,b as o,f as l,g as n,h as r,w as u,a2 as i,R as c,m as d,Q as f,E as m,a6 as p}from"./index.1be4fcb7.js";const v={class:"search-container"},g={key:0,class:"more"},b=a({name:"SearchBar"});var h=e(Object.assign(b,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:e}){const b=a,h=s(!b.unfold);function _(){h.value=!h.value,e("toggle",h.value)}return t((()=>b.unfold),(()=>_()),{immediate:!0}),(e,s)=>{const t=f,b=m,y=p;return o(),l("div",v,[n(e.$slots,"default",{},void 0,!0),a.showMore?(o(),l("div",g,[r(y,{text:"",size:"small",onClick:_},{icon:u((()=>[r(b,null,{default:u((()=>[r(t,{name:h.value?"i-ep:caret-top":"i-ep:caret-bottom"},null,8,["name"])])),_:1})])),default:u((()=>[i(" "+c(h.value?"收起":"展开"),1)])),_:1})])):d("v-if",!0)])}}}),[["__scopeId","data-v-02e1e354"]]);export{h as _};
