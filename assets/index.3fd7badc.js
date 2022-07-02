
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as a,d as e,v as o,c as r,r as s,o as t,C as b,f as n,R as i,W as d,i as l,n as p,b as m,e as c,M as f}from"./index.5043a866.js";import u from"./index.fe4b9fdf.js";import j from"./index.157ae933.js";import"./el-message-box.10f119d9.js";import"./el-input.47be8b34.js";import"./event.a088884a.js";import"./el-overlay.98ff6c7a.js";import"./aria.7c550f1b.js";import"./validator.d3f16460.js";import"./index.72f397d2.js";import"./index.878ebb40.js";import"./el-avatar.3d506ec1.js";import"./index.048e82ef.js";/* empty css                   */import"./index.ddb7fac3.js";import"./el-tab-pane.c3257899.js";const v=e({name:"Topbar"});var x=a(Object.assign(v,{setup(a){const e=o(),v=r((()=>{let a=[];return e.tabbar.enable&&a.push("tabbar"),("head"!==e.menu.menuMode||e.toolbar.enableSidebarCollapse||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&("only-head"!==e.menu.menuMode||e.breadcrumb.enable&&"filesystem"!==e.app.routeBaseOn)&&a.push("toolbar"),e.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),b((()=>{window.removeEventListener("scroll",h)})),(a,o)=>(m(),n("div",{class:p(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(e).topbar.fixed,shadow:!l(e).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(m(!0),n(i,null,d(l(v),(a=>(m(),c(f({tabbar:u,toolbar:j}[a]),{key:a})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
