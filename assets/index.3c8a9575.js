
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,u as a,s as t,r as s,c as i,a as o,o as r,t as n,b as l,e as m,w as d,f as p,g as c,h as u,i as b,j as f,n as v,E as j,k as x,l as g,m as h,T as k,_ as y,p as w,q as _,v as M,x as C,y as P,z as $,A as S,B as D,C as F,D as q,F as z,G as A,H as E,I as T,J as B,K as L,L as N,M as H,N as I,O as J,P as O,Q as W}from"./index.9587bc3d.js";import{_ as G}from"./index.c141e7ae.js";import K from"./index.96519c42.js";import Q from"./index.9319824b.js";import R from"./index.96ab50e5.js";import U from"./index.3e389157.js";import V from"./index.75e76ff2.js";import X from"./index.99fcdda0.js";import Y from"./index.a8c0a87a.js";/* empty css                */import"./el-tooltip.89296c46.js";import"./index.b08f55df.js";import"./logo.951d255b.js";import"./index.1c83952a.js";import"./el-avatar.00db4d57.js";import"./index.2d725450.js";/* empty css                   */import"./index.61fb0680.js";import"./index.6d459e12.js";import"./el-tab-pane.80a699e2.js";import"./event.d298a7ab.js";import"./index.ee1db300.js";import"./aria.288df782.js";import"./index.dc073121.js";import"./index.5ff31cc5.js";import"./el-message-box.ede6bc82.js";import"./el-input.54ba849c.js";import"./el-overlay.3a21a8d0.js";import"./validator.85d9abfc.js";import"./index.7b171845.js";import"./index.18b622f4.js";import"./el-drawer.f87ebc7f.js";import"./use-dialog.50a4d896.js";import"./el-switch.58613113.js";/* empty css                       *//* empty css                        */import"./el-alert.0e33fa9a.js";import"./index.be7b8a6c.js";import"./el-notification.500480fd.js";import"./el-loading.7b1b970a.js";import"./index.e5e790a0.js";const Z=e=>e**3,ee=["onClick"];const ae=_(y(e({name:"ElBacktop",props:{visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},emits:{click:e=>e instanceof MouseEvent},setup(e,{emit:y}){const _=e,M=a("backtop"),C=t(),P=t(),$=s(!1),S=i((()=>({right:`${_.right}px`,bottom:`${_.bottom}px`}))),D=()=>{if(!C.value)return;const e=Date.now(),a=C.value.scrollTop,t=()=>{if(!C.value)return;const s=(Date.now()-e)/500;var i;s<1?(C.value.scrollTop=a*(1-((i=s)<.5?Z(2*i)/2:1-Z(2*(1-i))/2)),requestAnimationFrame(t)):C.value.scrollTop=0};requestAnimationFrame(t)},F=e=>{D(),y("click",e)},q=w((()=>{C.value&&($.value=C.value.scrollTop>=_.visibilityHeight)}),300);return o(P,"scroll",q),r((()=>{var e;P.value=document,C.value=document.documentElement,_.target&&(C.value=null!=(e=document.querySelector(_.target))?e:void 0,C.value||n("ElBacktop",`target is not existed: ${_.target}`),P.value=C.value)})),(e,a)=>(l(),m(k,{name:`${b(M).namespace.value}-fade-in`},{default:d((()=>[$.value?(l(),p("div",{key:0,style:x(b(S)),class:v(b(M).b()),onClick:g(F,["stop"])},[c(e.$slots,"default",{},(()=>[u(b(j),{class:v(b(M).e("icon"))},{default:d((()=>[u(b(f))])),_:1},8,["class"])]))],14,ee)):h("v-if",!0)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]));const te={class:"layout"},se={class:"wrapper"},ie={class:"main"},oe=e({name:"Layout"}),re=S(Object.assign(oe,{setup(e){const{proxy:a}=J(),t=D(),s=F(),o=M(),n=q(),c=z();!function(){const e=M(),a=C();function t(){$.init({watermark_txt:`Fantastic-admin 水印测试 ${a.account}`,watermark_width:150,watermark_x:0,watermark_y:0,watermark_x_space:50,watermark_y_space:50,watermark_alpha:.1,watermark_color:"light"===e.app.colorScheme?"black":"white"})}function s(){try{$.remove()}catch(e){}}P((()=>e.app.enableWatermark),(e=>{e?t():s()}),{immediate:!0}),P((()=>e.app.colorScheme),(()=>{e.app.enableWatermark&&(s(),t())}))}();const f=i((()=>void 0!==t.meta.copyright?t.meta.copyright:o.copyright.enable));function g(){s.push({name:"reload"})}return P((()=>o.menu.subMenuCollapse),(e=>{"mobile"===o.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),P((()=>t.path),(()=>{"mobile"===o.mode&&o.$patch((e=>{e.menu.subMenuCollapse=!0}))})),r((()=>{a.$hotkeys("f5",(e=>{o.toolbar.enablePageReload&&(e.preventDefault(),g())}))})),A((()=>{a.$hotkeys.unbind("f5")})),E("reload",g),E("switchMenu",(function(e){c.setActived(e),o.menu.switchMainMenuAndPageJump&&(O(c.sidebarMenusFirstDeepestPath)?window.open(c.sidebarMenusFirstDeepestPath,"_blank"):s.push(c.sidebarMenusFirstDeepestPath))})),(e,a)=>{const t=W,s=j,i=T("router-view"),r=G,c=ae;return l(),p("div",te,[B("div",{id:"app-main",class:v({"main-page-maximize":b(o).mainPageMaximizeStatus})},[u(K),B("div",se,[B("div",{class:v(["sidebar-container",{show:"mobile"===b(o).mode&&!b(o).menu.subMenuCollapse}])},[u(Q),u(R)],2),B("div",{class:v(["sidebar-mask",{show:"mobile"===b(o).mode&&!b(o).menu.subMenuCollapse}]),onClick:a[0]||(a[0]=e=>b(o).toggleSidebarCollapse())},null,2),B("div",{class:"main-container",style:x({"padding-bottom":e.$route.meta.paddingBottom})},[u(U),B("div",ie,[L(B("div",{class:"exit-main-page-maximize",onClick:a[1]||(a[1]=e=>b(o).setMainPageMaximize())},[u(s,null,{default:d((()=>[u(t,{name:"i-ri:logout-box-line"})])),_:1})],512),[[N,b(o).mainPageMaximizeStatus]]),u(i,null,{default:d((({Component:e,route:a})=>[u(k,{name:"main",mode:"out-in",appear:""},{default:d((()=>[(l(),m(I,{include:b(n).list},[(l(),m(H(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),b(f)?(l(),m(r,{key:0})):h("v-if",!0)],4)]),u(c,{right:20,bottom:20,title:"回到顶部"})],2),u(V),u(X),u(Y)])}}}),[["__scopeId","data-v-b0ad6e90"]]);export{re as default};