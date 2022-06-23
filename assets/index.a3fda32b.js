
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,d as e,v as o,c as r,r as t,o as s,C as d,f as n,R as i,W as b,i as l,n as p,b as m,e as c,M as u}from"./index.8f9b9927.js";import f from"./index.845fef7c.js";import j from"./index.259680cf.js";import"./index2.d53eaef4.js";import"./index2.55f6ed3f.js";import"./event2.c09267d7.js";import"./index2.4af2edc3.js";import"./aria2.dceaa135.js";import"./validator2.aba95f91.js";import"./index2.17e740b3.js";import"./index.5996a69e.js";import"./el-avatar.cd787a7e.js";import"./index.fe4e8d08.js";/* empty css                   */import"./index.7442abad.js";import"./el-tab-pane.d1e6d567.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.toolbar.enableBreadcrumb&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.toolbar.enableBreadcrumb&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=t(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return s((()=>{window.addEventListener("scroll",h)})),d((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(m(),n("div",{class:p(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(m(!0),n(i,null,b(l(v),(a=>(m(),c(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-e6a041b4"]]);export{x as default};
