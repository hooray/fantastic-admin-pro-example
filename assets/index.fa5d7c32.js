
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as t,z as e,r as o,o as s,C as a,b as n,f as c,g as d,n as i}from"./index.7b80eec3.js";const l=t({name:"FixedActionBar"});var m=e(Object.assign(l,{setup(t){const e=o({isBottom:!0});function l(){var t=document.documentElement.scrollTop||document.body.scrollTop,o=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+o)>=s?e.value.isBottom=!0:e.value.isBottom=!1}return s((()=>{l(),window.addEventListener("scroll",l)})),a((()=>{window.removeEventListener("scroll",l)})),(t,o)=>(n(),c("div",{class:i(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[d(t.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-1048a486"]]);export{m as _};
