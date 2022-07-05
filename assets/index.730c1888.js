
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;import{d as n,u as l,s as m,r as c,c as p,a as d,o as u,t as b,b as f,e as v,w as j,f as g,g as x,h as y,i as h,j as k,n as w,E as _,k as M,l as P,m as C,T as O,_ as S,p as $,q as D,v as F,x as q,y as z,z as E,A,B as T,C as B,D as L,F as N,G as H,H as I,I as J,J as W,K as G,L as K,M as Q,N as R,O as U,P as V,Q as X}from"./index.a9c2df36.js";import{_ as Y}from"./index.dfabac3e.js";import Z from"./index.87eff19f.js";import ee from"./index.bc17cec4.js";import ae from"./index.7beb96e9.js";import te from"./index.c39c954b.js";import oe from"./index.bdcfecfc.js";import se from"./index.0280a80c.js";import ie from"./index.640578f7.js";/* empty css                */import"./el-tooltip.0ca4bad9.js";import"./index.70d11e47.js";import"./logo.3c3b2e9b.js";import"./index.041533f7.js";import"./el-avatar.25079505.js";import"./index.4f6f0538.js";/* empty css                   */import"./index.9e22fd36.js";import"./el-tab-pane.4362d27e.js";import"./event.a088884a.js";import"./index.8da12148.js";import"./aria.7c550f1b.js";import"./index.d8874fdd.js";import"./index.46264e86.js";import"./el-message-box.a28c1e49.js";import"./el-input.c05163b3.js";import"./el-overlay.c8cbc527.js";import"./validator.39ba444f.js";import"./index.d26a1cab.js";import"./index.7a4f125d.js";import"./el-drawer.002b1f5a.js";import"./use-dialog.b7f51df8.js";import"./el-switch.bd71f058.js";/* empty css                       *//* empty css                        */import"./el-alert.3a93e434.js";import"./index.568d9538.js";import"./el-notification.6c80cd94.js";import"./el-loading.6702a29c.js";import"./index.72dc026a.js";const re=e=>e**3,ne={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},le={click:e=>e instanceof MouseEvent},me=["onClick"],ce=n((pe=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&r(e,t,a[t]);if(o)for(var t of o(a))i.call(a,t)&&r(e,t,a[t]);return e})({},{name:"ElBacktop"}),a(pe,t({props:ne,emits:le,setup(e,{emit:a}){const t=e,o=l("backtop"),s=m(),i=m(),r=c(!1),n=p((()=>({right:`${t.right}px`,bottom:`${t.bottom}px`}))),S=()=>{if(!s.value)return;const e=Date.now(),a=s.value.scrollTop,t=()=>{if(!s.value)return;const o=(Date.now()-e)/500;var i;o<1?(s.value.scrollTop=a*(1-((i=o)<.5?re(2*i)/2:1-re(2*(1-i))/2)),requestAnimationFrame(t)):s.value.scrollTop=0};requestAnimationFrame(t)},D=e=>{S(),a("click",e)},F=$((()=>{s.value&&(r.value=s.value.scrollTop>=t.visibilityHeight)}),300);return d(i,"scroll",F),u((()=>{var e;i.value=document,s.value=document.documentElement,t.target&&(s.value=null!=(e=document.querySelector(t.target))?e:void 0,s.value||b("ElBacktop",`target is not existed: ${t.target}`),i.value=s.value)})),(e,a)=>(f(),v(O,{name:`${h(o).namespace.value}-fade-in`},{default:j((()=>[r.value?(f(),g("div",{key:0,style:M(h(n)),class:w(h(o).b()),onClick:P(D,["stop"])},[x(e.$slots,"default",{},(()=>[y(h(_),{class:w(h(o).e("icon"))},{default:j((()=>[y(h(k))])),_:1},8,["class"])]))],14,me)):C("v-if",!0)])),_:3},8,["name"]))}}))));var pe;const de=D(S(ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]));const ue={class:"layout"},be={class:"wrapper"},fe={class:"main"},ve=n({name:"Layout"});var je=A(Object.assign(ve,{setup(e){const{proxy:a}=J(),t=W(),o=G(),s=F(),i=T(),r=B();!function(){const e=F(),a=q();function t(){E.init({watermark_txt:`Fantastic-admin 水印测试 ${a.account}`,watermark_width:150,watermark_x:0,watermark_y:0,watermark_x_space:50,watermark_y_space:50,watermark_alpha:.1,watermark_color:"light"===e.app.colorScheme?"black":"white"})}function o(){try{E.remove()}catch(e){}}z((()=>e.app.enableWatermark),(e=>{e?t():o()}),{immediate:!0}),z((()=>e.app.colorScheme),(()=>{e.app.enableWatermark&&(o(),t())}))}();const n=p((()=>void 0!==t.meta.copyright?t.meta.copyright:s.copyright.enable));function l(){o.push({name:"reload"})}return z((()=>s.menu.subMenuCollapse),(e=>{"mobile"===s.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),z((()=>t.path),(()=>{"mobile"===s.mode&&s.$patch((e=>{e.menu.subMenuCollapse=!0}))})),u((()=>{a.$hotkeys("f5",(e=>{s.toolbar.enablePageReload&&(e.preventDefault(),l())}))})),L((()=>{a.$hotkeys.unbind("f5")})),K("reload",l),K("switchMenu",(function(e){r.setActived(e),s.menu.switchMainMenuAndPageJump&&(V(r.sidebarMenusFirstDeepestPath)?window.open(r.sidebarMenusFirstDeepestPath,"_blank"):o.push(r.sidebarMenusFirstDeepestPath))})),(e,a)=>{const t=X,o=_,r=Q("router-view"),l=Y,m=de;return f(),g("div",ue,[N("div",{id:"app-main",class:w({"main-page-maximize":h(s).mainPageMaximizeStatus})},[y(Z),N("div",be,[N("div",{class:w(["sidebar-container",{show:"mobile"===h(s).mode&&!h(s).menu.subMenuCollapse}])},[y(ee),y(ae)],2),N("div",{class:w(["sidebar-mask",{show:"mobile"===h(s).mode&&!h(s).menu.subMenuCollapse}]),onClick:a[0]||(a[0]=e=>h(s).toggleSidebarCollapse())},null,2),N("div",{class:"main-container",style:M({"padding-bottom":e.$route.meta.paddingBottom})},[y(te),N("div",fe,[H(N("div",{class:"exit-main-page-maximize",onClick:a[1]||(a[1]=e=>h(s).setMainPageMaximize())},[y(o,null,{default:j((()=>[y(t,{name:"i-ri:logout-box-line"})])),_:1})],512),[[I,h(s).mainPageMaximizeStatus]]),y(r,null,{default:j((({Component:e,route:a})=>[y(O,{name:"main",mode:"out-in",appear:""},{default:j((()=>[(f(),v(U,{include:h(i).list},[(f(),v(R(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),h(n)?(f(),v(l,{key:0})):C("v-if",!0)],4)]),y(m,{right:20,bottom:20,title:"回到顶部"})],2),y(oe),y(se),y(ie)])}}}),[["__scopeId","data-v-2f39d0e7"]]);export{je as default};
