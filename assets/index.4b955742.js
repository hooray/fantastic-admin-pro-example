
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,A as t,r as o,o as s,G as n,b as a,f as c,g as d,n as i}from"./index.14f3ec2e.js";const l=e({name:"FixedActionBar"}),m=t(Object.assign(l,{setup(e){const t=o({isBottom:!0});function l(){var e=document.documentElement.scrollTop||document.body.scrollTop,o=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(e+o)>=s?t.value.isBottom=!0:t.value.isBottom=!1}return s((()=>{l(),window.addEventListener("scroll",l)})),n((()=>{window.removeEventListener("scroll",l)})),(e,o)=>(a(),c("div",{class:i(["actionbar",{shadow:!t.value.isBottom}]),"data-fixed-calc-width":""},[d(e.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-e79fa78c"]]);export{m as _};
