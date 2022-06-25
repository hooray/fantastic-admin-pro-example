
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,d as e,v as o,c as r,r as s,o as t,C as d,f as n,R as b,W as i,i as l,n as p,b as c,e as m,M as u}from"./index.f70e8cdd.js";import f from"./index.ee4a80fb.js";import j from"./index.ff0f32be.js";import"./index2.5cdf0ba2.js";import"./index2.1638ccd8.js";import"./event2.c09267d7.js";import"./index2.d275910c.js";import"./aria2.dceaa135.js";import"./validator2.0751db47.js";import"./index2.b198a8d8.js";import"./index.005d6d35.js";import"./el-avatar.0d20f445.js";import"./index.b1b2ac5e.js";/* empty css                   */import"./index.ca61504b.js";import"./el-tab-pane.2d24ead2.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),d((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(c(),n("div",{class:p(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(c(!0),n(b,null,i(l(v),(a=>(c(),m(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
