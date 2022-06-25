
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,d as e,v as o,c as r,r as s,o as t,C as n,f as i,R as d,W as b,i as l,n as c,b as p,e as m,M as u}from"./index.fcc8a9ae.js";import f from"./index.9a415602.js";import j from"./index.a13e5c8e.js";import"./index2.6e107ee1.js";import"./index2.b12d25af.js";import"./event2.c09267d7.js";import"./index2.fe9105a8.js";import"./aria2.dceaa135.js";import"./validator2.f5567181.js";import"./index2.cbe4f7c3.js";import"./index.ff4d90aa.js";import"./el-avatar.f42270c3.js";import"./index.33e2ac5f.js";/* empty css                   */import"./index.6923c164.js";import"./el-tab-pane.36ebfe55.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),n((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(p(),i("div",{class:c(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(p(!0),i(d,null,b(l(v),(a=>(p(),m(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
