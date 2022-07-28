
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,d as e,v as o,c as r,r as s,o as t,D as b,f as n,S as i,X as d,i as l,n as c,b as p,e as m,N as u}from"./index.a82b8a9a.js";import f from"./index.b079deca.js";import j from"./index.c1d53eb9.js";import"./el-message-box.733555ff.js";import"./el-input.20be2c8d.js";import"./event.6c7ea317.js";import"./el-overlay.7c347c0a.js";import"./aria.ca14fa17.js";import"./validator.a1e990c7.js";import"./index.cd397b58.js";import"./index.d8a5e379.js";import"./el-avatar.b3c63751.js";import"./index.ca626136.js";/* empty css                   */import"./index.5eac73fa.js";import"./el-tab-pane.171bc514.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),b((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(p(),n("div",{class:c(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(p(!0),n(i,null,d(l(v),(a=>(p(),m(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
