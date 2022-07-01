
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,d as s,v as a,B as n,r as l,c as u,i as o,f as i,h as t,n as d,m as r,w as m,b,X as p,R as c,W as f,e as h}from"./index.61feeb3e.js";/* empty css                */import"./el-tooltip.0ca4bad9.js";import g from"./index.398b69d2.js";import{E as M,S as v}from"./index.4bb0e664.js";import"./logo.3c3b2e9b.js";import"./aria.1f702b5f.js";import"./index.06b8ddf8.js";const j=s({name:"SubSidebar"});var y=e(Object.assign(j,{setup(e){const s=a(),j=n(),y=l(0);function S(e){y.value=e.target.scrollTop}const w=u((()=>{var e;return"mobile"===s.mode||["side","head","single"].includes(s.menu.menuMode)&&0!==j.sidebarMenus.length&&!(s.menu.subMenuOnylOneHide&&1===j.sidebarMenus.length&&(!j.sidebarMenus[0].children||(null==(e=j.sidebarMenus[0])?void 0:e.children.every((e=>!1===e.meta.sidebar)))))}));return(e,a)=>{const n=M;return o(w)?(b(),i("div",{key:0,class:d(["sub-sidebar-container",{"is-collapse":"pc"===o(s).mode&&o(s).menu.subMenuCollapse}]),onScroll:S},[t(g,{"show-logo":"single"===o(s).menu.menuMode,class:d(["sidebar-logo",{"sidebar-logo-bg":"single"===o(s).menu.menuMode,shadow:y.value}])},null,8,["show-logo","class"]),r(" 侧边栏模式（无主导航）或侧边栏精简模式 "),t(n,{"unique-opened":o(s).menu.subMenuUniqueOpened,"default-openeds":o(j).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===o(s).mode&&o(s).menu.subMenuCollapse,"collapse-transition":!1,class:d({"is-collapse-without-logo":"single"!==o(s).menu.menuMode&&o(s).menu.subMenuCollapse,[`menu-${o(s).menu.menuFillStyle}`]:""!==o(s).menu.menuFillStyle})},{default:m((()=>[t(p,{name:"sub-sidebar"},{default:m((()=>[(b(!0),i(c,null,f(o(j).sidebarMenus,((e,s)=>(b(),i(c,null,[!1!==e.meta.sidebar?(b(),h(v,{key:e.path||s,item:e,"base-path":e.path||""},null,8,["item","base-path"])):r("v-if",!0)],64)))),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):r("v-if",!0)}}}),[["__scopeId","data-v-842c9878"]]);export{y as default};
