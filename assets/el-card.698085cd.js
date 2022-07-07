
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,r,s)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s;import{aa as d,az as n,d as p,u as c,b as i,f as y,n as b,i as u,g as f,a2 as v,R as h,m,F as w,k as O,_ as g,q as j}from"./index.6746a3d3.js";const S=d({header:{type:String,default:""},bodyStyle:{type:n([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),P=p((k=((e,a)=>{for(var r in a||(a={}))t.call(a,r)&&l(e,r,a[r]);if(s)for(var r of s(a))o.call(a,r)&&l(e,r,a[r]);return e})({},{name:"ElCard"}),a(k,r({props:S,setup(e){const a=c("card");return(e,r)=>(i(),y("div",{class:b([u(a).b(),u(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(i(),y("div",{key:0,class:b(u(a).e("header"))},[f(e.$slots,"header",{},(()=>[v(h(e.header),1)]))],2)):m("v-if",!0),w("div",{class:b(u(a).e("body")),style:O(e.bodyStyle)},[f(e.$slots,"default")],6)],2))}}))));var k;const $=j(g(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{$ as E};
