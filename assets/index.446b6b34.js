
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{z as e,d as a,v as n,B as t,E as i,e as l,w as s,T as m,V as o,b as d,i as u,f as c,D as r,h as v,m as p,n as f,R as y,W as j,Q as b,P as h}from"./index.5043a866.js";/* empty css                */import"./el-tooltip.0ca4bad9.js";import k from"./index.9e1a376d.js";import S from"./index.878ebb40.js";import{E as x,S as M}from"./index.55b7d311.js";import"./logo.3c3b2e9b.js";import"./el-avatar.3d506ec1.js";import"./index.048e82ef.js";/* empty css                   */import"./index.ddb7fac3.js";import"./el-tab-pane.c3257899.js";import"./event.a088884a.js";import"./aria.7c550f1b.js";import"./index.5e7c686e.js";const $={key:0},_={class:"header-container"},g={class:"main"},A=["onClick"],F=a({name:"Header"});var w=e(Object.assign(F,{setup(e){const a=n(),F=t(),w=o("switchMenu"),z=o("generateI18nTitle");return(e,n)=>{const t=h,o=i,C=x;return d(),l(m,{name:"header"},{default:s((()=>["pc"===u(a).mode&&["head","only-head"].includes(u(a).menu.menuMode)?(d(),c("header",$,[r("div",_,[r("div",g,[v(k),p(" 顶部模式 "),"head"===u(a).menu.menuMode?(d(),c("div",{key:0,class:f(["nav",{[`nav-fill-${u(a).menu.menuFillStyle}`]:""!==u(a).menu.menuFillStyle,[`nav-active-${u(a).menu.menuActiveStyle}`]:""!==u(a).menu.menuActiveStyle}])},[(d(!0),c(y,null,j(u(F).allMenus,((e,a)=>(d(),c(y,{key:a},[e.children&&0!==e.children.length?(d(),c("div",{key:0,class:f(["item-container",{active:a==u(F).actived}])},[r("div",{class:"item",onClick:e=>u(w)(a)},[e.meta.icon?(d(),l(o,{key:0},{default:s((()=>[v(t,{name:e.meta.icon},null,8,["name"])])),_:2},1024)):p("v-if",!0),r("span",null,b(u(z)(e.meta.i18n,e.meta.title)),1)],8,A)],2)):p("v-if",!0)],64)))),128))],2)):"only-head"===u(a).menu.menuMode?(d(),c(y,{key:1},[p(" 顶部精简模式 "),v(C,{mode:"horizontal","default-active":e.$route.meta.activeMenu||e.$route.path,class:f(["el-menu-nav",{[`nav-fill-${u(a).menu.menuFillStyle}`]:""!==u(a).menu.menuFillStyle,[`nav-active-${u(a).menu.menuActiveStyle}`]:""!==u(a).menu.menuActiveStyle}])},{default:s((()=>[(d(!0),c(y,null,j(u(F).allMenus,((e,a)=>(d(),c(y,null,[!1!==e.meta.sidebar?(d(),l(M,{key:a,item:e},null,8,["item"])):p("v-if",!0)],64)))),256))])),_:1},8,["default-active","class"])],2112)):p("v-if",!0)]),v(S)])])):p("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-0691db56"]]);export{w as default};