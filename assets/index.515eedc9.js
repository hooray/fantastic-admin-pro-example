
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,v as o,c as s,r,o as t,D as i,b as n,f as d,N as b,Z as l,e as p,J as m,i as c,n as u}from"./index.503ec71c.js";import f from"./index.46a9e57a.js";import j from"./index.25447777.js";import"./el-message-box.fb7b0359.js";import"./el-input.546a1988.js";import"./event.d298a7ab.js";import"./el-overlay.34fe3e22.js";import"./aria.288df782.js";import"./validator.efd22e96.js";import"./index.8fde0481.js";import"./index.708c63a1.js";import"./index.61a5f3ae.js";import"./index.cfd73773.js";import"./el-avatar.6d358700.js";import"./index.e50d239f.js";/* empty css                   */import"./index.bb472e89.js";import"./index.fca3e559.js";import"./el-tab-pane.c9773618.js";import"./eventBus.193de119.js";const v=a({name:"Topbar"}),x=e(Object.assign(v,{setup(e){const a=o(),v=s((()=>{let e=[];return a.tabbar.enable&&e.push("tabbar"),("head"!==a.menu.menuMode||a.toolbar.enableSidebarCollapse||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&("only-head"!==a.menu.menuMode||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&e.push("toolbar"),a.topbar.switchTabbarAndToolbar&&e.reverse(),e}));const x=r(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),i((()=>{window.removeEventListener("scroll",h)})),(e,o)=>(n(),d("div",{class:u(["topbar-container",{"has-tabbar":c(v).includes("tabbar"),"has-toolbar":c(v).includes("toolbar"),fixed:c(a).topbar.fixed,shadow:!c(a).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(n(!0),d(b,null,l(c(v),(e=>(n(),p(m({tabbar:f,toolbar:j}[e]),{key:e})))),128))],2))}}),[["__scopeId","data-v-fe61fce0"]]);export{x as default};
