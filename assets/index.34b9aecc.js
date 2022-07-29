
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,A as a,c as t,b as l,f as s,h as n,w as c,i,ba as d,M as o,m as r,g as u,Y as h}from"./index.3b0b287f.js";import{a as m}from"./el-form.1e0549a2.js";import{E as f}from"./el-checkbox.583cc7e2.js";const g={class:"batch-action-bar"},b=h("当页全选"),p={key:0,class:"tips"},D=e({name:"BatchActionBar"}),k=a(Object.assign(D,{props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:a}){const h=e,D=t({get:function(){let e=!1;return 0!=h.data.length&&h.data.length==h.selectionData.length&&(e=!0),e},set:function(e){a(e?"check-all":"check-null")}}),k=t((()=>{let e=!1;return h.selectionData.length>0&&h.selectionData.length<h.data.length&&(e=!0),e}));return(a,t)=>{const h=f,v=m;return l(),s("div",g,[n(h,{modelValue:i(D),"onUpdate:modelValue":t[0]||(t[0]=e=>d(D)?D.value=e:null),indeterminate:i(k),disabled:!e.data.length},{default:c((()=>[b])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(l(),s("div",p,"已选 "+o(e.selectionData.length)+" 项",1)):r("v-if",!0),n(v,{disabled:!e.selectionData.length},{default:c((()=>[u(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}}),[["__scopeId","data-v-e79715a0"]]);export{k as _};
