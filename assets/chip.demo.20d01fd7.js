
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,A as a,b as l,f as s,F as t,g as n,h as o,w as d,m as u,n as i,Q as c,E as f,bI as r,c7 as p,e as _,a2 as m,c6 as y}from"./index.d45ed42d.js";import{E as h}from"./el-avatar.c0e0e66c.js";import{i as v}from"./logo.3c3b2e9b.js";const b={class:"content"},g=e({name:"Chip"});var C=a(Object.assign(g,{props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup:(e,{emit:a})=>(r,p)=>{const _=c,m=f;return l(),s("div",{class:i(["chip",[e.type?`chip--${e.type}`:""]])},[t("div",b,[n(r.$slots,"default",{},void 0,!0),e.closable?(l(),s("span",{key:0,class:"closable",onClick:p[0]||(p[0]=e=>a("close"))},[o(m,null,{default:d((()=>[o(_,{name:"i-ep:close-bold"})])),_:1})])):u("v-if",!0)])],2)}}),[["__scopeId","data-v-9d007394"]]);const w={data:()=>({isShow:!0,avatar:v}),methods:{handleClose(){this.isShow=!1}}},S=m(" 基础纸片 "),j=m("Fa"),k=m(" 头像文字 "),I=m(" 头像图标 "),x=m(" 头像图片 "),E=m(" 关闭按钮 "),F=m(" Primary "),$=m(" Success "),A=m(" Info "),B=m(" Waning "),D=m(" Danger ");"function"==typeof r&&r(w);var O=a(w,[["render",function(e,a,t,n,i,r){const m=y,v=C,b=h,g=c,w=f,O=p;return l(),s("div",null,[o(m,{title:"纸片",content:"Chip"}),o(O,null,{default:d((()=>[o(v,null,{default:d((()=>[S])),_:1}),o(v,null,{default:d((()=>[o(b,null,{default:d((()=>[j])),_:1}),k])),_:1}),o(v,null,{default:d((()=>[o(b,null,{default:d((()=>[o(w,null,{default:d((()=>[o(g,{name:"i-ep:user-filled"})])),_:1})])),_:1}),I])),_:1}),o(v,null,{default:d((()=>[o(b,{src:i.avatar},null,8,["src"]),x])),_:1}),i.isShow?(l(),_(v,{key:0,closable:"",onClose:r.handleClose},{default:d((()=>[E])),_:1},8,["onClose"])):u("v-if",!0)])),_:1}),o(O,null,{default:d((()=>[o(v,{type:"primary"},{default:d((()=>[F])),_:1}),o(v,{type:"success"},{default:d((()=>[$])),_:1}),o(v,{type:"info"},{default:d((()=>[A])),_:1}),o(v,{type:"warning"},{default:d((()=>[B])),_:1}),o(v,{type:"danger"},{default:d((()=>[D])),_:1})])),_:1})])}]]);export{O as default};
