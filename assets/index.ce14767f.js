
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,d as a,v as o,c as r,r as s,o as t,C as d,f as n,R as b,W as i,i as l,n as c,b as p,e as m,M as f}from"./index.859d1f2f.js";import u from"./index.6295dace.js";import j from"./index.d8f9e2d2.js";import"./el-message-box.6ed8e0fc.js";import"./el-input.ef35f9c7.js";import"./event2.c09267d7.js";import"./el-overlay.da4fbcc2.js";import"./aria2.dceaa135.js";import"./validator2.7bff8561.js";import"./index2.d3244d9c.js";import"./index.0fbee1c4.js";import"./el-avatar.2547b358.js";import"./index.47b82483.js";/* empty css                   */import"./index.e5c45b30.js";import"./el-tab-pane.6624cf8f.js";const v=a({name:"Topbar"});var x=e(Object.assign(v,{setup(e){const a=o(),v=r((()=>{let e=[];return a.tabbar.enable&&e.push("tabbar"),("head"!==a.menu.menuMode||a.toolbar.enableSidebarCollapse||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&("only-head"!==a.menu.menuMode||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&e.push("toolbar"),a.topbar.switchTabbarAndToolbar&&e.reverse(),e}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),d((()=>{window.removeEventListener("scroll",h)})),(e,o)=>(p(),n("div",{class:c(["topbar-container",{"has-tabbar":l(v).includes("tabbar"),"has-toolbar":l(v).includes("toolbar"),fixed:l(a).topbar.fixed,shadow:!l(a).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(p(!0),n(b,null,i(l(v),(e=>(p(),m(f({tabbar:u,toolbar:j}[e]),{key:e})))),128))],2))}}),[["__scopeId","data-v-5f1ca0bc"]]);export{x as default};
