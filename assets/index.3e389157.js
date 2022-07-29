
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,d as e,v as o,c as r,r as s,o as t,G as b,b as d,f as n,S as i,X as l,e as p,M as m,i as c,n as u}from"./index.9587bc3d.js";import f from"./index.5ff31cc5.js";import j from"./index.18b622f4.js";import"./el-message-box.ede6bc82.js";import"./el-input.54ba849c.js";import"./event.d298a7ab.js";import"./el-overlay.3a21a8d0.js";import"./aria.288df782.js";import"./validator.85d9abfc.js";import"./index.7b171845.js";import"./index.1c83952a.js";import"./el-avatar.00db4d57.js";import"./index.2d725450.js";/* empty css                   */import"./index.61fb0680.js";import"./index.6d459e12.js";import"./el-tab-pane.80a699e2.js";const v=e({name:"Topbar"}),x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),b((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(d(),n("div",{class:u(["topbar-container",{"has-tabbar":c(v).includes("tabbar"),"has-toolbar":c(v).includes("toolbar"),fixed:c(e).topbar.fixed,shadow:!c(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(d(!0),n(i,null,l(c(v),(a=>(d(),p(m({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-fe61fce0"]]);export{x as default};
