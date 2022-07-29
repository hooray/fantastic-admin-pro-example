
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,v as o,c as s,r,o as t,D as i,b as n,f as d,N as b,Z as l,e as p,J as m,i as c,n as u}from"./index.b5d679a7.js";import j from"./index.29e285b2.js";import f from"./index.c48a382a.js";import"./el-message-box.b48e3fae.js";import"./el-input.d18d887e.js";import"./event.d298a7ab.js";import"./el-overlay.aa9d497b.js";import"./aria.288df782.js";import"./validator.c3056c95.js";import"./index.60220f41.js";import"./index.c3e99ff3.js";import"./index.7c239e76.js";import"./index.30ecdc8e.js";import"./el-avatar.445a2888.js";import"./index.76b28c79.js";/* empty css                   */import"./index.e93a1af1.js";import"./index.4f07ea4e.js";import"./el-tab-pane.1eeb3de9.js";import"./eventBus.193de119.js";const v=a({name:"Topbar"}),x=e(Object.assign(v,{setup(e){const a=o(),v=s((()=>{let e=[];return a.tabbar.enable&&e.push("tabbar"),("head"!==a.menu.menuMode||a.toolbar.enableSidebarCollapse||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&("only-head"!==a.menu.menuMode||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&e.push("toolbar"),a.topbar.switchTabbarAndToolbar&&e.reverse(),e}));const x=r(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),i((()=>{window.removeEventListener("scroll",h)})),(e,o)=>(n(),d("div",{class:u(["topbar-container",{"has-tabbar":c(v).includes("tabbar"),"has-toolbar":c(v).includes("toolbar"),fixed:c(a).topbar.fixed,shadow:!c(a).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(n(!0),d(b,null,l(c(v),(e=>(n(),p(m({tabbar:j,toolbar:f}[e]),{key:e})))),128))],2))}}),[["__scopeId","data-v-fe61fce0"]]);export{x as default};
