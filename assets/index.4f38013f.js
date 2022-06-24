
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,d as e,v as o,c as r,r as t,o as s,C as n,f as d,R as i,W as b,i as l,n as c,b as p,e as m,M as u}from"./index.95bdb5c1.js";import f from"./index.a99d28a4.js";import j from"./index.f99fe523.js";import"./index2.8abc51a6.js";import"./index2.3c86b1b9.js";import"./event2.c09267d7.js";import"./index2.a7a37a93.js";import"./aria2.dceaa135.js";import"./validator2.605ff585.js";import"./index2.c52876cb.js";import"./index.d558ef60.js";import"./el-avatar.3e303cd6.js";import"./index.beeddf34.js";/* empty css                   */import"./index.cac01e86.js";import"./el-tab-pane.cec0ecc9.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.toolbar.enableBreadcrumb&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.toolbar.enableBreadcrumb&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=t(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return s((()=>{window.addEventListener("scroll",h)})),n((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(p(),d("div",{class:c(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(p(!0),d(i,null,b(l(v),(a=>(p(),m(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-e6a041b4"]]);export{x as default};
