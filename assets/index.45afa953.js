
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,d as e,v as o,c as r,r as t,o as s,C as d,f as n,R as i,W as b,i as l,n as p,b as c,e as m,M as u}from"./index.9bf5deda.js";import f from"./index.b8c94622.js";import j from"./index.c51e8e7f.js";import"./index2.0f73d21f.js";import"./index2.2043e11a.js";import"./event2.c09267d7.js";import"./index2.a77d7653.js";import"./aria2.dceaa135.js";import"./validator2.7d32b2c9.js";import"./index2.404a6402.js";import"./index.4c170a9c.js";import"./el-avatar.718719a2.js";import"./index.bd948c02.js";/* empty css                   */import"./index.e362ad26.js";import"./el-tab-pane.fbeecfc3.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.toolbar.enableBreadcrumb&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.toolbar.enableBreadcrumb&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=t(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return s((()=>{window.addEventListener("scroll",h)})),d((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(c(),n("div",{class:p(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(c(!0),n(i,null,b(l(v),(a=>(c(),m(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-e6a041b4"]]);export{x as default};
