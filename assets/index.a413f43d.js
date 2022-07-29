
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,v as o,c as s,r,o as t,D as i,b as n,f as d,N as b,Z as l,e as p,J as m,i as c,n as u}from"./index.45a1a0f2.js";import j from"./index.398caaa2.js";import f from"./index.a0e68f3a.js";import"./el-message-box.72cd4de3.js";import"./el-input.ec9522af.js";import"./event.d298a7ab.js";import"./el-overlay.0743a535.js";import"./aria.288df782.js";import"./validator.d7f5f1e8.js";import"./index.09ccf407.js";import"./index.9d61c181.js";import"./index.13395595.js";import"./index.7b12b60a.js";import"./el-avatar.2454317b.js";import"./index.441e81c7.js";/* empty css                   */import"./index.c5ecb030.js";import"./index.24a312c8.js";import"./el-tab-pane.d73b6eb6.js";import"./eventBus.193de119.js";const v=a({name:"Topbar"}),x=e(Object.assign(v,{setup(e){const a=o(),v=s((()=>{let e=[];return a.tabbar.enable&&e.push("tabbar"),("head"!==a.menu.menuMode||a.toolbar.enableSidebarCollapse||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&("only-head"!==a.menu.menuMode||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&e.push("toolbar"),a.topbar.switchTabbarAndToolbar&&e.reverse(),e}));const x=r(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),i((()=>{window.removeEventListener("scroll",h)})),(e,o)=>(n(),d("div",{class:u(["topbar-container",{"has-tabbar":c(v).includes("tabbar"),"has-toolbar":c(v).includes("toolbar"),fixed:c(a).topbar.fixed,shadow:!c(a).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(n(!0),d(b,null,l(c(v),(e=>(n(),p(m({tabbar:j,toolbar:f}[e]),{key:e})))),128))],2))}}),[["__scopeId","data-v-fe61fce0"]]);export{x as default};
