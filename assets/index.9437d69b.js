
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,d as a,v as o,c as r,r as t,o as s,C as n,f as d,R as i,W as b,i as l,n as p,b as m,e as c,M as u}from"./index.40e497bb.js";import j from"./index.43063053.js";import f from"./index.661ed2c6.js";import"./index2.a54d413f.js";import"./index2.06bc8164.js";import"./event2.c09267d7.js";import"./index2.f1359c40.js";import"./aria2.dceaa135.js";import"./validator2.5d00b7e9.js";import"./index2.a99ee9c1.js";import"./index.522ae64d.js";import"./el-avatar.63729b47.js";import"./index.44103c97.js";/* empty css                   */import"./index.13e016d5.js";import"./el-tab-pane.f18fd103.js";const v=a({name:"Topbar"});var x=e(Object.assign(v,{setup(e){const a=o(),v=r((()=>{let e=[];return a.tabbar.enable&&e.push("tabbar"),("head"!==a.menu.menuMode||a.toolbar.enableSidebarCollapse||a.toolbar.enableBreadcrumb&&"filesystem"!==a.app.routeBaseOn)&&("only-head"!==a.menu.menuMode||a.toolbar.enableBreadcrumb&&"filesystem"!==a.app.routeBaseOn)&&e.push("toolbar"),a.topbar.switchTabbarAndToolbar&&e.reverse(),e}));const x=t(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return s((()=>{window.addEventListener("scroll",h)})),n((()=>{window.removeEventListener("scroll",h)})),(e,o)=>(m(),d("div",{class:p(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(a).topbar.fixed,shadow:!l(a).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(m(!0),d(i,null,b(l(v),(e=>(m(),c(u({tabbar:j,toolbar:f}[e]),{key:e})))),128))],2))}}),[["__scopeId","data-v-e6a041b4"]]);export{x as default};
