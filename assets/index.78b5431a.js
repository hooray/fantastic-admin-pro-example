
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as a,v as o,c as r,r as s,o as t,G as n,b,f as i,S as d,X as l,e as p,M as c,i as m,n as u}from"./index.14f3ec2e.js";import f from"./index.b12bcf9e.js";import j from"./index.1422e2fe.js";import"./el-message-box.1e533c77.js";import"./el-input.36e45e3c.js";import"./event.d298a7ab.js";import"./el-overlay.8fecca6c.js";import"./aria.288df782.js";import"./validator.4254e813.js";import"./index.f4151a41.js";import"./index.c346a188.js";import"./el-avatar.b738680f.js";import"./index.824c117b.js";/* empty css                   */import"./index.04a74d21.js";import"./index.f17e8816.js";import"./el-tab-pane.dc1a8bdb.js";const v=a({name:"Topbar"}),x=e(Object.assign(v,{setup(e){const a=o(),v=r((()=>{let e=[];return a.tabbar.enable&&e.push("tabbar"),("head"!==a.menu.menuMode||a.toolbar.enableSidebarCollapse||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&("only-head"!==a.menu.menuMode||a.breadcrumb.enable&&"filesystem"!==a.app.routeBaseOn)&&e.push("toolbar"),a.topbar.switchTabbarAndToolbar&&e.reverse(),e}));const x=s(0);function h(){x.value=document.documentElement.scrollTop||document.body.scrollTop}return t((()=>{window.addEventListener("scroll",h)})),n((()=>{window.removeEventListener("scroll",h)})),(e,o)=>(b(),i("div",{class:u(["topbar-container",{"has-tabbar":m(v).includes("tabbar"),"has-toolbar":m(v).includes("toolbar"),fixed:m(a).topbar.fixed,shadow:!m(a).topbar.switchTabbarAndToolbar&&x.value}]),"data-fixed-calc-width":""},[(b(!0),i(d,null,l(m(v),(e=>(b(),p(c({tabbar:f,toolbar:j}[e]),{key:e})))),128))],2))}}),[["__scopeId","data-v-fe61fce0"]]);export{x as default};
