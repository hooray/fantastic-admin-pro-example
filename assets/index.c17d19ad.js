
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as t,A as o,r as e,o as s,D as a,b as n,f as d,g as c,n as i}from"./index.6746a3d3.js";const l=t({name:"FixedActionBar"});var m=o(Object.assign(l,{setup(t){const o=e({isBottom:!0});function l(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+e)>=s?o.value.isBottom=!0:o.value.isBottom=!1}return s((()=>{l(),window.addEventListener("scroll",l)})),a((()=>{window.removeEventListener("scroll",l)})),(t,e)=>(n(),d("div",{class:i(["actionbar",{shadow:!o.value.isBottom}]),"data-fixed-calc-width":""},[c(t.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-1048a486"]]);export{m as _};
