
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,v as o,c as s,r,o as t,D as b,b as i,f as n,N as d,Z as l,e as p,J as m,i as c,n as u}from"./index.3b0b287f.js";import f from"./index.444e0b41.js";import j from"./index.f5d8e801.js";import"./el-message-box.8eb45217.js";import"./el-input.a46c7a98.js";import"./event.d298a7ab.js";import"./el-overlay.12ffbf5c.js";import"./aria.288df782.js";import"./validator.9bc318fa.js";import"./index.76b99d0a.js";import"./index.17bd3715.js";import"./index.05efcaa3.js";import"./index.7bb635f1.js";import"./el-avatar.310feccc.js";import"./index.08a27374.js";/* empty css                   */import"./index.5d155420.js";import"./index.3fb38ae4.js";import"./el-tab-pane.b6189386.js";import"./eventBus.4bd846bd.js";const v=a({name:"Topbar"}),x=e(Object.assign(v,{setup(e){const a=o(),v=s((()=>{let e=[];return a.tabbar.enable&&e.push("tabbar"),("head"!==a.menu.menuMode||a.toolbar.enableSidebarCollapse||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&("only-head"!==a.menu.menuMode||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&e.push("toolbar"),a.topbar.switchTabbarAndToolbar&&e.reverse(),e}));const x=r(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),b((()=>{window.removeEventListener("scroll",h)})),(e,o)=>(i(),n("div",{class:u(["topbar-container",{"has-tabbar":c(v).includes("tabbar"),"has-toolbar":c(v).includes("toolbar"),fixed:c(a).topbar.fixed,shadow:!c(a).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(i(!0),n(d,null,l(c(v),(e=>(i(),p(m({tabbar:f,toolbar:j}[e]),{key:e})))),128))],2))}}),[["__scopeId","data-v-fe61fce0"]]);export{x as default};
