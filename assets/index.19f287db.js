
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,d as s,v as e,r as o,c as t,F as l,b as n,e as r,w as i,f as c,m as d,M as u,i as p,n as f}from"./index.503ec71c.js";import{i as m}from"./logo.951d255b.js";const b=["src"],g={key:1},h=s({name:"Logo"}),v=a(Object.assign(h,{props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(a){const s=e(),h=o("Fantastic-admin 专业版"),v=o(m),w=t((()=>{let a={};return s.dashboard.enable&&(a.name="dashboard"),a}));return(e,o)=>{const t=l("router-link");return n(),r(t,{to:p(w),class:f(["title",{"is-link":p(s).dashboard.enable}]),title:h.value},{default:i((()=>[a.showLogo?(n(),c("img",{key:0,src:v.value,class:"logo"},null,8,b)):d("v-if",!0),a.showTitle?(n(),c("span",g,u(h.value),1)):d("v-if",!0)])),_:1},8,["to","class","title"])}}}),[["__scopeId","data-v-797cc5ea"]]);export{v as default};
