
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,d as a,v as n,B as i,E as l,e as t,w as s,T as m,V as u,b as c,i as d,f as o,h as r,m as v,n as f,R as y,W as p,D as b,Q as M,P as S}from"./index.ec00d83b.js";/* empty css                */import"./el-tooltip.0ca4bad9.js";import j from"./index.71f893cd.js";import{E as k,S as g}from"./index.f5dcec5f.js";import"./logo.3c3b2e9b.js";import"./aria2.dceaa135.js";import"./index2.623a2b38.js";const h={key:0,class:"main-sidebar-container"},$=["title","onClick"],x=a({name:"MainSidebar"});var _=e(Object.assign(x,{setup(e){const a=n(),x=i(),_=u("switchMenu"),A=u("generateI18nTitle");return(e,n)=>{const i=S,u=l,F=k;return c(),t(m,{name:"main-sidebar"},{default:s((()=>[["side","only-side"].includes(d(a).menu.menuMode)||"mobile"===d(a).mode&&"single"!==d(a).menu.menuMode?(c(),o("div",h,[r(j,{"show-title":!1,class:"sidebar-logo"}),v(" 侧边栏模式（含主导航） "),"side"===d(a).menu.menuMode||"mobile"===d(a).mode&&"single"!==d(a).menu.menuMode?(c(),o("div",{key:0,class:f(["nav",{[`nav-fill-${d(a).menu.menuFillStyle}`]:""!==d(a).menu.menuFillStyle,[`nav-active-${d(a).menu.menuActiveStyle}`]:""!==d(a).menu.menuActiveStyle}])},[(c(!0),o(y,null,p(d(x).allMenus,((e,a)=>(c(),o(y,{key:a},[e.children&&0!==e.children.length?(c(),o("div",{key:0,class:f(["item-container",{active:a==d(x).actived}])},[b("div",{class:"item",title:d(A)(e.meta.i18n,e.meta.title),onClick:e=>d(_)(a)},[e.meta.icon?(c(),t(u,{key:0},{default:s((()=>[r(i,{name:e.meta.icon},null,8,["name"])])),_:2},1024)):v("v-if",!0),b("span",null,M(d(A)(e.meta.i18n,e.meta.title)),1)],8,$)],2)):v("v-if",!0)],64)))),128))],2)):"only-side"===d(a).menu.menuMode?(c(),o(y,{key:1},[v(" 侧边栏精简模式 "),r(F,{collapse:"","default-active":e.$route.meta.activeMenu||e.$route.path,class:f(["el-menu-nav",{[`nav-fill-${d(a).menu.menuFillStyle}`]:""!==d(a).menu.menuFillStyle,[`nav-active-${d(a).menu.menuActiveStyle}`]:""!==d(a).menu.menuActiveStyle}])},{default:s((()=>[(c(!0),o(y,null,p(d(x).allMenus,((e,a)=>(c(),o(y,null,[!1!==e.meta.sidebar?(c(),t(g,{key:a,item:e},null,8,["item"])):v("v-if",!0)],64)))),256))])),_:1},8,["default-active","class"])],2112)):v("v-if",!0)])):v("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-dccc9810"]]);export{_ as default};
