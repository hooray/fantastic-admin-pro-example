
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,d as e,v as o,c as r,r as s,o as t,D as n,f as b,S as i,X as l,i as d,n as p,b as c,e as m,N as u}from"./index.8029e3e3.js";import f from"./index.c011daa9.js";import j from"./index.c0b88d61.js";import"./el-message-box.c3b903c1.js";import"./el-input.636fea0c.js";import"./event.a088884a.js";import"./el-overlay.35c60dd0.js";import"./aria.7c550f1b.js";import"./validator.46eea287.js";import"./index.7445af2e.js";import"./index.9008e621.js";import"./el-avatar.f8a19f54.js";import"./index.9b411e28.js";/* empty css                   */import"./index.1f3348fe.js";import"./el-tab-pane.a7f06993.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),n((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(c(),b("div",{class:p(["topbar-container",{"has-tabbar":d(v).includes("tabbar"),"has-toolbar":d(v).includes("toolbar"),fixed:d(e).topbar.fixed,shadow:!d(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(c(!0),b(i,null,l(d(v),(a=>(c(),m(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
