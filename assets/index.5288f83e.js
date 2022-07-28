
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{A as e,d as s,v as a,C as n,r as l,c as u,i as o,f as i,h as t,n as d,m as r,w as m,b as p,Y as c,S as b,X as f,e as h}from"./index.a82b8a9a.js";/* empty css                */import"./el-tooltip.586473e3.js";import g from"./index.3dd6e4fb.js";import{E as M,S as v}from"./index.89a15d6e.js";import"./logo.3c3b2e9b.js";import"./aria.ca14fa17.js";import"./index.eac66461.js";const j=s({name:"SubSidebar"});var S=e(Object.assign(j,{setup(e){const s=a(),j=n(),S=l(0);function y(e){S.value=e.target.scrollTop}const w=u((()=>{var e;return"mobile"===s.mode||["side","head","single"].includes(s.menu.menuMode)&&0!==j.sidebarMenus.length&&!(s.menu.subMenuOnylOneHide&&1===j.sidebarMenus.length&&(!j.sidebarMenus[0].children||(null==(e=j.sidebarMenus[0])?void 0:e.children.every((e=>!1===e.meta.sidebar)))))}));return(e,a)=>{const n=M;return o(w)?(p(),i("div",{key:0,class:d(["sub-sidebar-container",{"is-collapse":"pc"===o(s).mode&&o(s).menu.subMenuCollapse}]),onScroll:y},[t(g,{"show-logo":"single"===o(s).menu.menuMode,class:d(["sidebar-logo",{"sidebar-logo-bg":"single"===o(s).menu.menuMode,shadow:S.value}])},null,8,["show-logo","class"]),r(" 侧边栏模式（无主导航）或侧边栏精简模式 "),t(n,{"unique-opened":o(s).menu.subMenuUniqueOpened,"default-openeds":o(j).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===o(s).mode&&o(s).menu.subMenuCollapse,"collapse-transition":!1,class:d({"is-collapse-without-logo":"single"!==o(s).menu.menuMode&&o(s).menu.subMenuCollapse,[`menu-${o(s).menu.menuFillStyle}`]:""!==o(s).menu.menuFillStyle})},{default:m((()=>[t(c,{name:"sub-sidebar"},{default:m((()=>[(p(!0),i(b,null,f(o(j).sidebarMenus,((e,s)=>(p(),i(b,null,[!1!==e.meta.sidebar?(p(),h(v,{key:e.path||s,item:e,"base-path":e.path||""},null,8,["item","base-path"])):r("v-if",!0)],64)))),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):r("v-if",!0)}}}),[["__scopeId","data-v-842c9878"]]);export{S as default};
