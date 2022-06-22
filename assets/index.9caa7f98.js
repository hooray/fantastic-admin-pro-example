
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{d as n,u as m,s as l,r as d,c,a as p,o as w,t as u,b as _,e as k,w as h,f,g as b,h as y,i as v,j as g,n as x,E as j,k as M,l as C,m as E,T as P,_ as O,p as I,q as z,v as S,x as B,y as T,z as L,A as N,B as $,C as F,D,F as A,G as q,H,I as R,J as W,K as V,L as J,M as K,N as G,O as Q,P as U}from"./index.f897cb43.js";import{_ as X}from"./index.bd2a2b22.js";import Y from"./index.79398e09.js";import Z from"./index.8d55a18d.js";import ee from"./index.61ad800b.js";import te from"./index.00403228.js";import ae from"./index.a953d666.js";import re from"./index.393d1e6f.js";import oe from"./index.3526e3c2.js";/* empty css                */import"./el-tooltip.0ca4bad9.js";import"./index.a98d44fe.js";import"./logo.3c3b2e9b.js";import"./index.efde0a87.js";import"./el-avatar.649b1e9f.js";import"./index.cccd8ca7.js";/* empty css                   */import"./index.17975c7d.js";import"./el-tab-pane.79fa0252.js";import"./event2.c09267d7.js";import"./index.25faf4bd.js";import"./aria2.dceaa135.js";import"./index2.c00a302d.js";import"./index.65a65a3b.js";import"./index2.d936562d.js";import"./index2.faa56537.js";import"./index2.3d9b0528.js";import"./validator2.fb9fc88c.js";import"./index2.5922f0d8.js";import"./index.6b1b5ec9.js";/* empty css                 */import"./el-drawer.3d9d58c5.js";import"./el-overlay.804ef1d1.js";import"./el-switch.99d6bbf0.js";/* empty css                       *//* empty css                        */import"./el-alert.c1ba8334.js";import"./index2.92fb4303.js";import"./index2.5870bd04.js";import"./index2.b54177dd.js";import"./directive2.4531c015.js";const ie=e=>e**3,se={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},ne={click:e=>e instanceof MouseEvent},me=["onClick"],le=n((de=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&s(e,a,t[a]);return e})({},{name:"ElBacktop"}),t(de,a({props:se,emits:ne,setup(e,{emit:t}){const a=e,r=m("backtop"),o=l(),i=l(),s=d(!1),n=c((()=>({right:`${a.right}px`,bottom:`${a.bottom}px`}))),O=()=>{if(!o.value)return;const e=Date.now(),t=o.value.scrollTop,a=()=>{if(!o.value)return;const r=(Date.now()-e)/500;var i;r<1?(o.value.scrollTop=t*(1-((i=r)<.5?ie(2*i)/2:1-ie(2*(1-i))/2)),requestAnimationFrame(a)):o.value.scrollTop=0};requestAnimationFrame(a)},z=e=>{O(),t("click",e)},S=I((()=>{o.value&&(s.value=o.value.scrollTop>=a.visibilityHeight)}),300);return p(i,"scroll",S),w((()=>{var e;i.value=document,o.value=document.documentElement,a.target&&(o.value=null!=(e=document.querySelector(a.target))?e:void 0,o.value||u("ElBacktop",`target is not existed: ${a.target}`),i.value=o.value)})),(e,t)=>(_(),k(P,{name:`${v(r).namespace.value}-fade-in`},{default:h((()=>[s.value?(_(),f("div",{key:0,style:M(v(n)),class:x(v(r).b()),onClick:C(z,["stop"])},[b(e.$slots,"default",{},(()=>[y(v(j),{class:x(v(r).e("icon"))},{default:h((()=>[y(v(g))])),_:1},8,["class"])]))],14,me)):E("v-if",!0)])),_:3},8,["name"]))}}))));var de;const ce=z(O(le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]));var pe={},we=!1,ue={watermark_id:"wm_div_id",watermark_prefix:"mask_div_id",watermark_txt:"测试水印",watermark_x:20,watermark_y:20,watermark_rows:0,watermark_cols:0,watermark_x_space:50,watermark_y_space:50,watermark_font:"微软雅黑",watermark_color:"black",watermark_fontsize:"18px",watermark_alpha:.15,watermark_width:100,watermark_height:100,watermark_angle:15,watermark_parent_width:0,watermark_parent_height:0,watermark_parent_node:null,monitor:!0};const _e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;var ke,he=void 0!==_e,fe=he?new _e((function(e){we?we=!1:(ke&&1===e.length||1===e.length&&e[0].removedNodes.length>=1)&&ye(ke)})):null,be={childList:!0,attributes:!0,subtree:!0},ye=function(e){if(1===arguments.length&&"object"==typeof arguments[0]){var t=arguments[0]||{};for(let e in t)t[e]&&ue[e]&&t[e]===ue[e]||(t[e]||0===t[e])&&(ue[e]=t[e])}var a=document.getElementById(ue.watermark_id);a&&a.parentNode&&a.parentNode.removeChild(a);var r=document.getElementById(ue.watermark_parent_node),o=r||document.body,i=Math.max(o.scrollWidth,o.clientWidth),s=Math.max(o.scrollHeight,o.clientHeight),n=arguments[0]||{},m=o,l=0,d=0;n.watermark_parent_width||n.watermark_parent_height?m&&(l=m.offsetTop||0,d=m.offsetLeft||0,ue.watermark_x=ue.watermark_x+d,ue.watermark_y=ue.watermark_y+l):m&&(l=m.offsetTop||0,d=m.offsetLeft||0);var c=document.getElementById(ue.watermark_id),p=null;if(c)c.shadowRoot&&(p=c.shadowRoot);else{(c=document.createElement("div")).id=ue.watermark_id,c.setAttribute("style","pointer-events: none !important; display: block !important"),p="function"==typeof c.attachShadow?c.attachShadow({mode:"open"}):c;var w=o.children,u=Math.floor(Math.random()*(w.length-1));w[u]?o.insertBefore(c,w[u]):o.appendChild(c)}ue.watermark_cols=parseInt((i-ue.watermark_x)/(ue.watermark_width+ue.watermark_x_space));var _,k=parseInt((i-ue.watermark_x-ue.watermark_width*ue.watermark_cols)/ue.watermark_cols);ue.watermark_x_space=k?ue.watermark_x_space:k,ue.watermark_rows=parseInt((s-ue.watermark_y)/(ue.watermark_height+ue.watermark_y_space));var h,f,b,y=parseInt((s-ue.watermark_y-ue.watermark_height*ue.watermark_rows)/ue.watermark_rows);ue.watermark_y_space=y?ue.watermark_y_space:y,r?(_=ue.watermark_x+ue.watermark_width*ue.watermark_cols+ue.watermark_x_space*(ue.watermark_cols-1),h=ue.watermark_y+ue.watermark_height*ue.watermark_rows+ue.watermark_y_space*(ue.watermark_rows-1)):(_=d+ue.watermark_x+ue.watermark_width*ue.watermark_cols+ue.watermark_x_space*(ue.watermark_cols-1),h=l+ue.watermark_y+ue.watermark_height*ue.watermark_rows+ue.watermark_y_space*(ue.watermark_rows-1));for(var v=0;v<ue.watermark_rows;v++){b=r?l+ue.watermark_y+(s-h)/2+(ue.watermark_y_space+ue.watermark_height)*v:ue.watermark_y+(s-h)/2+(ue.watermark_y_space+ue.watermark_height)*v;for(var g=0;g<ue.watermark_cols;g++){f=r?d+ue.watermark_x+(i-_)/2+(ue.watermark_width+ue.watermark_x_space)*g:ue.watermark_x+(i-_)/2+(ue.watermark_width+ue.watermark_x_space)*g;var x=document.createElement("div"),j=document.createTextNode(ue.watermark_txt);x.appendChild(j),x.id=ue.watermark_prefix+v+g,x.style.webkitTransform="rotate(-"+ue.watermark_angle+"deg)",x.style.MozTransform="rotate(-"+ue.watermark_angle+"deg)",x.style.msTransform="rotate(-"+ue.watermark_angle+"deg)",x.style.OTransform="rotate(-"+ue.watermark_angle+"deg)",x.style.transform="rotate(-"+ue.watermark_angle+"deg)",x.style.visibility="",x.style.position="absolute",x.style.left=f+"px",x.style.top=b+"px",x.style.overflow="hidden",x.style.zIndex="9999999",x.style.opacity=ue.watermark_alpha,x.style.fontSize=ue.watermark_fontsize,x.style.fontFamily=ue.watermark_font,x.style.color=ue.watermark_color,x.style.textAlign="center",x.style.width=ue.watermark_width+"px",x.style.height=ue.watermark_height+"px",x.style.display="block",x.style["-ms-user-select"]="none",p.appendChild(x)}}const M=void 0===e.monitor?ue.monitor:e.monitor;M&&he&&(fe.observe(o,be),fe.observe(document.getElementById(ue.watermark_id).shadowRoot,be))};pe.init=function(e){ke=e,ye(e),window.addEventListener("onload",(function(){ye(e)})),window.addEventListener("resize",(function(){ye(e)}))},pe.load=function(e){ke=e,ye(e)},pe.remove=function(){we=!0,function(){if(1===arguments.length&&"object"==typeof arguments[0]){var e=arguments[0]||{};for(let t in e)e[t]&&ue[t]&&e[t]===ue[t]||(e[t]||0===e[t])&&(ue[t]=e[t])}var t=document.getElementById(ue.watermark_id);t.parentNode.removeChild(t),fe.disconnect()}()};fe=new _e((function(e){var t=document.getElementById(ue.watermark_parent_node),a=t||document.body;if(document.getElementById(ue.watermark_id)!==e[0].target&&a!==e[0].target||!(ke&&1===e.length||1===e.length&&e[0].removedNodes.length>=1)){if(t){var r=getComputedStyle(t).getPropertyValue("width"),o=getComputedStyle(t).getPropertyValue("height");r===ve.width&&o===ve.height||(ve.width=r,ve.height=o,ye(ke))}}else ye(ke)})),be={childList:!0,attributes:!0,subtree:!0,attributeFilter:["style"],attributeOldValue:!0};var ve={width:0,height:0};const ge={class:"layout"},xe={class:"wrapper"},je={class:"main"},Me=n({name:"Layout"});var Ce=L(Object.assign(Me,{setup(e){const{proxy:t}=H(),a=R(),r=W(),o=S(),i=N(),s=$();(()=>{const e=S(),t=B();function a(){pe.init({watermark_txt:`Fantastic-admin 水印测试 ${t.account}`,watermark_width:150,watermark_x:0,watermark_y:0,watermark_x_space:50,watermark_y_space:50,watermark_alpha:.1})}function r(){try{pe.remove()}catch(e){}}T((()=>e.app.enableWatermark),(e=>{e?a():r()}),{immediate:!0})})();const n=c((()=>void 0!==a.meta.copyright?a.meta.copyright:o.copyright.enable));function m(){r.push({name:"reload"})}return T((()=>o.menu.subMenuCollapse),(e=>{"mobile"===o.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),T((()=>a.path),(()=>{"mobile"===o.mode&&o.$patch((e=>{e.menu.subMenuCollapse=!0}))})),w((()=>{t.$hotkeys("f5",(e=>{o.toolbar.enablePageReload&&(e.preventDefault(),m())}))})),F((()=>{t.$hotkeys.unbind("f5")})),V("reload",m),V("switchMenu",(function(e){s.setActived(e),o.menu.switchMainMenuAndPageJump&&(Q(s.sidebarMenusFirstDeepestPath)?window.open(s.sidebarMenusFirstDeepestPath,"_blank"):r.push(s.sidebarMenusFirstDeepestPath))})),(e,t)=>{const a=U,r=j,s=J("router-view"),m=X,l=ce;return _(),f("div",ge,[D("div",{id:"app-main",class:x({"main-page-maximize":v(o).mainPageMaximizeStatus})},[y(Y),D("div",xe,[D("div",{class:x(["sidebar-container",{show:"mobile"===v(o).mode&&!v(o).menu.subMenuCollapse}])},[y(Z),y(ee)],2),D("div",{class:x(["sidebar-mask",{show:"mobile"===v(o).mode&&!v(o).menu.subMenuCollapse}]),onClick:t[0]||(t[0]=e=>v(o).toggleSidebarCollapse())},null,2),D("div",{class:"main-container",style:M({"padding-bottom":e.$route.meta.paddingBottom})},[y(te),D("div",je,[A(D("div",{class:"exit-main-page-maximize",onClick:t[1]||(t[1]=e=>v(o).setMainPageMaximize())},[y(r,null,{default:h((()=>[y(a,{name:"i-ri:logout-box-line"})])),_:1})],512),[[q,v(o).mainPageMaximizeStatus]]),y(s,null,{default:h((({Component:e,route:t})=>[y(P,{name:"main",mode:"out-in",appear:""},{default:h((()=>[(_(),k(G,{include:v(i).list},[(_(),k(K(e),{key:t.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),v(n)?(_(),k(m,{key:0})):E("v-if",!0)],4)]),y(l,{right:20,bottom:20,title:"回到顶部"})],2),y(ae),y(re),y(oe)])}}}),[["__scopeId","data-v-5037c866"]]);export{Ce as default};
