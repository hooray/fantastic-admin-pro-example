
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,d as e,v as o,c as r,r as s,o as t,D as n,f as b,S as i,X as d,i as l,n as c,b as p,e as m,N as f}from"./index.1be4fcb7.js";import u from"./index.2503f24a.js";import j from"./index.a354facf.js";import"./el-message-box.b9f3285a.js";import"./el-input.94aad898.js";import"./event.6c7ea317.js";import"./el-overlay.117f78cc.js";import"./aria.ca14fa17.js";import"./validator.4a0c273f.js";import"./index.6a7205e4.js";import"./index.59981eda.js";import"./el-avatar.6b66cd7f.js";import"./index.50da501c.js";/* empty css                   */import"./index.deaae29c.js";import"./el-tab-pane.aff5c2b7.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),n((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(p(),b("div",{class:c(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(p(!0),b(i,null,d(l(v),(a=>(p(),m(f({tabbar:u,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
