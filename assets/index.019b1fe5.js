
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,d as e,v as o,c as r,r as s,o as t,D as b,f as n,S as i,X as d,i as l,n as p,b as c,e as m,N as u}from"./index.6746a3d3.js";import f from"./index.497fa857.js";import j from"./index.16813c53.js";import"./el-message-box.5cc3fabd.js";import"./el-input.a13ee31e.js";import"./event.a088884a.js";import"./el-overlay.efabaf9a.js";import"./aria.7c550f1b.js";import"./validator.2566d1ef.js";import"./index.59d17107.js";import"./index.cdbfbe4a.js";import"./el-avatar.a6bf1a20.js";import"./index.bfd82d51.js";/* empty css                   */import"./index.6ae39f0c.js";import"./el-tab-pane.c9693533.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),b((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(c(),n("div",{class:p(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(c(!0),n(i,null,d(l(v),(a=>(c(),m(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
