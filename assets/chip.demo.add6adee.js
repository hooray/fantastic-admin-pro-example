
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as a,A as e,b as l,f as s,J as t,g as n,h as o,w as d,m as u,n as i,Q as f,E as c,bN as r,bP as p,e as _,a2 as m,bO as y}from"./index.9587bc3d.js";import{E as b}from"./el-avatar.00db4d57.js";import{i as h}from"./logo.951d255b.js";const v={class:"content"},g=a({name:"Chip"}),C=e(Object.assign(g,{props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup:(a,{emit:e})=>(r,p)=>{const _=f,m=c;return l(),s("div",{class:i(["chip",[a.type?`chip--${a.type}`:""]])},[t("div",v,[n(r.$slots,"default",{},void 0,!0),a.closable?(l(),s("span",{key:0,class:"closable",onClick:p[0]||(p[0]=a=>e("close"))},[o(m,null,{default:d((()=>[o(_,{name:"i-ep:close-bold"})])),_:1})])):u("v-if",!0)])],2)}}),[["__scopeId","data-v-97f38da6"]]),w={data:()=>({isShow:!0,avatar:h}),methods:{handleClose(){this.isShow=!1}}},S=m(" 基础纸片 "),j=m("Fa"),k=m(" 头像文字 "),x=m(" 头像图标 "),E=m(" 头像图片 "),I=m(" 关闭按钮 "),O=m(" Primary "),P=m(" Success "),$=m(" Info "),A=m(" Waning "),B=m(" Danger ");"function"==typeof r&&r(w);const D=e(w,[["render",function(a,e,t,n,i,r){const m=y,h=C,v=b,g=f,w=c,D=p;return l(),s("div",null,[o(m,{title:"纸片",content:"Chip"}),o(D,null,{default:d((()=>[o(h,null,{default:d((()=>[S])),_:1}),o(h,null,{default:d((()=>[o(v,null,{default:d((()=>[j])),_:1}),k])),_:1}),o(h,null,{default:d((()=>[o(v,null,{default:d((()=>[o(w,null,{default:d((()=>[o(g,{name:"i-ep:user-filled"})])),_:1})])),_:1}),x])),_:1}),o(h,null,{default:d((()=>[o(v,{src:i.avatar},null,8,["src"]),E])),_:1}),i.isShow?(l(),_(h,{key:0,closable:"",onClose:r.handleClose},{default:d((()=>[I])),_:1},8,["onClose"])):u("v-if",!0)])),_:1}),o(D,null,{default:d((()=>[o(h,{type:"primary"},{default:d((()=>[O])),_:1}),o(h,{type:"success"},{default:d((()=>[P])),_:1}),o(h,{type:"info"},{default:d((()=>[$])),_:1}),o(h,{type:"warning"},{default:d((()=>[A])),_:1}),o(h,{type:"danger"},{default:d((()=>[B])),_:1})])),_:1})])}]]);export{D as default};
