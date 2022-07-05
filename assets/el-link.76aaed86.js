
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;import{aa as l,aL as o,d as c,u as d,b as f,f as p,e as u,w as b,N as y,i as m,E as k,m as v,n as g,g as O,_ as h,q as j}from"./index.8029e3e3.js";const w=l({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:o,default:""}}),E={click:e=>e instanceof MouseEvent},P=["href"],$=c((_=((e,a)=>{for(var s in a||(a={}))n.call(a,s)&&i(e,s,a[s]);if(t)for(var s of t(a))r.call(a,s)&&i(e,s,a[s]);return e})({},{name:"ElLink"}),a(_,s({props:w,emits:E,setup(e,{emit:a}){const s=e,t=d("link");function n(e){s.disabled||a("click",e)}return(e,a)=>(f(),p("a",{class:g([m(t).b(),m(t).m(e.type),m(t).is("disabled",e.disabled),m(t).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:n},[e.icon?(f(),u(m(k),{key:0},{default:b((()=>[(f(),u(y(e.icon)))])),_:1})):v("v-if",!0),e.$slots.default?(f(),p("span",{key:1,class:g(m(t).e("inner"))},[O(e.$slots,"default")],2)):v("v-if",!0),e.$slots.icon?O(e.$slots,"icon",{key:2}):v("v-if",!0)],10,P))}}))));var _;const S=j(h($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));export{S as E};
