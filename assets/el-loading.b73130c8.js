
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{u as e,r as n,as as t,bw as o,aL as l,au as a,w as s,K as i,L as r,h as u,T as c,an as d,b2 as v,aD as b,aB as g,bs as m,ba as f,am as p,aC as x,b8 as y,bx as C}from"./index.14f3ec2e.js";let w;const L=function(g={}){if(!v)return;const m=k(g);if(m.fullscreen&&w)return w;const f=function(v){let b;const g=e("loading"),m=n(!1),f=t({...v,originalPosition:"",originalOverflow:"",visible:!1});function p(){const e=f.parent;if(!e.vLoadingAddClassList){let n=e.getAttribute("loading-number");n=Number.parseInt(n)-1,n?e.setAttribute("loading-number",n.toString()):(d(e,g.bm("parent","relative")),e.removeAttribute("loading-number")),d(e,g.bm("parent","hidden"))}x(),C.unmount()}function x(){var e,n;null==(n=null==(e=w.$el)?void 0:e.parentNode)||n.removeChild(w.$el)}function y(){m.value&&(m.value=!1,p())}const C=o({name:"ElLoading",setup:()=>()=>{const e=f.spinner||f.svg,n=a("svg",{class:"circular",viewBox:f.svgViewBox?f.svgViewBox:"25 25 50 50",...e?{innerHTML:e}:{}},[a("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),t=f.text?a("p",{class:g.b("text")},[f.text]):void 0;return a(c,{name:g.b("fade"),onAfterLeave:y},{default:s((()=>[i(u("div",{style:{backgroundColor:f.background||""},class:[g.b("mask"),f.customClass,f.fullscreen?"is-fullscreen":""]},[a("div",{class:g.b("spinner")},[n,t])]),[[r,f.visible]])]))})}}),w=C.mount(document.createElement("div"));return{...l(f),setText:function(e){f.text=e},removeElLoadingChild:x,close:function(){var e;v.beforeClose&&!v.beforeClose()||(f.parent.vLoadingAddClassList=void 0,m.value=!0,clearTimeout(b),b=window.setTimeout((()=>{m.value&&(m.value=!1,p())}),400),f.visible=!1,null==(e=v.closed)||e.call(v))},handleAfterLeave:y,vm:w,get $el(){return w.$el}}}({...m,closed:()=>{var e;null==(e=m.closed)||e.call(m),m.fullscreen&&(w=void 0)}});h(m,m.parent,f),A(m,m.parent,f),m.parent.vLoadingAddClassList=()=>A(m,m.parent,f);let p=m.parent.getAttribute("loading-number");return p=p?`${Number.parseInt(p)+1}`:"1",m.parent.setAttribute("loading-number",p),m.parent.appendChild(f.$el),b((()=>f.visible.value=m.visible)),m.fullscreen&&(w=f),f},k=e=>{var n,t,o,l;let a;return a=g(e.target)?null!=(n=document.querySelector(e.target))?n:document.body:e.target||document.body,{parent:a===document.body||e.body?document.body:a,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:a===document.body&&(null==(t=e.fullscreen)||t),lock:null!=(o=e.lock)&&o,customClass:e.customClass||"",visible:null==(l=e.visible)||l,target:a}},h=async(e,n,t)=>{const{nextZIndex:o}=m(),l={};if(e.fullscreen)t.originalPosition.value=f(document.body,"position"),t.originalOverflow.value=f(document.body,"overflow"),l.zIndex=o();else if(e.parent===document.body){t.originalPosition.value=f(document.body,"position"),await b();for(const n of["top","left"]){const t="top"===n?"scrollTop":"scrollLeft";l[n]=e.target.getBoundingClientRect()[n]+document.body[t]+document.documentElement[t]-Number.parseInt(f(document.body,`margin-${n}`),10)+"px"}for(const n of["height","width"])l[n]=`${e.target.getBoundingClientRect()[n]}px`}else t.originalPosition.value=f(n,"position");for(const[a,s]of Object.entries(l))t.$el.style[a]=s},A=(n,t,o)=>{const l=e("loading");"absolute"!==o.originalPosition.value&&"fixed"!==o.originalPosition.value?p(t,l.bm("parent","relative")):d(t,l.bm("parent","relative")),n.fullscreen&&n.lock?p(t,l.bm("parent","hidden")):d(t,l.bm("parent","hidden"))},B=Symbol("ElLoading"),$=(e,t)=>{var o,l,a,s;const i=t.instance,r=e=>x(t.value)?t.value[e]:void 0,u=t=>(e=>{const t=g(e)&&(null==i?void 0:i[e])||e;return t?n(t):t})(r(t)||e.getAttribute(`element-loading-${C(t)}`)),c=null!=(o=r("fullscreen"))?o:t.modifiers.fullscreen,d={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:c,target:null!=(l=r("target"))?l:c?void 0:e,body:null!=(a=r("body"))?a:t.modifiers.body,lock:null!=(s=r("lock"))?s:t.modifiers.lock};e[B]={options:d,instance:L(d)}},V={mounted(e,n){n.value&&$(e,n)},updated(e,n){const t=e[B];n.oldValue!==n.value&&(n.value&&!n.oldValue?$(e,n):n.value&&n.oldValue?x(n.value)&&((e,n)=>{for(const t of Object.keys(n))y(n[t])&&(n[t].value=e[t])})(n.value,t.options):null==t||t.instance.close())},unmounted(e){var n;null==(n=e[B])||n.instance.close()}};export{L,V as v};
