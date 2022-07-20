
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,c as t,b as l,f as s,h as n,w as d,i as c,b9 as i,R as o,m as r,g as u,a2 as h}from"./index.d45ed42d.js";import{a as m}from"./el-form.58f5e381.js";import{E as f}from"./el-checkbox.42bf7022.js";const g={class:"batch-action-bar"},p=h("当页全选"),b={key:0,class:"tips"},v=a({name:"BatchActionBar"});var D=e(Object.assign(v,{props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:e}){const h=a,v=t({get:function(){let a=!1;return 0!=h.data.length&&h.data.length==h.selectionData.length&&(a=!0),a},set:function(a){e(a?"check-all":"check-null")}}),D=t((()=>{let a=!1;return h.selectionData.length>0&&h.selectionData.length<h.data.length&&(a=!0),a}));return(e,t)=>{const h=f,k=m;return l(),s("div",g,[n(h,{modelValue:c(v),"onUpdate:modelValue":t[0]||(t[0]=a=>i(v)?v.value=a:null),indeterminate:c(D),disabled:!a.data.length},{default:d((()=>[p])),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(l(),s("div",b,"已选 "+o(a.selectionData.length)+" 项",1)):r("v-if",!0),n(k,{disabled:!a.selectionData.length},{default:d((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}}),[["__scopeId","data-v-76a9c8ac"]]);export{D as _};
