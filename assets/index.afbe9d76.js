
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,d as e,v as o,c as r,r as s,o as t,C as n,f as d,R as i,W as b,i as l,n as p,b as m,e as c,M as u}from"./index.21d85186.js";import f from"./index.20734520.js";import j from"./index.18e5987d.js";import"./index2.fbba0561.js";import"./index2.4f62e624.js";import"./event2.c09267d7.js";import"./index2.b4ce2a10.js";import"./aria2.dceaa135.js";import"./validator2.2b4b312f.js";import"./index2.90fe9a11.js";import"./index.f7a369e3.js";import"./el-avatar.921df98a.js";import"./index.1dbf4425.js";/* empty css                   */import"./index.7fb951ac.js";import"./el-tab-pane.4dd32c03.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),n((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(m(),d("div",{class:p(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(m(!0),d(i,null,b(l(v),(a=>(m(),c(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
