
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{b8 as e,t as o,am as t,aq as n,y as s,b9 as a,ba as d,ao as u,bb as r,ap as p,b2 as l,a9 as i,ay as c,d as E,u as m,h as y,g as T,aw as S}from"./index.0358e322.js";var b=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(b||{});const M=l=>{if(e(l)||o("[useLockscreen]","You need to pass a ref param to this function"),!t||n(document.body,"el-popup-parent--hidden"))return;let i=0,c=!1,E="0",m=0;const y=()=>{p(document.body,"el-popup-parent--hidden"),c&&(document.body.style.paddingRight=E)};s(l,(e=>{if(!e)return void y();c=!n(document.body,"el-popup-parent--hidden"),c&&(E=document.body.style.paddingRight,m=Number.parseInt(a(document.body,"paddingRight"),10)),i=d();const o=document.documentElement.clientHeight<document.body.scrollHeight,t=a(document.body,"overflowY");i>0&&(o||"scroll"===t)&&c&&(document.body.style.paddingRight=`${m+i}px`),u(document.body,"el-popup-parent--hidden")})),r((()=>y()))},A=e=>{if(!e)return{onClick:l,onMousedown:l,onMouseup:l};let o=!1,t=!1;return{onClick:n=>{o&&t&&e(n),o=t=!1},onMousedown:e=>{o=e.target===e.currentTarget},onMouseup:e=>{t=e.target===e.currentTarget}}};const g=E({name:"ElOverlay",props:i({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:c([String,Array,Object])},zIndex:{type:c([String,Number])}}),emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:o,emit:t}){const n=m("overlay"),{onClick:s,onMousedown:a,onMouseup:d}=A(e.customMaskEvent?void 0:e=>{t("click",e)});return()=>e.mask?y("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:a,onMouseup:d},[T(o,"default")],b.STYLE|b.CLASS|b.PROPS,["onClick","onMouseup","onMousedown"]):S("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[T(o,"default")])}});export{g as E,A as a,M as u};