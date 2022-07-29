
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as s,v as a,S as n,r as l,c as u,i as o,b as i,f as t,h as d,n as r,m,w as c,a1 as p,N as b,Z as f,e as h}from"./index.b5d679a7.js";/* empty css                */import"./el-tooltip.89296c46.js";import g from"./index.40cfd427.js";import{E as M,S as v}from"./index.c971e52f.js";import"./logo.951d255b.js";import"./aria.288df782.js";import"./index.ef770f87.js";const j=s({name:"SubSidebar"}),S=e(Object.assign(j,{setup(e){const s=a(),j=n(),S=l(0);function y(e){S.value=e.target.scrollTop}const w=u((()=>{var e;return"mobile"===s.mode||["side","head","single"].includes(s.menu.menuMode)&&0!==j.sidebarMenus.length&&!(s.menu.subMenuOnylOneHide&&1===j.sidebarMenus.length&&(!j.sidebarMenus[0].children||(null==(e=j.sidebarMenus[0])?void 0:e.children.every((e=>!1===e.meta.sidebar)))))}));return(e,a)=>{const n=M;return o(w)?(i(),t("div",{key:0,class:r(["sub-sidebar-container",{"is-collapse":"pc"===o(s).mode&&o(s).menu.subMenuCollapse}]),onScroll:y},[d(g,{"show-logo":"single"===o(s).menu.menuMode,class:r(["sidebar-logo",{"sidebar-logo-bg":"single"===o(s).menu.menuMode,shadow:S.value}])},null,8,["show-logo","class"]),m(" 侧边栏模式（无主导航）或侧边栏精简模式 "),d(n,{"unique-opened":o(s).menu.subMenuUniqueOpened,"default-openeds":o(j).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===o(s).mode&&o(s).menu.subMenuCollapse,"collapse-transition":!1,class:r({"is-collapse-without-logo":"single"!==o(s).menu.menuMode&&o(s).menu.subMenuCollapse,[`menu-${o(s).menu.menuFillStyle}`]:""!==o(s).menu.menuFillStyle})},{default:c((()=>[d(p,{name:"sub-sidebar"},{default:c((()=>[(i(!0),t(b,null,f(o(j).sidebarMenus,((e,s)=>(i(),t(b,null,[!1!==e.meta.sidebar?(i(),h(v,{key:e.path||s,item:e,"base-path":e.path||""},null,8,["item","base-path"])):m("v-if",!0)],64)))),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):m("v-if",!0)}}}),[["__scopeId","data-v-f607cdad"]]);export{S as default};
