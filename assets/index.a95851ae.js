
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,d as e,v as o,c as r,r as s,o as t,C as n,f as i,R as b,W as l,i as d,n as p,b as c,e as m,M as u}from"./index.ec00d83b.js";import f from"./index.abf7907f.js";import j from"./index.9057fc85.js";import"./el-message-box.1cb61410.js";import"./el-input.16c29a96.js";import"./event2.c09267d7.js";import"./el-overlay.e52ea400.js";import"./aria2.dceaa135.js";import"./validator2.20071a9a.js";import"./index2.c6b10787.js";import"./index.80a3eea5.js";import"./el-avatar.1deee65f.js";import"./index.f5c36c37.js";/* empty css                   */import"./index.1e28392a.js";import"./el-tab-pane.92842669.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),n((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(c(),i("div",{class:p(["topbar-container",{"has-tabbar":d(v).includes("tabbar"),"has-toolbar":d(v).includes("toolbar"),fixed:d(e).topbar.fixed,shadow:!d(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(c(!0),i(b,null,l(d(v),(a=>(c(),m(u({tabbar:f,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
