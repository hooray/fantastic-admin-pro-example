
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as a,d as e,v as o,c as r,r as s,o as t,D as n,f as b,S as i,X as d,i as l,n as p,b as c,e as m,N as u}from"./index.a9c2df36.js";import f from"./index.46264e86.js";import j from"./index.7a4f125d.js";import"./el-message-box.a28c1e49.js";import"./el-input.c05163b3.js";import"./event.a088884a.js";import"./el-overlay.c8cbc527.js";import"./aria.7c550f1b.js";import"./validator.39ba444f.js";import"./index.d26a1cab.js";import"./index.041533f7.js";import"./el-avatar.25079505.js";import"./index.4f6f0538.js";/* empty css                   */import"./index.9e22fd36.js";import"./el-tab-pane.4362d27e.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),n((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(c(),b("div",{class:p(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(c(!0),b(i,null,d(l(v),(a=>(c(),m(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
