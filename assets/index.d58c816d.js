
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,z as e,c as t,b as l,f as s,h as n,w as c,i,bh as d,Q as o,m as r,g as h,a1 as u}from"./index.40e497bb.js";import{a as m}from"./el-form.c2395b98.js";import{E as b}from"./el-checkbox.96f9428b.js";const f={class:"batch-action-bar"},g=u("当页全选"),p={key:0,class:"tips"},v=a({name:"BatchActionBar"});var D=e(Object.assign(v,{props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:e}){const u=a,v=t({get:function(){let a=!1;return 0!=u.data.length&&u.data.length==u.selectionData.length&&(a=!0),a},set:function(a){e(a?"check-all":"check-null")}}),D=t((()=>{let a=!1;return u.selectionData.length>0&&u.selectionData.length<u.data.length&&(a=!0),a}));return(e,t)=>{const u=b,k=m;return l(),s("div",f,[n(u,{modelValue:i(v),"onUpdate:modelValue":t[0]||(t[0]=a=>d(v)?v.value=a:null),indeterminate:i(D),disabled:!a.data.length},{default:c((()=>[g])),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(l(),s("div",p,"已选 "+o(a.selectionData.length)+" 项",1)):r("v-if",!0),n(k,{disabled:!a.selectionData.length},{default:c((()=>[h(e.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}}),[["__scopeId","data-v-76a9c8ac"]]);export{D as _};