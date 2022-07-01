
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,d as e,v as o,c as r,r as s,o as t,C as b,f as n,R as i,W as d,i as l,n as p,b as m,e as c,M as f}from"./index.0358e322.js";import u from"./index.cfe530c1.js";import j from"./index.1f73a991.js";import"./el-message-box.bda7432a.js";import"./el-input.88480f15.js";import"./event.fa25aaef.js";import"./el-overlay.38c59f3e.js";import"./aria.1f702b5f.js";import"./validator.b337b744.js";import"./index.e7a09739.js";import"./index.b5f8872d.js";import"./el-avatar.20d4f33b.js";import"./index.a5418b3f.js";/* empty css                   */import"./index.0e2d093d.js";import"./el-tab-pane.96673f31.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),b((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(m(),n("div",{class:p(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(m(!0),n(i,null,d(l(v),(a=>(m(),c(f({tabbar:u,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
