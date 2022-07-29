
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,c as t,b as l,f as s,h as n,w as d,i,ba as c,M as o,m as r,g as u,Y as h}from"./index.45a1a0f2.js";import{a as m}from"./el-form.2bf48993.js";import{E as f}from"./el-checkbox.4bb145da.js";const b={class:"batch-action-bar"},g=h("当页全选"),p={key:0,class:"tips"},D=a({name:"BatchActionBar"}),k=e(Object.assign(D,{props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:e}){const h=a,D=t({get:function(){let a=!1;return 0!=h.data.length&&h.data.length==h.selectionData.length&&(a=!0),a},set:function(a){e(a?"check-all":"check-null")}}),k=t((()=>{let a=!1;return h.selectionData.length>0&&h.selectionData.length<h.data.length&&(a=!0),a}));return(e,t)=>{const h=f,v=m;return l(),s("div",b,[n(h,{modelValue:i(D),"onUpdate:modelValue":t[0]||(t[0]=a=>c(D)?D.value=a:null),indeterminate:i(k),disabled:!a.data.length},{default:d((()=>[g])),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(l(),s("div",p,"已选 "+o(a.selectionData.length)+" 项",1)):r("v-if",!0),n(v,{disabled:!a.selectionData.length},{default:d((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}}),[["__scopeId","data-v-e79715a0"]]);export{k as _};
