
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,d as e,v as o,c as r,r as s,o as t,G as b,b as n,f as d,S as i,X as l,e as p,M as m,i as c,n as u}from"./index.252503d3.js";import f from"./index.608885a8.js";import j from"./index.578f61e5.js";import"./el-message-box.f07e3cd1.js";import"./el-input.dc2b6950.js";import"./event.d298a7ab.js";import"./el-overlay.4ed61f02.js";import"./aria.288df782.js";import"./validator.52792d17.js";import"./index.c0a7b230.js";import"./index.572705f8.js";import"./el-avatar.4fba27e7.js";import"./index.76104d08.js";/* empty css                   */import"./index.2f12ca1c.js";import"./index.2568bbb3.js";import"./el-tab-pane.f4ff0abd.js";const v=e({name:"Topbar"}),x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),b((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(n(),d("div",{class:u(["topbar-container",{"has-tabbar":c(v).includes("tabbar"),"has-toolbar":c(v).includes("toolbar"),fixed:c(e).topbar.fixed,shadow:!c(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(n(!0),d(i,null,l(c(v),(a=>(n(),p(m({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-fe61fce0"]]);export{x as default};
