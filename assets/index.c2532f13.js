
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,d as s,v as e,r as o,c as t,F as l,b as n,e as r,w as i,f as d,m as c,M as u,i as f,n as p}from"./index.45a1a0f2.js";import{i as m}from"./logo.951d255b.js";const b=["src"],g={key:1},h=s({name:"Logo"}),v=a(Object.assign(h,{props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(a){const s=e(),h=o("Fantastic-admin 专业版"),v=o(m),w=t((()=>{let a={};return s.dashboard.enable&&(a.name="dashboard"),a}));return(e,o)=>{const t=l("router-link");return n(),r(t,{to:f(w),class:p(["title",{"is-link":f(s).dashboard.enable}]),title:h.value},{default:i((()=>[a.showLogo?(n(),d("img",{key:0,src:v.value,class:"logo"},null,8,b)):c("v-if",!0),a.showTitle?(n(),d("span",g,u(h.value),1)):c("v-if",!0)])),_:1},8,["to","class","title"])}}}),[["__scopeId","data-v-797cc5ea"]]);export{v as default};
